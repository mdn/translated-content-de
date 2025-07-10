---
title: String.prototype.padEnd()
short-title: padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`padEnd()`**-Methode von {{jsxref("String")}}-Werten füllt diese Zeichenkette mit einer angegebenen Zeichenkette auf (falls nötig wiederholt und/oder gekürzt), sodass die resultierende Zeichenkette eine bestimmte Länge hat. Das Auffüllen erfolgt vom Ende dieser Zeichenkette aus.

{{InteractiveExample("JavaScript Demo: String.prototype.padEnd()")}}

```js interactive-example
const str1 = "Breaded Mushrooms";

console.log(str1.padEnd(25, "."));
// Expected output: "Breaded Mushrooms........"

const str2 = "200";

console.log(str2.padEnd(5));
// Expected output: "200  "
```

## Syntax

```js-nolint
padEnd(targetLength)
padEnd(targetLength, padString)
```

### Parameter

- `targetLength`
  - : Die Länge der resultierenden Zeichenkette, nachdem die aktuelle `str` aufgefüllt wurde. Wenn der Wert kleiner oder gleich `str.length` ist, wird `str` unverändert zurückgegeben.
- `padString` {{optional_inline}}
  - : Die Zeichenkette, mit der die aktuelle `str` aufgefüllt wird. Wenn `padString` zu lang ist, um innerhalb der `targetLength` zu bleiben, wird sie am Ende abgeschnitten. Der Standardwert ist das Leerzeichen (U+0020).

### Rückgabewert

Ein {{jsxref("String")}} der angegebenen `targetLength` mit `padString` am Ende angewendet.

## Beispiele

### Verwendung von String.prototype.padEnd()

```js
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.padEnd` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.padEnd`](https://www.npmjs.com/package/string.prototype.padend)
- {{jsxref("String.prototype.padStart()")}}
