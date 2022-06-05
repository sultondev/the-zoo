import { atom } from "recoil"
import { animals } from "../constants/animals-info.constant"
import { Animal } from "../types/Animal.type"

const animalsStateData = atom<Animal[]>({
  key: "animalsStateData",
  default: [],
})

const caughtAnimalsStateData = atom<Animal[]>({
  key: "caughtAnimalsStateData",
  default: [],
})

const infoOfAnimalsStateData = atom<Animal[]>({
  key: "infoOfAnimalsStateData",
  default: animals,
})

export { animalsStateData, caughtAnimalsStateData, infoOfAnimalsStateData }
