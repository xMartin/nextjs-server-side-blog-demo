import { fetchPost } from '@/db';
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
 
export default async function Post({ id }) {
  const post = await fetchPost(id)

  if (!post) {
    notFound()
  }

  return (
    <>
      <h1 className="text-3xl mb-8">{post.title}</h1>
      <article className="prose dark:prose-invert lg:prose-xl">
        <MDXRemote source={post.body} />
      </article>
    </>
  )
}
