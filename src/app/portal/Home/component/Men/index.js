import constants from "../../constants";
import Mencategory from "./Mencategory";

const Men = () => {
  return (
    <>
      <div className="constants">
        <div classname="row row-cols-1 row-cols-md-2 g-2">
          {constants.mencate.map((m_item) => (
            <Mencategory id={m_item.id} image={m_item.img} name={m_item.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Men;
