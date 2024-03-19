import { useState } from 'react'
import tw from 'tailwind-styled-components'
import axios from 'axios'

const Home = () => {
  const [sourceAddress, setSourceAddress] = useState('')
  const [destinationAddress, setDestinationAddress] = useState('')
  const [unit, setUnit] = useState("mi")
  const [distance, setDistance] = useState({})

  const calculateTotalDistance = async () => {
    const calculatedDistance = await axios.post('http://localhost:3000/calculate-distance', { sourceAddress, destinationAddress, unit })
    setDistance(calculatedDistance.data)
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
          <StyledCalculateButton onClick={calculateTotalDistance}>
            <p>Calculate distance</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#7D7D7C">
                <g>
                  <rect fill="none" height="24" width="24" /></g>
                <g>
                  <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13.03,7.06L14.09,6l1.41,1.41 L16.91,6l1.06,1.06l-1.41,1.41l1.41,1.41l-1.06,1.06L15.5,9.54l-1.41,1.41l-1.06-1.06l1.41-1.41L13.03,7.06z M6.25,7.72h5v1.5h-5 V7.72z M11.5,16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16z M18,17.25h-5v-1.5h5V17.25z M18,14.75h-5v-1.5h5V14.75z" />
                </g>
              </svg>
            </div>
          </StyledCalculateButton>
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
    </StyledHome>
  )
}

const StyledHome = tw.div`
  flex
  flex-col
  h-screen
  px-8
  bg-[#f8f8f6]
`

const StyledCalculateButton = tw.button`
  px-3
  py-[13px]
  flex
  flex-row
  gap-8
  bg-[#bbbbb9]
  text-[#7D7D7C]
  self-start
  left-0
`

const CalculatorContainer = tw.div`
  flex
  flex-col
  md:flex-row
  gap-8
  bg-white
  p-4
  h-full
  md:h-56
`

const StyledInputContainer1 = tw.div`
flex
  flex-col
  basis-2/6
  h-full
  justify-between
`

const StyledInput = tw.input`
  border-b
  border-[#7D7D7C]
  bg-[#f8f8f6]
  w-full
  px-[11px]
  py-4
`

const StyledInputContainer2 = tw.div`
  basis-2/6
  h-max
`

const StyledUnitSelector = tw.div`
  flex
  flex-col
  basis-1/6
`

const StyledUnitLabel = tw.label`
  inline-flex 
  items-center 
  mt-3
`

const StyledRadioSelector = tw.input`
  form-radio
  h-4 w-4
  accent-black
`

const StyledSelectorText = tw.span`
  ml-2
  text-gray-700
  text-sm
`

const StyledOutput = tw.div`
  basis-1/6
`

const StyledDistanceContainer = tw.div`
  flex 
  flex-row 
  gap-4
`

const StyledDistanceUnit = tw.p`
  text-sm
`

export default Home