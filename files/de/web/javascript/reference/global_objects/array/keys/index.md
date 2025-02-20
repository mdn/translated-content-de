---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`keys()`**-Methode von {{jsxref("Array")}}-Instanzen gibt ein neues _[Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das die Schlüssel für jedes Index im Array enthält.

{{InteractiveExample("JavaScript Demo: Array.keys()")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const iterator = array1.keys();

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

Wenn sie auf [sparse Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet wird, iteriert die `keys()`-Methode über leere Stellen, als ob sie den Wert `undefined` hätten.

Die `keys()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und integerbasierte Schlüssel-Eigenschaften hat.

## Beispiele

### Verwendung von keys() bei sparse Arrays

Im Gegensatz zu {{jsxref("Object.keys()")}}, das nur Schlüssel einschließt, die tatsächlich im Array existieren, ignoriert der `keys()`-Iterator keine Lücken, die fehlende Eigenschaften repräsentieren.

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### Aufruf von keys() bei Nicht-Array-Objekten

Die `keys()`-Methode liest die `length`-Eigenschaft von `this` aus und liefert dann alle ganzzahligen Indizes zwischen 0 und `length - 1`. Es erfolgt kein tatsächlicher Zugriff auf Indizes.

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
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.keys()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
