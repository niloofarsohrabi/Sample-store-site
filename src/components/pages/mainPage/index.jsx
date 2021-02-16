import React, { useState, useEffect } from 'react'
import { Header } from '../../layout/fixed-Layout/header'
import { NavBar } from '../../layout/fixed-Layout/navbar'
import { NavBarMobile } from '../../layout/mobile-Layout/navbar-Mobile'
import {MobileHeader} from '../../layout/mobile-Layout/header-Mobile'

export const MainPage = () => {

    const [shouldScrollNav, setShouldScrollNav] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    }, []);
    const handleScroll = () => {
        let mountOfScroll = document.documentElement.scrollTop;
        if (mountOfScroll > 120) {
            setShouldScrollNav(true);
        } else {
            setShouldScrollNav(false);
        }
    }
    //---------------------------------------------- When the page is scrolled
    const size = useWindowSize();
    const [windowSize, setWindowSize] = useState(undefined);
    function useWindowSize() {
        useEffect(() => {
            function handleResize() {
                setWindowSize(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
    }
    //------------------------------------------------- Gives the page width

    return (
        <div>

            {
                windowSize > 991 ?
                    <Header>
                        <NavBar shouldScrollNav={shouldScrollNav} />
                    </Header>
                    :
                    <MobileHeader>
                        <NavBarMobile />
                    </MobileHeader>

            }


        </div>
    )
}

