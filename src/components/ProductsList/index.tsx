import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  Title?: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, Title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{Title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10% ', 'R$ 150']}
          system="windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10% ', 'R$ 150']}
          system="windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10% ', 'R$ 150']}
          system="windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10% ', 'R$ 150']}
          system="windows"
          title="Nome do Jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
