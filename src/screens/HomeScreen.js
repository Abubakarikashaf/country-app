import React from 'react'
import product from "../datasource/product"
import productscreem from './productscreem'
function HomeScreen() {
  return (
    <div className='products'>
    <div classname="firsttrow">
    <div classname="cards">
    <h2>Quality iphones</h2>
    <img src="/images/pic(1).jpg" alt="" />
            </div>

       </div>
     <div>
     style={{
        dsiplay: "grid",
        gridtempletecolums:"1fr 1fr 1fr 1fr",
        maxwidth: "90%",
        margin: "20px auto",
        
     }}
    { products.map((product) => (
<div>
 style={{
    dsiplay: "flex",
    justifycontent: "center",
    flexDirection: "column",
    border: "1px solid #dedede",
    margin: "10ox",
    padding: "10px",
 }}
 
 <img src={product.image} height alt="230px" />
 <h5>{product.name}</h5>
 <h5>GH¢{product.price.toFixed(2)}</h5>

</div>
  ))}
    
     </div>
    </div>
  )
}

export default HomeScreen
