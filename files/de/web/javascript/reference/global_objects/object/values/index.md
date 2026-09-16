---
title: Object.values()
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
l10n:
  sourceCommit: 2bff5597c96419f7febb88a90fa48f3a6f807f00
---

Die statische Methode **`Object.values()`** gibt ein Array mit den Werten der eigenen aufzählbaren, durch Strings geschlüsselten Eigenschaften eines gegebenen Objekts zurück.

{{InteractiveExample("JavaScript Demo: Object.values()")}}

```js interactive-example
const object = {
  a: "some string",
  b: 42,
  c: false,
};

console.log(Object.values(object));
// Expected output: Array ["some string", 42, false]
```

## Syntax

```js-nolint
Object.values(obj)
```

### Parameter

- `obj`
  - : Ein Objekt.

### Rückgabewert

Ein Array, das die Werte der eigenen aufzählbaren, durch Strings geschlüsselten Eigenschaften des gegebenen Objekts enthält.

## Beschreibung

`Object.values()` gibt ein Array zurück, dessen Elemente die Werte der aufzählbaren, durch Strings geschlüsselten Eigenschaften sind, die direkt auf `object` gefunden werden. Dies ähnelt dem Zugriff auf die Werte innerhalb einer {{jsxref("Statements/for...in", "for...in")}}-Schleife, mit der Ausnahme, dass eine `for...in`-Schleife auch Eigenschaften in der Prototypkette aufzählt. Die Reihenfolge des von `Object.values()` zurückgegebenen Arrays ist dieselbe wie die einer {{jsxref("Statements/for...in", "for...in")}}-Schleife.

Wenn Sie die Eigenschaftsschlüssel benötigen, verwenden Sie stattdessen {{jsxref("Object.keys()")}}. Wenn Sie sowohl die Eigenschaftsschlüssel als auch die Werte benötigen, verwenden Sie stattdessen {{jsxref("Object.entries()")}}.

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

### Verwendung von Object.values() mit primitiven Werten

Argumente, die keine Objekte sind, werden [in Objekte umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können nicht in Objekte umgewandelt werden und lösen unmittelbar einen {{jsxref("TypeError")}} aus. Nur Strings können eigene aufzählbare Eigenschaften haben, während alle anderen primitiven Werte ein leeres Array zurückgeben.

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
- [es-shims-Polyfill von `Object.values`](https://www.npmjs.com/package/object.values)
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.values()")}}
