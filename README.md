**Stop: r-06-01**

## Server

Set up
```
npm i -g live-server
live-server -v
```

Run
```
live-server public
```
`public` - target directory with index.html

## Web

Set up
```
npm i
npm i -g babel-cli
```

Run
```
 babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```
