---
title: Object.keys()
short-title: keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Object.keys()`** gibt ein Array mit den Namen der eigenen, aufzählbaren Eigenschaften eines Objekts zurück, deren Schlüssel Strings sind.

{{InteractiveExample("JavaScript Demo: Object.keys()")}}

```js interactive-example
const object = {
  a: "some string",
  b: 42,
  c: false,
};

console.log(Object.keys(object));
// Expected output: Array ["a", "b", "c"]
```

## Syntax

```js-nolint
Object.keys(obj)
```

### Parameter

- `obj`
  - : Ein Objekt.

### Rückgabewert

Ein Array von Strings, die die Schlüssel der eigenen, aufzählbaren Eigenschaften des angegebenen Objekts darstellen, deren Schlüssel Strings sind.

## Beschreibung

`Object.keys()` gibt ein Array zurück, dessen Elemente den Namen der aufzählbaren Eigenschaften entsprechen, die direkt auf `object` definiert sind und deren Schlüssel Strings sind. Dies entspricht der Iteration mit einer {{jsxref("Statements/for...in", "for...in")}}-Schleife, mit dem Unterschied, dass eine `for...in`-Schleife auch Eigenschaften in der Prototypkette aufzählt. Die Reihenfolge im von `Object.keys()` zurückgegebenen Array entspricht der Reihenfolge bei einer {{jsxref("Statements/for...in", "for...in")}}-Schleife.

Wenn Sie die Eigenschaftswerte benötigen, verwenden Sie stattdessen {{jsxref("Object.values()")}}. Wenn Sie sowohl die Eigenschaftsschlüssel als auch die Werte benötigen, verwenden Sie stattdessen {{jsxref("Object.entries()")}}.

## Beispiele

### Object.keys() verwenden

```js
// Basic array
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// Array-like object
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// Array-like object with random key ordering
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

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
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']
```

Wenn Sie _alle_ eigenen Eigenschaften mit String-Schlüsseln benötigen, einschließlich der nicht aufzählbaren, lesen Sie {{jsxref("Object.getOwnPropertyNames()")}}.

### Object.keys() mit primitiven Werten verwenden

Argumente, die keine Objekte sind, werden [in Objekte umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können nicht in Objekte umgewandelt werden und lösen unmittelbar einen {{jsxref("TypeError")}} aus. Nur Strings können eigene, aufzählbare Eigenschaften haben; bei allen anderen primitiven Werten wird ein leeres Array zurückgegeben.

```js
// Strings have indices as enumerable own properties
console.log(Object.keys("foo")); // ['0', '1', '2']

// Other primitives except undefined and null have no own properties
console.log(Object.keys(100)); // []
```

> [!NOTE]
> In ES5 löste die Übergabe eines Werts, der kein Objekt ist, an `Object.keys()` einen {{jsxref("TypeError")}} aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Object.keys` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [Polyfill für `Object.keys` von es-shims](https://www.npmjs.com/package/object-key)
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.keys()")}}
