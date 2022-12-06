import Head from "next/head";

export default function Layout({ children, pageTitle }: { children: React.ReactNode; pageTitle: string }) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content="Front end demo querying data from swapi.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="p-4 w-full justify-center flex">
        <input className="border-2 px-4 py-2" type="text" name="searchBar" id="searchBar" />
        <button className="ml-4 border-2 px-4 py-2">Search</button>
      </nav>
      <main className="pt-16">{children}</main>
      <footer className="absolute bottom-px py-6 border-t-2 w-full text-center">
        <a href="https://github.com/marandino">This is a neat footer with useful information.</a>
      </footer>
    </div>
  );
}
