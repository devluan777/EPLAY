import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  Title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, Title }: Props) => (
  <div className="container">
    <Container>
      <h2>{Title}</h2>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </Container>
  </div>
)

export default ProductsList
