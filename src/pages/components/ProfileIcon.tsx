import Image from 'next/image'
import Link from 'next/link'

const ProfileIcon = () => {
  return (
    <>
    <div className="profileIcon">
      <Link href="/profile">
        <Image src="/img/profileicon.jpg" width={180} height={180} style={{ borderRadius: "50%", marginTop: "0.6em", marginLeft: "0.6em" }} alt="My avatar" />
      </Link>
    </div>
    </>
  )
}

export default ProfileIcon
