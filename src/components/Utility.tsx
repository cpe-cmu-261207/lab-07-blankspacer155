import { PixelPainterStore,createEmptyCanvas,randomCanvas } from "../stores/PixelPainterStore"

const Utility = () => {

  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={clickClear}>Clear</button>
      <button className="w-36" onClick={clickRandom}>Random color</button>
    </div>
  )
}

const clickClear = () =>{
    PixelPainterStore.update((s)=>{
          s.canvas = createEmptyCanvas()
    })
}

const clickRandom =() =>{
  PixelPainterStore.update((s)=>{
    s.canvas = randomCanvas()
})
}

export default Utility