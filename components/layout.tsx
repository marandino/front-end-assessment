import Head from "next/head";

export default function Layout({ children, pageTitle }: { children: React.ReactNode, pageTitle: string }) {
  return (
    <div className="h-screen">
      <Head>
        <title>{pageTitle}</title>
        <meta
          name={pageTitle}
          content="Front end demo querying data from swapi.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO: add a Navbar for the Search Box */}
      <main className="h-full" >{children}</main>
      <footer className="absolute bottom-px py-6 border-t-2 w-full text-center">
        <a href="https://github.com/marandino">This is a neat footer with useful information.</a>
      </footer>
    </div>
  );
}
