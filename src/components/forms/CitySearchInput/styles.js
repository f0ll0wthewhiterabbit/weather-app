import { AutoComplete } from 'antd'
import styled from 'styled-components'

export default styled(AutoComplete)`
  margin-bottom: 10px;

  @media (min-width: ${props => props.theme.width.tablet}) {
    margin-right: 10px;

    &&& {
      width: 70%;
    }
  }
`
