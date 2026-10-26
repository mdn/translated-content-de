---
title: String.prototype.isWellFormed()
short-title: isWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/isWellFormed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`isWellFormed()`** von {{jsxref("String")}}-Werten gibt einen booleschen Wert zurück, der angibt, ob dieser String [ungepaarte Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Syntax

```js-nolint
isWellFormed()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn dieser String keine ungepaarten Surrogate enthält, andernfalls `false`.

## Beschreibung

Strings in JavaScript sind UTF-16-kodiert. Bei der UTF-16-Kodierung gibt es das Konzept der _Surrogatpaare_, das im Abschnitt [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) ausführlich erläutert wird.

Mit `isWellFormed()` können Sie prüfen, ob ein String wohlgeformt ist (d.h. keine ungepaarten Surrogate enthält). Im Vergleich zu einer eigenen Implementierung ist `isWellFormed()` effizienter, da JavaScript-Engines direkt auf die interne Darstellung von Strings zugreifen können. Wenn Sie einen String in einen wohlgeformten String umwandeln müssen, verwenden Sie die Methode {{jsxref("String/toWellFormed", "toWellFormed()")}}. Mit `isWellFormed()` können Sie nicht wohlgeformte Strings anders behandeln als wohlgeformte Strings, beispielsweise indem Sie einen Fehler auslösen oder den String als ungültig kennzeichnen.

## Beispiele

### Verwendung von isWellFormed()

```js
const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.isWellFormed());
}
// Logs:
// false
// false
// false
// false
// true
// true
```

### Vermeiden von Fehlern in encodeURI()

{{jsxref("encodeURI")}} löst einen Fehler aus, wenn der übergebene String nicht wohlgeformt ist. Dies lässt sich vermeiden, indem Sie den String mit `isWellFormed()` prüfen, bevor Sie ihn an `encodeURI()` übergeben.

```js
const illFormed = "https://example.com/search?q=\uD800";

try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

if (illFormed.isWellFormed()) {
  console.log(encodeURI(illFormed));
} else {
  console.warn("Ill-formed strings encountered."); // Ill-formed strings encountered.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.isWellFormed` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [es-shims-Polyfill für `String.prototype.isWellFormed`](https://www.npmjs.com/package/string.prototype.iswellformed)
- {{jsxref("String.prototype.toWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
