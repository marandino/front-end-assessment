import Layout from "../components/layout";
import Pagination from "../components/pagination";
import Link from "next/link";

type DataResults = {
  count: number;
  next: string;
  previous: null | string;
  results: Array<CharacterObject>;
};

type CharacterObject = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
};

export default function Home({ props }: { props: { data: DataResults; page: number } }) {
  console.log(props.data.results);
  function getElementId(url: string) {
    // this is a bit fragile, but if it breaks, it means that everything would be down.
    return url.split("/")[5];
  }

  const charList = props.data.results.map((char) => (
    <Link key={char.name} className="text-center hover:opacity-70" href={`/characters/${getElementId(char.url)}`}>
      <p>{char.name}</p>
    </Link>
  ));

  return (
    <Layout pageTitle="Home">
      <div className="grid grid-cols-2 max-w-xl mx-auto gap-4">{charList}</div>
      <Pagination currentIndex={props.page} totalResults={props.data.count} />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  //FIXME: couldn't find the context Interface in Nextjs's documentation... ^this ANY is driving me insane.
  console.log(context.query);

  const res = await fetch(`https://swapi.py4e.com/api/people/?page=${context.query.page || 1}`);
  const data = await res.json();

  return {
    props: { props: { data, page: Number(context.query.page) || 1 } },
  };
}
