import { useEffect, useState } from "react";


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div >
            <h1 className="text-center text-4xl font-bold my-3 text-indigo-950">Our Instructors</h1>
            <div className='grid grid-cols-3 mx-10 bg-indigo-50'>

                {
                    instructors.map(instructor => <div className=" m-6"
                        key={instructor.id}>
                        <div className="card w-90 bg-indigo-300 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={instructor.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{instructor.name}</h2>
                                <p>{instructor.email}</p>
                                
                            </div>
                        </div>
                    </div>
            )
        }
        </div>
        </div >
    );
};

export default Instructors;