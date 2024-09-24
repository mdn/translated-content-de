---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`unshift()`**-Methode von {{jsxref("Array")}}-Instanzen fügt die angegebenen Elemente am Anfang eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

{{EmbedInteractiveExample("pages/js/array-unshift.html")}}

## Syntax

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

### Parameter

- `element1`, …, `elementN`
  - : Die Elemente, die am Anfang des `arr` eingefügt werden sollen.

### Rückgabewert

Die neue {{jsxref("Array/length", "length")}}-Eigenschaft des Objekts, auf dem die Methode aufgerufen wurde.

## Beschreibung

Die `unshift()`-Methode fügt die angegebenen Werte am Anfang eines array-ähnlichen Objekts hinzu.

{{jsxref("Array.prototype.push()")}} zeigt ein ähnliches Verhalten wie `unshift()`, wird jedoch am Ende eines Arrays angewendet.

Bitte beachten Sie, dass, wenn mehrere Elemente als Parameter übergeben werden, diese in einem Stück am Anfang des Objekts in der gleichen Reihenfolge eingefügt werden, wie sie als Parameter übergeben wurden. Daher liefern sowohl ein einmaliger `unshift()`-Aufruf mit `n` Argumenten als auch `n` Aufrufe mit **1** Argument (zum Beispiel in einer Schleife) nicht dieselben Ergebnisse.

Siehe Beispiel:

```js
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // Array zurücksetzen

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);
// [3, 2, 1, 4, 5, 6]
```

Die `unshift()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüssel-Eigenschaften besitzt. Obwohl Zeichenfolgen ebenfalls array-ähnlich sind, eignet sich diese Methode nicht für deren Anwendung, da Zeichenfolgen unveränderlich sind.

## Beispiele

### Verwendung von unshift()

```js
const arr = [1, 2];

arr.unshift(0); // Das Ergebnis des Aufrufs ist 3, was die neue Länge des Arrays ist
// arr ist [0, 1, 2]

arr.unshift(-2, -1); // Die neue Länge des Arrays ist 5
// arr ist [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // Die neue Länge des Arrays ist 6
// arr ist [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // Die neue Länge des Arrays ist 8
// arr ist [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

### Aufrufen von unshift() auf Nicht-Array-Objekten

Die `unshift()`-Methode liest die `length`-Eigenschaft von `this`. Sie verschiebt alle Indizes im Bereich von `0` bis `length - 1` nach rechts um die Anzahl der Argumente (indem deren Werte um diese Anzahl erhöht werden). Dann setzt sie jeden Index beginnend bei `0` mit den an `unshift()` übergebenen Argumenten. Schließlich wird die `length` auf die vorherige Länge plus die Anzahl der hinzugefügten Elemente gesetzt.

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
// Es gibt keine Länge-Eigenschaft, also ist die Länge 0
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
- [Anleitung zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
