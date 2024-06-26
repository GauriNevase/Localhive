import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { Button, Checkbox, Radio } from 'antd';
import { Prices } from '../components/Prices';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import toast from 'react-hot-toast';
import "../components/styles/Homepage.css";

const HomePage = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total,setTotal]=useState(0);
  const [page,setPage]=useState(1);
  const navigate =useNavigate();
  const [cart,setCart]=useCart()

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`);
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.error(error);

    }
  };

  //filter by category
  const handleFilter = (value, id) => {
    let all = [...checked]
    if (value) {
      all.push(id)
    } else {
      all = all.filter(c => c !== id)
    }
    setChecked(all)
  };

  //get total count
  const getTotal=async()=>{
    try {
      const {data}=await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-count`)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    if (!checked.length || !radio.length) getAllProducts();
    //eslint-disable-next=line
  }, [checked.length, radio.length])

  useEffect(() => {
    
    if (checked.length || radio.length) filterProduct()
  }, [checked, radio]);

  //get filtered product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filters`, { checked, radio })
      setProducts(data?.products)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout title={"All Products-Best Offers"}>
      <div className="row mt-3">
        <div className="col-md-2">

          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map(c => (
              <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={e => setRadio(e.target.value)}>
              {Prices?.map(p => (
                <div key={p.id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>

              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button className='btn btn-danger ms-1' onClick={()=>window.location.reload()}>Reset Filters</button>
          </div>

        </div>
        <div className="col-md-9">
        
        <h1 className="text-center">All Products</h1>
        <div className="d-flex flex-wrap">
          {products?.map((p) => (
            <div className="card m-2" style={{ width: "20rem" }} key={p._id}>
              <img
                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
                style={{height:"18rem"}}
              />
              <div className="card-body" >
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}</p>
                <p className="card-text">₹ {p.price}</p>
                <div>
                  <button className="btn btn-primary ms-1"
                  onClick={()=>navigate(`/product/${p.slug}`)}>More Details</button><br></br><br></br>
                  <button className="btn btn-secondary ms-1" onClick={()=>{setCart([...cart,p]);
                  toast.success("Item added to cart");
                  }}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
