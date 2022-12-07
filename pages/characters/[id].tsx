import Layout from "../../components/layout";

//TODO: refactor this by merging it to the type that's on Index.tsx
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
};

export default function Character({ props }: { props: { data: CharacterObject } }) {
  const { data: char } = props;

  const dataParagraphs = Object.entries(char).map(([key, value]) => {
    return <p className="capitalize">{formatText(key) + ": " + formatText(value)}</p>;
  });
  return (
    <Layout hasBackButton={true} pageTitle={char.name}>
      <div className="grid grid-cols-2 max-w-xl mx-auto gap-4">{dataParagraphs}</div>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  //FIXME: couldn't find the context Interface in Nextjs's documentation... ^this ANY is driving me insane.

  const res = await fetch(`https://swapi.py4e.com/api/people/${context.query.id}`);
  const data = await res.json();

  //FIXME: make this happen in a separated function or something....
  //remove last eight keys from data object, they are not necessary
  delete data.created;
  delete data.edited;
  delete data.url;
  delete data.films;
  delete data.species;
  delete data.vehicles;
  delete data.starships;
  delete data.homeworld;

  return {
    props: { props: { data } },
  };
}

//TODO: refactor this to a utils folder
function formatText(text: string) {
  return text.replace(/_/g, " ");
}
