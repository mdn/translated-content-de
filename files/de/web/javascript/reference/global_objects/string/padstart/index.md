---
title: String.prototype.padStart()
short-title: padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`padStart()`** von {{jsxref("String")}}-Werten füllt diese Zeichenfolge mit einer angegebenen Zeichenfolge auf (die bei Bedarf wiederholt und/oder gekürzt wird), sodass die resultierende Zeichenfolge eine bestimmte Länge hat. Die Auffüllung erfolgt am Anfang dieser Zeichenfolge.

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
  - : Die Länge der resultierenden Zeichenfolge, nachdem das aktuelle `str` aufgefüllt wurde. Ist der Wert kleiner oder gleich `str.length`, wird `str` unverändert zurückgegeben.
- `padString` {{optional_inline}}
  - : Die Zeichenfolge, mit der das aktuelle `str` aufgefüllt wird. Ist `padString` zu lang, um innerhalb von `targetLength` zu bleiben, wird es am Ende gekürzt. Der Standardwert ist das Leerzeichen (U+0020).

### Rückgabewert

Ein {{jsxref("String")}} der angegebenen Länge `targetLength`, an dessen Anfang `padString` hinzugefügt wurde.

## Beispiele

### Verwendung von String.prototype.padStart()

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

### Umwandlung von Zahlen in Zeichenfolgen mit fester Breite

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

- [Polyfill für `String.prototype.padStart` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.padStart` von es-shims](https://www.npmjs.com/package/string.prototype.padstart)
- {{jsxref("String.prototype.padEnd()")}}
