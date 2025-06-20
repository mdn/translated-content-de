---
title: Object.getOwnPropertyNames()
short-title: getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyNames()`** gibt ein Array aller direkt in einem gegebenen Objekt gefundenen Eigenschaften zurück (einschließlich nicht-auflistbarer Eigenschaften, außer solchen, die Symbol verwenden).

{{InteractiveExample("JavaScript Demo: Object.getOwnPropertyNames()")}}

```js interactive-example
const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object1));
// Expected output: Array ["a", "b", "c"]
```

## Syntax

```js-nolint
Object.getOwnPropertyNames(obj)
```

### Parameter

- `obj`
  - : Das Objekt, dessen auflistbare und nicht-auflistbare Eigenschaften zurückgegeben werden sollen.

### Rückgabewert

Ein Array von Zeichenfolgen, das den direkt im gegebenen Objekt gefundenen Eigenschaften entspricht.

## Beschreibung

`Object.getOwnPropertyNames()` gibt ein Array zurück, dessen Elemente Zeichenfolgen sind, die den auflistbaren und nicht-auflistbaren Eigenschaften entsprechen, die direkt in einem gegebenen Objekt `obj` gefunden werden. Die Reihenfolge der auflistbaren Eigenschaften im Array entspricht der Reihenfolge, die von einer {{jsxref("Statements/for...in", "for...in")}} Schleife (oder durch {{jsxref("Object.keys()")}}) über die Eigenschaften des Objekts offengelegt wird. Die nicht-negativen ganzzahligen Schlüssel des Objekts (sowohl auflistbare als auch nicht-auflistbare) werden zuerst in aufsteigender Reihenfolge dem Array hinzugefügt, gefolgt von den Zeichenfolgenschlüsseln in der Einfügereihenfolge.

In ES5 führt ein Argument für diese Methode, das kein Objekt ist (ein Primitive), zu einem {{jsxref("TypeError")}}. In ES2015 wird ein Argument, das kein Objekt ist, in ein Objekt umgewandelt.

```js
Object.getOwnPropertyNames("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames("foo");
// ["0", "1", "2", "length"]  (ES2015 code)
```

## Beispiele

### Verwendung von Object.getOwnPropertyNames()

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

Wenn Sie nur die auflistbaren Eigenschaften wünschen, sehen Sie sich {{jsxref("Object.keys()")}} an oder verwenden Sie eine {{jsxref("Statements/for...in", "for...in")}} Schleife (beachten Sie, dass dies auch auflistbare Eigenschaften entlang der Prototypkette des Objekts zurückgibt, es sei denn, letztere wird mit {{jsxref("Object.hasOwn()")}} gefiltert).

Elemente in der Prototypkette werden nicht aufgeführt:

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

### Nur nicht-auflistbare Eigenschaften erhalten

Dies verwendet die {{jsxref("Array.prototype.filter()")}} Funktion, um die auflistbaren Schlüssel (erhalten mit {{jsxref("Object.keys()")}}) aus einer Liste aller Schlüssel (erhalten mit `Object.getOwnPropertyNames()`) zu entfernen und somit nur die nicht-auflistbaren Schlüssel als Ausgabe zu geben.

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

- [Polyfill von `Object.getOwnPropertyNames` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Auflistbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.prototype.forEach()")}}
