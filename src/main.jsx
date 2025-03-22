import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyFirstComponent } from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyFirstComponent name="first" status={true} work="function"></MyFirstComponent>
    <MyFirstComponent name="second" status={true} work="function"></MyFirstComponent>
    <MyFirstComponent name="Third" status={false} work="function"></MyFirstComponent>
    <MyFirstComponent name="Fourth" status={false} work="function"></MyFirstComponent>
  </StrictMode>,
)
