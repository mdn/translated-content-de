---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

Die **`padEnd()`**-Methode von {{jsxref("String")}}-Objekten füllt diesen String mit einem angegebenen String auf (bei Bedarf wiederholt), sodass der resultierende String eine bestimmte Länge erreicht. Das Auffüllen wird am Ende dieses Strings angewendet.

{{EmbedInteractiveExample("pages/js/string-padend.html")}}

## Syntax

```js-nolint
padEnd(targetLength)
padEnd(targetLength, padString)
```

### Parameter

- `targetLength`
  - : Die Länge des resultierenden Strings, nachdem der aktuelle `str` aufgefüllt wurde. Wenn der Wert kleiner oder gleich `str.length` ist, wird der aktuelle String unverändert zurückgegeben.
- `padString` {{optional_inline}}
  - : Der String, mit dem der aktuelle `str` aufgefüllt wird. Wenn `padString` zu lang ist, um innerhalb `targetLength` zu bleiben, wird es abgeschnitten: Für von links nach rechts verlaufende Sprachen wird der linkeste Teil und für von rechts nach links verlaufende Sprachen der rechteste angewendet. Der Standardwert für diesen Parameter ist " " (`U+0020`).

### Rückgabewert

Ein {{jsxref("String")}} der angegebenen `targetLength` mit dem `padString`, der am Ende des aktuellen `str` angewendet wurde.

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
