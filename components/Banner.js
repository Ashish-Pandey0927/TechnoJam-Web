


import { section ,Row, Container, Col } from 'react-bootstrap'
import Image from 'next/image';
export const Banner = () => {
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-item-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to TechnoJam</span>
                     <p> Unlocking the Code to Innovation: Join TechnoJam,<br/> where passion meets programming, and every line of code creates a melody of technology.</p>
                </Col>
                <Col xs={12} md={6} xl={5}></Col>
                <Image className='banner-img' alt="banner" width={500} height={500} src="/2150898633.png" />
            </Row>
        </Container>
    </section>
  )
}
