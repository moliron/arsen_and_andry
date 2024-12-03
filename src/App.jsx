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
import men from './img/men.svg'
import women from './img/women.svg'
import meen from './img/meen.svg'
import up from './img/UP.svg'
import vector from './img/Vector.svg'
import vector_2 from './img/Vector_1.svg'
import vector_3 from './img/Vector_2.svg'
import upp from './img/ArrowUpRight_1.svg'

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
      <div className='text px-28 mt-[-200px] font-bold gap-[8px]'>
        <p className='text-[42px] '>Spring Season</p>
        <p className='ml-[1490px] text-[15px] '>VIEW COLLECTON</p>
        <img src={arrowup} alt="" className='mt-[-20px] ml-[1620px] ' />
      </div>
      <div className='box items-center flex justify-between px-28 py-14 mt-[100px] '>
        <img src={numeros} alt="" />
        <img src={bi} alt="" />
        <img src={kf} alt="" />
        <img src={fb} alt="" />
        <img src={hb} alt="" />
      </div>
      <div className="items-center justify-between flex">
        <div className=' flex w-1/2'>
          <img src={left} alt="" className='ml-[150px]' />
          <img src={frami} alt="" className='h-[600px]' />
          <img src={right} alt="" className='' />
        </div>
        <div className="w-1/2 relative">
          <img src={image} alt="" className='w-full' />
          <button className='bg-black text-white absolute px-4 py-2 left-10 bottom-7 rounded-[10px]'>Shop Shirts</button>
        </div>
      </div>
      <div className="flex">
        <p className=' ml-[440px] mt-[-210px]'>Basic Shirt</p>
        <p className='font-bold ml-[-50px] mt-[-170px]'>€49</p>
      </div>
      <div className="">
        <div className="bg-white w-full h-[44px] "></div>
        <div className="men w-[596px] h-[636px] ml-80 rounded-[10px] relative">
          <img src={men} alt="" />
          <button className='bg-black text-white absolute ml-[20px] px-4 py-3 bottom-10 rounded-[10px] '>Shop Sweaters</button>
        </div>
        <div className="box w-[596px] h-[636px] ml-[940px] mt-[-635px] rounded-[10px]">
          <p className='text-[40px] py-[60px] ml-10 font-bold'>“ First Light promises <br /> quality, timeless designs <br /> and with our mission it is <br /> truly a buy it for life <br /> purchase. “</p>
          <p className='ml-10 mt-[170px] text-xl'>— Guera Latissa, Creative Director</p>
        </div>
      </div>
      <div className="mt-16 ml-[-45px] flex justify-center items-center">
        <img className='rounded-l-lg ' src={women} alt="" />
        <img className='rounded-r-lg ' src={meen} alt="" />
      </div>
      <div className="flex px-[350px] mt-[-50px] text-[14px]">
        <p>WOMEN</p>
        <img src={up} alt="" className='px-[5px] mt-[px]' />
      </div>
      <div className="flex justify-center ml-14 mt-[-22px]">
        <p>MEN</p>
        <img src={up} alt="" className='px-[5px]' />
      </div>
      <div className="">
        <div className="bg-white w-full h-[54px] "></div>
      <div className="text-[40px] flex justify-center font-bold">
        <p>Hot off the press</p>
      </div>
      <div className="ml-[450px] w-[1000px] h-[260px] flex border-[2px] solid black;">
        <div className='border-r-2 ml-8 mt-11 mb-[10px] '>
          <img src={vector} alt="" />
          <p  className="mt-6 w-[250px] h-[200px]">“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
          <p className='mt-[-80px] text2'>Read article</p>
          <img src={upp} alt="" className='flex mt-[-20px] ml-[80px]' />
        </div>
        <div className="ml-20 mt-11 mb-[10px] border-r-2">
          <img src={vector_2} alt="" />
          <p className='mt-6 w-[250px] h-[200px]'>“First light proves it is possible to combine great design with the finest materials available.”</p>
          <p className='mt-[-70px] text2'>Read article</p>
          <img src={upp} alt="" className='flex mt-[-20px] ml-[80px]' />
        </div>
        <div className="ml-20 mt-11">
          <img src={vector_3} alt="" />
          <p className='mt-6 w-[250px] h-[200px]'>“Redefining excellence with premium materials and visionary robust design.”</p>
          <p className='mt-[-70px] text2'>Read article</p>
          <img src={upp} alt="" className='flex mt-[-20px] ml-[80px]' />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
