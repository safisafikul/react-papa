import React from 'react'
import Product from './comp/Product'
import styles from './App.module.css'


function App() {
  return (
    <div>
      <h1>Larning Props!</h1>
      <h2 className={styles.error}>An error occurred</h2>

      <Product
        name="Amazon eco"
        description="your AI assit."
        price={59.99}
      />
      
      <Product
        name="Google Home"
        description="your AI assit."
        price={59.99}
      />

      <Product
        name="Apple homepage"
        description="your AI assit."
        price={59.99}
      />
      
    </div>
  );
}

export default App;
