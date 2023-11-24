"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);

  // post

  const [newNama, setNewNama] = useState("");
  const [isDisabled, setIsDisabled] = useState(true); // State for button disabled

  function handlerGantiNama() {
    setNama(newNama);
  }

  function handleInputChange(event) {
    setNewNama(event.target.value);
    setIsDisabled(event.target.value === ""); // Enable button if input value is not empty
  }

  const endpointAPI = "https://6555c10084b36e3a431e3f78.mockapi.io/diaryku";

  <div className="cta-banner-wrapper">
  {/* Tombol CTA */}
  <div>
    <input
      type="text"
      placeholder="Masukkan Nama Baru"
      value={newNama}
      onChange={handleInputChange}
    />
  </div>
  <div
    className={`cta-button ${isDisabled ? "disabled" : "active"}`}
    style={{
      marginTop: "12px",
    }}
    onClick={isDisabled ? null : handlerGantiNama}
    disabled={isDisabled} // Disable button if input value is empty
  >
    <p>{isDisabled ? 'Disable' : 'Ganti Nama'}</p>
  </div>
</div>

  async function getDiary() {
    const res = await axios.get(endpointAPI);
    const data = res.data;

    //ambil judul
    const judul = data.map((item) => item.judul);
    setJudul(judul);

    //ambil isi_diary
    const isi_diary = data.map((item) => item.isi_diary);
    setIsiDiary(isi_diary);
  }

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <div>
      {judul.length > 0 ? (
        <ul>
          {judul.map((item, idx) => (
              <Link href={`/diary/${item}/${isiDiary[idx]}`}> 
              <li>
                <div className="diary-container">
                    <h1>{judul[idx]}</h1>
                    <p className="p-diary">{isiDiary[idx]}</p>
                </div>
              </li>
              </Link>
              
          ))}
        </ul>
      ) : (
        "API not loading"
      )}
    </div> 
  );
}