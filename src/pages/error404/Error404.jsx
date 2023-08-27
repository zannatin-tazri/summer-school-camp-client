import { Link } from 'react-router-dom';
import error from '../../../public/404.jpg' 
const Error404 = () => {
    return (
        <div>
           <Link to="/"><img src={error} alt="" /></Link> 
        </div>
    );
};

export default Error404;