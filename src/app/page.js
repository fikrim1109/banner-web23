import Image from 'next/image'
import './globals.css'
export default function Home() {
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
            <h1>Fikri Natadiwirya Maulana</h1>
            <div className="bio-nim-header-banner">
            {/* NIM dan BIO*/}
            <p>D121211033</p>
            <p>8 ballon D'or winners</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
          <a href=''>
            <div className='cta-button'>
              <p>Halo!</p>
            </div>
          </a>
          
        </div>
      </div>
    </div>
  )
}