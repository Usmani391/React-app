import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
  <section className={` ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 ww-full`}>
      <div className={`flex flex-1  flex-col justify-start mr-10`}>
        <img src={logo} className={`w-64 h-24 object-contain `} />
        <p className={`${styles.paragraph} mt-5 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="text-white font-poppins font-medium leading-7 text-xl ">
              {footerLink.title}
            </h4>
            <ul className="flex flex-col">
              {footerLink.links.map((links) => (
                <a
                  key={links.key}
                  href={links.link}
                  className="mt-3.5  text-dimWhite">
                  {links.name}
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className={`flex justify-between border-t-[1px] border-t-[#3f3r54] pt-6 flex-col md:flex-row w-full`}>
      <p
        className={`text-white font-poppins font-normal text-center leading-7 text-[18px] `}>
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>
      <div className={`flex flex-row  justify-center md:mt-0 mt-6  `}>
        {socialMedia.map((social, index) => (
          <img
            src={social.icon}
            key={social.id}
            className={`flex h-5 ${index!==socialMedia.length-1 ?"mr-5":"mr-0"} `}
            alt="social"
          />
        ))}{" "}
      </div>
    </div>
  </section>
);

export default Footer;
