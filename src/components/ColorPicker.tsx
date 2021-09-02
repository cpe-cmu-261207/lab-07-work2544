import SelectColorButton from "./SelectColorButton"

const ColorPicker = () => {
  return (
    <div>
      <div className="mx-auto my-4 flex justify-center space-x-4">
          <SelectColorButton color='#000000' />
          <SelectColorButton color='#804000' />
          <SelectColorButton color='#FE0000' />
          <SelectColorButton color='#FE6A00' />
          <SelectColorButton color='#FFD800' />
          <SelectColorButton color='#00FF01' />
        </div>
        <div className="mx-auto my-4 flex justify-center space-x-4">
          <SelectColorButton color='#FFFFFF' />
          <SelectColorButton color='#01FFFF' />
          <SelectColorButton color='#0094FE' />
          <SelectColorButton color='#0026FF' />
          <SelectColorButton color='#B100FE' />
          <SelectColorButton color='#FF006E' />
        </div>
    </div>
  )
}

export default ColorPicker