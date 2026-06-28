import React from 'react';
import "./Count.css"
import { useTranslation } from 'react-i18next';

const Count = () => {
    const { t } = useTranslation();

    const stats = [
        t("count.item1", { returnObjects: true }),
        t("count.item2", { returnObjects: true }),
        t("count.item3", { returnObjects: true }),
        t("count.item4", { returnObjects: true }),
    ];

    return (
        <section className="stats">
            <div className="container">
                <ul className="stats__list">
                    {stats.map((item, index) => (
                        <li key={index} className="stats__item">
                            <h3>{item.value}</h3>
                            <p>{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Count;