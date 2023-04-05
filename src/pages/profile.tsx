import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from "react";

const Profile = () => {
  const [fontSize, setFontSize] = useState("30px");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setFontSize(window.innerWidth < 600 ? "14px" : "30px");
    }
  }, []);
  const h1style ={
    fontSize: fontSize,
    border: "0"
  }
  const h2style ={
    fontSize: "20px",
    margin: "0",
    width: "6em",
    borderColor: "rgb(193, 193, 193)"
  }
  const profileDetail ={
    fontSize: "19px",
    paddingLeft: "1em"
  }
  return (
    <div className="content" style={{ marginTop: "5em" }}>
      <div style={{ width: "80%" }}>
        <ul style={{ display: "flex", flexDirection: "column" , listStyle: "none" }}>
          <li style={{ display: "flex" }}>
            <Image src="/img/profileicon.jpg" width={90} height={90} style={{ borderRadius: "50%"}} alt="My avatar" />
            <h1 style={h1style}>プロフィール</h1>
          </li>
          <li>
            <h2 style={h2style}>名前</h2>
            <p style={profileDetail}>yasuda naoto</p>
          </li>
          <li>
            <h2 style={h2style}>やりたい職種</h2>
            <p style={profileDetail}>バックエンドエンジニア　OR　サーバーサイドエンジニア</p>
          </li>
          <li>
            <h2 style={h2style}>経験言語</h2>
            <p style={profileDetail}>Rails, JavaScript, TypeScript, React, Nextjs </p>
          </li>
          <li>
            <h2 style={h2style}>今後は<br />何がしたい？</h2>
            <p style={profileDetail}>発達障害の方が抱える課題を解決するアプリを作りたい。例えば、私はADHDであり、ついついスマホをいじりながら別のことをしてダラダラと時間を過ごしてしまいがちなので、用途別にタイマーを設定できるアプリを作り、時間を区切ることでスマホ依存を控えられるようになるのではないかと考えている。</p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Profile
