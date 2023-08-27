import art1 from '../../../../../public/ba1.jpg';
import art2 from '../../../../../public/ba2.jpg';
import art3 from '../../../../../public/ba3.jpg';
import art4 from '../../../../../public/ba4.jpg';
import art5 from '../../../../../public/ba5.jpg';
import art6 from '../../../../../public/ba6.jpg';
import art7 from '../../../../../public/ba7.jpg';
import art8 from '../../../../../public/ba8.jpg';
import art9 from '../../../../../public/ba9.jpg';
import { motion } from 'framer-motion';

const BestArt = () => {
    return (
        <div className='m-12'>
            <hr />
            <h1 className='font-bold text-6xl text-center mb-10 mt-8 text-indigo-900'>Best Paintings of Our Instructors</h1>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
            <motion.div animate={{ rotate: 180 }}transition={{ repeat: 3, duration: 3 }}><img className='w-72 h-80 rounded-2xl' src={art1} alt="" /></motion.div>
            <motion.div animate={{ rotate: 180 }}transition={{ repeat: 3, duration: 4 }}><img className='w-72 h-80 rounded-2xl' src={art2} alt="" /></motion.div>
            <motion.div animate={{ rotate: 180 }}transition={{ repeat: 3, duration: 3 }}><img className='w-72 h-80 rounded-2xl' src={art3} alt="" /></motion.div>
            <motion.div animate={{ rotate: 180 }}transition={{ repeat: 3, duration: 4 }}><img className='w-72 h-80 rounded-2xl' src={art4} alt="" /></motion.div>
            <motion.div animate={{ rotate: 180 }}transition={{ repeat: 3, duration: 3 }}><img className='w-72 h-80 rounded-2xl' src={art5} alt="" /></motion.div>
            <motion.div animate={{ rotate: 180 }}transition={{ repeat: 3, duration: 4 }}><img className='w-72 h-80 rounded-2xl' src={art6} alt="" /></motion.div>
            <motion.div animate={{ rotate: 180 }}transition={{ repeat: 3, duration: 3 }}><img className='w-72 h-80 rounded-2xl' src={art7} alt="" /></motion.div>
            <motion.div animate={{ rotate: 180 }}transition={{ repeat: 3, duration: 4 }}><img className='w-72 h-80 rounded-2xl' src={art8} alt="" /></motion.div>
            <motion.div animate={{ rotate: 180 }}transition={{ repeat: 3, duration: 3 }}><img className='w-72 h-80 rounded-2xl' src={art9} alt="" /></motion.div>
            
         </div>
            
        </div>
    );
};

export default BestArt;