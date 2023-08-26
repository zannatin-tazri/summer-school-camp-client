import slider01 from '../../../../../public/slider1.jpg'
import slider02 from '../../../../../public/slider2.jpg'
import slider03 from '../../../../../public/slider3.jpg'
import slider04 from '../../../../../public/slider4.jpg'
const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-96">
  <div id="item1" className="carousel-item w-full p-16">
    <div className='flex items-center '>
        <p className='text-2xl text-indigo-950 font-semibold'>Art is the lie that enables us to realize the truth. <br /> - Pablo Picasso</p>
    </div>
    <img  src={slider01} className="w-96 h-full rounded-lg ms-6" />
  </div> 
  <div id="item1" className="carousel-item w-full p-16">
    <div className='flex items-center '>
        <p className='text-2xl text-indigo-950 font-semibold'>Art is the lie that enables us to realize the truth. <br /> - Pablo Picasso</p>
    </div>
    <img  src={slider02} className="w-96 h-full rounded-lg ms-6" />
  </div> 
  <div id="item1" className="carousel-item w-full p-16">
    <div className='flex items-center '>
        <p className='text-2xl text-indigo-950 font-semibold'>Art is the lie that enables us to realize the truth. <br /> - Pablo Picasso</p>
    </div>
    <img  src={slider03} className="w-96 h-full rounded-lg ms-6" />
  </div> 
  <div id="item1" className="carousel-item w-full p-16">
    <div className='flex items-center '>
        <p className='text-2xl text-indigo-950 font-semibold'>Art is the lie that enables us to realize the truth. <br /> - Pablo Picasso</p>
    </div>
    <img  src={slider04} className="w-96 h-full rounded-lg ms-6" />
  </div> 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
            
        </div>
    );
};

export default Slider;