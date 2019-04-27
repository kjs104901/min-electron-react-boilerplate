# Minimal electron react boilerplate

Forked from
https://github.com/pastahito/electron-react-webpack

![w10 sample](https://github.com/kjs104901/min-electron-react-boilerplate/blob/master/screenshot.PNG?raw=true)

Electron 5

electron-builder 20

React 16

Webpack 4

Babel core 7

Babel loader 8


## Install
``` bash
$ git clone https://github.com/kjs104901/min-electron-react-boilerplate.git
$ cd min-electron-react-boilerplate
$ npm install
```

## Development
``` bash
$ npm start
```

## Distribution
Configure package.json first. Follow the instruction of electron-builder.
``` bash
$ npm run dist
```

## plugin-proposal-class-properties
``` bash
$ npm install --save-dev @babel/plugin-proposal-class-properties
```

.babelrc
```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}
```