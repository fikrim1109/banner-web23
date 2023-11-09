'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {

  const [Dor, setDor] = useState(0)
  const [nama, setNama] = useState('Fikri Natadiwirya Maulana')

  function handlerTambahBravo(){
    setDor(Dor + 1)
  }

  function handlerGantiNama(){
    setNama('Lionel Messi')
  }
  
  
  return (
    <div className='body'>
      <div className="banner-container">
        {/* Kartunya */}
        <div className="header-banner-wrapper">
          {/* Foto Profil dan Nama */}
          <div className="profile-header-banner">
            {/* Foto Profil*/}
            <Image
              src="/assets/fotomessi.png"
              alt="Picture of the author"
              fill
              objectFit='contain'
            />
          </div>
          <div className="content-header-banner">
            {/* Nama dan Kawan2*/}
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
            {/* NIM dan BIO*/}
            <p>D121211033</p>
            <p>{Dor} Balon D'or Winner</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
            <div className='cta-button' onClick={handlerTambahBravo}>
              <p>Tambah Trofi </p>
            </div>
            <div className='cta-button' 
            style={{
              marginTop: '12px'
            }}
            
            onClick={handlerGantiNama}>
              <p>Ganti Nama</p>
            </div>
        </div>
      </div>
    </div>
  )
}