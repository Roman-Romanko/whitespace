import { Container, H1, Image, P, Text, Started, ArrowRight } from "../styles/Customise_price";
import Element from '../assets/ImageContainer.png'
import Element1 from '../assets/Element1.png'

function CustomPrice() {
    return (
        <Container>
            <Image src={Element} />
            <Text>
                <H1>Customise it to your needs</H1>
                <img src={Element1} alt="" />
                <P>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</P>
                <Started>Get Started <ArrowRight /></Started>
            </Text>
        </Container>
    )
}

export default CustomPrice;