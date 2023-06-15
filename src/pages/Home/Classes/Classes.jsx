import { useEffect, useState } from "react";


const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div >
            <h1 className="text-center text-4xl font-bold my-3 text-indigo-950">All Classes</h1>
            <div className='grid grid-cols-3 mx-10 bg-indigo-50 text-white'>

                {
                    classes.map(cls => <div className=" m-6"
                        key={cls.id}>
                        <div className="card w-90 h-96 bg-indigo-300 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={cls.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Class : {cls.name}</h2>
                                <p className="text-xl">Instructor : {cls.instructor}</p>
                                <p className="text-xl">Available Seats : {cls.availableSeats}</p>
                                <p className="text-xl">Price : {cls.price}</p>
                                
                            </div>
                        </div>
                    </div>
            )
        }
        </div>
        </div >
    );
};

export default Classes;