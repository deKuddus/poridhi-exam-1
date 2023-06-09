/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Redis from '@ioc:Adonis/Addons/Redis'
import Post from '../app/Models/Post'

Redis.subscribe('post:create', async (post: string) => {
  await Post.create(JSON.parse(post))
})
