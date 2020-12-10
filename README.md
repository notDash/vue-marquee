# vue-marquee

> A custom Marquee component based on Vue

Properties:
```
    // data list
    list: {
        type: Array<String>,
        default: () => []
    },
    color: {
        type: String,
        default: '#fff'
    },
    fontSize: {
        type: String,
        default: '28px'
    },
    backgroundColor: {
        type: String,
        default: 'rgba(0, 0, 0, 0.5)'
    },
    // show icon or not
    icon: {
        type: Boolean,
        default: true
    },
    // custom stuyle. if true, the default color,fontSize,backgroundColor will be useless
    custom: {
        type: Boolean
    }
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
