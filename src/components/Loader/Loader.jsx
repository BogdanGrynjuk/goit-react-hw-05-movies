import { RotatingLines } from  'react-loader-spinner'
import { Container } from './Loader.styled'

export const Loader = () => {
  return (
    <Container >
      <RotatingLines
        strokeColor="red"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
  </Container>
  )
}