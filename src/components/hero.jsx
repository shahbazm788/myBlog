import { Carousel } from "react-bootstrap";

function Hero() {
  return (
    <div className="carusel">
      <Carousel data-bs-theme="dark" className="caro">
        <Carousel.Item>
          <img
            className="img"
            src="/img/LandWater6.jpg"
            alt="Slide image alt"
          />
          <Carousel.Caption>
            <h3>Wellcom to My Blog </h3>
            <p>Here you can find Blogs on multipull things</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img"
            src="/img/LandWater6.jpg"
            alt="Slide image alt"
          />
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Caption for slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img"
            src="/img/LandWater3.jpg"
            alt="Slide image alt"
          />
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Caption for slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img"
            src="/img/LandWater4.jpg"
            alt="Slide image alt"
          />
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Caption for slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img"
            src="/img/LandWater5.jpg"
            alt="Slide image alt"
          />
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Caption for slide</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
