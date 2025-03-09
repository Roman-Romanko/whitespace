import { Container, H1, P, Started, Text, Img } from "../styles/Work-management";
import Element1 from "../assets/Element1.png";
import imageContainer from '../assets/ImageContainer.png';

function Work(params) {
    return (
        <div>
            <Container>
                <Text>
                    <H1>Project Management</H1>
                    <img src={Element1} alt="" />
                    <P>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</P>
                    <Started>Get Started</Started>
                </Text>
                <div className="photo">
                    <Img src={imageContainer} alt="ImageContainer" />
                </div>
            </Container>
        </div>
    )
}

export default Work;