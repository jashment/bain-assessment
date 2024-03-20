import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import axios from 'axios'

const History = () => {
  const [historicalQueries, setHistoricalQueries] = useState([])

  useEffect(() => {
    const getHistoricalQueries = async () => {
      const allHistoricalQueries = await axios.get('http://localhost:3000/historical-queries')
      setHistoricalQueries(allHistoricalQueries.data)
    }
    getHistoricalQueries()
  }, [])
  

  return (
    <StyledHistoryContainer>
      <StyledHistoricalQueriesContainer>
        <div className="pb-4">
          <h2 className="text-xl">Historical Queries</h2>
          <p>History of the user&apos;s queries.</p>
        </div>
        
        <StyledQueryDisplayHeader>
          <StyledColumnTitle>Source Address</StyledColumnTitle>
          <StyledColumnTitle>Destination Address</StyledColumnTitle>
          <StyledColumnTitle>Distance in Miles</StyledColumnTitle>
          <StyledColumnTitle>Distance in Kilometers</StyledColumnTitle>
        </StyledQueryDisplayHeader>
        {historicalQueries.length > 0 ?
          historicalQueries.map((historicalQuery, index) => {
            const { sourceAddress, destinationAddress, distanceMiles, distanceKilometers } = historicalQuery
            return <StyledQueryDisplay key={index}>
              <StyledQueryData>{sourceAddress}</StyledQueryData>
              <StyledQueryData>{destinationAddress}</StyledQueryData>
              <StyledQueryData>{distanceMiles}</StyledQueryData>
              <StyledQueryData>{distanceKilometers}</StyledQueryData>
            </StyledQueryDisplay>
          })
          :
          <StyledQueryDisplay>
            <StyledQueryData>No queries found</StyledQueryData>
          </StyledQueryDisplay>
        }
      </StyledHistoricalQueriesContainer>
    </StyledHistoryContainer>
  )
}

const StyledHistoryContainer = tw.div`
  flex
  flex-col
  h-screen
  px-8
  bg-[#f8f8f6]
  text-xs
  md:text-base
`

const StyledHistoricalQueriesContainer = tw.div`
  flex
  flex-col
  bg-white
  p-4

`

const StyledQueryDisplayHeader = tw.div`
  flex
  flex-row
  bg-[#e0e0de]
  px-4
  py-[11px]
  font-semibold
`
const StyledQueryDisplay = tw.div`
  flex
  flex-row
  bg-white
  p-2
  border-t
  bg-[#f8f8f6]
`

const StyledColumnTitle = tw.p`
  basis-1/4
`

const StyledQueryData = tw.p`
  basis-1/4
`

export default History