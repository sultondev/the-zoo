import { caughtAnimalsStateData } from "../../recoil/atoms"
import { useRecoilState } from "recoil"
import { Animal } from "../../types/Animal.type"

function FreeBtn(props: { id: number }) {
  const { id } = props
  const [caughtAnimals, setCaughtAnimals] = useRecoilState<Animal[]>(caughtAnimalsStateData)

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setCaughtAnimals((prevState) => {
      return prevState.filter((_, i) => i !== id)
    })
  }

  return (
    <button
      onClick={handleClick}
      className="animal-free__btn bg-green-600 text-white px-4 rounded-md"
    >
      Free
    </button>
  )
}

export default FreeBtn
