import React from 'react'
import { FeedbackSection, FeedbackWrapper, FeedbackCard, FeedbackAvatar, FeedbackStars, FeedbackReview, FeedBackCards, FeedbackTitle, FeedBackButton } from "./FeedbackElements"
import avatar1 from "../../img/feedback/Ellipse_23.png"
import avatar2 from "../../img/feedback/Ellipse_24.png"
import avatar3 from "../../img/feedback/Ellipse_25.png"

const Feedback = () => {
    return (
        <FeedbackSection>
            <FeedbackWrapper>
                <FeedbackTitle>Отзывы о нас</FeedbackTitle>
                <FeedBackCards>
                    <FeedbackCard>
                        <FeedbackAvatar> <img src={avatar1} alt="#" /> </FeedbackAvatar>
                        <FeedbackStars>55555 </FeedbackStars>
                        <FeedbackReview><p>Molestie ac feugiat sed lectus.
                        Cursus sit amet dictum sit amet.Egestas diam in arcu </p></FeedbackReview>
                    </FeedbackCard>
                    <FeedbackCard>
                        <FeedbackAvatar> <img src={avatar2} alt="#" /> </FeedbackAvatar>
                        <FeedbackStars>5555</FeedbackStars>
                        <FeedbackReview><p>Molestie ac feugiat sed lectus.
                        Cursus sit amet dictum sit amet.Egestas diam in arcu </p></FeedbackReview>
                    </FeedbackCard>
                    <FeedbackCard>
                        <FeedbackAvatar> <img src={avatar3} alt="#" /> </FeedbackAvatar>
                        <FeedbackStars>55555</FeedbackStars>
                        <FeedbackReview> <p>Molestie ac feugiat sed lectus.
                        Cursus sit amet dictum sit amet.Egestas diam in arcu </p></FeedbackReview>
                    </FeedbackCard>
                </FeedBackCards>
                <FeedBackButton> Узнать подробнее</FeedBackButton>
            </FeedbackWrapper>
        </FeedbackSection>
    )
}

export default Feedback
