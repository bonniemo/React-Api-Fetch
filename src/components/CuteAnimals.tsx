import { useEffect, useState } from "react";
import './CuteAnimals.css';

const BASE_URL =
  "https://raw.githubusercontent.com/bonniemo/CuteAnimals/main/src/Components/Animals/Animals.json";

type ApiResponse = {
    data: Animals[];
}

type Animals = {  
  name: string;
  species: string;
  image_url: string;
  favourite_food: string;
  best_friend: string;
  favourite_spot: string;
};

const CuteAnimals = () => {
  const [apiAnimals, setApiAnimals] = useState<Animals[]>([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      const response = await fetch(BASE_URL);
      const animals = (await response.json()) as ApiResponse;
      setApiAnimals(animals.data);
    };
    fetchAnimals();
  }, []);
  return (
    <>
      <article className="cute-animals">
        <h1>Cute Animals</h1>
        <section className="animal">
      
        {apiAnimals.map((animal, index) => (
          <section key={index} className="animal-card">
            <h2>{animal.name}</h2>
            <img src={animal.image_url} alt="" />
            <section className="animal-card__facts">
            <p><span>Species: </span>{animal.species}</p>
            <p><span>Favourite Snack: </span>{animal.favourite_food}</p>
            <p><span>Bestie: </span>{animal.best_friend}</p>
            {animal.favourite_spot && <p><span>Favourite Hangout: </span> {animal.favourite_spot}</p>}
            </section>
          </section>
        ))}
      
        </section>
      </article>
    </>
  );
};

export default CuteAnimals;
