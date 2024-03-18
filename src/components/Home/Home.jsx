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
      <StyledHeader>
        <div className="basis-4/6 md:w-1/2">
          <h1 className="text-3xl font-light">Distance Calculator</h1>
          <p className="text-[#4B4949]">Prototype web application for calculating the distance between addresses.</p>
        </div>
        <div className="basis-2/6 md:w-1/2">
          <StyledHistoryButton>
            <p>View Historical Queries</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
              </svg>
            </div>
          </StyledHistoryButton>
        </div>
      </StyledHeader>
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

const StyledHeader = tw.div`
  flex
  flex-col
  md:flex-row
  py-4
  px-4
  w-full
  justify-between
`

const StyledHistoryButton = tw.button`
  px-3
  py-[13px]
  flex
  flex-row
  gap-8
  bg-[#313030ff]
  text-white
  my-2
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