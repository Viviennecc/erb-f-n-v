import { tours } from "../../data";
import Tour from "./Tour";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section tours" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="tour-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
