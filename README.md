# Static Blank String

Host all the files

## Installation

`npm i`

## Copy

You need to first copy the mp3s to this folder

`OWNCLOUD=... npm copy`

you can also export `OWNCLOUD` as an environment variable

## Deploy

deploy everything to surge with

`OWNCLOUD=... npm deploy`

you will need to login with surge

```
./node_modules/.bin/surge login
```

## Local Hosting

You can locally host this with

`OWNCLOUD=... npm start`

or

`OWNCLOUD=... ./start`

You can also install this into youw own project

`npm i -g @blank-string/static.blankstring.surge.sh`

and then you can run, default to port 4567 (or next available there after)

`OWNCLOUD=... static-blankstring`

or

`OWNCLOUD=... static-blankstring 8080`

to specify your own