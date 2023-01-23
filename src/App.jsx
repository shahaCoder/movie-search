import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Raiting from './components/Raiting';
import Movies from './Hoc/Movies'
import { movieContext } from './Context/Context';
import { IoIosArrowDown } from 'react-icons/io'
function App() {
  const url = 'http://localhost:7777'
  const [data, setData] = useState(null)
  const [show, setShow] = useState(false)

  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [value, setValue] = useState('')

  const [genre, setGenre] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isChecked3, setIsChecked3] = useState(false)
  const [isChecked4, setIsChecked4] = useState(false)
  const [isChecked5, setIsChecked5] = useState(false)

  const [action, setAction] = useState()
  const [comedy, setComedy] = useState()
  const [thriller, setThriller] = useState()
  const [drama, setDrama] = useState()

  
  const [raiting5, setRaiting5] = useState()
  const [raiting6, setRaiting6] = useState()
  const [raiting7, setRaiting7] = useState()
  const [raitingCheck5, setRaitingCheck5] = useState(false)
  const [raitingCheck6, setRaitingCheck6] = useState(false)
  const [raitingCheck7, setRaitingCheck7] = useState(false)
  
    const handleChange = (data) => {
      if(data == 'Action'){
        if(isChecked == false){
          setAction(data)
        }
        setIsChecked(!isChecked)
      }
      if(data == 'Comedy'){
        if(isChecked2 == false){
          setComedy(data);
        }
        setIsChecked2(!isChecked2)
      }
      if(data == 'Thriller'){
        if(isChecked4 == false){
          setThriller(data)
        }
        setIsChecked4(!isChecked4)
      }
      if(data == 'Drama'){
        if(isChecked5 == false){
          setDrama(data)
        }
        setIsChecked5(!isChecked5)
      }
      if(data == 'Any'){
        if(isChecked3 == false){
          setIsChecked3(data)
        }
        setIsChecked3(!isChecked3)
      }
      }
      const handleRaiting = (data) => {
        if(data == 5){
          if(raitingCheck5 == false){
            setRaiting5(data)
            console.log(data);
          }
          setRaitingCheck5(!raitingCheck5)
        }
        if(data == 6){
          if(raitingCheck6 == false){
            setRaiting6(data)
            console.log(data);
          }
          setRaitingCheck6(!raitingCheck6)
        }
        if(data == 7){
          if(raitingCheck7 == false){
            setRaiting7(data)
          }
          setRaitingCheck7(!raitingCheck7)
        }
      }
  useEffect(() => {
    axios.get(url  + '/movies')
      .then(res => setData(res.data))
  }, []);
  const val = value.toLowerCase()
  const act = action?.toLowerCase()
  const com = comedy?.toLowerCase()
  const th = thriller?.toLowerCase()
  const drm = drama?.toLowerCase()
  const rt = raiting5
  const rt6 = raiting6
  const rt7 = raiting7
   const filtered = data?.filter(i => {
     if(i.title.toLowerCase().includes(val)){
      const rounded = Math.round(i.Raiting)
          if(isChecked || isChecked2 || isChecked4 || isChecked5 || raitingCheck5 || raitingCheck6 || raitingCheck7 ){
          if(i.Category.toLowerCase().includes(act) || i.Category.toLowerCase().includes(com) || i.Category.toLowerCase().includes(th) || i.Category.toLowerCase().includes(drm) || isChecked3 || rt == i.Raiting || rt6 <= rounded || rt7 <= rounded){
            return i
          }
          }
          else {
          return i
        }
        }
    })
    const closeHandler = () => {
      setShow(false)
      setShow2(false)
      setShow3(false)
    }
    const closeHandler2 = () => {
      setShow(true)
      setShow2(false)
      setShow3(false)
    }
    const closeHandler3 = () => {
      setShow(false)
      setShow2(true)
      setShow3(false)
      setGenre(true)
    }
    const closeHandler4 = () => {
      setShow(false)
      setShow2(false)
      setShow3(true)
      setGenre(false)
    }

  return (  
    <movieContext.Provider value={{
      data,
      isChecked,
      setIsChecked,
      handleChange,
      handleRaiting
    }}>
       <div className='w-full h-screen pt-20' onClick={() => closeHandler()}>
          <div className='flex justify-center m-auto gap-2'>
             <div className='w-[48%] relative' onClick={(e) => e.stopPropagation()}>
                 <input type="text" 
                 onClick={() => closeHandler2()}
                 value={value}
                 onChange={(e) => setValue(e.target.value)}
                  className='w-full pl-2 h-14 border border-[#979797] outline-none' placeholder='Enter movie name' />
                 {
                   show ?
                   <div className='w-full absolute top-16 border-[#979797] border h-auto px-2 py-1'>
                 {
                  filtered?.map(i => <Raiting key={i.id} item={i}></Raiting>)
                 }
              </div> : null
                 }  
             </div>
             <div className='w-[40%] flex gap-2 relative' onClick={(e) => e.stopPropagation()}>
             <div className='w-[50%] h-14 border border-[#979797]' onClick={() => closeHandler3()}>
              <div className='flex justify-between pt-4 px-2 items-center'>
              <p>Raiting</p>
              <IoIosArrowDown />
              </div>
              <div className='absolute top-16 w-full'>
                {
                  show2 ? <Movies genre={genre} /> : null
                }
              </div>
                 </div>
                 <div className='w-[50%] h-14 border border-[#979797] relative' onClick={() => closeHandler4()}>
                 <div className='flex justify-between pt-4 px-2 items-center'>
                  <p>Genre</p>
                  <IoIosArrowDown />
              </div>
                 <div className='absolute top-16 w-full'>
                {
                  show3 ? <Movies /> : null
                }
              </div>
                 </div>
             </div>
          </div>
       </div>
    </movieContext.Provider>
  );
}

export default App;
