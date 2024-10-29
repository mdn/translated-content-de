---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{JSRef}}

Die **`at()`** Methode von {{jsxref("String")}}-Werten nimmt einen ganzzahligen Wert und gibt einen neuen {{jsxref("String")}} zurück, der aus der einzelnen UTF-16-Codeeinheit besteht, die am angegebenen Offset positioniert ist. Diese Methode erlaubt positive und negative Ganzzahlen. Negative Ganzzahlen zählen rückwärts ab dem letzten Zeichen der Zeichenkette.

{{EmbedInteractiveExample("pages/js/string-at.html")}}

## Syntax

```js-nolint
at(index)
```

### Parameter

- `index`
  - : Der Index (die Position) des Zeichenkettenzeichens, das zurückgegeben werden soll. Unterstützt relatives Indizieren vom Ende der Zeichenkette, wenn ein negativer Index übergeben wird; d. h., wenn eine negative Zahl verwendet wird, wird das zurückgegebene Zeichen durch Rückzählen vom Ende der Zeichenkette gefunden.

### Rückgabewert

Ein {{jsxref("String")}}, der aus der einzelnen UTF-16-Codeeinheit besteht, die an der angegebenen Position vorhanden ist. Gibt {{jsxref("undefined")}} zurück, wenn der angegebene Index nicht gefunden werden kann.

## Beispiele

### Das letzte Zeichen einer Zeichenkette zurückgeben

Das folgende Beispiel bietet eine Funktion, die das letzte Zeichen in einer angegebenen Zeichenkette zurückgibt.

```js
// A function which returns the last character of a given string
function returnLast(str) {
  return str.at(-1);
}

let invoiceRef = "my-invoice01";

console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "my-invoice02";

console.log(returnLast(invoiceRef)); // '2'
```

### Vergleich von Methoden

Hier vergleichen wir verschiedene Möglichkeiten, das vorletzte Zeichen einer {{jsxref("String")}} auszuwählen. Während alle untenstehenden Methoden gültig sind, wird die Prägnanz und Lesbarkeit der `at()`-Methode hervorgehoben.

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
