import React from 'react'
import '@styles/globals.css'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'

export const metadata = {
    title: "Promptopia",
    description: "Discover & share AI promots"
}

const layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className="gradient"></div>
                    </div>
                    <main>
                        <div className="app">
                            <Nav />
                            {children}
                        </div>
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default layout