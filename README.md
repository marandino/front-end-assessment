This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) created as an assessment for a Front-end position.

## My train of thought about the stack.

### TypeScript:
Decided on using TS, mainly to avoid flooding the components with useless information, that could be displayed by TypeScript.

### Next.js:
This was my first time using Vercel (Usually I go for a full deploy using Digital Ocean) so I wanted to try Next.js. It's been a wonderful time; using this piece of tech.

### Tailwind:
What else can be said about tailwind? It's so modular, so easy to use, that I just can't stop using it anymore.

### The overall structure:
I believe that making this a Single Page Application could be a bit overkill (since one of the instructions was to have at least two different views), so I used query parameters for most of the interactions.
E.g: The search page is just the index.tsx but taking `/?name=foo` into account, and modifying the query to adapt it.

## Instructions to Run

```bash
npm run dev
# or
yarn dev
```

The development version of the app would be running on:  [http://localhost:3000](http://localhost:3000).