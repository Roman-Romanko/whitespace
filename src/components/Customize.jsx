import { Container, H1, P, Started, Text, Img } from "../styles/Customize";
import Element1 from "../assets/Element1.png";
import imageContainer from '../assets/ImageContainer.png'

function Customize() {
    return (
        <Container>
            <Text>
                <H1>Use as Extension</H1>
                <img src={Element1} alt="" />
                <P>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</P>
                <Started>Get Started</Started>
            </Text>
            <div className="photo">
                <Img src={imageContainer} alt="ImageContainer" />
            </div>
        </Container>
    );
}

export default Customize;