import styled from "styled-components";
import React from "react";
import { MenuStyles } from "./styled";
import { MenuConfig } from "../../content/parameters/menu";

export function Menu(){
    const ProjectInfo = MenuConfig.Project
    return(
        <>
        <MenuStyles>
            <a href={ProjectInfo.HomeURL}>
                <img src={ProjectInfo.LogoLink} />
            </a>
        </MenuStyles>
        </>
    )
}