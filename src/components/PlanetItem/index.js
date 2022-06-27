// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planet} = props
  const {name, imageUrl, description} = planet
  return (
    <div className="list-item">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />
      <h1 className="txt-color">{name}</h1>
      <p className="txt-color">{description}</p>
    </div>
  )
}

export default PlanetItem
