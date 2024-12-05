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
import model from './img/model1.svg'
import model2 from './img/model2.svg'
import model3 from './img/model3.svg'
import model4 from './img/model4.svg'
import but from './img/Button.svg'
import but2 from './img/Button2.svg'
import frame1 from './img/Group 2.svg'
import frame4 from './img/Frame4.svg'
import frame5 from './img/Frame5.svg'
import frame6 from './img/Frame6.svg'
import frame7 from './img/Frame7.svg'
import frame8 from './img/Frame8.svg'
import home from './img/Home.svg'

function App() {
  return (
    <div className="App color">
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
          <img src={left} alt="" className='ml-[140px] scalee' />
          <img src={frami} alt="" className='h-[600px] scale' />
          <img src={right} alt="" className='scalee' />
        </div>
        <div className="w-1/2 relative">
          <img src={image} alt="" className='w-full' />
          <button className='scale bg-black text-white absolute px-4 py-2 left-10 bottom-7 rounded-[10px]'>Shop Shirts</button>
        </div>
      </div>
      <div className="flex">
        <p className=' ml-[440px] mt-[-210px]'>Basic Shirt</p>
        <p className='font-bold ml-[-50px] mt-[-170px]'>€49</p>
      </div>
      <div className="">
        <div className=" w-full h-[44px] "></div>
        <div className="men w-[596px] h-[636px] ml-80 rounded-[10px] relative">
          <img src={men} alt="" />
          <button className='scale bg-black text-white absolute ml-[20px] px-4 py-3 bottom-10 rounded-[10px] '>Shop Sweaters</button>
        </div>
        <div className="box w-[596px] h-[636px] ml-[940px] mt-[-635px] rounded-[10px]">
          <div className="scaleee ">
          <p className='text-[40px] py-[40px] ml-10 font-bold  '>“ First Light promises <br /> quality, timeless designs <br /> and with our mission it is <br /> truly a buy it for life <br /> purchase. “</p>
          <p className='ml-10 mt-[170px] text-xl '>— Guera Latissa, Creative Director</p>
          </div>
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
        <img src={up} alt="" className=' px-[5px]' />
      </div>
      <div className="">
        <div className=" w-full h-[54px] "></div>
        <div className="text-[40px] flex justify-center font-bold">
          <p>Hot off the press</p>
        </div>
        <div className="ml-[500px] w-[900px] h-[270px] flex border-[2px] rounded-[10px] solid black;">
          <div className='border-r-2 ml-11 mt-11 mb-[10px] '>
            <img src={vector} alt="" />
            <p className="mt-6 w-[250px] h-[200px]">“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
            <p className='mt-[-80px] text2'>Read article</p>
            <img src={upp} alt="" className='flex mt-[-20px] ml-[80px]' />
          </div>
          <div className="ml-11 mt-11 mb-[10px] border-r-2">
            <img src={vector_2} alt="" />
            <p className='mt-6 w-[250px] h-[200px]'>“First light proves it is possible to combine great design with the finest materials available.”</p>
            <p className='mt-[-70px] text2'>Read article</p>
            <img src={upp} alt="" className='flex mt-[-20px] ml-[80px]' />
          </div>
          <div className="ml-11 mt-11">
            <img src={vector_3} alt="" />
            <p className='mt-6 w-[250px] h-[200px]'>“Redefining excellence with premium materials and visionary robust design.”</p>
            <p className='mt-[-70px] text2'>Read article</p>
            <img src={upp} alt="" className='flex mt-[-20px] ml-[80px]' />
          </div>
        </div>
      </div>
      <div className="">
        <p className='mt-9 text-[40px] font-bold items-center justify-center flex'>Women — Must Haves</p>
        <div className="mt-11 items-center flex justify-center gap-8">
          <img src={but} alt="" className='scalee' />
          <div className="">
            <div className="men w-[320px] h-[420px] scale rounded-[10px] "><img src={model} alt="" /></div>
            <div className="flex justify-between mt-6">
              <p>Basic Shirt</p>
              <p>€49</p>
            </div>
          </div>
          <div className="">
            <div className="men w-[320px] h-[420px] scale rounded-[10px] "><img src={model2} alt="" /></div>
            <div className="flex justify-between mt-6 ">
              <p>Beige Jumper</p>
              <p>€99</p>
            </div>
          </div>
          <div className="">
            <div className="men w-[320px] h-[420px] scale rounded-[10px] "><img src={model3} alt="" /></div>
            <div className="flex justify-between mt-6">
              <p>Signature Jacket</p>
              <p>€249</p>
            </div>
          </div>
          <div className="">
            <div className="men w-[320px] h-[420px] scale rounded-[10px] "><img src={model4} alt="" /></div>
            <div className="flex justify-between mt-6">
              <p>Navy Jumper</p>
              <p>€49</p>
            </div>
          </div>
          <img src={but2} className='scalee' alt="" />
        </div>
      </div>
      <div className="relative">
        <p className='flex justify-center items-center mt-6 text-[40px]'>We always have your back</p>
        <img src={frame1} alt="" className='mt-[20px] ml-[340px]' />
        <button className='scale bg-black text-white absolute px-4 py-2 left-10 bottom-3 ml-[450px] rounded-[10px]'>100% Premium Cotton <br /> We use ethically sourced cotton only.</button>
        <button className='scale bg-black text-white absolute px-4 py-2 left-10 bottom-[343px] ml-[1100px] rounded-[10px]'>Made in Portugal <br />With hand finished details </button>
        <button className='scale bg-black text-white absolute px-4 py-2 left-10 bottom-3 ml-[1070px] rounded-[10px]'>Breathable material<br />Keeping you cool throughout the day</button>
      </div>
      <div className="flex justify-between border-b-2 mt-10 ml-[340px] border-t-2 w-[1216px] h-16 ">
        <div className="flex">
          <img src={frame4} alt="" />
          <p className='mt-2 ml-4'>Premium stain <br /> resistant fabrics</p>
        </div>
        <div className="flex">
          <img src={frame5} alt="" />
          <p className='mt-2 ml-4'>Free Express  <br /> Shipping</p>
        </div>
        <div className="flex">
          <img src={frame6} alt="" />
          <p className='mt-2 ml-4'>Free returns  <br /> within 30 days</p>
        </div>
        <div className="flex">
          <img src={frame7} alt="" />
          <p className='mt-2 ml-4'>Customers rate<br />  us 4.8 / 5.0</p>
        </div>
      </div>
      <div className="flex items-center">
        <img src={frame8} alt="" className='mt-10 ml-[340px] rounded-l-md' />
        <div className="-mt-10">
          <div className="bg-white h-[610px] w-[608px]  rounded-r-md mt-10">
            <div className="ml-12">
              <p className='text-[32px] py-16 mt-20'>Visit our popup shop</p>
              <p className='-mt-3'>Willemsparkweg 63 <br /> 1071 GS Amsterdam <br /> The Netherlands</p>
              <div className="mt-7 flex">
                <div className="">
                  <p className='h-[100px] w-[102px] leading-10 text-[16px]'>Monday Tuesday Wednesday Thursday Friday Saturday Sunday</p>
                </div>
                <div className="">
                  <p className='h-[10px] w-[100px] ml-28 leading-10 text-[16px]'>12.00 - 19.00 10.00 - 19.00 10.00 - 19.00 10.00 - 21.00 10.00 - 19.00 10.00 - 18.00 12.00 - 18.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="color w-full h-9 mt-10"></div>
    </div>
  );
}

export default App;
