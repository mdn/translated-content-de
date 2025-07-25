---
title: String.prototype.padStart()
short-title: padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`padStart()`** Methode von {{jsxref("String")}}-Werten füllt diesen String mit einem angegebenen String (bei Bedarf wiederholt und/oder abgeschnitten), so dass der resultierende String eine bestimmte Länge hat. Die Auffüllung wird vom Anfang dieses Strings angewendet.

{{InteractiveExample("JavaScript Demo: String.prototype.padStart()")}}

```js interactive-example
const str = "5";

console.log(str.padStart(2, "0"));
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
  - : Die Länge des resultierenden Strings, nachdem der aktuelle `str` aufgefüllt wurde. Wenn der Wert kleiner oder gleich `str.length` ist, wird `str` unverändert zurückgegeben.
- `padString` {{optional_inline}}
  - : Der String, mit dem der aktuelle `str` aufgefüllt wird. Wenn `padString` zu lang ist, um innerhalb `targetLength` zu bleiben, wird er am Ende abgeschnitten. Der Standardwert ist das Leerzeichen-Zeichen (U+0020).

### Rückgabewert

Ein {{jsxref("String")}} der angegebenen `targetLength` mit `padString`, der am Anfang angewendet wird.

## Beispiele

### Verwendung von String.prototype.padStart()

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

### Konvertierung von Stringnummern mit fester Breite

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
- [es-shims Polyfill von `String.prototype.padStart`](https://www.npmjs.com/package/string.prototype.padstart)
- {{jsxref("String.prototype.padEnd()")}}
