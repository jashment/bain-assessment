import tw from "tailwind-styled-components"
import { useLocation, Link } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <StyledHeader>
      <div className="basis-4/6 md:w-1/2">
        <h1 className="text-3xl font-light">Distance Calculator</h1>
        <p className="text-[#4B4949]">Prototype web application for calculating the distance between addresses.</p>
      </div>
      <div className=" flex basis-2/6 md:w-1/2 md:justify-end">
        {location.pathname === "/" ?
          <Link to="/history">
            <StyledHistoryButton>
              <p>View Historical Queries</p>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
                </svg>
              </div>
            </StyledHistoryButton>
          </Link>
          :
          <Link to="/">
            <StyledCalculatorButton>
              <p>Back to Calculator</p>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                  <g>
                    <rect fill="none" height="24" width="24" /></g>
                  <g>
                    <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13.03,7.06L14.09,6l1.41,1.41 L16.91,6l1.06,1.06l-1.41,1.41l1.41,1.41l-1.06,1.06L15.5,9.54l-1.41,1.41l-1.06-1.06l1.41-1.41L13.03,7.06z M6.25,7.72h5v1.5h-5 V7.72z M11.5,16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16z M18,17.25h-5v-1.5h5V17.25z M18,14.75h-5v-1.5h5V14.75z" />
                  </g>
                </svg>
              </div>
            </StyledCalculatorButton>
          </Link>
        }
      </div>
    </StyledHeader>
  )
}

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

export default Header