---
title: Object.getOwnPropertyNames()
short-title: getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Methode **`Object.getOwnPropertyNames()`** gibt ein Array aller Eigenschaften (einschließlich nicht-auflistbarer Eigenschaften, außer solchen, die Symbol verwenden) zurück, die direkt in einem gegebenen Objekt gefunden werden.

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
  - : Das Objekt, dessen aufzählbare und nicht-auflistbare Eigenschaften zurückgegeben werden sollen.

### Rückgabewert

Ein Array von Strings, das den direkt im gegebenen Objekt gefundenen Eigenschaften entspricht.

## Beschreibung

`Object.getOwnPropertyNames()` gibt ein Array zurück, dessen Elemente Strings sind, die den aufzählbaren und nicht-auflistbaren Eigenschaften entsprechen, die direkt in einem gegebenen Objekt `obj` gefunden werden. Die Reihenfolge der aufzählbaren Eigenschaften im Array entspricht der Reihenfolge, die durch eine {{jsxref("Statements/for...in", "for...in")}}-Schleife (oder durch {{jsxref("Object.keys()")}}) über die Eigenschaften des Objekts ausgesetzt wird. Die nicht-negativen Integer-Schlüssel des Objekts (sowohl aufzählbar als auch nicht-auflistbar) werden zuerst in aufsteigender Reihenfolge dem Array hinzugefügt, gefolgt von den String-Schlüsseln in der Reihenfolge ihrer Einfügung.

In ES5 führt ein Argument für diese Methode, das kein Objekt ist (eine Primitive), zu einem {{jsxref("TypeError")}}. In ES2015 wird ein Nicht-Objekt-Argument in ein Objekt umgewandelt.

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

Wenn Sie nur die aufzählbaren Eigenschaften möchten, siehe {{jsxref("Object.keys()")}} oder verwenden Sie eine {{jsxref("Statements/for...in", "for...in")}}-Schleife (beachten Sie, dass dies auch aufzählbare Eigenschaften zurückgeben wird, die entlang der Prototypkette für das Objekt gefunden wurden, es sei denn, letzteres wird mit {{jsxref("Object.hasOwn()")}} gefiltert).

Elemente der Prototypkette werden nicht aufgelistet:

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

Dies verwendet die Funktion {{jsxref("Array.prototype.filter()")}}, um die aufzählbaren Schlüssel (erhalten mit {{jsxref("Object.keys()")}}) aus einer Liste aller Schlüssel (erhalten mit `Object.getOwnPropertyNames()`) zu entfernen, um so nur die nicht-auflistbaren Schlüssel als Ausgabe zu erhalten.

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
- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.prototype.forEach()")}}
