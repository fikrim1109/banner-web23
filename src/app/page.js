import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <div className="banner-container">
        {/* Kartunya */}
        <div className="header-banner-wrapper">
          {/* Foto Profil dan Nama */}
          <div className="profile-header-banner">
            {/* Foto Profil*/}
            <Image
              src="/Asets/fotomessi.png"
              width={600}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="content-header-banner">
            {/* Nama dan Kawan2*/}
            <h1>Fikri Natadiwirya Maulana</h1>
            <div className="bio-nim-header-banner">
            {/* NIM dan BIO*/}
            <p>D121211033</p>
            <p>8 Ballon D'or Winners</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
          <button>
            Halo!
          </button>
        </div>
      </div>
    </div>
  )
}