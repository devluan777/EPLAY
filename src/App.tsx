import Header from './components/Header'
import { GlobalCss } from './styles'
import { Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App
