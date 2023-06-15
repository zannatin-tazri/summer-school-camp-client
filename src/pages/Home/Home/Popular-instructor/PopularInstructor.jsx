import instructor1 from '../../../../../public/ins1.jpg'
import instructor2 from '../../../../../public/ins2.jpg'
import instructor3 from '../../../../../public/ins3.jpg'
import instructor4 from '../../../../../public/ins4.jpg'
import instructor5 from '../../../../../public/ins5.jpg'
import instructor6 from '../../../../../public/ins6.jpg'

const PopularInstructor = () => {
    return (
        <div className='mx-8 my-4 px-10 mb-12 rounded py-8'>
            <hr className='border-indigo-800' />
            
            <h1 className='font-bold text-6xl text-center mb-10 mt-8 text-indigo-900'>Popular Instructor</h1>

            <div className="lg:grid grid-cols-3 sm:grid-rows-1 mx-auto gap-10 text-white ">

                
                    <div className="card w-80 bg-indigo-300 shadow-xl">
                        <div className="card-body">
                            
                            <p className='card-title'>Number of Students in class : 800</p>
                        </div  >
                        <figure className='p-4' ><img className='rounded-xl' src={instructor1} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-80  bg-indigo-300 shadow-xl">
                        <div className="card-body">
                        <p className='card-title'>Number of Students in Class : 700</p>
                        </div>
                        <figure className='p-4'><img className='rounded-xl' src={instructor2} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-80  bg-indigo-300 shadow-xl">
                        <div className="card-body">
                        <p className='card-title'>Number of Students in Class : 680</p>
                        </div>
                        <figure className='p-4'><img className='rounded-xl' src={instructor3} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-80  bg-indigo-300 shadow-xl">
                        <div className="card-body">
                        <p className='card-title'>Number of Students in Class : 650</p>
                        </div>
                        <figure className='p-4'><img className='rounded-xl' src={instructor4} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-80 bg-indigo-300 shadow-xl">
                        <div className="card-body">
                        <p className='card-title'>Number of Students in Class : 640</p>
                        </div>
                        <figure className='p-4'><img className='rounded-xl' src={instructor5} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-80 bg-indigo-300 shadow-xl">
                        <div className="card-body">
                        <p className='card-title'>Number of Students in Class : 600</p>
                        </div>
                        <figure className='p-4'><img className='rounded-xl' src={instructor6} alt="Shoes" /></figure>
                    </div>
               
                

                



            </div>

        </div>
    );
};

export default PopularInstructor;