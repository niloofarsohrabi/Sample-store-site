import React from 'react'
import styleHeader from '../header-Mobile/styleHeaderMobile.module.scss'
export const MobileHeader = (props) => {
    return (
        <>
            {props.children}
            <div className={styleHeader.headerMobile}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12  ">
                            <input className={styleHeader.inputSearch} placeholder="Enter your search key..." />
                            <button className={styleHeader.btnSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="50" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
