---
title: Object.values()
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Object.values()`** gibt ein Array mit den Werten der eigenen, aufzählbaren Eigenschaften eines angegebenen Objekts zurück, deren Schlüssel Zeichenfolgen sind.

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

Ein Array mit den Werten der eigenen, aufzählbaren Eigenschaften des angegebenen Objekts, deren Schlüssel Zeichenfolgen sind.

## Beschreibung

`Object.values()` gibt ein Array zurück, dessen Elemente die Werte der aufzählbaren Eigenschaften sind, die direkt auf `object` vorhanden sind und deren Schlüssel Zeichenfolgen sind. Dies ähnelt dem Zugriff auf die Werte in einer {{jsxref("Statements/for...in", "for...in")}}-Schleife. Eine `for...in`-Schleife zählt jedoch auch Eigenschaften in der Prototypkette auf. Die Reihenfolge der von `Object.values()` zurückgegebenen Array-Elemente entspricht der Reihenfolge in einer {{jsxref("Statements/for...in", "for...in")}}-Schleife.

Wenn Sie die Eigenschaftsschlüssel benötigen, verwenden Sie stattdessen {{jsxref("Object.keys()")}}. Wenn Sie sowohl die Eigenschaftsschlüssel als auch die Werte benötigen, verwenden Sie stattdessen {{jsxref("Object.entries()")}}.

## Beispiele

### Object.values() verwenden

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

### Object.values() mit primitiven Werten verwenden

Argumente, die keine Objekte sind, werden [in Objekte umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können nicht in Objekte umgewandelt werden und lösen unmittelbar einen {{jsxref("TypeError")}} aus. Nur Zeichenfolgen können eigene, aufzählbare Eigenschaften haben; bei allen anderen primitiven Werten wird ein leeres Array zurückgegeben.

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

- [Polyfill für `Object.values` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [Polyfill für `Object.values` von es-shims](https://www.npmjs.com/package/object.values)
- [Aufzählbarkeit und Zugehörigkeit von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.values()")}}
