import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import Footer from "./Components/Footer"

let section_data = [
    {
      title: "Skills",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, fuga, labore impedit ducimus illo vitae quibusdam suscipit corrupti culpa corporis excepturi consequatur at distinctio dolorem? Accusantium quia eaque nulla natus dignissimos ipsum placeat molestias doloremque assumenda modi, reprehendedipisci accusamus mollitia! Distinctio, odit, nesciunt, ullam commodi cum sequi quo dolores repellat voluptates esse ducimus.rit explicabo voluptate hic nam vel, corporis facere fuga consequatur distinctio maiores. Temporibus modi sint nobis dolorum consequatur exercitationem blanditiis cumque id praesentium laborum similique corrupti vitae iure quibusdam distinctio deleniti odit earum."
    },

    {
        title: "Experience",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, fuga, labore impedit ducimus illo vitae quibusdam suscipit corrupti culpa corporis excepturi consequatur at distinctio dolorem? Accusantium quia eaque nulla natus dignissimos ipsum placeat molestias doloremque assumenda modi, reprehendedipisci accusamus mollitia! Distinctio, odit, nesciunt, ullam commodi cum sequi quo dolores repellat voluptates esse ducimus.rit explicabo voluptate hic nam vel, corporis facere fuga consequatur distinctio maiores. Temporibus modi sint nobis dolorum consequatur exercitationem blanditiis cumque id praesentium laborum similique corrupti vitae iure quibusdam distinctio deleniti odit earum."
    },

    {
        title: "Education",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, fuga, labore impedit ducimus illo vitae quibusdam suscipit corrupti culpa corporis excepturi consequatur at distinctio dolorem? Accusantium quia eaque nulla natus dignissimos ipsum placeat molestias doloremque assumenda modi, reprehendedipisci accusamus mollitia! Distinctio, odit, nesciunt, ullam commodi cum sequi quo dolores repellat voluptates esse ducimus.rit explicabo voluptate hic nam vel, corporis facere fuga consequatur distinctio maiores. Temporibus modi sint nobis dolorum consequatur exercitationem blanditiis cumque id praesentium laborum similique corrupti vitae iure quibusdam distinctio deleniti odit earum."
    } 

  ]
  

const App = () => {

    return(
        <div>
            <Navbar />
            <About />

            {
                section_data.map((value, index) => (
                    <Section
                      title={value.title}
                      description={value.description}
                      />
                ))
            }

            <Footer />


            
        </div>  
    );
}

export default App;