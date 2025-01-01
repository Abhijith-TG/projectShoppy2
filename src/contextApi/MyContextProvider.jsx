import React,{useState,useEffect,createContext} from 'react'

export const MyContext = createContext();


export default function MyContextProvider({children}) {
    const api = 'https://dummyjson.com/products';

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        try{
            const res = await fetch(api);
            const data = await res.json();
            setProducts(data);

        }catch(e){
            console.log(e);
            
        }
    }


  return (
    <MyContext.Provider value={{products,setProducts}}>
        {children}
    </MyContext.Provider>
  )
}
