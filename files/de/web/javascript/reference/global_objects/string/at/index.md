---
title: String.prototype.at()
short-title: at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`at()`** von {{jsxref("String")}}-Werten nimmt eine Ganzzahl entgegen und gibt einen neuen {{jsxref("String")}} zurück, der aus der einzelnen UTF-16-Codeeinheit an der angegebenen Position besteht. Die Methode akzeptiert positive und negative Ganzzahlen. Bei negativen Ganzzahlen wird vom letzten Zeichen des Strings rückwärts gezählt.

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
  - : Der Index (die Position) des zurückzugebenden Zeichens im String. Ein negativer Index ermöglicht die relative Indizierung vom Ende des Strings aus; das Zeichen wird dann durch Rückwärtszählen vom Ende des Strings ermittelt.

### Rückgabewert

Ein {{jsxref("String")}}, der aus der einzelnen UTF-16-Codeeinheit an der angegebenen Position besteht. Gibt {{jsxref("undefined")}} zurück, wenn der angegebene Index nicht gefunden werden kann.

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

### Methoden vergleichen

Hier vergleichen wir verschiedene Möglichkeiten, das vorletzte Zeichen eines {{jsxref("String")}} auszuwählen. Alle folgenden Methoden sind gültig; der Vergleich verdeutlicht jedoch, wie knapp und gut lesbar die Methode `at()` ist.

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

- [Polyfill für `String.prototype.at` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.at` von es-shims](https://www.npmjs.com/package/string.prototype.at)
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
