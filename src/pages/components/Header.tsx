import { memo } from 'react'
import Link from 'next/link'

const Header = memo(() => {
  return (
    <div className="header">
      <ul className="headerNav">
        <li className="icon"></li>
        <li className="headerTitle">
          <Link href="/">portfolio</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  )
})

export default Header
