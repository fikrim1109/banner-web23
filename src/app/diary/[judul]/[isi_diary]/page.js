import "@app/diary/diary.css"

export default function Diary({ params }) {
    const { judul, isi_diary } = params;

    return (
        <div className="diary-container">
            <h1>{decodeURIComponent(judul)}</h1>
            <p>{decodeURIComponent(isi_diary)}</p>
        </div>
    );
}
