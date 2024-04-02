import tw from "tailwind-styled-components"

const StyledHeader = tw.div`
  flex
  flex-col
  md:flex-row
  py-4
  px-12
  w-full
  justify-between
  bg-[#f8f8f6]
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

const StyledCalculatorButton = tw.button`
  px-3
  py-[13px]
  flex
  flex-row
  gap-8
  bg-[#f8f8f6]
  my-2
  border-[#313030]
  border
`


export {
  StyledCalculatorButton,
  StyledHeader,
  StyledHistoryButton,
}