import "./App.style.sass"
import Main from "../Main/Main.component"
import AnimalsList from "../AnimalsList/AnimalsList.component"

function App() {
  // const [animalsData, setAnimalsData] = useState([])
  return (
    <section className="app text-white text-[20px] relative">
      <Main />
      <h1 className="app__header text-center text-6xl text-blue-500 font-semibold">
        Welcome to the zoo
      </h1>
      <p className="app__desc text-[30px] text-center font-bold">
        Please, click catch if you wanna have an animal in the zoo
      </p>
      <div className="container w-[900px] mx-auto z-10">
        <AnimalsList />
      </div>
    </section>
  )
}

export default App
