---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`at()`** Methode von {{jsxref("String")}}-Werten nimmt einen Integerwert und gibt einen neuen {{jsxref("String")}} zurück, der die einzelne UTF-16-Code-Einheit enthält, die an der angegebenen Position zu finden ist. Diese Methode erlaubt sowohl positive als auch negative Ganzzahlen. Negative Ganzzahlen zählen rückwärts ab dem letzten Zeichen des Strings.

{{InteractiveExample("JavaScript Demo: String.at()")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"
```

## Syntax

```js-nolint
at(index)
```

### Parameter

- `index`
  - : Der Index (die Position) des Zeichen im String, das zurückgegeben werden soll. Unterstützt relatives Indexieren vom Ende des Strings, wenn ein negativer Index übergeben wird; d.h. wenn eine negative Zahl verwendet wird, wird das zurückgegebene Zeichen ermittelt, indem vom Ende des Strings rückwärts gezählt wird.

### Rückgabewert

Ein {{jsxref("String")}}, der die einzelne UTF-16-Code-Einheit an der angegebenen Position enthält. Gibt {{jsxref("undefined")}} zurück, wenn der angegebene Index nicht gefunden werden kann.

## Beispiele

### Das letzte Zeichen eines Strings zurückgeben

Das folgende Beispiel bietet eine Funktion, die das letzte im angegebenen String gefundene Zeichen zurückgibt.

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

Hier vergleichen wir verschiedene Möglichkeiten, um das vorletzte (das letzte, aber eines) Zeichen eines {{jsxref("String")}} auszuwählen. Auch wenn alle untenstehenden Methoden gültig sind, wird die Kürze und Lesbarkeit der `at()`-Methode hervorgehoben.

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
- [es-shims Polyfill von `String.prototype.at`](https://www.npmjs.com/package/string.prototype.at)
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
