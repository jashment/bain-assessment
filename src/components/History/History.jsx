import { useEffect, useState } from 'react'
import {
  StyledHistoryContainer,
  StyledHistoricalQueriesContainer,
  StyledQueryDisplayHeader,
  StyledColumnTitle,
  StyledQueryDisplay,
  StyledQueryData
} from '../StyledComponents/History'
import axios from 'axios'
import { toast } from 'react-toastify'

const History = () => {
  const [historicalQueries, setHistoricalQueries] = useState([])
  // const toastId = useRef(0)
  
  useEffect(() => {
  const getHistoricalQueries = async () => {
    try {
      const allHistoricalQueries = await toast.promise(axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/historical-queries`), {
        pending: 'Fetching historical queries...',
        success: 'Historical queries fetched successfully',
        error: 'Error fetching historical queries',
      })
      setHistoricalQueries(allHistoricalQueries.data)
    } catch (error) {
      console.error(error)
    }
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

export default History