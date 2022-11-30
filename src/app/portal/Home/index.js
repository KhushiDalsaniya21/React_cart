import CardContainer from "./component/Cards";
import constants from "./constants";
import Sidenav from "./component/Sidenav/Sidenav";
import Slider from "./component/Slider";

const HomeContainer = () => {
  return (
    <>
      <Slider />
      <div className="constants">
        <div className="row row-cols-1 row-cols-md-2 g-2">
          {constants.category.map((c) => (
            <CardContainer id={c.id} image={c.img} name={c.name} />
          ))}
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          {constants.product.map((item) => (
            <Sidenav
              id={item.id}
              image={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
