import { PixelPainterStore } from "../stores/PixelPainterStore"

type CellProps = {
  x: number;
  y: number;
}

const Cell = ({ x, y }: CellProps) => {

  const state = PixelPainterStore.useState()
  //Paint on this cell
  const clickCell = () =>{
     PixelPainterStore.update((s)=>{
       s.canvas[y][x] = s.current_color
     })
  }

  return (
    <td onClick={clickCell} className="w-6 h-6 cursor-pointer" style={{backgroundColor: state.canvas[y][x]}}>
    </td>
  )
}

export default Cell