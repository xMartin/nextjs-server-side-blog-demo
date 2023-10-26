import Link from 'next/link'

const mockData = [
  {
    id: 4,
    title: 'Finished server-side blog project',
    body: `Finished server-side blog project Finished server-side blog project Finished server-side blog project Finished server-side blog project

Finished server-side blog project Finished server-side blog project Finished server-side blog project`,
    date: "2023-10-26T20:59:54.070Z",
  },
  {
    id: 3,
    title: 'Posts can now can be posted to DB',
    body: `Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB 

Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB `,
    date: '2023-10-26T19:29:54.070Z',
  },
  {
    id: 2,
    title: 'Blog works fully server-side from DB',
    body: `Blog works fully server-side from DB Blog works fully server-side from DB Blog works fully server-side from DB Blog works fully server-side from DB Blog works fully server-side from DB Blog works fully server-side from DB Blog works fully server-side from DB 

Blog works fully server-side from DB Blog works fully server-side from DB `,
    date: '2023-10-26T18:04:54.070Z',
  },
  {
    id: 1,
    title: 'Finished server-side blog project',
    body: `Started server-side blog project Started server-side blog project Started server-side blog project Started server-side blog project

Started server-side blog project Started server-side blog project Started server-side blog project`,
    date: '2023-10-26T15:39:54.070Z',
  },
]

async function getData() {
  const data = await Promise.resolve(mockData)

  return data
}
  
export default async function Teasers() {
  const teasers = await getData()

  return (
    <>
      {teasers.map((teaser) => (
        <Link
          key={teaser.id}
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {teaser.title}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {teaser.body.substring(0, 140)}
          </p>
        </Link>
      ))}
    </>
  )
}
