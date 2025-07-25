---
title: Array.prototype.keys()
short-title: keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die Methode **`keys()`** von {{jsxref("Array")}} Instanzen gibt ein neues _[Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das die Schlüssel für jeden Index im Array enthält.

{{InteractiveExample("JavaScript Demo: Array.prototype.keys()")}}

```js interactive-example
const array = ["a", "b", "c"];
const iterator = array.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
```

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beschreibung

Wenn sie auf [Sparse Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet wird, iteriert die Methode `keys()` über leere Slots, als ob sie den Wert `undefined` hätten.

Die Methode `keys()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-indizierte Eigenschaften hat.

## Beispiele

### Verwendung von keys() bei Sparse Arrays

Im Gegensatz zu {{jsxref("Object.keys()")}}, das nur die im Array tatsächlich vorhandenen Schlüssel einschließt, ignoriert der `keys()`-Iterator keine Lücken, die fehlende Eigenschaften darstellen.

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### Aufrufen von keys() bei Nicht-Array-Objekten

Die Methode `keys()` liest die `length`-Eigenschaft von `this` und liefert dann alle ganzzahligen Indizes zwischen 0 und `length - 1`. Es erfolgt kein tatsächlicher Indexzugriff.

```js
const arrayLike = {
  length: 3,
};
for (const entry of Array.prototype.keys.call(arrayLike)) {
  console.log(entry);
}
// 0
// 1
// 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.keys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.keys`](https://www.npmjs.com/package/array.prototype.keys)
- Leitfaden zu [Indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.keys()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
