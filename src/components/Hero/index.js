import React from 'react'
import { HeroSection, HeroWrapper, EllipseSvg, TitleHero, SubTitleHero, ButtonMain, /* BubbleBigSvg, BubbleSmallSvg  */} from "./HeroElements"

const Hero = () => {
    return (
        <HeroSection>
            <HeroWrapper>
                <div>
                    <TitleHero>Добро пожаловать!<br/> Мы рады видеть вас в <span>Foodfun!</span></TitleHero>
                    <SubTitleHero>Обязательно оцените наше обновленное меню. При заказе рациона "Оптимум" на неделю, дополнительный комплект на 2 дня бесплатно. </SubTitleHero>
                    <ButtonMain>Заказать сейчас</ButtonMain>
                </div>
                <EllipseSvg />
            </HeroWrapper>
        </HeroSection>

    )
}
export default Hero;