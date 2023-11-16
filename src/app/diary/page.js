import axios from "axios"
import React from "react"
export default function Diary() {
    

    const endpointAPI = 'https://6555c10084b36e3a431e3f78.mockapi.io/diaryku'
    
    async function getDiary() {
        const res = await axios.get(endpointAPI)
        const diary = res.data.nama
        console.log(diary)
    }

    return(
        <>
        <div className="diary-container">
            <h1>Seninku yang bahagia</h1>
            <p className="p-diary">Today was a vibrant tapestry of experiences. The morning sun ushered in a sense of optimism, setting the tone for a productive day. I navigated through a bustling cityscape, the rhythm of the streets harmonizing with my footsteps. Work was a whirlwind of challenges and accomplishments, each task a stepping stone towards personal and professional growth. During lunch, I took a moment to recharge in a cozy cafe, savoring the flavors of a comforting meal. The afternoon unfolded with a blend of meetings and creative endeavors, pushing the boundaries of my skills. As the day waned, a breathtaking sunset painted the sky in hues of pink and orange, a serene backdrop to reflective moments. Now, as I unwind, I find solace in the simple joys that adorned this day, grateful for the rich mosaic of experiences that made it uniquely mine.</p>
        </div>
        </>
    )
}