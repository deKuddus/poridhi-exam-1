import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from '../../Models/Post'
import Redis from '@ioc:Adonis/Addons/Redis'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const record = await Redis.get('posts')
    let posts = []
    if (record) {
      posts = JSON.parse(record)
      return { data: posts, isCached: true }
    }
    const newRecord = await Post.all()
    await Redis.set('posts', JSON.stringify(newRecord))
    return { data: newRecord, isCached: false }
  }

  public async store({ request }: HttpContextContract) {
    const post = await Post.create(request.all())
    await Redis.del('posts')
    await Redis.quit()
    return { save: post }
  }

  public async storeByPubSub({ request }: HttpContextContract) {
    await Redis.del('posts')
    await Redis.publish('post:create', JSON.stringify(request.all()))
    await Redis.quit()
    return true
  }
}
