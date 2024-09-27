---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
l10n:
  sourceCommit: 298721c3be86b8987d18ca3a6609124252b3378c
---

{{JSRef}}

Die **`at()`**-Methode der {{jsxref("String")}}-Werte nimmt einen Ganzzahlwert und gibt einen neuen {{jsxref("String")}} zurück, der aus der einzelnen UTF-16-Codeeinheit besteht, die sich am angegebenen Offset befindet. Diese Methode erlaubt positive und negative Ganzzahlen. Negative Ganzzahlen zählen vom letzten Zeichen des Strings rückwärts.

{{EmbedInteractiveExample("pages/js/string-at.html")}}

## Syntax

```js-nolint
at(index)
```

### Parameter

- `index`
  - : Der Index (Position) des String-Zeichens, das zurückgegeben werden soll. Unterstützt die relative Indizierung vom Ende des Strings, wenn ein negativer Index übergeben wird; d.h. wenn eine negative Zahl verwendet wird, wird das zurückgegebene Zeichen durch Rückwärtszählen vom Ende des Strings ermittelt.

### Rückgabewert

Ein {{jsxref("String")}}, der aus der einzelnen UTF-16-Codeeinheit besteht, die sich an der angegebenen Position befindet. Gibt {{jsxref("undefined")}} zurück, wenn der angegebene Index nicht gefunden werden kann.

## Beispiele

### Das letzte Zeichen eines Strings zurückgeben

Das folgende Beispiel bietet eine Funktion, die das letzte Zeichen eines angegebenen Strings zurückgibt.

```js
// A function which returns the last character of a given string
function returnLast(str) {
  return str.at(-1);
}

let invoiceRef = "myinvoice01";

console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "myinvoice02";

console.log(returnLast(invoiceRef)); // '2'
```

### Vergleich von Methoden

Hier vergleichen wir verschiedene Methoden, um das vorletzte (vor dem letzten) Zeichen eines {{jsxref("String")}} auszuwählen. Während alle unten genannten Methoden gültig sind, wird die Kürze und Lesbarkeit der `at()`-Methode hervorgehoben.

```js
const myString = "Every green bus drives fast.";

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // 't'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.at` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
