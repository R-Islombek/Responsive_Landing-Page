import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroImage from "./images/heroImage.png";
import "./Hero.css";

const Hero = () => {
    const {t} = useTranslation(); 
  return (
      <section className='hero'>
            <div className='container'>
                 <div className='hero__container'>
                       <div className="hero__box">
                             <h1 className='hero__title'>{t("hero.title")}</h1>
                             <div className='hero__bolt-title'>{t("hero.text")}</div>
                             <p className='hero__desc'>{t("hero.desc")}</p>
                             
                             <div className="hero__actions">
                                 <button className='hero__btn'>{t("hero.btn")}</button>
                                 <button className='hero__btn-name'>{t("hero.btn1")}</button>
                             </div>
                       </div>
                       <div className="hero__image-wrapper">
                            <img src={HeroImage} alt="hero" className="hero__img" />
                       </div>
                 </div>
            </div>
      </section>
  )
}

export default Hero;