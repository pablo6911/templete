import styled from 'styled-components'

export const Button = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 30em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  @media (max-width: 1000px) {
    margin: 50% 0 0% 0;
  }
  @media (max-width: 375px) {
    margin: 150% 0 0% 0;
  }
`
