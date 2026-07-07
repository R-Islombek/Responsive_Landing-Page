import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import girls from "./images/girls.png";
import "./Card.css";

const Card = () => {
    const { t } = useTranslation();

    const slides = [1, 2, 3, 4, 5];

    return (
        <main className='card'>
            <div className="container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation 
                    pagination={{ clickable: true }} 
                    className="card-container"
                >
                    {slides.map((item) => (
                        <SwiperSlide key={item}>
                              <div className="swipper-card">
                                     <div className="card-box">
                                <h3 className='card-title'>{t("card.title")}</h3>
                                <p className='card-text'>{t("card.text")}</p>
                                <button className='card-btn'>{t("card.btn")}</button>
                                <p className='card-text-name'>{t("card.bold")}</p>
                                <div className="inner-box">
                                    <p className='inner-text'>{t("card.text1")}</p>
                                    <img src={girls} alt="girls" />
                                </div>
                                
                                <p className='card-text-name'>{t("card.text3")}</p>
                                <button className='card-btns'>{t("card.btn1")}</button>
                                <a className='card-link' href="#">{t("card.link1")}</a>
                            </div>
                              <div className="card-box">
                                <h3 className='card-title'>{t("card.title")}</h3>
                                <p className='card-text'>{t("card.text")}</p>
                                <button className='card-btn'>{t("card.btn")}</button>
                                
                                <div className="inner-box">
                                    <p className='inner-text'>{t("card.text1")}</p>
                                    <img src={girls} alt="girls" />
                                </div>
                                
                                <p className='card-text-name'>{t("card.bold")}</p>
                                <p className='card-text-name'>{t("card.text3")}</p>
                                <button className='card-btns'>{t("card.btn1")}</button>
                                <a className='card-link' href="#">{t("card.link1")}</a>
                            </div>
                              <div className="card-box">
                                <h3 className='card-title'>{t("card.title")}</h3>
                                <p className='card-text'>{t("card.text")}</p>
                                <button className='card-btn'>{t("card.btn")}</button>
                                
                                <div className="inner-box">
                                    <p className='inner-text'>{t("card.text1")}</p>
                                    <img src={girls} alt="girls" />
                                </div>
                                
                                <p className='card-text-name'>{t("card.bold")}</p>
                                <p className='card-text-name'>{t("card.text3")}</p>
                                <button className='card-btns'>{t("card.btn1")}</button>
                                <a className='card-link' href="#">{t("card.link1")}</a>
                            </div>
                              </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </main>
    );
};

export default Card;