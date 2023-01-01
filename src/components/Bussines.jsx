import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-3xl ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card `}>
      <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} className={`w-1/2 h-1/2 object-contain `} />
      </div>
      <div className="flex flex-1 flex-col ml-3">
        <h4 className={`font-poppins font-semibold text-white text-xl leading-8 mb-1 `}>
          {title}
        </h4>
        <p className={`font-poppins font-normal text-dimWhite text-sm leading-6 mb-1 `}>{content}</p>
      </div>
    </div>
  );
};

const Bussines = () => (
  <section id="features" className={layout.section}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        You do the business,
        <br className="sm:block hidden" /> we’ll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styl="mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((features, index) => (
        <FeatureCard key={features.id} {...features} index={index} />
      ))}
    </div>
  </section>
);

export default Bussines;
