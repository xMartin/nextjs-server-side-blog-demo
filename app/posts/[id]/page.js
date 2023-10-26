import Post from '@/components/post'
import Link from 'next/link'

export default function PostPage({ params: { id } }) {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="text-xl mb-5">
        <Link href="/">&lt;-</Link>
      </div>
      <Post id={id} />
    </main>
  )
}
