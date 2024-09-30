---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

Die **`padEnd()`**-Methode von {{jsxref("String")}}-Werten füllt diesen String mit einem angegebenen String (bei Bedarf wiederholt), so dass der resultierende String eine bestimmte Länge erreicht. Das Padding wird am Ende dieses Strings angewendet.

{{EmbedInteractiveExample("pages/js/string-padend.html")}}

## Syntax

```js-nolint
padEnd(targetLength)
padEnd(targetLength, padString)
```

### Parameter

- `targetLength`
  - : Die Länge des resultierenden Strings, nachdem der aktuelle `str` gepolstert wurde. Wenn der Wert kleiner oder gleich `str.length` ist, wird der aktuelle String unverändert zurückgegeben.
- `padString` {{optional_inline}}
  - : Der String, mit dem der aktuelle `str` aufgefüllt werden soll. Wenn `padString` zu lang ist, um innerhalb `targetLength` zu bleiben, wird er gekürzt: Für links-nach-rechts-Sprachen wird der linke Teil und für rechts-nach-links-Sprachen der rechte Teil angewendet. Der Standardwert für diesen Parameter ist " " (`U+0020`).

### Rückgabewert

Ein {{jsxref("String")}} der angegebenen `targetLength` mit dem `padString`, der am Ende des aktuellen `str` angewendet wird.

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
