import tw from "tailwind-styled-components"

const StyledCalculateButton = tw.button`
    px-3
    py-[13px]
    flex
    flex-row
    gap-8
    self-start
    left-0
`

const StyledHome = tw.div`
  flex
  flex-col
  px-8
  pb-8
  bg-[#f8f8f6]
`

const CalculatorContainer = tw.div`
  flex
  flex-col
  md:flex-row
  gap-8
  bg-white
  p-4
  h-fit
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

export {
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
}