# MARKER
### Give your terminal logs a beautiful color (both textual color and textual highlighting)

# Installation
    $ npm install --save-dev @dae54/marker

# Usage

```javascript
const marker = require('@dae54/marker')
// marker.color('Your text ere','color here') // Give color text to your terminal logs
marker.color('Hello World','red')
// marker.highlight('Your text ere','color here') // Give a colored highlight to your terminal logs
marker.highlight('Hello World','green') 
```

# API

## Available Methods
`marker.color` 

Gives font color to terminal logs. 

Parameters: `Message` [String], `Color` [String] (black, red, green, yellow, blue, purple, lightblue and white )

`marker.highlight` 

Gives background color to terminal logs. 

Parameters: `Message` [String], `Color` [String] (black, red, green, yellow, blue, purple, lightblue and white )

## Accepted Colors 
    black
    red
    green
    yellow  
    blue
    purple
    lightblue and
    white

# Maintainers
 - [dae54](https://github.com/dae54)



# Issues
- For any issues, submit them [here](https://github.com/dae54/marker/issues)


# Collaborators
- You are welcome to collaborate to improve this young and simple tool. Leave a star and fork the repository if you  liked it.