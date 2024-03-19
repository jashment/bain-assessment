import tw from "tailwind-styled-components"
const History = () => {

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
        <StyledQueryDisplay>
          <StyledQueryData>test</StyledQueryData>
          <StyledQueryData>test</StyledQueryData>
          <StyledQueryData>test</StyledQueryData>
          <StyledQueryData>test</StyledQueryData>
        </StyledQueryDisplay>
        <StyledQueryDisplay>
          <StyledQueryData>test</StyledQueryData>
          <StyledQueryData>test</StyledQueryData>
          <StyledQueryData>test</StyledQueryData>
          <StyledQueryData>test</StyledQueryData>
        </StyledQueryDisplay>
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
`

const StyledHistoricalQueriesContainer = tw.div`
  flex
  flex-col
  bg-white
  p-4
  h-full
  md:h-56
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