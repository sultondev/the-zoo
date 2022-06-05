import { memo } from "react"
import { useRecoilState } from "recoil"
import { caughtAnimalsStateData } from "../../recoil/atoms"
import { Animal } from "../../types/Animal.type"
import "./FeedBtn.style.sass"
function FeedBtn(props: { id: number }) {
  const { id } = props
  const [caughtAnimals, setCaughtAnimals] = useRecoilState<Animal[]>(caughtAnimalsStateData)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setCaughtAnimals((prevState) => {
      const newState = [...prevState]
      newState.splice(id, 1, {
        ...caughtAnimals[id],
        char: caughtAnimals[id].char + 1,
      })
      return newState
    })
  }
  return (
    <button
      onClick={handleClick}
      disabled={caughtAnimals[id].char >= 5}
      className={`animal-feed__btn bg-slate-300 text-black px-4 rounded-md ${
        caughtAnimals[id].char >= 5 ? "disabled-btn" : ""
      }`}
    >
      Feed
    </button>
  )
}
export default memo(FeedBtn)
