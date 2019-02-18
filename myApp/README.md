# Curso de Ionic
    https://www.udemy.com/ionic-3-para-iniciantes/
## Adicionar arquivo config.xml
    ionic integrations enable cordova --add

## Corrigir criação de módulos
    No arquivo package.json alterar a chave

    "@ionic/app-scripts": "3.2.1",

    para

    "@ionic/app-scripts": "1.3.7",

 ## Para resolver problema de Cors de api
        No arquivo ionic-config.json 
        Adicionar dentro do objeto no final
         "proxies": [
                {
                "path": "/api",
                "proxyUrl": "http://cors.api.com/api"
                }
            ]

        Fonte: https://blog.ionicframework.com/handling-cors-issues-in-ionic/    

## Testar no browser como se fosse o dispositivo
        ionic cordova add platform browser

        ionic cordova run browser