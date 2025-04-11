import React, { useState } from "react";
import { Container, Block, Button, H1, Blocked, Img } from "../styles/CustomPrice";
import { plans } from "../data/data";
import { BadgeCheck } from "lucide-react";
import element from "../assets/Element1.png";

export function CustomPrice() {
    const [activeIndex, setActiveIndex] = useState(null); // For tracking clicked button

    const handleButtonClick = (index) => {
        setActiveIndex(index); // Update the active index
    };

    return (
        <Container>
            <H1>Choose Your Plan</H1>
            <Img src={element} alt="" />
            <Blocked>
                {plans.map((plan, index) => (
                    <Block
                        key={index}
                        special={plan.special}
                        isSelected={activeIndex === index} 
                    >
                        <h2>{plan.title}</h2>
                        <h3>{plan.price}</h3>
                        <ul>
                            {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>
                                    <BadgeCheck width={30} padding={10} />
                                    <h5>{feature}</h5>
                                </li>
                            ))}
                        </ul>
                        <Button onClick={() => handleButtonClick(index)}>
                            Select Plan
                        </Button>
                    </Block>
                ))}
            </Blocked>
        </Container>
    );
}
