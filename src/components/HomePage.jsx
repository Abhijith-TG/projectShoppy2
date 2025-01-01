import React,{useContext,useState,useEffect} from 'react'
import Header from '../smallComp/Header'
import Footer from '../smallComp/Footer'
import { MyContext } from '../contextApi/MyContextProvider'


export default function HomePage() {
  const [items,setItems] = useState([]);
  const {products} = useContext(MyContext);
  console.log(products);
  useEffect(()=>{
    setItems(products.products)
  },[products])

  


  return (
    <div style={{
      background:'#eee'
    }} >
        <Header/>
        <div className='imgDiv1' >
          <div className='imgDiv' >
            <h1 style={{
              width:'550px',
              padding:'50px',
              paddingBottom:'10px',
              color:'white',
              fontSize:'45px',
              fontWeight:'bold',
              marginBottom:'0'
            }} >Unwind The Beauty of Shopping in Shoppy!</h1>
            <p
            style={{
              width:'550px',
              paddingLeft:'50px',
              color:'#ffa',
            }}>Find the beauty of shopping, find your perfect matching gloceries here. Be a change is our moto, spread the happiness of LOVE</p>
          </div>
        </div>



        <div className='products' >
            {
              items &&
              items.map((product,id)=>{
                return <div className='pro' key={id} >
                  <img width={200} height={200} src={product.images[0]} alt="" />
                  <p>{product.title}</p>
                </div>
              })
            }
        </div>
        <Footer/>
    </div>
  )
}
