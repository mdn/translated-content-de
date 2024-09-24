---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

Die **`padStart()`**-Methode von {{jsxref("String")}}-Werten füllt diesen String mit einem anderen String (mehrmals, falls nötig) auf, bis die resultierende Länge erreicht ist. Die Auffüllung wird vom Start dieses Strings angewendet.

{{EmbedInteractiveExample("pages/js/string-padstart.html")}}

## Syntax

```js-nolint
padStart(targetLength)
padStart(targetLength, padString)
```

### Parameter

- `targetLength`
  - : Die Länge des resultierenden Strings, nachdem der aktuelle `str`
    aufgefüllt wurde. Wenn der Wert kleiner oder gleich `str.length` ist, wird `str` unverändert zurückgegeben.
- `padString` {{optional_inline}}
  - : Der String, mit dem der aktuelle `str` aufgefüllt werden soll. Wenn
    `padString` zu lang ist, um innerhalb der
    `targetLength` zu bleiben, wird es vom Ende her abgeschnitten.
    Der Standardwert ist das Unicode-„Leerzeichen“-Zeichen (U+0020).

### Rückgabewert

Ein {{jsxref("String")}} der angegebenen `targetLength`, der
`padString` vom Anfang anwendet.

## Beispiele

### Grundlegende Beispiele

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

### Feste Breite bei der Zahlenkonvertierung

```js
// JavaScript-Version von: (unsigned)
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
