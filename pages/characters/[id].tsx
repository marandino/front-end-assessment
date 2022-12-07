import Layout from "../../components/layout";
import { CharacterObject } from "../../interfaces/dataInterfaces";
import { formatText } from "../../utils/formatters";

export default function Character({ props }: { props: { data: CharacterObject } }) {
  const { data: char } = props;

  // decided on going for a map instead of a SFC, because of the low complexity of the element...
  const dataParagraphs = Object.entries(char).map(([key, value]) => {
    return (
      <p key={key + "-p"} className="capitalize">
        <b>{formatText(key) + ": "}</b> {formatText(value)}
      </p>
    );
  });
  return (
    <Layout hasBackButton={true} pageTitle={char.name}>
      <div className="grid grid-cols-2 text-center max-w-xl mx-auto gap-4">{dataParagraphs}</div>
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