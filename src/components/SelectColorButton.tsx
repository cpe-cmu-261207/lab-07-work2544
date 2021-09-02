import { stat } from "fs"
import { useState } from "react"
import {PixelPainterStore, Pickingcolor } from "../stores/PixelPainterStore"
type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {
const state=PixelPainterStore.useState()

  //modify this function to highlight correctly
  const computeRingSize = () => {
    
    if(state.choosencolor!=color)
    {
      return ""
    }
    else
    {
      return "ring-8 ring-green-400"
    }
  }

  return (

    <div id={color} className={`${computeRingSize()} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }} onClick={()=>Pickingcolor(color)}>
        
    </div>
  )
}

export default SelectColorButton