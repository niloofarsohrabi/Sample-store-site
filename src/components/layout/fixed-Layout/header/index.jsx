import React from 'react'
import styleHeader from './styleHeaderDesktop.module.scss'

export const Header = (props) => {
    return (
        <>
            <div className={styleHeader.headerDesktop}>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-xxl-2 col-xl-2 col-lg-2  ">
                            <h1 className={styleHeader.mainLogo}>Junno</h1>
                        </div>
                        {/* ------------------------------------------------------Logo */}

                        <div className="col-xxl-7 col-xl-7 col-lg-6 "  >
                            <input className={styleHeader.inputSearch} placeholder="Enter your search key..." />
                            <button className={styleHeader.btnSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="50" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </div>

                        {/* ---------------------------------------------input/button search */}

                        <div className="col-xxl-3 col-xl-3 col-lg-4  ">
                            <button className={styleHeader.loginBtn}>
                                Login
                            </button>
                            <svg className={styleHeader.basket} xmlns="http://www.w3.org/2000/svg" width="80" height="30" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </div>
                        {/* ---------------------------------------------sabade kahrid/login */}
                    </div>
                </div>
            </div>
            {props.children}
        </>
    )
}
