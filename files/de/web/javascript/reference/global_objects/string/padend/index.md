---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`padEnd()`**-Methode von {{jsxref("String")}}-Werten füllt diesen String mit einem angegebenen
String (bei Bedarf wiederholt) auf, sodass der resultierende String eine bestimmte Länge erreicht. Das
Auffüllen wird vom Ende dieses Strings aus angewendet.

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
  - : Die Länge des resultierenden Strings, nachdem der aktuelle `str` aufgefüllt wurde. Wenn der Wert kleiner oder gleich `str.length` ist, wird der
    aktuelle String unverändert zurückgegeben.
- `padString` {{optional_inline}}
  - : Der String, mit dem der aktuelle `str` aufgefüllt wird. Wenn
    `padString` zu lang ist, um innerhalb
    `targetLength` zu bleiben, wird er abgeschnitten: Für von links nach rechts
    geschriebene Sprachen wird der linkeste Teil angewendet und für von rechts nach links geschriebene Sprachen der rechteste Teil. Der Standardwert für diesen Parameter ist " "
    (`U+0020`).

### Rückgabewert

Ein {{jsxref("String")}} der angegebenen `targetLength` mit dem
`padString`, der am Ende des aktuellen
`str` angewendet wurde.

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
- [es-shims Polyfill von `String.prototype.padEnd`](https://www.npmjs.com/package/string.prototype.padend)
- {{jsxref("String.prototype.padStart()")}}
