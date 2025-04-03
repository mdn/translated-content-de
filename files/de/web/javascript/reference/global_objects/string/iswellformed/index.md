---
title: String.prototype.isWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/isWellFormed
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die **`isWellFormed()`** Methode von {{jsxref("String")}} Werten gibt einen booleschen Wert zurück, der anzeigt, ob dieser String einsame Surrogatpaare enthält oder nicht. Mehr Informationen zu [einsamen Surrogatpaaren](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) finden Sie im verlinkten Abschnitt.

## Syntax

```js-nolint
isWellFormed()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn dieser String keine einsamen Surrogatpaare enthält, andernfalls `false`.

## Beschreibung

Strings in JavaScript sind UTF-16 kodiert. Die UTF-16 Kodierung enthält das Konzept der _Surrogatpaare_, das im Abschnitt [UTF-16 characters, Unicode code points, and grapheme clusters](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) detailliert behandelt wird.

Mit `isWellFormed()` können Sie überprüfen, ob ein String gut geformt ist (d.h. keine einsamen Surrogatpaare enthält). Im Vergleich zu einer benutzerdefinierten Implementierung ist `isWellFormed()` effizienter, da Engines direkt auf die interne Repräsentation von Strings zugreifen können. Wenn Sie einen String in einen gut geformten String umwandeln müssen, verwenden Sie die Methode {{jsxref("String/toWellFormed", "toWellFormed()")}}. `isWellFormed()` ermöglicht es Ihnen, schlecht geformte Strings anders zu behandeln als gut geformte, z.B. durch das Auslösen eines Fehlers oder das Markieren als ungültig.

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

### Vermeidung von Fehlern in encodeURI()

{{jsxref("encodeURI")}} löst einen Fehler aus, wenn der übergebene String nicht gut geformt ist. Dies kann vermieden werden, indem `isWellFormed()` verwendet wird, um den String zu testen, bevor er an `encodeURI()` übergeben wird.

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

- [Polyfill von `String.prototype.isWellFormed` in `core-js`](https://github.com/zloirock/core-js#well-formed-unicode-strings)
- [es-shims Polyfill von `String.prototype.isWellFormed`](https://www.npmjs.com/package/string.prototype.iswellformed)
- {{jsxref("String.prototype.toWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
