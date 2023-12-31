import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Toaster} from "@/components/ui/sonner"
import ChangeEcardPage from "@/ChangeEcardPage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChangeEcardPage />
      <Toaster />
  </React.StrictMode>,
)
