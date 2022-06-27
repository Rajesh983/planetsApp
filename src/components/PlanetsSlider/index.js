// Write your code here
import './index.css'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planets-bg">
      <div className="slider-container" testid="planets">
        <h1 className="main-heading">PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem planet={eachPlanet} key={eachPlanet.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
