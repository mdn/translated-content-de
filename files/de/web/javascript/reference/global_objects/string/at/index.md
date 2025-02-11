---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`at()`**-Methode von {{jsxref("String")}}-Werten nimmt einen ganzzahligen Wert entgegen und gibt ein neues {{jsxref("String")}} zurück, das aus der einzelnen UTF-16-Codeeinheit besteht, die sich an dem angegebenen Offset befindet. Diese Methode erlaubt sowohl positive als auch negative Ganzzahlen. Negative Ganzzahlen zählen rückwärts, beginnend vom letzten Zeichen des Strings.

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
  - : Der Index (die Position) des Zeichen im String, das zurückgegeben werden soll. Unterstützt relatives Indizieren vom Ende des Strings, wenn ein negativer Index übergeben wird; d. h. wenn eine negative Zahl verwendet wird, wird das Zeichen gefunden, indem vom Ende des Strings rückwärts gezählt wird.

### Rückgabewert

Ein {{jsxref("String")}}, das aus der einzelnen UTF-16-Codeeinheit besteht, die an der angegebenen Position gefunden wurde. Gibt {{jsxref("undefined")}} zurück, wenn der angegebene Index nicht gefunden werden kann.

## Beispiele

### Das letzte Zeichen eines Strings zurückgeben

Das folgende Beispiel zeigt eine Funktion, die das letzte Zeichen eines angegebenen Strings zurückgibt.

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

### Vergleich der Methoden

Hier vergleichen wir verschiedene Möglichkeiten, das vorletzte (letzte, aber eins) Zeichen eines {{jsxref("String")}} auszuwählen. Während alle unten aufgeführten Methoden gültig sind, zeigt dies die Prägnanz und Lesbarkeit der `at()`-Methode.

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
