import Posts from '@/components/posts';
import Link from 'next/link'

export default function PostsPage() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="text-xl mb-5">
        <Link href="/">&lt;-</Link>
      </div>
      <h1 className="text-3xl mb-5">All Posts</h1>
      <Link className="underline" href="/posts/new">Add post</Link>
      <Posts />
    </main>
  )
}
