---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Object.fromEntries()`** statische Methode transformiert eine Liste von Schlüssel-Werte-Paaren in ein Objekt.

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

  - : Ein [iterables Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), zum Beispiel ein {{jsxref("Array")}} oder {{jsxref("Map")}}, das eine Liste von Objekten enthält. Jedes Objekt sollte zwei Eigenschaften haben:

    - `0`
      - : Ein String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), der den Eigenschaftsschlüssel darstellt.
    - `1`
      - : Der Eigenschaftswert.

    Typischerweise wird dieses Objekt als ein Array mit zwei Elementen implementiert, wobei das erste Element der Eigenschaftsschlüssel und das zweite Element der Eigenschaftswert ist.

### Rückgabewert

Ein neues Objekt, dessen Eigenschaften durch die Einträge des `iterable` definiert sind.

## Beschreibung

Die `Object.fromEntries()`-Methode nimmt eine Liste von Schlüssel-Werte-Paaren und gibt ein neues Objekt zurück, dessen Eigenschaften durch diese Einträge definiert sind. Das Argument `iterable` sollte ein Objekt sein, das eine `[Symbol.iterator]()`-Methode implementiert. Diese Methode gibt ein Iterator-Objekt zurück, das Array-ähnliche Objekte mit zwei Elementen produziert. Das erste Element wird als Eigenschaftsschlüssel verwendet, das zweite Element bestimmt den zugehörigen Eigenschaftswert.

`Object.fromEntries()` macht das Gegenteil von {{jsxref("Object.entries()")}}, wobei `Object.entries()` nur Zeichenketten-Schlüssel-Zuordnungen zurückgibt, wohingegen `Object.fromEntries()` auch Symbol-Schlüssel-Zuordnungen erstellen kann.

> [!NOTE]
> Im Gegensatz zu {{jsxref("Array.from()")}} verwendet `Object.fromEntries()` nicht den Wert von `this`. Wenn es auf einem anderen Konstruktor aufgerufen wird, erzeugt es daher keine Objekte dieses Typs.

## Beispiele

### Konvertierung von einer Map zu einem Objekt

Mit `Object.fromEntries` können Sie von {{jsxref("Map")}} zu {{jsxref("Object")}} konvertieren:

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Konvertierung von einem Array zu einem Objekt

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

Mit `Object.fromEntries`, seiner Umkehrmethode {{jsxref("Object.entries()")}} und [Array-Manipulations-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) können Sie Objekte wie folgt transformieren:

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

- [Polyfill für `Object.fromEntries` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
