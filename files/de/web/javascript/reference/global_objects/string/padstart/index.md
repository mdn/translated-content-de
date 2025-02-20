---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`padStart()`**-Methode von {{jsxref("String")}}-Werten füllt diese Zeichenkette mit einer anderen Zeichenkette (mehrfach, falls notwendig) auf, bis die resultierende Zeichenkette die angegebene Länge erreicht. Das Auffüllen erfolgt am Anfang dieser Zeichenkette.

{{InteractiveExample("JavaScript Demo: String.padStart()")}}

```js interactive-example
const str1 = "5";

console.log(str1.padStart(2, "0"));
// Expected output: "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// Expected output: "************5581"
```

## Syntax

```js-nolint
padStart(targetLength)
padStart(targetLength, padString)
```

### Parameter

- `targetLength`
  - : Die Länge der resultierenden Zeichenkette, sobald der aktuelle `str` aufgefüllt wurde. Wenn der Wert kleiner oder gleich `str.length` ist, wird `str` unverändert zurückgegeben.
- `padString` {{optional_inline}}
  - : Die Zeichenkette, mit der der aktuelle `str` aufgefüllt wird. Wenn `padString` zu lang ist, um in die `targetLength` zu passen, wird es am Ende abgeschnitten. Der Standardwert ist das Unicode-Leerzeichen (U+0020).

### Rückgabewert

Eine {{jsxref("String")}} mit der angegebenen `targetLength`, wobei `padString` vom Anfang angewendet wurde.

## Beispiele

### Grundlegende Beispiele

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

### Umwandlung von Zahlen in Zeichenketten mit fester Breite

```js
// JavaScript version of: (unsigned)
// printf "%0*d" width num
function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "0");
}

const num = 123;
console.log(leftFillNum(num, 5)); // "00123"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.padStart` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padEnd()")}}
