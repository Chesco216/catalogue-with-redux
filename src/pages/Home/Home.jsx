import home from './Home.module.css'
import { Header } from "../../components/Header/Header"

export const Home = () => {
  return (
    <>
      <Header/>
      <div className={home.container}>
        Hello from Home
      </div>
    </>
  )
}

