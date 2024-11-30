import {ButtonLiContainer, ButtonImg, ImageItem} from './styledComponents'

const Buttons = props => {
  const {buttonDetails, onGetId} = props
  const {id, imageUrl} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, imageUrl)
  }

  return (
    <ButtonLiContainer>
      <ButtonImg
        type="button"
        onClick={onClickButton}
        data-testid={`${lowerCaseId}Button`}
      >
        <ImageItem src={imageUrl} alt={id} />
      </ButtonImg>
    </ButtonLiContainer>
  )
}
export default Buttons
