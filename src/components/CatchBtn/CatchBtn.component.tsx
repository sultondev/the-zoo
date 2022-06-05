import { useRecoilState } from "recoil"
import {
  animalsStateData,
  caughtAnimalsStateData,
  infoOfAnimalsStateData,
} from "../../recoil/atoms"
import { Animal } from "../../types/Animal.type"

function randomNum(arg: number): number {
  return Math.floor(Math.random() * arg)
}

function CatchBtn() {
  const [caughtAnimals, setCaughtAnimals] = useRecoilState<Animal[]>(
    caughtAnimalsStateData
  )
  const [allAnimalsInfo, setAllAnimalsInfo] = useRecoilState<Animal[]>(
    infoOfAnimalsStateData
  )

  function createRandomAnimal() {
    const animalInfo = JSON.parse(
      JSON.stringify(allAnimalsInfo[randomNum(allAnimalsInfo.length)])
    )
    animalInfo.char = randomNum(5)
    return [animalInfo]
  }

  function CatchAnimal() {
    const Animal = createRandomAnimal()
    setCaughtAnimals((prevState) => [...prevState, ...Animal])
  }

  return (
    <button
      className="animal-catch__btn border-2 border-black bg-slate-300 text-black px-8 py-10 rounded-full"
      onClick={(e) => {
        e.preventDefault()
        CatchAnimal()
      }}
    >
      Catch
    </button>
  )
}

export default CatchBtn
