import img1 from '../../../../../public/img1.jpg'
import img2 from '../../../../../public/img2.jpg'
import img3 from '../../../../../public/img3.jpg'
import img4 from '../../../../../public/img4.jpg'
import img5 from '../../../../../public/img5.jpg'
import img6 from '../../../../../public/img6.jpg'

const PopularClassesSection = () => {
    return (
        <div className='mx-8 my-4 px-10'>
            <h1 className='font-bold text-6xl text-center mb-10 mt-8'>Popular Classes</h1>

            <div className="grid grid-cols-3 mx-auto gap-10">

                
                    <div className="card w-80 bg-base-100 shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Mastering the Brush: Techniques in Painting</h2>
                            <p>Students : 100</p>
                        </div>
                        <figure><img src={img6} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-80  bg-base-100 shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Sculpting Dimensions: Exploring Three-Dimensional Art</h2>
                            <p>Students : 80</p>
                        </div>
                        <figure><img src={img1} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-80  bg-base-100 shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">The Art of Expression: Mixed Media and Collage</h2>
                            <p>Students : 70</p>
                        </div>
                        <figure><img src={img2} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-80  bg-base-100 shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Capturing Light: Introduction to Photography</h2>
                            <p>Students : 65</p>
                        </div>
                        <figure><img src={img3} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Creative Pottery: Handbuilding and Wheel Throwing</h2>
                            <p>Students : 60</p>
                        </div>
                        <figure><img src={img4} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">From Sketch to Masterpiece: Drawing Fundamentals</h2>
                            <p>Students : 58</p>
                        </div>
                        <figure><img src={img5} alt="Shoes" /></figure>
                    </div>
               
                

                



            </div>

        </div>
    );
};

export default PopularClassesSection;