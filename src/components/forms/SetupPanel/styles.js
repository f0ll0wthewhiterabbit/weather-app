import styled from 'styled-components'

export default styled.form`
  margin-left: auto;
  margin-right: auto;

  button {
    width: 100%;
  }

  @media (min-width: ${props => props.theme.width.tablet}) {
    button {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: auto;
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  @media (min-width: ${props => props.theme.width.desktop}) {
    display: flex;
    flex-wrap: wrap;
    max-width: 1100px;
  }
`
