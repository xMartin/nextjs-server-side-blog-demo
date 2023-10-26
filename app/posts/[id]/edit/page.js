import PostForm from '@/components/post-form';
import { fetchPost, updatePost } from '@/db';
import Link from 'next/link'
import { redirect } from 'next/navigation';

export default async function EditPost({ params: { id } }) {
  async function savePost(formData) {
    'use server'

    await updatePost({
      id,
      title: formData.get('title'),
      body: formData.get('body'),
    })
    redirect(`/posts/${id}`)
  }

  const post = await fetchPost(id)

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="text-xl mb-5">
        <Link href="/">&lt;-</Link>
      </div>
      <PostForm action={savePost} post={post} />
    </main>
  )
}
