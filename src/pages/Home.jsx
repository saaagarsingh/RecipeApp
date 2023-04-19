import { Popular } from "../components/Popular"
import { Veggie } from "../components/Veggie"
import { motion } from "framer-motion"

export const Home = () => {
  return (
    <motion.div
      animate = {{opacity: 1}}
      intial = {{opacity:0}}
      exit = {{opacity:0}}
      transition = {{duration:0.5}}
    >
        <Veggie/>
        <Popular/>
    </motion.div>
  )
}
