const ShoeCard = (props) => {
    const handleClick = () => {
        if(props.bigShoeImage !== props.imageURL.bigShoe){
            props.changeBigShoeImage(props.imageURL.bigShoe)
        }
    }
  return (
    <div 
        className={`border-2 rounded-xl 
            ${props.imageURL.bigShoe === props.bigShoeImage ? "border-coral-red" : "border-tranparant"}
            cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
        >
      <div
        className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4"
      >
        <img 
            src={props.imageURL.thumbnail}
            alt="shoe collection"
            width={127}
            height={103}
            className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard
