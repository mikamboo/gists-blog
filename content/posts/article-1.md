---
title: A super gist post
author: mikamboo
date: 2020-04-02 23:43
slug: post-about-lorem-ipsum
cover: https://i.picsum.photos/id/866/1350/600.jpg
---

# Aren't gists great ?

Yes ! This is the first GistBlog post :)

## Chap 1 : Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Chap 2 : Code Snippet

Required Parameters for Functions in JavaScript

```js
const isRequired = () => { throw new Error('param is required'); };

const hello = (name = isRequired()) => { console.log(`hello ${name}`) };

// These will throw errors
hello();
hello(undefined);

// These will not
hello(null);
hello('David');
```

Source : [css-tricks](https://css-tricks.com/snippets/javascript/required-parameters-for-functions-in-javascript)
