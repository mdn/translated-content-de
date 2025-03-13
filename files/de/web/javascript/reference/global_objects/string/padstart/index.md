---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`padStart()`**-Methode von {{jsxref("String")}}-Werten füllt diesen String mit einem anderen String (mehrfach, falls erforderlich) auf, bis der resultierende
String die angegebene Länge erreicht. Die Auffüllung erfolgt vom Anfang dieses Strings an.

{{InteractiveExample("JavaScript Demo: String.prototype.padStart()")}}

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
  - : Die Länge des resultierenden Strings, nachdem der aktuelle `str` aufgefüllt wurde. Wenn der Wert kleiner oder gleich der Länge von `str` ist, wird `str` unverändert zurückgegeben.
- `padString` {{optional_inline}}
  - : Der String, mit dem der aktuelle `str` aufgefüllt wird. Wenn `padString` zu lang ist, um innerhalb der `targetLength` zu bleiben, wird er vom Ende her abgeschnitten. Der Standardwert ist das Unicode-Leerzeichen (U+0020).

### Rückgabewert

Ein {{jsxref("String")}} der angegebenen `targetLength`, mit `padString` vom Anfang an angewendet.

## Beispiele

### Grundlegende Beispiele

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

### Feste Breite zur String-Nummer-Konvertierung

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
