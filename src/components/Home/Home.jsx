import tw from "tailwind-styled-components"

const Home = () => {
  return (
    <StyledHome>
      <StyledHeader>
        <div className="basis-4/6 md:w-1/2">
          <h1 className="text-3xl font-light">Distance Calculator</h1>
          <p className="text-[#4B4949]">Prototype web application for calculating the distance between addresses.</p>
        </div>
        <div className="basis-2/6 w-1/2">
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
          <StyledInput1 />
          <button>Calculate distance</button>
        </StyledInputContainer1>
        <StyledInputContainer2>
          <StyledInput2 />
        </StyledInputContainer2>
        <StyledUnitSelector>Unit</StyledUnitSelector>
        <StyledOutput>Distance</StyledOutput>
      </CalculatorContainer>
    </StyledHome>
  )
}

const StyledHome = tw.div`
  flex
  flex-col
  h-screen
  px-8
  bg-[f8f8f6]
`

const StyledHeader = tw.div`
  flex
  flex-col
  md:flex-row
  py-4
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
`

const CalculatorContainer = tw.div`
  flex
  flex-row
  gap-8
  h-10
  bg-white
  p-4
`

const StyledInputContainer1 = tw.div`
  flex
  flex-col
  basis-2/6
  h-max
`

const StyledInput1 = tw.input`
  border-b
  border-[#7D7D7C]
  bg-[#f8f8f6]
`

const StyledInputContainer2 = tw.div`
  flex
  basis-2/6
  h-max
`

const StyledInput2 = tw.input`
  border-b
  border-[#7D7D7C]
  bg-[#f8f8f6]
`

const StyledUnitSelector = tw.div`
  flex
  basis-1/6
`

const StyledOutput = tw.div`
  flex
  basis-1/6
`

export default Home