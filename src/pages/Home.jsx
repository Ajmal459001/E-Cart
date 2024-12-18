// rafce
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {
  const {allProducts,loading,errorMsg} = useSelector(state=>state.productReducer)
  console.log(allProducts,loading,errorMsg);  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto  '>
      {
        loading?
        <div className="flex justify-center items-center my-5 text-lg">
          <img width={'70px'} height={'70px'} className='me-3' src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="" />
          Loading...
        </div>
        :
        <>
        <div className="grid grid-cols-4 gap-4">
          {
            allProducts?.length>0?
            allProducts?.map(product=>(
              <div className="rounded border p-2 shadow">
                <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">{product?.title}</h3>
                  <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
                </div>
              </div>
            ))
          :
          <div className="flex justify-center items-center text-red-600 my-5 text-lg">
            Product Not Found!!!
         </div>
          }
        </div>
      </>
      }
    </div>
   </>
  )
}

export default Home