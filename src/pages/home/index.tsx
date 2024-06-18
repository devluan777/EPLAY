import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  category: string
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old: number
    current?: number
  }

  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />

        <ProductsList
          games={onSaleGames}
          Title="Promoções"
          background="gray"
          id="on-sale"
        />

        <ProductsList
          games={soonGames}
          Title="em breve"
          background="black"
          id="coming-soon"
        />
      </>
    )
  }
  return <h4>Caregando...</h4>
}

export default Home
