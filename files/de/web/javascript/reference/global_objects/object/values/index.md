---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Object.values()`** gibt ein Array mit den eigenen aufzählbaren, string-schlüsselbasierten Eigenschaftswerten eines gegebenen Objekts zurück.

{{InteractiveExample("JavaScript Demo: Object.values()")}}

```js interactive-example
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
```

## Syntax

```js-nolint
Object.values(obj)
```

### Parameter

- `obj`
  - : Ein Objekt.

### Rückgabewert

Ein Array, das die eigenen aufzählbaren, string-schlüsselbasierten Eigenschaftswerte des gegebenen Objekts enthält.

## Beschreibung

`Object.values()` gibt ein Array zurück, dessen Elemente die Werte der aufzählbaren, string-schlüsselbasierten Eigenschaften sind, die direkt auf dem `Objekt` gefunden werden. Dies entspricht dem Iterieren mit einer {{jsxref("Statements/for...in", "for...in")}}-Schleife, mit dem Unterschied, dass eine `for...in`-Schleife auch Eigenschaften in der Prototyp-Kette auflistet. Die Reihenfolge des von `Object.values()` zurückgegebenen Arrays ist identisch mit der, die von einer {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt wird.

Wenn Sie die Eigenschaftsschlüssel benötigen, verwenden Sie {{jsxref("Object.keys()")}}. Wenn Sie sowohl die Eigenschaftsschlüssel als auch die Werte benötigen, verwenden Sie {{jsxref("Object.entries()")}}.

## Beispiele

### Verwendung von Object.values()

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo is a non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.values(myObj)); // ['bar']
```

### Verwendung von Object.values() bei Primitiven

Nicht-Objekt-Argumente werden [zu Objekten konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können nicht zu Objekten konvertiert werden und werfen sofort einen {{jsxref("TypeError")}}. Nur Strings können eigene aufzählbare Eigenschaften haben, während bei allen anderen Primitiven ein leeres Array zurückgegeben wird.

```js
// Strings have indices as enumerable own properties
console.log(Object.values("foo")); // ['f', 'o', 'o']

// Other primitives except undefined and null have no own properties
console.log(Object.values(100)); // []
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.values` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Enumerierbarkeit und Zugehörigkeit von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.values()")}}
