---
title: Object.fromEntries()
short-title: fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die statische Methode **`Object.fromEntries()`** verwandelt eine Liste von Schlüssel-Wert-Paaren in ein Objekt.

{{InteractiveExample("JavaScript Demo: Object.fromEntries()")}}

```js interactive-example
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }
```

## Syntax

```js-nolint
Object.fromEntries(iterable)
```

### Parameter

- `iterable`

  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), wie zum Beispiel ein {{jsxref("Array")}} oder {{jsxref("Map")}}, das eine Liste von Objekten enthält. Jedes Objekt sollte zwei Eigenschaften haben:

    - `0`
      - : Ein String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), der den Eigenschaftsschlüssel darstellt.
    - `1`
      - : Der Eigenschaftswert.

    Typischerweise wird dieses Objekt als ein Array mit zwei Elementen implementiert, wobei das erste Element der Eigenschaftsschlüssel und das zweite Element der Eigenschaftswert ist.

### Rückgabewert

Ein neues Objekt, dessen Eigenschaften durch die Einträge des iterierbaren Objekts bestimmt werden.

## Beschreibung

Die Methode `Object.fromEntries()` nimmt eine Liste von Schlüssel-Wert-Paaren und gibt ein neues Objekt zurück, dessen Eigenschaften durch diese Einträge festgelegt werden. Das Argument `iterable` soll ein Objekt sein, das eine Methode `[Symbol.iterator]()` implementiert. Diese Methode gibt ein Iterator-Objekt zurück, das Array-ähnliche Objekte mit zwei Elementen produziert. Das erste Element ist ein Wert, der als Eigenschaftsschlüssel verwendet wird, und das zweite Element ist der Wert, der diesem Eigenschaftsschlüssel zugeordnet wird.

`Object.fromEntries()` führt das Gegenteil von {{jsxref("Object.entries()")}} aus, mit der Ausnahme, dass `Object.entries()` nur durch Strings gekennzeichnete Eigenschaften zurückgibt, während `Object.fromEntries()` auch durch Symbole gekennzeichnete Eigenschaften erstellen kann.

> [!NOTE]
> Im Gegensatz zu {{jsxref("Array.from()")}} verwendet `Object.fromEntries()` nicht den Wert von `this`, sodass der Aufruf mit einem anderen Konstruktor keine Objekte dieses Typs erstellt.

## Beispiele

### Konvertieren einer Map in ein Objekt

Mit `Object.fromEntries` können Sie von {{jsxref("Map")}} zu {{jsxref("Object")}} konvertieren:

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Konvertieren eines Arrays in ein Objekt

Mit `Object.fromEntries` können Sie von {{jsxref("Array")}} zu {{jsxref("Object")}} konvertieren:

```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### Objekt-Transformationen

Mit `Object.fromEntries`, seiner Gegenmethode {{jsxref("Object.entries()")}} und [Array-Manipulationsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) können Sie Objekte wie folgt transformieren:

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.fromEntries` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [es-shims Polyfill von `Object.fromEntries`](https://www.npmjs.com/package/object.fromentries)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
