import React from "react";
import FooterCopirights from "../components/footer/footer";
import { Menu } from "../components/menu";
import ProductsList from "../components/products";
import SearshBar from "../components/searshbar/searshbar";
import SearshResult from "../components/searshbar/searshresult";

export default function Home(){
    return(
        <>
            <Menu / >
            <SearshBar />
            <ProductsList />
            <FooterCopirights />
        </>
    )
}

function SearshResultsDashboard(){
    return(
        <>
            <Menu />
            <SearshBar />
            <SearshResult />
            <FooterCopirights />
        </>
    )
}

export{
    SearshResultsDashboard
}