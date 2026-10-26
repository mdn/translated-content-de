---
title: Array.prototype.keys()
short-title: keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`keys()`** von {{jsxref("Array")}}-Instanzen gibt ein neues _[Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das die Schlüssel für jeden Index im Array enthält.

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

Bei [Arrays mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) durchläuft die Methode `keys()` auch leere Positionen, als hätten sie den Wert `undefined`.

Die Methode `keys()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften hat.

## Beispiele

### keys() bei Arrays mit Lücken verwenden

Anders als {{jsxref("Object.keys()")}}, das nur tatsächlich im Array vorhandene Schlüssel berücksichtigt, ignoriert der `keys()`-Iterator keine Lücken, die fehlende Eigenschaften darstellen.

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### keys() für Objekte aufrufen, die keine Arrays sind

Die Methode `keys()` liest die `length`-Eigenschaft von `this` und gibt anschließend alle ganzzahligen Indizes zwischen 0 und `length - 1` aus. Auf die Werte an diesen Indizes wird dabei nicht zugegriffen.

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

- [Polyfill für `Array.prototype.keys` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.keys` von es-shims](https://www.npmjs.com/package/array.prototype.keys)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.keys()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
