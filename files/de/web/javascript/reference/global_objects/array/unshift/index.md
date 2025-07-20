---
title: Array.prototype.unshift()
short-title: unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`unshift()`** Methode von {{jsxref("Array")}} Instanzen fügt die angegebenen Elemente am Anfang eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

{{InteractiveExample("JavaScript Demo: Array.prototype.unshift()")}}

```js interactive-example
const array = [1, 2, 3];

console.log(array.unshift(4, 5));
// Expected output: 5

console.log(array);
// Expected output: Array [4, 5, 1, 2, 3]
```

## Syntax

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

### Parameter

- `element1`, …, `elementN`
  - : Die Elemente, die dem Anfang des `arr` hinzugefügt werden sollen.

### Rückgabewert

Die neue {{jsxref("Array/length", "length")}} Eigenschaft des Objekts, auf das die Methode angewendet wurde.

## Beschreibung

Die `unshift()` Methode fügt die angegebenen Werte am Anfang eines array-ähnlichen Objekts ein.

{{jsxref("Array.prototype.push()")}} ähnelt dem Verhalten von `unshift()`, aber es wird am Ende eines Arrays angewendet.

Bitte beachten Sie, dass, wenn mehrere Elemente als Parameter übergeben werden, sie als Block am Anfang des Objekts in der exakt gleichen Reihenfolge eingefügt werden, in der sie als Parameter übergeben wurden. Daher ergibt ein einmaliges Aufrufen von `unshift()` mit `n` Argumenten **nicht** dasselbe Ergebnis wie `n` mal Aufrufen mit **1** Argument (zum Beispiel in einer Schleife).

Siehe Beispiel:

```js
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // resetting the array

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);
// [3, 2, 1, 4, 5, 6]
```

Die `unshift()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this` Wert eine `length` Eigenschaft und integer-integrierte Eigenschaften hat. Obwohl Zeichenfolgen auch array-ähnlich sind, ist diese Methode nicht geeignet, auf sie angewendet zu werden, da Zeichenfolgen unveränderlich sind.

## Beispiele

### Verwendung von unshift()

```js
const arr = [1, 2];

arr.unshift(0); // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

### Aufrufen von unshift() auf nicht-Array Objekten

Die `unshift()` Methode liest die `length` Eigenschaft von `this`. Sie verschiebt alle Indizes im Bereich von `0` bis `length - 1` nach rechts um die Anzahl der Argumente (indem ihre Werte um diese Zahl erhöht werden). Dann setzt sie jeden Index beginnend bei `0` mit den an `unshift()` übergebenen Argumenten. Schließlich setzt sie die `length` auf die vorherige Länge plus die Anzahl der hinzugefügten Elemente.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.unshift.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '0': 1, '1': 2, '4': 4, length: 5, unrelated: 'foo' }

const plainObj = {};
// There's no length property, so the length is 0
Array.prototype.unshift.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.unshift` in `core-js` mit Korrekturen dieser Methode](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.unshift`](https://www.npmjs.com/package/array.prototype.unshift)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
