import React from "react";
import FooterCopirights from "../components/footer/footer";
import { Menu } from "../components/menu";
import { PriceHistory } from "../components/pricelist/history";
import { ProductDashboard } from "../components/pricelist/prices";
import ProductsList from "../components/products";
import SearshBar from "../components/searshbar/searshbar";
import Home from "./home";

function ProductDashboardPage(){
    return(
        <>
            <Menu />
            <SearshBar />
            <ProductDashboard />
            <FooterCopirights />
        </>
    )

}
function ProductHistoryDashboard(){
return(
    <>
        <Menu />
        <SearshBar />
        <PriceHistory />
        <FooterCopirights />
    </>
)
}

export{
    ProductDashboardPage,
    ProductHistoryDashboard,
}