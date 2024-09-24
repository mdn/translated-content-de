---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
l10n:
  sourceCommit: 298721c3be86b8987d18ca3a6609124252b3378c
---

{{JSRef}}

Die **`at()`**-Methode von {{jsxref("String")}}-Werten nimmt einen ganzzahligen Wert und gibt einen neuen {{jsxref("String")}} zurück, der aus der einzelnen UTF-16-Codeeinheit besteht, die an dem angegebenen Offset zu finden ist. Diese Methode erlaubt sowohl positive als auch negative Ganzzahlen. Negative Ganzzahlen zählen rückwärts vom letzten Zeichen des Strings.

{{EmbedInteractiveExample("pages/js/string-at.html")}}

## Syntax

```js-nolint
at(index)
```

### Parameter

- `index`
  - : Der Index (Position) des String-Zeichens, das zurückgegeben werden soll. Unterstützt relatives Indizieren vom Ende des Strings, wenn ein negativer Index übergeben wird; d.h. wenn eine negative Zahl verwendet wird, wird das zurückgegebene Zeichen durch Rückwärtszählen vom Ende des Strings gefunden.

### Rückgabewert

Ein {{jsxref("String")}} bestehend aus der einzelnen UTF-16-Codeeinheit, die an der angegebenen Position zu finden ist. Gibt {{jsxref("undefined")}} zurück, wenn der angegebene Index nicht gefunden werden kann.

## Beispiele

### Rückgabe des letzten Zeichens eines Strings

Das folgende Beispiel stellt eine Funktion bereit, die das letzte Zeichen in einem angegebenen String zurückgibt.

```js
// Eine Funktion, die das letzte Zeichen eines gegebenen Strings zurückgibt
function returnLast(str) {
  return str.at(-1);
}

let invoiceRef = "myinvoice01";

console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "myinvoice02";

console.log(returnLast(invoiceRef)); // '2'
```

### Methoden vergleichen

Hier vergleichen wir verschiedene Möglichkeiten, um das vorletzte (zweitletzte) Zeichen eines {{jsxref("String")}} auszuwählen. Während alle unten stehenden Methoden gültig sind, wird die Prägnanz und Lesbarkeit der `at()`-Methode hervorgehoben.

```js
const myString = "Every green bus drives fast.";

// Nutzung der length-Eigenschaft und der charAt()-Methode
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// Nutzung der slice()-Methode
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// Nutzung der at()-Methode
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
