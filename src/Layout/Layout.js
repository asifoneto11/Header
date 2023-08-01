import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Router from '../Router/Router';
const Layout = () => {
    return (
        <>
            <Header />
            <div>
                <Router />
            </div>
            <Footer />
        </>
    )
}

export default Layout