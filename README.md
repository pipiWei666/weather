
# 项目启动命令    
```
两个项目都启动后，浏览器输入`localhost:3000`进入start app
```  

# weatherApi

## Project setup
```
npm install
```  
### Project start   
```
npm start
```  


# weatherapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


项目目录结构

├── README.md                             ##文件结构描述    
├── weatherApi                            基于express的后端接口程序     
│   ├── node_modules                      依赖模块        
│   ├── apis                              接口文件目录    
│   │   └── weather.js                    天气接口文件    
│   ├── bin    
│   │   └── www.js                        启动项目的脚本文件                                  
│   ├── mock                              模拟数据存放目录         
│   │   ├── city.js                       城市列表模拟数据                                
│   │   └── weather.js                    天气信息模拟数据                                  
│   ├── public                            静态资源目录，默认images、javascripts、stylesheets。                              
│   ├── routes                            路由文件目录       
│   │   ├── index.js                      一级路由为 "/"                               
│   │   └── weatherApi.js                 一级路由为 "/weatherApi"                                 
│   ├── views             
│   │   ├── index.ejs                     start app   程序入口文件                          
│   │   └── error.ejs                     发生错误时渲染的页面                       
│   ├── app.js                            应用核心配置文件，项目入口         
│   ├── package.json                      项目依赖配置及开发者信息       
│   └── package-lock.json                 记录各个package的具体来源和版本号          
│          
│         
└── weatherapp                            基于vue的天气程序         
    ├── node_modules                      依赖模块           
    ├── public                                 
    ├── src             
    │   ├── assets                        静态资源目录            
    │   ├── components                    公共组件目录           
    │   │   ├── Swiper.vue                简易轮播组件         
    │   │   └── Weather.vue               天气组件            
    │   ├── router                        路由文件目录          
    │   ├── utils                         工具类函数目录           
    │   ├── views                         路由组件目录           
    │   │   └── Home.vue                  "/" 路由所对应的组件
    │   ├── App.vue                       根组件           
    │   └── main.js                       vue入口文件          
    ├── vue.config.js                     webpack配置文件             
    ├── babel.config.js                   babel配置文件           
    ├── postcss.config.js                 插件postcss-px2rem-exclude的配置文件          
    ├── package-lock.json                 记录各个package的具体来源和版本号            
    ├── package.json                      项目依赖配置及开发者信息            
    └── README.md                         vue命令描述           

