import { fetchPosts } from '@/db';
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

export default async function Posts() {
  const posts = await fetchPosts()

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="mb-12">
          <Link
            key={post.id}
            href={`posts/${post.id}`}
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {post.title}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>
          <article className="prose dark:prose-invert lg:prose-xl">
            <MDXRemote source={post.body && post.body.substring(0, Math.min(post.body.length, 1400))} />
          </article>
        </div>
      ))}
    </>
  )
}
