import Post from '@/components/post'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { deletePost } from '@/db';

export default function PostPage({ params: { id } }) {
  async function deletePostAction() {
    'use server'

    await deletePost(id)
    redirect('/posts')
  }

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="text-xl mb-5">
        <Link href="/">&lt;-</Link>
      </div>
      <div className="mb-5">
        <Post id={id} />
      </div>
      <form action={deletePostAction}>
        <button type="submit" className="underline">Delete post</button>
      </form>
    </main>
  )
}
