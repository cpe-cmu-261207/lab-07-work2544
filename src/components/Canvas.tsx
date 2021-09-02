import { PixelPainterStore } from "../stores/PixelPainterStore"
import Cell from "./Cell"

const Canvas = () => {
  const state = PixelPainterStore.useState()

  return (
    <table className="ring-2 ring-gray-200 rounded-md mx-auto">
      <tbody>
        {state.canvas.map((row, i) =>
          <tr key={i}>
            {row.map((cell, j) =>
              <Cell x={j} y={i} key={`${j}${i}`} />)}
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Canvas