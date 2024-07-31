"use client";

import { useRouter } from "next/navigation";
import AnimalCard from "@/components/AnimalCard";
import styles from "@/styles/pages/Adoptions.module.scss";

export default function Page() {
  const router = useRouter();
  const dummyData = [
    { id: 1, name: "Luna", breed: "Golden Retriever", age: 2, img: "/images/slide1.jpg" },
    { id: 2, name: "Max", breed: "Poodle", age: 3, img: "/images/slide1.jpg" },
    { id: 3, name: "Rocky", breed: "Bulldog", age: 4, img: "/images/slide1.jpg" },
    { id: 4, name: "Bella", breed: "Pug", age: 5, img: "/images/slide1.jpg" },
    { id: 5, name: "Lucy", breed: "Beagle", age: 6, img: "/images/slide1.jpg" },
    { id: 6, name: "Charlie", breed: "Labrador", age: 7, img: "/images/slide1.jpg" },
    { id: 7, name: "Daisy", breed: "Husky", age: 8, img: "/images/slide1.jpg" }
  ];

  const handleCardClick = (id) => {
    router.push(`/adoptions/${id}`);
  };

  return (
    <>
      <title>Adopta un peludo</title>
      <main className={styles.main}>
        <div className={styles.grid}>
          {dummyData.map(animal => (
            <AnimalCard key={animal.id} animal={animal} onClick={handleCardClick} />
          ))}
        </div>
      </main>
    </>
  );
}
