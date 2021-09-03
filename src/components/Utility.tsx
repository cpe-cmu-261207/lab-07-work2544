import { Clearing, Randoming,DiscoRandoming,PixelPainterStore, JubPlu } from "../stores/PixelPainterStore"


const Utility = () => {
  const state=PixelPainterStore.useState()
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={()=>Clearing()}>Clear</button>
      <button className="w-36" onClick={()=>Randoming()}>Random color</button>
      <button className="w-36" onClick={()=>DiscoRandoming()}>{state.checkDisco?"Stop":"Play Disco"}</button>
      <button className="w-36" onClick={()=>JubPlu()}>{"Play FireWork"}</button>
    </div>
  )
}

export default Utility