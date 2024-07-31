"use client"
import { useRouter } from "next/navigation";
import styles from "@/styles/pages/AnimalDetail.module.scss";

export default function AnimalDetail() {
  const router = useRouter();
  // const { animalId } = router.query;

  const dummyAnimal = {
    id: 1,
    name: "Luna",
    breed: "Golden Retriever",
    age: 2,
    img: "/images/slide1.jpg"
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={dummyAnimal.img} alt={`${dummyAnimal.name} the ${dummyAnimal.breed}`} className={styles.image} />
        <div className={styles.info}>
          <h1>{dummyAnimal.name}</h1>
          <p><strong>Breed:</strong> {dummyAnimal.breed}</p>
          <p><strong>Age:</strong> {dummyAnimal.age} years</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque vel nisi bibendum faucibus ut at est. Integer fringilla orci a urna dignissim, vitae sagittis nisi scelerisque.</p>
          <button className={styles.adoptButton}>Adopt {dummyAnimal.name}</button>
        </div>
      </div>
    </div>
  );
}
