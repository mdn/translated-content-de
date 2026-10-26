---
title: Object.getOwnPropertyNames()
short-title: getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Object.getOwnPropertyNames()`** gibt ein Array aller Eigenschaften zurück, die direkt auf einem gegebenen Objekt vorhanden sind. Dazu gehören auch nicht aufzählbare Eigenschaften, jedoch keine Eigenschaften mit Symbol-Schlüsseln.

{{InteractiveExample("JavaScript Demo: Object.getOwnPropertyNames()")}}

```js interactive-example
const object = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object));
// Expected output: Array ["a", "b", "c"]
```

## Syntax

```js-nolint
Object.getOwnPropertyNames(obj)
```

### Parameter

- `obj`
  - : Das Objekt, dessen aufzählbare und nicht aufzählbare Eigenschaften zurückgegeben werden sollen.

### Rückgabewert

Ein Array von Zeichenfolgen, die den direkt auf dem gegebenen Objekt vorhandenen Eigenschaften entsprechen.

## Beschreibung

`Object.getOwnPropertyNames()` gibt ein Array zurück, dessen Elemente Zeichenfolgen sind, die den aufzählbaren und nicht aufzählbaren Eigenschaften entsprechen, die direkt auf einem gegebenen Objekt `obj` vorhanden sind. Die Reihenfolge der aufzählbaren Eigenschaften im Array entspricht der Reihenfolge, in der eine {{jsxref("Statements/for...in", "for...in")}}-Schleife (oder {{jsxref("Object.keys()")}}) die Eigenschaften des Objekts liefert. Die nicht negativen ganzzahligen Schlüssel des Objekts (sowohl aufzählbare als auch nicht aufzählbare) werden zuerst in aufsteigender Reihenfolge zum Array hinzugefügt, gefolgt von den Zeichenfolgenschlüsseln in der Reihenfolge ihrer Einfügung.

In ES5 führt ein Argument, das kein Objekt ist (ein primitiver Wert), bei dieser Methode zu einem {{jsxref("TypeError")}}. In ES2015 wird ein Argument, das kein Objekt ist, in ein Objekt umgewandelt.

```js
Object.getOwnPropertyNames("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames("foo");
// ["0", "1", "2", "length"]  (ES2015 code)
```

## Beispiele

### Object.getOwnPropertyNames() verwenden

```js
const arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort());
// ["0", "1", "2", "length"]

// Array-like object
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort());
// ["0", "1", "2"]

Object.getOwnPropertyNames(obj).forEach((val, idx, array) => {
  console.log(`${val} -> ${obj[val]}`);
});
// 0 -> a
// 1 -> b
// 2 -> c

// non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
      enumerable: false,
    },
  },
);
myObj.foo = 1;

console.log(Object.getOwnPropertyNames(myObj).sort()); // ["foo", "getFoo"]
```

Wenn Sie nur die aufzählbaren Eigenschaften benötigen, verwenden Sie {{jsxref("Object.keys()")}} oder eine {{jsxref("Statements/for...in", "for...in")}}-Schleife. Beachten Sie, dass die Schleife auch aufzählbare Eigenschaften aus der Prototypenkette des Objekts liefert, sofern Sie diese nicht mit {{jsxref("Object.hasOwn()")}} herausfiltern.

Eigenschaften aus der Prototypenkette werden nicht aufgelistet:

```js
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function () {};

function ChildClass() {
  this.prop = 5;
  this.method = function () {};
}
ChildClass.prototype = new ParentClass();
ChildClass.prototype.prototypeMethod = function () {};

console.log(Object.getOwnPropertyNames(new ChildClass()));
// ["prop", "method"]
```

### Nur nicht aufzählbare Eigenschaften ermitteln

Hier wird die Funktion {{jsxref("Array.prototype.filter()")}} verwendet, um die aufzählbaren Schlüssel (ermittelt mit {{jsxref("Object.keys()")}}) aus einer Liste aller Schlüssel (ermittelt mit `Object.getOwnPropertyNames()`) zu entfernen. So bleiben nur die nicht aufzählbaren Schlüssel übrig.

```js
const target = myObject;
const enumAndNonEnum = Object.getOwnPropertyNames(target);
const enumOnly = new Set(Object.keys(target));
const nonEnumOnly = enumAndNonEnum.filter((key) => !enumOnly.has(key));

console.log(nonEnumOnly);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Object.getOwnPropertyNames` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.prototype.forEach()")}}
