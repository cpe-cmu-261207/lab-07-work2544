import {Store} from 'pullstate'

const Allcolor=["#000000","#804000","#FE0000","#FE6A00","#FFD800","#00FF01","#FFFFFF","#01FFFF","#0094FE","#0026FF","#B100FE","#FF006E"]
type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] 
  choosencolor:string
  checkDisco:boolean
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}
const createWithColorCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push(Allcolor[Math.floor(Math.random() * Allcolor.length)])
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  choosencolor:"#000000",
  checkDisco:false,
})
export const Pickingcolor=(color:string)=>{
  console.log("coosing:"+color)
  PixelPainterStore.update(s=>{s.choosencolor=color})
}
export const Pickingcell=(color:string,x:number,y:number)=>{
PixelPainterStore.update(s=>void(s.canvas[y][x]=color))
console.log(x+" "+y)
}
export const Clearing=()=>{
  console.log("clear")
  PixelPainterStore.update(s=>{s.canvas=createEmptyCanvas()}) 
}
export const Randoming=()=>{
  PixelPainterStore.update(s=>{s.canvas=createWithColorCanvas()}) 
}
var Interval:any;
export const DiscoRandoming=()=>{
  PixelPainterStore.update(s=>{
    s.checkDisco=!s.checkDisco
    if(s.checkDisco)
    {
     Interval=setInterval(() => Randoming(), 100);
    }
    else
    {
      clearInterval(Interval);
    }
  })
}