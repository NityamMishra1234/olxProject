import { useState } from 'react'
import React from 'react'

import Header from './components/Header'
import CategoryBanner from './components/CategoryBanner'
import PropertyDetailsForm from './components/PropertyDetailsForm'
import PriceSection from './components/PriceSection'
import PhotoUploader from './components/PhotoUploader'
import LocationSelector from './components/LocationSelector'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <p className="bg-white text-gray-900">hello world!!!!</p> */}
   <Header/>
   <h2 className="text-black font-bold text-center mt-8 text-3xl mb-8">POST YOUR ADD</h2>
   <CategoryBanner/>
   <div className="w-1/2 mx-auto border border-gray-300 ">
      
      <PropertyDetailsForm />
    </div>
    <PriceSection/>
    <PhotoUploader/>
    <LocationSelector/>
   </>
  )
}

export default App
