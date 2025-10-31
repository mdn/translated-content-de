---
title: Object.fromEntries()
short-title: fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die statische Methode **`Object.fromEntries()`** wandelt eine Liste von Schlüssel-Wert-Paaren in ein Objekt um.

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
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), wie ein {{jsxref("Array")}} oder ein {{jsxref("Map")}}, das eine Liste von Objekten enthält. Jedes Objekt sollte zwei Eigenschaften haben:
    - `0`
      - : Ein String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), das den Eigenschaftsschlüssel repräsentiert.
    - `1`
      - : Der Eigenschaftswert.

    Typischerweise wird dieses Objekt als ein zwei-Elemente-Array implementiert, wobei das erste Element der Eigenschaftsschlüssel und das zweite Element der Eigenschaftswert ist.

### Rückgabewert

Ein neues Objekt, dessen Eigenschaften durch die Einträge des iterables gegeben sind.

## Beschreibung

Die Methode `Object.fromEntries()` nimmt eine Liste von Schlüssel-Wert-Paaren und gibt ein neues Objekt zurück, dessen Eigenschaften durch diese Einträge bestimmt werden. Das `iterable`-Argument wird erwartet, ein Objekt zu sein, das eine `[Symbol.iterator]()`-Methode implementiert. Die Methode gibt ein Iterator-Objekt zurück, das zwei-Elemente-Array-ähnliche Objekte erzeugt. Das erste Element ist ein Wert, der als Eigenschaftsschlüssel verwendet wird, und das zweite Element ist der Wert, der mit diesem Eigenschaftsschlüssel verknüpft wird.

`Object.fromEntries()` führt die Umkehrung von {{jsxref("Object.entries()")}} aus, mit dem Unterschied, dass `Object.entries()` nur string-gekoppelte Eigenschaften zurückgibt, während `Object.fromEntries()` auch symbol-gekoppelte Eigenschaften erstellen kann.

> [!NOTE]
> Im Gegensatz zu {{jsxref("Array.from()")}} verwendet `Object.fromEntries()` nicht den Wert von `this`, sodass das Aufrufen mit einem anderen Konstruktor keine Objekte dieses Typs erstellt.

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

### Objekttransformationen

Mit `Object.fromEntries`, seiner Umkehrmethode {{jsxref("Object.entries()")}}, und [Array-Manipulationsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) können Sie Objekte so transformieren:

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
