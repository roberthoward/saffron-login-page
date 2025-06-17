import { ThemeProvider } from './contexts/ThemeContext'
import LoginPage from './components/LoginPage'
import './styles/App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <LoginPage />
      </div>
    </ThemeProvider>
  )
}

export default App