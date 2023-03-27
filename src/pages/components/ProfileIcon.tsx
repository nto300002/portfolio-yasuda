import Image from 'next/image'

const ProfileIcon = () => {
  return (
    <div className="profileIcon"><Image src="/img/profileicon.jpg" width={180} height={180} style={{ borderRadius: "50%", marginTop: "0.6em", marginLeft: "0.6em" }} alt="My avatar" /></div>
  )
}

export default ProfileIcon
