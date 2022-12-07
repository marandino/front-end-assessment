import Head from "next/head";
import Link from "next/link";
import SearchBar from "./searchBar";

export default function Layout({ children, pageTitle, hasBackButton }: { children: React.ReactNode; pageTitle: string; hasBackButton?: boolean }) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content="Front end demo querying data from swapi.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar hasBackButton={hasBackButton} />
      <main className="pt-16">{children}</main>
      <footer className="absolute bottom-px py-6 border-t-2 w-full text-center">
        <Link href="https://github.com/marandino">This is a neat footer with unuseful information.</Link>
      </footer>
    </div>
  );
}
