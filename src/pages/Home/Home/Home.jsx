
import PopularInstructor from "./Popular-instructor/PopularInstructor";
import Slider from "./Slider/Slider";
import BestArt from "./best art/BestArt";
import PopularClassesSection from "./popular-classes-section/PopularClassesSection";


const Home = () => {
    return (
        <div className=" bg-indigo-50 mx-20 my-4 pt-4 pb-5 ">
            <Slider></Slider>
            <PopularClassesSection></PopularClassesSection>
            <PopularInstructor></PopularInstructor>
            <BestArt></BestArt>
        </div>
    );
};

export default Home;