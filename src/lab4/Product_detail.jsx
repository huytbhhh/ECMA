import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';


const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const productId = 1; 
  
    useEffect(() => {
      async function fetchProductDetail() {
        try {
          const response = await fetch(`http://localhost:3000/products/${productId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product');
          }
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product detail:', error);
        }
      }
  
      fetchProductDetail();
    }, [productId]);
  
    const handleBuyNow = () => {

      console.log('Buy now clicked');
    };
  
    if (!product) {
      return <div>Loading...</div>;
    }
  
    return (
        <>
        <div style={{...styles.ok,marginBottom:"20px",gap:""}}>
      <a href="http://localhost:5173/lab3" style={{ ...styles.image, padding: '10px',marginRight:"30px", color:"black",background:"#00a67d" }}> chuyển đến Trang product của lab3</a>
       <a href="http://localhost:5173/" style={{ ...styles.image, padding: '10px',marginRight:"30px", color:"black",background:"#00a67d" }}> chuyển đến Trang asm1 </a>
      </div>
        <Header/>
      <div className={styles.productDetail}>
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} style={{ ...styles.image, width: '70px', height: '70px' }} />
        </div>
        <div className={styles.details}>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
        <button style={{ ...styles.image, width: '70px', height: '70px',color:"black",background:"red" }} onClick={handleBuyNow}>Buy Now</button>
        
      </div>

        
      <Footer/>
      
    </>
    );
  }
  

export default ProductDetail;

const styles = {
    productDetail: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
    },
    title: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    imageContainer: {
      textAlign: 'center',
    },
    image: {
      Width: '50px',
      height: 'auto',
      borderRadius: '8px',
      marginBottom: '20px',
    },
    details: {
      fontSize: '16px',
      marginBottom: '20px',
    },
    buyButton: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: '10px 20px',
      fontSize: '18px',
      cursor: 'pointer',
    },
    buyButtonHover: {
      backgroundColor: '#0056b3',
    },
  };
