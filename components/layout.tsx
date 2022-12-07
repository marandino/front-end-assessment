import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, pageTitle, hasBackButton }: { children: React.ReactNode; pageTitle: string; hasBackButton?: boolean }) {
  function searchByName(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const searchInput = e.currentTarget.searchInput.value;
    if (searchInput) {
      window.location.href = `/?name=${searchInput}`;
    }
  }

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content="Front end demo querying data from swapi.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="p-4 w-full justify-center flex">
        {hasBackButton && (
          <Link href="/">
            <button className="hidden sm:flex mr-4 rounded-md border-2 px-4 py-2">Back</button>
          </Link>
        )}
        <form onSubmit={searchByName}>
          <label className="hidden" htmlFor="searchInput">
            Search characters by name
          </label>
          <input placeholder="Search by Name" className="border-2 rounded-md px-4 py-2" type="text" name="searchInput" id="searchInput" />
          <button className="ml-4 border-2 px-4 py-2 rounded-md">Search</button>
        </form>
      </nav>
      <main className="pt-16">{children}</main>
      <footer className="absolute bottom-px py-6 border-t-2 w-full text-center">
        <Link href="https://github.com/marandino">This is a neat footer with unuseful information.</Link>
      </footer>
    </div>
  );
}
