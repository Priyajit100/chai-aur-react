import React from 'react'
import ReactDOM from 'react-dom/client'


function MyApp() {
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const anotherElement = (
//     <a href="https://google.com" target="_blank" rel="noopener noreferrer">
//         Visit google
//     </a>
// )

// const anotherUser = "chai aur react"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MyApp />
        {/* You can also render <MyApp />, {anotherElement}, or {anotherUser} here */}
    </React.StrictMode>
)