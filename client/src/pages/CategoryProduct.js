import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../components/styles/CategoryProductStyles.css";
import toast from 'react-hot-toast';
import { useCart } from '../context/cart';

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart,setCart]=useCart()

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} Result Found </h6>
        <div className="row">
          <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div
                  className="card m-2"
                  style={{ width: "18rem" }}
                  key={p._id}
                >
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}` }
                    className="card-img-top"
                    alt={p.name}
                    style={{height: "18rem"}}
                  />
                  <div className="card-body" style={{height:"18rem"}}>
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text" style={{height:"4rem"}}>
                      {p.description}...
                    </p>
                    <p className="card-text">₹ {p.price}</p>
                    <button
                      className="addtocart"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button><br></br><br></br>
                    <button className="addtocart" onClick={()=>{setCart([...cart,p]);
                  toast.success("Item added to cart");
                  }}>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;