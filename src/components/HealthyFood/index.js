import React from 'react'
import { HealthyFoodSection, HealthyFoodWrapper, EllipseSvg, HealthyFoodTitle, HealthyFoodSubTitle, HealthyFoodButton } from "./HealthyFoodElements"


const HealthyFood = () => {
    return (
        <HealthyFoodSection>
            <HealthyFoodWrapper>
                <div>
                    <HealthyFoodTitle>Вкусная и здоровая еда - залог хорошего настроения и крепкого здоровья!</HealthyFoodTitle>
                    <HealthyFoodSubTitle>Предлагаем оценить достоинства нашей доставки свежих продуктов и готовых блюд. На выбор несколько сбалансированных рационов питания. Рационы можно менять каждые 3 дня. Успейте попробовать все!</HealthyFoodSubTitle>
                    <HealthyFoodButton>Заказать</HealthyFoodButton>
                </div>
                
            </HealthyFoodWrapper>
            <EllipseSvg />
        </HealthyFoodSection>
    )
}

export default HealthyFood;
