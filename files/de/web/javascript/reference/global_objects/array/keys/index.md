---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`keys()`**-Methode von {{jsxref("Array")}}-Instanzen gibt ein neues [Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel für jeden Index im Array enthält.

{{EmbedInteractiveExample("pages/js/array-keys.html")}}

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beschreibung

Wenn die Methode auf [sparse Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet wird, iteriert die `keys()`-Methode über leere Stellen, als ob sie den Wert `undefined` hätten.

Die `keys()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-schlüsselgestützte Eigenschaften hat.

## Beispiele

### Verwendung von keys() auf sparse Arrays

Im Gegensatz zu {{jsxref("Object.keys()")}}, das nur Schlüssel einschließt, die tatsächlich im Array existieren, ignoriert der `keys()`-Iterator keine Lücken, die fehlende Eigenschaften darstellen.

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### Aufrufen von keys() auf Nicht-Array-Objekten

Die `keys()`-Methode liest die `length`-Eigenschaft von `this` und gibt dann alle Ganzzahl-Indizes zwischen 0 und `length - 1` aus. Kein Indexzugriff findet tatsächlich statt.

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
- Leitfaden zu [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.keys()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
