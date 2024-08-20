import "./collage.css";

//images:
import chef from "../../../assets/images/chef.jpg";
import baker from "../../../assets/images/baker.jpg";
import ballet from "../../../assets/images/ballet.jpg";
import food from "../../../assets/images/food.jpg";
import guitar from "../../../assets/images/guitar.jpg";
import meditation from "../../../assets/images/meditation.jpg";
import piano from "../../../assets/images/piano.jpg";
import pool from "../../../assets/images/pool.jpg";
import singer from "../../../assets/images/singer.jpg";

const images = () => {
  return <></>;
};

export const Collage = () => {
  return (
    <>
      <section className="images-container">

        <div>
          <img className="hover images-collage" src={chef} alt="chef" />
        </div>

        <div>
          <img className="hover images-collage" id="baker" src={baker} alt="baker" /> <br />
          <img className="hover images-collage space-center" src={ballet} alt="ballet" />
        </div>

        <div>
          <img className="hover images-collage space-top" src={food} alt="food" /> <br />
          <img className="hover images-collage space-center" src={guitar} alt="guitar" />
        </div>

        <div>
          <img className="hover images-collage" src={meditation} alt="meditation" /> <br />
          <img className="hover images-collage space-center" src={piano} alt="piano" />
        </div>

        <div>
          <img className="hover images-collage space-top" src={pool} alt="pool" /> <br />
          <img className="hover images-collage space-center" id="singer" src={singer} alt="singer" />
        </div>

      </section>
    </>
  );
};
