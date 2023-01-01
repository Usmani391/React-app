import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./style";
import {Hero,Billing,Bussiness,Button,Cardsec,Footer,CTA,Client,Started,Stats,Test,Feed,Nav}  from './components';
// import Hero from "./components/Hero";
function App() {
  return (<div className="bg-primary w-full overflow-hidden ">
        <div className= {`  ${styles.paddingX}${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Nav />
        </div>
      </div>
    <div className={`${styles.flexStart}`} >
      <div className={` ${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    <div className={`${styles.paddingX} bg-primary ${styles.flexStart}`}>
      <div className={` ${styles.boxWidth}`}>
      <Stats/>
      <Bussiness/>
      <Billing/>
      <Cardsec/>
      <Test/>
      <Client/>
      <CTA/>
      <Footer/>
    </div>
    </div>
    </div>
  );
}

export default App;
