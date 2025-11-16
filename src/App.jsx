import { useState } from 'react'
import axios from "axios"

export default function App() {
  const endpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

  const [dataForm, setDataForm] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    // the input that's been edited
    let newValue

    if (type === "checkbox") {
      newValue = checked
    }
    else {
      newValue = value
    }

    setDataForm({
      ...dataForm, // dataForm copies the previous state
      [name]: newValue // [name]: newValue only edits the field that's been edited
    })


  }

  return (
    <>
      <h1>Invia Form all'Endpoint</h1>

      <form onSubmit={ }>
        <div>
          <h2>Autore:</h2>
          <input type="text" name='author' value={dataForm.author} onChange={handleChange} />
        </div>

        <div>
          <h2>Titolo:</h2>
          <input type="text" name='title' value={dataForm.title} onChange={handleChange} />
        </div>

        <div>
          <h2>Testo:</h2>
          <input name='body' value={dataForm.body} onChange={handleChange} />
        </div>

        <div>
          <h2>Pubblico:</h2>
          <input type="text" name='public' checked={dataForm.public} onChange={handleChange} />
        </div>

        <button type='submit'>Invia Form all'Endpoint</button>
      </form>
    </>
  )
}