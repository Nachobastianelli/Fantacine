import styleCarrusel from "../carrusel/CarruselStyle.module.css";
import Slider from "react-slick";
import CardMovie from "../cardMovies/CardMovie";
const CarouselMovies = ({ categorieMovies }) => {
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Repite el carrusel de manera infinita
    speed: 500, // Velocidad de la transición
    variableWidth: true, //Perimitimos cambiarle el width al slider con css
    slidesToScroll: 3, // Cantidad de tarjetas que se desplazan al hacer clic en el botón de navegación
    responsive: [
      {
        breakpoint: 1024, // En pantallas menores a 1024px
        settings: {
          slidesToShow: 2, // Mostrar 2 tarjetas
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // En pantallas menores a 600px
        settings: {
          slidesToShow: 1, // Mostrar 1 tarjeta
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styleCarrusel.carruselContainer}>
      <h2 className={styleCarrusel.carruselCategorie}>{}</h2>
      <Slider {...settings}>
        {categorieMovies.map((movie, index) => (
          <div key={index}>
            <CardMovie movies={[movie]} />{" "}
            {/* Se pasa una película individual como un array */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselMovies;
