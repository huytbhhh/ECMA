import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';


export const Asm1  = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/products');
          setProducts(response.data);
        } catch (err) {
          setError('Error fetching data from API');
        }
      };
      fetchProducts();
    }, []);
  
    const deleteProduct = (id) => {
      try {
        setProducts(products.filter(product => product.id !== id));
        alert('Product deleted successfully');
      } catch (err) {
        alert('Error deleting product');
      }
    };
  
    return (
      <>
      <div style={{...styles.ok,marginBottom:"20px",gap:""}}>
      <a href="http://localhost:5173/lab3" style={{ ...styles.image, padding: '10px',marginRight:"30px", color:"black",background:"#00a67d" }}> chuyển đến Trang Detail của lab3</a>
       <a href="http://localhost:5173/lab4" style={{ ...styles.image, padding: '10px',marginRight:"30px", color:"black",background:"#00a67d" }}> chuyển đến Trang Detail của lab4</a>
      </div>
      <Header/>
       
      <div style={styles.container}>
        
        {error && <div style={styles.error}>{error}</div>}
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <div style={styles.details}>
              <h2 style={styles.title}>{product.title}</h2>
              <p style={styles.price}>${product.price}</p>
              <p style={styles.description}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer/>
      
      </>
    );
  };
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      padding: '20px',
    },
    card: {
      width: '300px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      margin: '10px',
      overflow: 'hidden',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    image: {
    width: '100%',
       height: 'auto',
     },
     details: {
       padding: '15px',
     },
     title: {
       fontSize: '18px',
       fontWeight: 'bold',
       margin: '0 0 10px 0',
     },
     price: {
       fontSize: '16px',
       color: '#555',
       margin: '0 0 10px 0',
     },
     description: {
       fontSize: '14px',
       color: '#777',
       margin: '0 0 15px 0',
     },
     button: {
       padding: '10px 20px',
       fontSize: '14px',
       color: '#fff',
       backgroundColor: '#f44336',
       border: 'none',
       borderRadius: '5px',
       cursor: 'pointer',
     },
     error: {
       color: 'red',
       fontWeight: 'bold',
       marginBottom: '20px',
     },
   };
  
