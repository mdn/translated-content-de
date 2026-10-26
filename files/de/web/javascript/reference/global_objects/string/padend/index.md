---
title: String.prototype.padEnd()
short-title: padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`padEnd()`** von {{jsxref("String")}}-Werten füllt diesen String mit einem angegebenen String auf (der bei Bedarf wiederholt und/oder gekürzt wird), sodass der resultierende String eine bestimmte Länge hat. Die Zeichen werden am Ende dieses Strings angefügt.

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
  - : Die Länge des resultierenden Strings, nachdem der aktuelle `str` aufgefüllt wurde. Ist der Wert kleiner oder gleich `str.length`, wird `str` unverändert zurückgegeben.
- `padString` {{optional_inline}}
  - : Der String, mit dem der aktuelle `str` aufgefüllt wird. Wenn `padString` zu lang ist, um innerhalb von `targetLength` zu bleiben, wird er am Ende gekürzt. Der Standardwert ist das Leerzeichen (U+0020).

### Rückgabewert

Ein {{jsxref("String")}} mit der angegebenen Länge `targetLength`, an dessen Ende `padString` angefügt wurde.

## Beispiele

### String.prototype.padEnd() verwenden

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

- [Polyfill für `String.prototype.padEnd` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.padEnd` von es-shims](https://www.npmjs.com/package/string.prototype.padend)
- {{jsxref("String.prototype.padStart()")}}
