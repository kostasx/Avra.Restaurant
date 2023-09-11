import styles from  "./Hero.module.css"
import config from "@config";

export default function Hero() {

  const className = `${styles.hero} absolute z-10 w-full h-full object-cover`;

  return (
    <div
      id="hero"
      className={className}
      style={{ backgroundImage: `url(${config.hero.bg_img})` }}
    ></div>
  );
}
