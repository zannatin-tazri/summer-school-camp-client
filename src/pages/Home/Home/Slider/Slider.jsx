import slider01 from '../../../../../public/slider1.jpg'
import slider02 from '../../../../../public/slider2.jpg'
import slider03 from '../../../../../public/slider3.jpg'
import slider04 from '../../../../../public/slider4.jpg'
const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-96">


  <div id="item1" className="carousel-item w-full p-12">
    <div className='flex items-center '>
        <p className='mx-4 text-2xl text-indigo-950 font-semibold '>Art is the lie that enables us to realize the truth. <br /> - Pablo Picasso</p>
    </div>
    <img  src={slider01} className="w-96 h-full rounded-lg ms-4" />
  </div> 


  <div id="item2" className="carousel-item w-full p-12">
    <div className='flex items-center'>
        <p className=' text-2xl text-indigo-950 font-semibold'>Every artist dips his brush in his own soul, and paints his <br /> own nature into his pictures. <br /> - Henry Ward Beecher</p>
    </div>
    <img  src={slider02} className="w-96 h-full rounded-lg ms-4" />
  </div> 


  <div id="item3" className="carousel-item w-full p-16">
    <div className='mx-4 flex items-center '>
        <p className='text-2xl text-indigo-950 font-semibold'>Art enables us to find ourselves and lose ourselves <br /> at the same time. <br /> - Thomas Merton</p>
    </div>
    <img  src={slider03} className="w-80 h-full rounded-lg ms-4" />
  </div> 

  
  <div id="item4" className="mx-4 carousel-item w-full p-16">
    <div className='flex items-center '>
        <p className='text-2xl text-indigo-950 font-semibold'>The purpose of art is washing the dust of daily <br /> life off our souls. <br /> - Pablo Picasso</p>
    </div>
    <img  src={slider04} className="w-96 h-full rounded-lg ms-6" />
  </div> 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-outline btn-info">1</a> 
  <a href="#item2" className="btn btn-outline btn-info">2</a> 
  <a href="#item3" className="btn btn-outline btn-info">3</a> 
  <a href="#item4" className="btn btn-outline btn-info">4</a>
</div>
            
        </div>
    );
};

export default Slider;