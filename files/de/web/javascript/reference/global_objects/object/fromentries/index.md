---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Object.fromEntries()`** verwandelt eine Liste von Schlüssel-Wert-Paaren in ein Objekt.

{{EmbedInteractiveExample("pages/js/object-fromentries.html")}}

## Syntax

```js-nolint
Object.fromEntries(iterable)
```

### Parameter

- `iterable`

  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), wie ein {{jsxref("Array")}} oder eine {{jsxref("Map")}}, das eine Liste von Objekten enthält. Jedes Objekt sollte zwei Eigenschaften haben:

    - `0`
      - : Ein String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), das den Eigenschaftsschlüssel darstellt.
    - `1`
      - : Der Eigenschaftswert.

    Typischerweise wird dieses Objekt als ein Array mit zwei Elementen implementiert, wobei das erste Element der Eigenschaftsschlüssel und das zweite Element der Eigenschaftswert ist.

### Rückgabewert

Ein neues Objekt, dessen Eigenschaften durch die Einträge des Iterables gegeben sind.

## Beschreibung

Die Methode `Object.fromEntries()` nimmt eine Liste von Schlüssel-Wert-Paaren und gibt ein neues Objekt zurück, dessen Eigenschaften durch diese Einträge gegeben sind. Das Argument `iterable` wird erwartet, ein Objekt zu sein, das eine `[Symbol.iterator]()`-Methode implementiert. Die Methode gibt ein Iterator-Objekt zurück, das Array-ähnliche Objekte mit zwei Elementen produziert. Das erste Element ist ein Wert, der als Eigenschaftsschlüssel verwendet wird, und das zweite Element ist der Wert, der diesem Eigenschaftsschlüssel zugeordnet werden soll.

`Object.fromEntries()` führt die Umkehrung von {{jsxref("Object.entries()")}} aus, wobei `Object.entries()` nur Eigenschaften mit String-Schlüsseln zurückgibt, während `Object.fromEntries()` auch Symbol-Schlüssel erstellen kann.

> [!NOTE]
> Im Gegensatz zu {{jsxref("Array.from()")}} verwendet `Object.fromEntries()` nicht den Wert von `this`, sodass der Aufruf bei einem anderen Konstruktor keine Objekte dieses Typs erstellt.

## Beispiele

### Umwandeln einer Map in ein Objekt

Mit `Object.fromEntries` können Sie von einer {{jsxref("Map")}} auf ein {{jsxref("Object")}} konvertieren:

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Umwandeln eines Arrays in ein Objekt

Mit `Object.fromEntries` können Sie von einem {{jsxref("Array")}} auf ein {{jsxref("Object")}} konvertieren:

```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### Objektumwandlungen

Mit `Object.fromEntries`, seiner Gegenmethode {{jsxref("Object.entries()")}} und [Array-Manipulationsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) können Sie Objekte wie folgt umwandeln:

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
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
