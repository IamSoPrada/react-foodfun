import React from 'react'
import icon1 from "../../img/healthy_food/1_icon.svg"
import icon2 from "../../img/healthy_food/2_icon.svg"
import icon3 from "../../img/healthy_food/3_icon.svg"
import { FeaturesSection, FeaturesWrapper, FeaturesCard, FeaturesCardIcon, FeaturesCardTitle, FeaturesCardDesr } from "./FeaturesElements"
const Features = () => {
    return (
        <FeaturesSection>
            <FeaturesWrapper>
                <FeaturesCard>
                    <FeaturesCardIcon><img src={icon1} alt="#"/></FeaturesCardIcon>
                    <FeaturesCardTitle>Только свежие блюда</FeaturesCardTitle>
                    <FeaturesCardDesr>Мы гордимся, что именно у нас работают лучшая команда поворов по версии рейтинга CookingDaily.</FeaturesCardDesr>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesCardIcon><img src={icon2} alt="#"/></FeaturesCardIcon>
                    <FeaturesCardTitle>Быстрая доставка до двери</FeaturesCardTitle>
                    <FeaturesCardDesr>Наши курьеры доставят заказ всего за 30 минут.</FeaturesCardDesr>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesCardIcon><img src={icon3} alt="#"/></FeaturesCardIcon>
                    <FeaturesCardTitle>Заказ в одно касание</FeaturesCardTitle>
                    <FeaturesCardDesr>Скачайте наше приложение и будьте в курсе новинок меню и акций.</FeaturesCardDesr>
                </FeaturesCard>
            </FeaturesWrapper>
        </FeaturesSection>
    )
}

export default Features
