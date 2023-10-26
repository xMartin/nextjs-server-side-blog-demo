import { posts } from '@/mock-data'

async function getData(postId) {
  const data = await Promise.resolve(posts.find((post) => post.id.toString() === postId))

  return data
}
    
export default async function Post({ id }) {
  const post = await getData(id)

  return (
    <>
      <h1 className="text-3xl mb-8">{post.title}</h1>
      <article>
        {post.body}
      </article>
    </>
  )
}
