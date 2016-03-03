# OS X - node test smaple
```설치 환경 - OS X 10.11 El Capitan```

1. node
2. express
3. with mongodb
4. with mysql


[TOC]



## node 설치
installer 다운로드
https://nodejs.org/en/download/

## express 설치

```
$ npm install express --save
```

## MongoDB 설치
```
$ brew install mongodb
$ mkdir -p /data/db
$ sudo chown {userid} /data/db
```
### MongoDB 데몬 실행
```
$ mongod
```
### MongoDB 접속
```
$ mongo
```

## Mysql 설치
```
$ brew install mysql
```
### Mysql 데몬 실행
```
$ mysql.server start
```

## 각 테스트 실행 ##

### npm 모듈 설치
```
$ npm install
```

### 실행
```
> 1. node index.js
> 2. npm start
> 3, 4. node app.js
```