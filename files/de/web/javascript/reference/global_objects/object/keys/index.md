---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Object.keys()`** statische Methode gibt ein Array mit den eigenen aufzählbaren, string-basierten Eigenschaften eines Objekts zurück.

{{InteractiveExample("JavaScript Demo: Object.keys()")}}

```js interactive-example
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
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

Ein Array von Strings, das die eigenen aufzählbaren, string-basierten Eigenschaftsschlüssel des angegebenen Objekts darstellt.

## Beschreibung

`Object.keys()` gibt ein Array zurück, dessen Elemente Strings sind, die den aufzählbaren, string-basierten Eigenschaftsnamen entsprechen, die direkt auf dem `object` gefunden werden. Dies entspricht dem Iterieren mit einer {{jsxref("Statements/for...in", "for...in")}} Schleife, außer dass eine `for...in` Schleife auch Eigenschaften in der Prototyp-Kette aufzählt. Die Reihenfolge des Arrays, das von `Object.keys()` zurückgegeben wird, entspricht der, die von einer {{jsxref("Statements/for...in", "for...in")}} Schleife bereitgestellt wird.

Wenn Sie die Eigenschaftswerte benötigen, verwenden Sie stattdessen {{jsxref("Object.values()")}}. Wenn Sie sowohl die Eigenschaftsschlüssel als auch die Werte benötigen, verwenden Sie stattdessen {{jsxref("Object.entries()")}}.

## Beispiele

### Verwendung von Object.keys()

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

Wenn Sie _alle_ string-basierten eigenen Eigenschaften, einschließlich nicht aufzählbarer Eigenschaften, benötigen, siehe {{jsxref("Object.getOwnPropertyNames()")}}.

### Verwendung von Object.keys() bei primitiven Werten

Nicht-Objektargumente werden [in Objekte umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können nicht in Objekte umgewandelt werden und werfen sofort einen {{jsxref("TypeError")}}. Nur Strings können eigene aufzählbare Eigenschaften haben, während alle anderen primitiven Werte ein leeres Array zurückgeben.

```js
// Strings have indices as enumerable own properties
console.log(Object.keys("foo")); // ['0', '1', '2']

// Other primitives except undefined and null have no own properties
console.log(Object.keys(100)); // []
```

> [!NOTE]
> In ES5 warf das Übergeben eines Nicht-Objekts an `Object.keys()` einen {{jsxref("TypeError")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.keys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.keys()")}}
