import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Count.css";
 
const Count = () => {
    const { t } = useTranslation();
 
    const stats = [
        { id: 1, value: t("count.item1.value"), text: t("count.item1.text") },
        { id: 2, value: t("count.item2.value"), text: t("count.item2.text") },
        { id: 3, value: t("count.item3.value"), text: t("count.item3.text") },
        { id: 4, value: t("count.item4.value"), text: t("count.item4.text") },
    ];
 
    return (
        <section className="stats">
            <div className="container">
                <ul className="stats__list">
                    {stats.map((item) => (
                        <li key={item.id} className="stats__item">
                            <h3 className="stats__value">{item.value}</h3>
                            <div className="stats__divider"></div>
                            <p className="stats__text">{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
 
export default Count;
 