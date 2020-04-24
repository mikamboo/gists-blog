/* eslint-disable no-useless-escape */
import fs from 'fs'
import path from 'path'
import https from 'https'
import glob from 'glob'
import Logger from 'logger-nodejs'

const log = new Logger()

/**
 * Synchronous download file
 * @param {strin} url Source URL
 * @param {string} fileName Destination
 */
function dowloadFile(url, fileName) {
  log.info(`Download file : ${url}`)
  const promise = new Promise((resolve, reject) => {
    https.get(url, function(response) {
      const chunksOfData = []
      response.on('data', (fragments) => {
        chunksOfData.push(fragments)
      })

      response.on('end', () => {
        const data = Buffer.concat(chunksOfData)
        fs.writeFileSync(fileName, data)
        log.info(`SUCCESS - downloaded : ${fileName}`)
        resolve()
      })
    })
  })

  return promise
}

/**
 * Utils function to convert any string into an URL-optimized slug
 * https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
 * @param string text to convert
 */
function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

const contentDir = './content'
const postsDir = `${contentDir}/posts`
const routesFile = `${contentDir}/posts.json`

export default {

  contentDir,
  postsDir,
  routesFile,

  // init: function() {
  //   if (fs.existsSync(routesFile) === false) {
  //     fs.mkdirSync(postsDir, { recursive: true })
  //     fs.writeFileSync('[]', routesFile)
  //   }
  // },

  /**
   * Dowload markdown post files for specified Github Gist user.
   * @param username string : user posts owner
   */
  async loadPosts(username) {
    const Gists = require('gists')
    const gistsInstance = new Gists({})
    const res = await gistsInstance.list(username)

    const posts = res.body.filter((x) => {
      return 'gistsblog.json' in x.files && 'README.md' in x.files
    })

    log.info(`Found : ${posts.length} Gists-Blog posts`)

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i]
      const fileName = `${postsDir}/${post.id}.md`
      const url = post.files['README.md'].raw_url
      try {
        await dowloadFile(url, fileName)
      } catch (error) {
        throw new Error(`Errror occurs while dowloading post: ${post.id}.md`)
      }
    }

    const files = glob.sync(`${postsDir}/*.md`)
    const data = files.map(function (file) {
      let name = path.basename(file)
      name = name.substr(0, name.lastIndexOf('.'))
      name = slugify(name)
      const route = `/posts/${name}`
      return {
        name,
        file,
        route
      }
    })

    const json = JSON.stringify(data)
    fs.writeFileSync(routesFile, json)

    return json
  }
}
