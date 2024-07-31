import styles from '@/styles/components/AnimalCard.module.scss';

export default function AnimalCard({ animal }) {
  return (
    <div className={styles.card}>
      <img src={animal.img} alt={`${animal.name} the ${animal.breed}`} className={styles.image} />
      <div className={styles.info}>
        <h2>{animal.name}</h2>
        <p>Breed: {animal.breed}</p>
        <p>Age: {animal.age}</p>
      </div>
    </div>
  );
}
