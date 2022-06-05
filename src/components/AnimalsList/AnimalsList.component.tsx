import { caughtAnimalsStateData } from "../../recoil/atoms"
import { useRecoilState } from "recoil"
import { Animal } from "../../types/Animal.type"
import CatchBtn from "../CatchBtn/CatchBtn.component"
import FeedBtn from "../FeedBtn/FeedBtn.component"
import "./AnimalsList.style.sass"
import FreeBtn from "../FreeBtn/FreeBtn.component"
import { animals } from "../../constants/animals-info.constant"
function AnimalsList() {
  const [caughtAnimals, setCaughtAnimals] = useRecoilState<Animal[]>(caughtAnimalsStateData)

  function createAnimalItem(animal: Animal, idx: number) {
    const charWidth = Math.round(100 / (5 - animal.char))
    return (
      <li key={idx} className="animals-list__item">
        <div className="animals-list__item-img flex justify-center items-center">
          <img src={animal.img} alt={animal.name} className="max-w-[80px]" />
        </div>
        <div className="animals-info flex justify-center flex-col items-center">
          <h3 className="animals-info__name">{animal.name}</h3>
          <p
            className={`animals-info__char z-[-1] relative py-1 px-2 flex justify-center items-center bg-slate-400 bf-w-${charWidth} w-full`}
          >
            <span className="z-30">
              {animal.unit}: {animal.char}
            </span>
          </p>
        </div>
        <FeedBtn id={idx} />
        <FreeBtn id={idx} />
      </li>
    )
  }
  return (
    <section className="animals">
      <div className="">
        <h1 className="text-[24px] font-extrabold text-center">
          You have {caughtAnimals.length} animals in your zoo
        </h1>
        <CatchBtn />
        <ul className="animals-list flex w-[100%] justify-between">
          <li className="animals-list__wrapper">
            <h2 className="text-[30px] text-center">Wolves</h2>
            {caughtAnimals.map((animal, idx) => {
              return animal.name === "Wolf" ? createAnimalItem(animal, idx) : false
            })}
          </li>
          <li className="animals-list__wrapper">
            <h2 className="text-[30px] text-center">Giraphs</h2>
            {caughtAnimals.map((animal, idx) => {
              return animal.name === "Giraph" ? createAnimalItem(animal, idx) : false
            })}
          </li>
          <li className="animals-list__wrapper">
            <h2 className="text-[30px] text-center">Hippos</h2>
            {caughtAnimals.map((animal, idx) => {
              return animal.name === "Hippo" ? createAnimalItem(animal, idx) : false
            })}
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AnimalsList
