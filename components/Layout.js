import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({children}) {
    return(
        <div className='layout'>
            <Head>
                <title>Simple Ecommerce</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className='main-container'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}