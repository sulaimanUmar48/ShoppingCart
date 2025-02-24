import { useEffect, useState } from 'react'
import image from './assets/cat.png'

function App() {
  const [groceries, setGroceries] = useState([])

  useEffect(()=>{
    setGroceries(JSON.parse(localStorage.getItem("items")) || [])
  }, [])


  function getInput(value){
    const newItem = value.get("foodstuff")
    const updatedGroceries = [...groceries, newItem]


    setGroceries( updatedGroceries )
    localStorage.setItem("items", JSON.stringify(updatedGroceries))
  }

  function deleteItem(e){
    const updatedArray = [...groceries]
    const filteredArray = updatedArray.filter((item) => item !== e.target.innerText)
    localStorage.setItem("items", JSON.stringify(filteredArray))
    setGroceries(filteredArray)
  }

  const mappedGroceries = groceries.map( x => <li key={x} onClick={(e)=>{deleteItem(e)}}>{x}</li>)

  return (
    <>
      <main>
        <img src={image}/>
        <form action={getInput}>
          <input type="text" name='foodstuff' placeholder='input item... e.g Butter, milk, mango' required/>
          <button>Add to cart</button>
        </form>
        <ul>
          {mappedGroceries}
        </ul>
      </main>
    </>
  )
}

export default App
