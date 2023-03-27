import { memo } from 'react'

const Header = memo(() => {
  return (
    <div className="header">
      <ul className="headerNav">
        <li className="icon"></li>
        <li className="headerTitle">portfolio</li>
        <li></li>
        <li></li>
      </ul>
    </div>
    
  )
})

export default Header
