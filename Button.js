import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <div className="button-container">
    <button onClick={onClick} style ={{ backgrounColor: color}}className ='btn'> {text} </button>
    </div>
  )
}
Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text :PropTypes.string,
    color:PropTypes.string,
    onClick: PropTypes.func,
}
export default Button