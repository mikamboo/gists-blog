/* eslint-disable no-useless-escape */
import fs from 'fs'
import path from 'path'
import https from 'https'
import glob from 'glob'

function dowloadFile(url, fileStream) {
  return new Promise((resolve, reject) => {
    https.get(url, function(response) {
      response.pipe(fileStream)
      resolve()
    })
  })
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

  contentDir: contentDir,

  routesFile: routesFile,

  // init: function() {
  //   if (fs.existsSync(routesFile) === false) {
  //     fs.mkdirSync(postsDir, { recursive: true })
  //     fs.writeFileSync('[]', routesFile)
  //   }
  // },

  /**
   * Dowload markdown post files for specified Github Gist user.
   * @param dir string : .md posts directory
   * @param username string : user posts owner
   */
  loadPosts: async function(dir, username) {
    const Gists = require('gists')
    const gistsInstance = new Gists({})
    const res = await gistsInstance.list(username)

    const posts = res.body.filter((x) => {
      return 'gistsblog.json' in x.files && 'README.md' in x.files
    })

    posts.forEach(async (post) => {
      const file = fs.createWriteStream(`${postsDir}/${post.id}.md`)
      const url = post.files['README.md'].raw_url
      await dowloadFile(url, file)
    })

    const files = glob.sync(dir)
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

    return data
  }
}
