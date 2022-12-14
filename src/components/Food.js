import React, { useState, useEffect } from "react";
import { foodApi } from "../Api";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/ProductSlice";
function Food(props) {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch()

  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(8);
  const [filteredData, setFilteredData] = useState([])
  ;
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    foodApi
      .then((res) => {
        setData(res.data.food);
        setFilteredData(res.data.food)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loadMore = () => {
    setVisible(visible + 4);
  };
  // filter type
  const filterFood = (type) => {
    if(type === 'all'){
      return setFilteredData(data)
    }else{
   return  setFilteredData(data.filter((item) => item.category === type));
    }
    console.log(setFilteredData);
    console.log(type);

  };
  const filterPrice = (price) => {
    setData(data.filter((item) => item.price == price));
  };
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-12">
      <div>
        <h1 className="text-orange-600 font-bold text-center text-4xl">
          Top Rated Menu Items
        </h1>
        {/* filter row */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* filter type */}

          <div>
            <p className="font-bold text-gray-700">Filter type</p>
            <div className="flex justify-between flex-wrap">
              <button
                onClick={() => filterFood('all')}
                className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                All
              </button>
              <button
                onClick={() => filterFood("salad")}
                className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Salad
              </button>
              <button
                onClick={() => filterFood("burger")}
                className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Burger
              </button>
              <button
                onClick={() => filterFood("pizza")}
                className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Pizza
              </button>
              <button
                onClick={() => filterFood("chicken")}
                className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Chicken
              </button>
            </div>
          </div>

          {/* filter price */}
          <div>
            <p className="font-bold text-gray-700">Filter Price</p>
            <div className="flex justify-between max-w-[390px] w-full">
              <button className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white">
                $
              </button>
              <button className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white">
                $$
              </button>
              <button className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white">
                $$$
              </button>
              <button className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white">
                $$$$
              </button>
            </div>
          </div>
        </div>
        {/* displaying foods */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData?.slice(0, visible).map((item, index) => (
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300 realtive"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <span className="bg-orange-600 p-1 text-white rounded-lg">
                  {item.priceNum} $
                </span>
              </div>
              <div className="absoltue top-100 left-0">
                <button
                  className=" m-2 border-none bg-orange-600 text-white font-bold text-md hover:bg-white hover:text-orange-600"
                  onClick={() => dispatch(addToCart(item))}
                >
                  {" "}
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
         
        </div>
        {visible < data.length && (
            <div className="flex justify-center items-centerblock content-center mt-8 ">
            <button
              className="bg-orange-600  text-white border-none "
              onClick={loadMore}
            >
              Loadmore
            </button>
            </div>
          )}
      </div>
    </div>
  );
}
export default Food;
