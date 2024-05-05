import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>categoria</Tag>
    <Tag>windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
      consequatur quas ex illo nobis blanditiis, possimus ab reiciendis
      consequuntur distinctio sint. Sapiente recusandae dolore possimus quis
      expedita ullam dolorum consequatur.
    </Descricao>
  </Card>
)

export default Product
