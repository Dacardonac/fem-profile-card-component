import styles from './Card.module.scss';

const Card = () => {
  return (
    <article className={styles.card}>
      <header className={styles['card__header']}></header>
      <figure className={styles['card__avatar']}>
        <img
          className={styles['card__avatar-img']}
          src="/images/image-victor.webp"
          alt="Victor Avatar Photo"
        />
      </figure>
      <h1 className={styles['card__username']}>
        Victor Crest <span className={styles['card__username-age']}>26</span>
      </h1>
      <h2 className={styles['card__city']}>London</h2>
      <hr className={styles['card__separation']} />
      <section className={styles['card__stats']}>
        <div className={styles['card__stats-divs']}>
          80K <span className={styles['card__stats--light']}>Followers</span>
        </div>
        <div className={styles['card__stats-divs']}>
          803K <span className={styles['card__stats--light']}>Likes</span>
        </div>
        <div className={styles['card__stats-divs']}>
          1.4K <span className={styles['card__stats--light']}>Photos</span>
        </div>
      </section>
    </article>
  );
};

export default Card;
