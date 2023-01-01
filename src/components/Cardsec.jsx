import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Cardsec = () => (
  <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfon} self-center`}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block  hidden" />
        in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
    <Button styl='mt-5'/>
    </div>
    <div className={`${layout.sectionImg}  md:ml-16 mt-6 md:mt-1 md:p-6 `}>
<img src={card} className="w-full h-full" alt="Cards" />

    </div>
  </section>
);

export default Cardsec;
