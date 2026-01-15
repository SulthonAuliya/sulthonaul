import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { motion } from "framer-motion"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <App />
    </motion.div>
  </StrictMode>,
)
