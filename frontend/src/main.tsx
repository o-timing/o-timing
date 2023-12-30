import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Toaster} from "@/components/ui/sonner"
import BrikkeendringPage from "@/BrikkeendringPage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrikkeendringPage />
      <Toaster />
  </React.StrictMode>,
)
