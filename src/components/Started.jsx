import styles from "../style";
import {arrowUp}  from "../assets";
const Started = () => (
  <div
    className={`w-[140px] h-[140px] ${styles.flexCenter}   rounded-full bg-blue-gradient p-0.5   cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className={` font-poppins font-medium  text-[18px] leading-[23.4px]`}>
          </p>
            <span className={`text-gradient `}>Get</span>
          <img className="w-6 h-6   object-contain" alt='Arrow' src={arrowUp}/>
        </div>
        <p className={` font-poppins font-medium text-[18px] leading-[23.4px] `}>
            <span className={`text-gradient`}>Started</span>
          </p>
      </div>
    </div>
);

export default Started;
