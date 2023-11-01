import { MDXRemote } from 'next-mdx-remote/rsc'
import Teasers from '@/components/teasers'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 lg:p-24">
      <div />

      <div className="relative flex flex-col place-items-center">
        <div className="before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="text-3xl mb-5">A good old server-side blog with Next.js</h1>
        </div>
        <article className="prose dark:prose-invert lg:prose-xl mb-3">
          <MDXRemote source={`
            This is a simple demo of a traditional server-side rendered dynamic web application. Using latest features of React and Next.js, it fully works with JavaScript disabled in the browser, while enhancing the experience with JavaScript turned on. Try [adding](/posts/new) or [editing](/posts/4/edit) posts with [JavaScript turned off](https://www.computerhope.com/issues/ch000891.htm)!

            [More info and source code ->](https://github.com/xMartin/nextjs-server-side-blog-demo)
          `} />
        </article>
      </div>

      <div className="mb-32 lg:mb-0 lg:max-w-5xl lg:w-full">
        <Teasers />
      </div>
    </main>
  )
}
