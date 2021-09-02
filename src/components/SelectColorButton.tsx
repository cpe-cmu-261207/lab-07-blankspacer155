import {PixelPainterStore} from "../stores/PixelPainterStore"

type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {
    const state = PixelPainterStore.useState()
   
  //highlight
  const computeRingSize = () => {
    if(state.current_color===color)return "ring-8 ring-green-400"
    
    else return ""
  }
  //change current color
  const clickColor = () =>{
    PixelPainterStore.update((s)=>{
      s.current_color = color
    })
  }
  return (
    <div  className={`${computeRingSize()} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }} onClick={clickColor}
    >
    </div>
  )
}



export default SelectColorButton