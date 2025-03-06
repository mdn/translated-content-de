---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyNames()`** gibt ein Array aller Eigenschaften (einschließlich nicht-auflistbarer Eigenschaften, außer solchen, die Symbole verwenden) zurück, die direkt in einem gegebenen Objekt gefunden werden.

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
  - : Das Objekt, dessen aufzählbare und nicht-auflistbare Eigenschaften zurückgegeben werden sollen.

### Rückgabewert

Ein Array von Zeichenfolgen, das den Eigenschaften entspricht, die direkt im angegebenen Objekt gefunden werden.

## Beschreibung

`Object.getOwnPropertyNames()` gibt ein Array zurück, dessen Elemente Strings sind, die den aufzählbaren und nicht-auflistbaren Eigenschaften entsprechen, die direkt in einem gegebenen Objekt `obj` gefunden werden. Die Reihenfolge der aufzählbaren Eigenschaften im Array ist konsistent mit der Reihenfolge, die durch eine {{jsxref("Statements/for...in", "for...in")}}-Schleife (oder durch {{jsxref("Object.keys()")}}) über die Eigenschaften des Objekts exponiert wird. Die nicht-negativen Integer-Schlüssel des Objekts (sowohl aufzählbar als auch nicht-auflistbar) werden zuerst in aufsteigender Reihenfolge dem Array hinzugefügt, gefolgt von den String-Schlüsseln in der Reihenfolge der Einfügung.

In ES5 verursacht ein Argument, das kein Objekt ist (ein primitiver Wert), einen {{jsxref("TypeError")}}. In ES2015 wird ein Nicht-Objekt-Argument in ein Objekt umgewandelt.

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

Wenn Sie nur die aufzählbaren Eigenschaften wünschen, siehe {{jsxref("Object.keys()")}} oder verwenden Sie eine {{jsxref("Statements/for...in", "for...in")}}-Schleife (beachten Sie, dass dies auch die aufzählbaren Eigenschaften zurückgibt, die in der Prototypenkette des Objekts gefunden werden, es sei denn, diese wird mit {{jsxref("Object.hasOwn()")}} gefiltert).

Elemente in der Prototypenkette werden nicht aufgelistet:

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

Dies verwendet die Funktion {{jsxref("Array.prototype.filter()")}}, um die aufzählbaren Schlüssel (erhalten mit {{jsxref("Object.keys()")}}) von einer Liste aller Schlüssel (erhalten mit `Object.getOwnPropertyNames()`) zu entfernen, wodurch nur die nicht-auflistbaren Schlüssel als Ausgabe bleiben.

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
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.prototype.forEach()")}}
