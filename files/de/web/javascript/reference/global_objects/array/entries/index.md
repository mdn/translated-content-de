---
title: Array.prototype.entries()
short-title: entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`entries()`** Methode von {{jsxref("Array")}} Instanzen gibt ein neues _[Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index im Array enthält.

{{InteractiveExample("JavaScript Demo: Array.prototype.entries()")}}

```js interactive-example
const array = ["a", "b", "c"];

const iterator = array.entries();

console.log(iterator.next().value);
// Expected output: Array [0, "a"]

console.log(iterator.next().value);
// Expected output: Array [1, "b"]
```

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beschreibung

Wird die `entries()` Methode auf [löchrige Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet, iteriert sie leere Felder, als ob sie den Wert `undefined` hätten.

Die `entries()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-basierte Eigenschaften hat.

## Beispiele

### Iterieren mit Index und Element

```js
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### Verwendung einer for...of Schleife

```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

### Iterieren von löchrigen Arrays

`entries()` wird leere Felder besuchen, als ob sie `undefined` wären.

```js
for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']
```

### Aufrufen von entries() auf Nicht-Array-Objekten

Die `entries()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl ist, die kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // ignored by entries() since length is 3
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.entries` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.entries`](https://www.npmjs.com/package/array.prototype.entries)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.entries()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
