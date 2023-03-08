import * as React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col bg-neutral-100">
            {children}
        </div>
    )
}

export default Layout