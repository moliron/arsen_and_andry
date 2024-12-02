import './index.css';
import dots from './img/Dots.svg'
import first from './img/FIRST.svg'
import subtract from './img/Subtract.svg'
import light from './img/LIGHT.svg'
import screenshot from './img/Screenshot.svg'
import arrowup from './img/ArrowUpRight.svg'
import numeros from './img/Numero.svg'
import bi from './img/BI.svg'
import kf from './img/KF.svg'
import fb from './img/FB.svg'
import hb from './img/HB.svg'
import frami from './img/Frami.svg'
import image from './img/image.svg'
import left from './img/ArrowLeft.svg'
import right from './img/ArrowRight.svg'

function App() {
  return (
    <div className="App">
      <header className='box items-center flex justify-between px-4 py-3'>
        <img src={dots} alt="" />
        <p className='font-bold text-[17px]'>SUMMER SALE UP TO 50% OFF</p>
        <img src={dots} alt="" />
      </header>
      <div className='items-center flex justify-center h-[280px] gap-[57px] ' >
        <img src={first} alt="" />
        <img src={subtract} alt="" />
        <img src={light} alt="" />
      </div>
      <div className='items-center flex justify-center  '>
        <img src={screenshot} alt="" className='w-full' />
      </div>
      <div className='text px-28 mt-[-150px] font-bold gap-[8px]'>
        <p className='text-[32px] '>Spring Season</p>
        <p className='ml-[1490px] text-[15px] '>VIEW COLLECTON</p>
        <img src={arrowup} alt="" className='mt-[-20px] ml-[1620px] ' />
      </div>
      <div className='box items-center flex justify-between px-28 py-14 mt-[70px] '>
        <img src={numeros} alt="" />
        <img src={bi} alt="" />
        <img src={kf} alt="" />
        <img src={fb} alt="" />
        <img src={hb} alt="" />
      </div>
      <div className='items-start flex justify-start'>
        <img src={frami} alt="" className=' ' />
      </div>
      <div className='items-end flex justify-end'>
        <img src={image} alt="" className='w-1/2'/>
      </div>
      <div className='mt-[-400px]'>
        <img src={left} alt="" />
        <img src={right} alt="" />
      </div>
    </div>
  );
}

export default App;
