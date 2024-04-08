import {
  StyledHeader,
  StyledHistoryButton,
  StyledCalculatorButton
} from '../TWStyledComponents/Header'
import { CalculatorIcon, HistoryIcon } from '../../assets/icons'
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
                <HistoryIcon />
              </div>
            </StyledHistoryButton>
          </Link>
          :
          <Link to="/">
            <StyledCalculatorButton>
              <p>Back to Calculator</p>
              <div>
                <CalculatorIcon />
              </div>
            </StyledCalculatorButton>
          </Link>
        }
      </div>
    </StyledHeader>
  )
}

export default Header