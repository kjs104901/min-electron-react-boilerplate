import React, {Component} from 'react'
import Logo from './components/Logo.jsx'
import Link from './components/Link.jsx'

import './App.css'

import ElectronImg from './assets/electron.png'
import ReactImg from './assets/react.png'
import WebpackImg from './assets/webpack.png'

const logos = [
    ElectronImg,
    ReactImg,
    WebpackImg
]

export default class App extends Component {
    render() {
        const logosRender = logos.map( (logo, index) => {
            return <Logo key = {index} src = { logo } />
        })

        return (
            <div>
                {logosRender}

                <div className="hello">
                    <h1>Hello React!</h1>
                </div>

                <p>
                    If you are trying to build Electron apps using React, or you just
                    want to play around with them, feel free to use this
                    seed as a starting point.
                </p>

                <p>
                    Pay attention to how everything inside src/ folder is bundled
                    into build/ folder, how global and scoped CSS work, how to compose
                    React components, or simply how Webpack changes relative
                    image paths to public paths after bundling the assets.
                </p>

                <p>
                    Check out the docs for<br></br>
                    <Link to='https://electronjs.org/docs'>Electron</Link><br></br>
                    <Link to='https://reactjs.org/docs/hello-world.html'>React </Link><br></br>
                    <Link to='https://webpack.js.org/configuration/'>Webpack 4</Link><br></br>
                    <Link to='https://github.com/pastahito/electron-react-webpack'>Original repository</Link><br></br>
                    <Link to='https://github.com/kjs104901/min-electron-react-boilerplate'>My repository</Link>
                </p>
            </div>
        )
    }
}
