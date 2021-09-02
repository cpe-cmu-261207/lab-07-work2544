type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {

  //modify this function to highlight correctly
  const computeRingSize = () => {
    return ""
    return "ring-8 ring-green-400"
  }

  return (
    <div className={`${computeRingSize()} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }}
    >
    </div>
  )
}

export default SelectColorButton