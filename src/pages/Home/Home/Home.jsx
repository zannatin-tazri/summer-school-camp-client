import PopularInstructor from "./Popular-instructor/PopularInstructor";
import PopularClassesSection from "./popular-classes-section/PopularClassesSection";


const Home = () => {
    return (
        <div className=" bg-indigo-50 mx-20 my-4 pt-4 pb-5 ">
            <PopularClassesSection></PopularClassesSection>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;