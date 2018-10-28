import React from 'react'

const Header = () => (<Navigation list={['Home', 'About', 'Contacts']} />);

function Navigation(props) {
  const { list } = props

  return (
    <ul>
      {list.map(item => (<li key={item}>{item}</li>))}
    </ul>
  )
}

export default Header
