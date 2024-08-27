import { useState } from 'react'
import Hero from './components/Hero'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className='bg-MainLight dark:bg-MainDark'>
      <Hero 
        theme={theme} 
        setTheme={setTheme}
      />
    </div>
  )
}

export default App
