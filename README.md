# Object Navigation

Enables safe navigation of object properties in the form of

`nav(someObject).the.properties.here() // invoke to retreive`

## Install

Using npm
```
npm install --save @azhder/object-nav
```

and require
```
const nav = require('@azhder/object-nav');
```

or import
```      
import nav from '@azhder/object-nav';
```

Note: 

`@azhder/object-nav` points to `'@azhder/object-nav/dist`
which is Babel transpiled version of the ES2018 source at
`'@azhder/object-nav/src`


## Use

```
const s = Symbol();
const o = nav({a: 1, n: null, [s]: s => s});


console.log(typeof o);  //-> function
console.log(o);         //-> undefined
console.log(o());       //-> { a: 1, n: null }

const r1 = o.n.n2.n3;
console.log(typeof r1); //-> function
console.log(r1);        //-> null
console.log(r1());      //-> null

const r2 = o[s];
console.log(r2);        //-> undefined
console.log(r2());      //-> [Function]
console.log(r2()(5));   //-> 5

const r3 = o.a;
console.log(r3);        //-> undefined
console.log(r3());      //-> 1
console.log(o.a.b.c()); //-> undefined
```
