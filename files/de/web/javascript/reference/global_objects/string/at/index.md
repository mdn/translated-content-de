---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`at()`** Methode von {{jsxref("String")}}-Werten nimmt einen ganzzahligen Wert und gibt eine neue {{jsxref("String")}} zurück, die aus der einzelnen UTF-16-Codeeinheit besteht, die sich an dem angegebenen Offset befindet. Diese Methode ermöglicht sowohl positive als auch negative Ganzzahlen. Negative Ganzzahlen zählen rückwärts vom letzten Zeichen der Zeichenkette.

{{InteractiveExample("JavaScript Demo: String.prototype.at()")}}

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
  - : Der Index (Position) des Zeichenkettenzeichens, das zurückgegeben werden soll. Unterstützt relatives Indexieren vom Ende der Zeichenkette, wenn ein negativer Index angegeben wird; d.h. wenn eine negative Zahl verwendet wird, wird das zurückgegebene Zeichen durch Zurückzählen vom Ende der Zeichenkette gefunden.

### Rückgabewert

Eine {{jsxref("String")}}, die aus der einzelnen UTF-16-Codeeinheit besteht, die sich an der angegebenen Position befindet. Gibt {{jsxref("undefined")}} zurück, wenn der angegebene Index nicht gefunden werden kann.

## Beispiele

### Das letzte Zeichen einer Zeichenkette zurückgeben

Das folgende Beispiel stellt eine Funktion bereit, die das letzte Zeichen in einer angegebenen Zeichenkette zurückgibt.

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

Hier vergleichen wir verschiedene Methoden, um das vorletzte (das letzte bis auf eines) Zeichen einer {{jsxref("String")}} zu wählen. Während alle untenstehenden Methoden gültig sind, zeigt es die Prägnanz und Lesbarkeit der `at()` Methode auf.

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
