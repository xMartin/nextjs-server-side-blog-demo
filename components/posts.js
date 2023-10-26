import { posts } from '@/mock-data'
import Link from 'next/link'

async function getData() {
  const data = await Promise.resolve(posts)

  return data
}
  
export default async function Posts() {
  const posts = await getData()

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="mb-12">
          <Link
            key={post.id}
            href={`posts/${post.id}`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {post.title}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>
          <article>
            {post.body.substring(0, 1400)}
          </article>
        </div>
      ))}
    </>
  )
}
