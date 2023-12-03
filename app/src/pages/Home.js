import React from 'react'
import Navbar from '../Components/navbar'
import FeaturedSection from '../Components/featuredSection'
import HeroSection from '../Components/hero-section'
import CategoriesSection from '../Components/CategoriesSection'
import FindRoommatesContent from '../Components/FindRoommatesContent'
import Footer from '../Components/Footer'
import { useWeb3React } from '@web3-react/core'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

export default function Home() {

    // const [authState, setAuthState ] = useState("");
    // console.log(authState)

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(function (user) {
    //       if (!user) {
    //         // <Redirect to="/" />
    //         setAuthState("Logged-out")
    //         // console.log("1")
    //       }else{
    //         // console.log("2")
    //         setAuthState("Logged-in")
    //       }
    //     });
    //   }, [])

    const {active}=useWeb3React();

    if(!active){
    return (
      <>
         <Redirect to="/" />
      </>
    )
    }else{
      return(
      <>
      <Navbar/>
      <HeroSection/>
      <FeaturedSection/>
      <CategoriesSection/>
      <FindRoommatesContent/>
      <Footer/>
      </>
      )
    }
}

