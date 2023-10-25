
const BasicPage = ({title, description}) => {
  return (
    <div className="content">
      <h2>{title}</h2>
      <h4 id="description">{description}</h4>
    </div>
  )
}

export default BasicPage