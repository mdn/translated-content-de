---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Object.fromEntries()`** wandelt eine Liste von Schlüssel-Wert-Paaren in ein Objekt um.

{{EmbedInteractiveExample("pages/js/object-fromentries.html")}}

## Syntax

```js-nolint
Object.fromEntries(iterable)
```

### Parameter

- `iterable`

  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), wie ein {{jsxref("Array")}} oder {{jsxref("Map")}}, das eine Liste von Objekten enthält. Jedes Objekt sollte zwei Eigenschaften haben:

    - `0`
      - : Ein String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), das den Eigenschaftsschlüssel repräsentiert.
    - `1`
      - : Der Eigenschaftswert.

    Typischerweise wird dieses Objekt als ein Array mit zwei Elementen implementiert, wobei das erste Element der Eigenschaftsschlüssel und das zweite Element der Eigenschaftswert ist.

### Rückgabewert

Ein neues Objekt, dessen Eigenschaften durch die Einträge des Iterables gegeben sind.

## Beschreibung

Die Methode `Object.fromEntries()` nimmt eine Liste von Schlüssel-Wert-Paaren und gibt ein neues Objekt zurück, dessen Eigenschaften durch diese Einträge gegeben sind. Das Argument `iterable` sollte ein Objekt sein, das eine `[Symbol.iterator]()`-Methode implementiert. Die Methode gibt ein Iterator-Objekt zurück, das array-ähnliche Objekte mit zwei Elementen erzeugt. Das erste Element ist ein Wert, der als Eigenschaftsschlüssel verwendet wird, und das zweite Element ist der Wert, der mit diesem Eigenschaftsschlüssel verbunden wird.

`Object.fromEntries()` führt das Umgekehrte von {{jsxref("Object.entries()")}} aus, außer dass `Object.entries()` nur Eigenschaften mit String-Schlüssel zurückgibt, während `Object.fromEntries()` auch Eigenschaften mit Symbol-Schlüssel erstellen kann.

> [!NOTE]
> Im Gegensatz zu {{jsxref("Array.from()")}} verwendet `Object.fromEntries()` nicht den Wert von `this`, daher erzeugt der Aufruf auf einem anderen Konstruktor keine Objekte dieses Typs.

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

Mit `Object.fromEntries`, seiner Umkehrmethode {{jsxref("Object.entries()")}} und [Array-Methoden zur Manipulation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) können Sie Objekte wie folgt transformieren:

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
