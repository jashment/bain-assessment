import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import {
  CalculatorContainer,
  StyledCalculateButton,
  StyledDistanceContainer,
  StyledDistanceUnit,
  StyledHome,
  StyledInput,
  StyledInputContainer1,
  StyledInputContainer2,
  StyledOutput,
  StyledRadioSelector,
  StyledSelectorText,
  StyledUnitLabel,
  StyledUnitSelector,
} from '../TWStyledComponents/Home'
import { CalculatorIcon } from '../../assets/icons'

import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  const [sourceAddress, setSourceAddress] = useState('')
  const [destinationAddress, setDestinationAddress] = useState('')
  const [unit, setUnit] = useState("mi")
  const [distance, setDistance] = useState({})

  const getTotalDistance = async () => {
    try {
      if (!sourceAddress || !destinationAddress) {
        throw new Error("Source and destination addresses are required.")
      }

      const calculatedDistance = await toast.promise(axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/calculate-distance`, { sourceAddress, destinationAddress, unit }), {
        pending: 'Calculating distance...',
        success: 'Distance calculated successfully!',
        error: {
          render() {
            return <div>
              <h3 className='font-bold'>Calculation failed</h3>
              <p>Something went wrong and the calculation failed.</p>
            </div>
          }
        },
        toastStyle: { background: '#fff9ed', color: '#ffffff' }
      })

      if (!calculatedDistance.data) {
        throw new Error("No data returned from the server.")
      } else if (calculatedDistance.data.status !== 200) {
        throw new Error(calculatedDistance.data.message)
      }

      setDistance(calculatedDistance.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <StyledHome>
      <CalculatorContainer>
        <StyledInputContainer1>
          <div>
            <p className="text-xs">Source Address</p>
            <StyledInput
              type="text"
              placeholder="Input address"
              value={sourceAddress}
              onChange={(e) => setSourceAddress(e.target.value)}
            />
          </div>
        </StyledInputContainer1>
        <StyledInputContainer2>
          <p className="text-xs">Destination Address</p>
          <StyledInput
            type="text"
            placeholder="Input address"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.target.value)}
          />
        </StyledInputContainer2>
        <StyledUnitSelector>
          <p className="text-xs">Unit</p>
          <StyledUnitLabel>
            <StyledRadioSelector
              type="radio"
              name="unit"
              value="miles"
              checked={unit === "mi"}
              onChange={() => setUnit("mi")}
            />
            <StyledSelectorText>Miles</StyledSelectorText>
          </StyledUnitLabel>
          <StyledUnitLabel>
            <StyledRadioSelector
              type="radio"
              name="unit"
              value="kilometers"
              checked={unit === "km"}
              onChange={() => setUnit("km")}
            />
            <StyledSelectorText>Kilometers</StyledSelectorText>
          </StyledUnitLabel>
          <StyledUnitLabel>
            <StyledRadioSelector
              type="radio"
              name="unit"
              value="meters"
              checked={unit === "both"}
              onChange={() => setUnit("both")}
            />
            <StyledSelectorText>Both</StyledSelectorText>
          </StyledUnitLabel>
        </StyledUnitSelector>
        <StyledOutput>
          <p className="text-xs">Distance</p>
          <StyledDistanceContainer>
            {distance.mi && <StyledDistanceUnit>{distance.mi} mi</StyledDistanceUnit>}
            {distance.km && <StyledDistanceUnit>{distance.km} km</StyledDistanceUnit>}
          </StyledDistanceContainer>
        </StyledOutput>
      </CalculatorContainer>
      <div className='flex justify-start pl-4 pb-4 bg-white'>
        <StyledCalculateButton
          disabled={!sourceAddress || !destinationAddress}
          type="button"
          onClick={getTotalDistance}
          className={`${!sourceAddress || !destinationAddress ? 'bg-[#bbbbb9] text-[#7D7D7C]' : 'bg-[#d10001] text-white'}`}
        >
          <p>Calculate distance</p>
          <div>
            <CalculatorIcon fillColor={!sourceAddress || !destinationAddress ? '#7D7D7C' : '#ffffff'} />
          </div>
        </StyledCalculateButton>
      </div>
    </StyledHome>
  )
}

export default Home