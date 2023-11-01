# Demo of a good old server-side blog with Next.js

This is a simple demo of a traditional server-side rendered dynamic web application. Using latest features of React and Next.js, it fully works with JavaScript disabled in the browser, while enhancing the experience with JavaScript turned on.

**The idea of this demo is to show how React and Next.js are progressing towards a full-stack web framework**. They used to be for client-side rendering, routing and with a bit of support of server-side rendering for better initial page load performance and a thin middleware layer to proxy remote APIs. **Now, with no extra effort except changing a few defaults, you can build a traditional web app with form handling, that runs only on the server out of the box.** Basic client-side enhancements (page transitions, ajax form submission) are included and enabled by default.

So the React stack basically just achieved to include the view and controller parts of web application frameworks like Ruby on Rails, which are around since forever. BUT: **This is providing a solid fundament for developing the most advanced web experiences with the full power of React on the client-side, seamlessy integrated with the server!** That is something all other web application frameworks are still struggeling with, trying to glue together different client and server ecosystems.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). I'm using the new app router and server actions. To make it the simplest form of a full-stack web application, it's using a local Sqlite database, which is accessed directly from the server actions*.

## Local development setup

First install the dependencies:
```bash
npm install
```

Next, set up the local Sqlite3 database:

```bash
node setup-db.js
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

----

\* Similar to what other frameworks would call controller methods