import ProductsList from '../../components/ProductsList'

import { Game } from '../home'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationsGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationsGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          Title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportGames}
          Title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={fightGames}
          Title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={rpgGames} Title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={simulationGames}
          Title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
