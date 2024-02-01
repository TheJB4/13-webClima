import { useEffect, useState } from 'react'
import Card from './Components/Card'

function App() {
  let [clima,setClima] = useState('')
  let [nombreCiudad,setNombreCiudad] = useState('')
  let [ubicacion,setUbicacion] = useState('')

  return (
    <>
      <form
      className='flex flex-col' 
      onSubmit={(e)=>{
        e.preventDefault()

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&appid=9960e460d7ec0d1520a5343ff0513e57`)
        .then(res => res.json())
        .then(data => setClima(data));

      }}>
        <label htmlFor="ubicacion">Ubicacion</label>
        <input type="text" id='ubicacion' onChange={(e)=>setUbicacion(e.target.value)}/>
        <label htmlFor="pais">Pais</label>
        <input type="text" id='pais' onChange={(e)=>setNombreCiudad(e.target.value)}/>
        <input type="submit" value="buscar"/>
      </form>
      {clima && <Card clima={clima}></Card>}
    </>
  )
}

export default App
