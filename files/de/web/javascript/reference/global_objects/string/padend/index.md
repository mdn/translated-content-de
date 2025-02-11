---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`padEnd()`** von {{jsxref("String")}}-Werten füllt diese Zeichenkette mit einer angegebenen Zeichenkette (bei Bedarf wiederholt) auf, sodass die resultierende Zeichenkette eine bestimmte Länge erreicht. Die Auffüllung erfolgt vom Ende dieser Zeichenkette aus.

{{InteractiveExample("JavaScript Demo: String.padEnd()")}}

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
  - : Die Länge der resultierenden Zeichenkette, nachdem die aktuelle `str` aufgefüllt wurde. Wenn der Wert kleiner oder gleich `str.length` ist, wird die aktuelle Zeichenkette unverändert zurückgegeben.
- `padString` {{optional_inline}}
  - : Die Zeichenkette, mit der die aktuelle `str` aufgefüllt wird. Falls `padString` zu lang ist, um innerhalb von `targetLength` zu bleiben, wird sie abgeschnitten: Für Links-nach-Rechts-Sprachen wird der linke Teil und für Rechts-nach-Links-Sprachen der rechte Teil angewendet. Der Standardwert für diesen Parameter ist " " (`U+0020`).

### Rückgabewert

Ein {{jsxref("String")}} der spezifizierten `targetLength` mit der `padString`, die am Ende der aktuellen `str` angewendet wurde.

## Beispiele

### Verwendung von padEnd

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
- {{jsxref("String.prototype.padStart()")}}
