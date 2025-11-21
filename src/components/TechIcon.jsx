
const TechIcon = ({icon}) => {
  return (
    <div className="md:w-20 md:h-20 w-12 h-12 flex justify-center items-center gradient-border  hover:-translate-y-3 transition-all duration-700 marquee-item flex-none">
        <img src={icon.image} alt={icon.name} className="md:size-16 size-10"/>
    </div>
  )
}

export default TechIcon