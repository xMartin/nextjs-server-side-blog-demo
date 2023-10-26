import { fetchPost } from '@/db';
 
export default async function Post({ id }) {
  const post = await fetchPost(id)

  return (
    <>
      <h1 className="text-3xl mb-8">{post.title}</h1>
      <article>
        {post.body}
      </article>
    </>
  )
}
