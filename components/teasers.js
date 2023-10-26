import { fetchPosts } from '@/db';
import Link from 'next/link'
  
export default async function Teasers() {
  const teasers = await fetchPosts()

  return (
    <div className="mb-32 lg:mb-0">
      <div className="grid lg:grid-cols-4">
        {teasers.map((teaser) => (
          <Link
            key={teaser.id}
            href={`posts/${teaser.id}`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {teaser.title}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {teaser.body && teaser.body.substring(0, Math.min(teaser.body.length, 140))}
            </p>
          </Link>
        ))}
      </div>
      <Link className="block text-right" href="/posts">all posts -&gt;</Link>
    </div>
  )
}
