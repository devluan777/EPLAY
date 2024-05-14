import Game from '../../models/Game'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  Title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, Title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{Title}</h2>
      <List>
        {games.map((game) => (
          <Product
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
            key={game.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
