import tw from "tailwind-styled-components";

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

export {
  StyledHistoryContainer,
  StyledHistoricalQueriesContainer,
  StyledQueryDisplayHeader,
  StyledQueryDisplay,
  StyledColumnTitle,
  StyledQueryData
}