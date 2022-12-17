
const Button = ({getGiphy}) => {
  const handleClick=()=>{
    getGiphy()
  }
  return(
    <div class='gif'>
      <h1>Click the button for a random Gif</h1>
      <button class='button' onClick={handleClick}>Giphy</button>
    </div>
  )
  }

 

export default Button