import PostForm from '@/components/post-form';
import { insertPost } from '@/db';
import Link from 'next/link'
import { redirect } from 'next/navigation';

export default function NewPost() {
  async function savePost(formData) {
    'use server'

    await insertPost({
      title: formData.get('title'),
      body: formData.get('body'),
      date: new Date().toJSON(),
    })
    redirect('/posts')
  }

  return (
    <main className="flex min-h-screen flex-col p-12 lg:p-24">
      <div className="text-xl mb-5">
        <Link href="/">&lt;-</Link>
      </div>
      <h1 className="text-3xl mb-3">New Post</h1>
      <PostForm action={savePost} />
    </main>
  )
}
