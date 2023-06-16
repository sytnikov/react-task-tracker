import Button from "./Button"

const Header = ({ title, onAdd }) => {

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onAdd}/>
    </header>
  )
}

// Header.defaultProps = {
//     title: "Default value",
// }

export default Header

// CSS in JS 
// const headingStyle = {
//     color: "red",
//     backgroundColor: 'black',
// }