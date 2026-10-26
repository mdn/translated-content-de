---
title: Array.prototype.unshift()
short-title: unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`unshift()`** von {{jsxref("Array")}}-Instanzen fügt die angegebenen Elemente am Anfang eines Arrays ein und gibt die neue Länge des Arrays zurück.

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
  - : Die Elemente, die am Anfang von `arr` eingefügt werden sollen.

### Rückgabewert

Der neue Wert der Eigenschaft {{jsxref("Array/length", "length")}} des Objekts, für das die Methode aufgerufen wurde.

## Beschreibung

Die Methode `unshift()` fügt die angegebenen Werte am Anfang eines array-ähnlichen Objekts ein.

{{jsxref("Array.prototype.push()")}} verhält sich ähnlich wie `unshift()`, fügt die Werte jedoch am Ende eines Arrays ein.

Wenn mehrere Elemente als Parameter übergeben werden, werden sie als Gruppe am Anfang des Objekts eingefügt – in genau der Reihenfolge, in der sie übergeben wurden. Daher führen ein **einmaliger** Aufruf von `unshift()` mit `n` Argumenten und `n` Aufrufe mit jeweils **1** Argument (beispielsweise in einer Schleife) nicht zum selben Ergebnis.

Das folgende Beispiel zeigt den Unterschied:

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

Die Methode `unshift()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt. Obwohl Strings ebenfalls array-ähnlich sind, eignet sich diese Methode nicht für sie, da Strings unveränderlich sind.

## Beispiele

### unshift() verwenden

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

### unshift() für Objekte aufrufen, die keine Arrays sind

Die Methode `unshift()` liest die `length`-Eigenschaft von `this`. Sie verschiebt alle Indizes im Bereich von `0` bis `length - 1` um die Anzahl der Argumente nach rechts (indem sie deren Werte um diese Anzahl erhöht). Anschließend belegt sie die Indizes ab `0` mit den an `unshift()` übergebenen Argumenten. Zuletzt setzt sie `length` auf die bisherige Länge zuzüglich der Anzahl der vorangestellten Elemente.

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

- [Polyfill für `Array.prototype.unshift` in `core-js` mit Korrekturen für diese Methode](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.unshift` von es-shims](https://www.npmjs.com/package/array.prototype.unshift)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
