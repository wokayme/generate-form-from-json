# React form builder generator
Recreate existing form saved in json.
Live Preview: http://reactformbuilder.wokay.me/

This plugin is recommend to use with plugin
https://github.com/seapage/react-form-generator
Result got from that generator is compatible with this plugin


# Quick start
##### 1. Install Plugin
`npm i react-form-generator-from-json
`
##### 2. Import component to script
`import GenerateForm from 'react-form-generator-from-json'`
##### 3. Display/render component
```
<GenerateForm formJson={this.state.formToGenerate} />
```

# Component 'FilterBuilder options'

`formJson` - Here you should put existing form json which you want recreate

# Get data from form
**Get Json Callback**
use ref to get `result` - 
### Examples of get form and send data 
```
<GenerateForm formJson={this_put_your_json} ref="generateForm" formJson={this.state.formToGenerate} />
```

# License
GNU 3.0

# Author

### Krzysztof Łokaj "Wokay"
- Blog https://wokay.me/
- Twitter https://twitter.com/_Wokay
- Linkedin https://www.linkedin.com/in/wokay/
