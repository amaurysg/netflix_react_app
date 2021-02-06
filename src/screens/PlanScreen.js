import React, {useState, useEffect} from 'react'
import './PlanScreen.css'
import {useSelector} from 'react-redux'
import {selectUser} from '../features/userSlice'
import db from '../firebase'
import {loadStripe} from '@stripe/stripe-js'


const PlanScreen = () => {

const [products, setProducts] = useState([])
const user = useSelector(selectUser)

useEffect(() => {
  db.collection('products')
  .where('active', '==', true)
  .get()
  .then( (querySnapShot) => {
    const products = {}
    querySnapShot.forEach( async (productDoc) =>{
      products[productDoc.id] = productDoc.data()
      const pricesSnap = await productDoc.ref.collection('prices').get()
      pricesSnap.docs.forEach(price =>{
        products[productDoc.id].prices ={
          priceId: price.id,
          priceData: price.data()
        }
      })
    })
    setProducts(products)
  })
  
}, [])

console.log(products)

const loadCheckout = async (priceId) =>{
  const docRef = await db.collection('customers')
  .doc(user.uid).collection('checkout_sessions')
  .add({
    price: priceId,
    success_url : window.location.origin,
    cancel_url: window.location.origin
  })

  docRef.onSnapshot(async(snap)=>{
      const {error, sessionId} = snap.data()
      if (error){
        alert(`An error ocurred:${error.message}`)
      }
      if(sessionId){
        //We hava a session, let's redirect to checkout
        //Init Stripe
        const stripe = await loadStripe("pk_test_51IHuCvEzfjBSqwSYDMM7u4Tu3h29EnJvS4RhpG7Ba6Q50dpVzrkKySvba9WZWBLJpJ6Qe05bpE3Gg1JdOuXIMxXz00kQAno4El")
        stripe.redirectToCheckout({sessionId})

      }
  })

}



  return (
    <div className="planScreen">
      { Object.entries(products).map(([productId, productData])=>{
        //ass some logic to check if user is subscription is active 
        return (
          <div className="planScreen__plan">
            <div className="planScreen__info">
             <h5> {productData.name}</h5>
             <h6>{productData.description} </h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>    Subscribe </button>
          </div>
        )
      })}
    </div>
  )
}

export default PlanScreen
