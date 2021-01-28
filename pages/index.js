import Layout from "../components/Layout/Layout";
import React, {useContext, useEffect} from "react";
import Hero from "../components/Home/Hero";
import Advert from "../components/Home/Advert";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import LatestProducts from "../components/Home/LatestProducts";
import ProductBanner from "../components/Home/ProductBanner";
import Testimonial from "../components/Home/Testimonial";
import Brands from "../components/Home/Brands";
import Search from "../components/Home/Search";
import authContext from "../context/authContext";

export default function Home() {
  return (
      <div>
        <Layout>
            <Search/>
            <Advert/>
            <FeaturedProducts/>
            <LatestProducts/>
            <ProductBanner/>
            <Testimonial/>
            <Brands/>
        </Layout>
      </div>
  )
}
