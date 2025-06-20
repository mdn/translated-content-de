---
title: String.prototype.isWellFormed()
short-title: isWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/isWellFormed
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`isWellFormed()`** Methode von {{jsxref("String")}} Werten gibt einen booleschen Wert zurück, der angibt, ob dieser String einsame Surrogate enthält oder nicht. [Einsame Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) sind ein wichtiges Konzept in der Textverarbeitung.

## Syntax

```js-nolint
isWellFormed()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn dieser String keine einsamen Surrogate enthält, andernfalls `false`.

## Beschreibung

Strings in JavaScript sind UTF-16 kodiert. Die UTF-16-Kodierung hat das Konzept der _Surrogatpaare_, welches im Abschnitt über [UTF-16 Zeichen, Unicode-Codepunkte und Grapheme-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) ausführlich beschrieben wird.

`isWellFormed()` ermöglicht es Ihnen, zu überprüfen, ob ein String wohlgeformt ist (d.h. ob er keine einsamen Surrogate enthält). Im Vergleich zu einer benutzerdefinierten Implementierung ist `isWellFormed()` effizienter, da Engines direkt auf die interne Darstellung von Strings zugreifen können. Wenn Sie einen String in einen wohlgeformten String umwandeln müssen, verwenden Sie die {{jsxref("String/toWellFormed", "toWellFormed()")}} Methode. `isWellFormed()` ermöglicht es Ihnen, schlecht geformte Strings anders zu behandeln als wohlgeformte, beispielsweise indem Sie einen Fehler auslösen oder ihn als ungültig markieren.

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

### Fehler bei encodeURI() vermeiden

{{jsxref("encodeURI")}} wirft einen Fehler, wenn der übergebene String nicht wohlgeformt ist. Dies kann vermieden werden, indem Sie `isWellFormed()` verwenden, um den String zu testen, bevor Sie ihn an `encodeURI()` übergeben.

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
- [es-shims polyfill von `String.prototype.isWellFormed`](https://www.npmjs.com/package/string.prototype.iswellformed)
- {{jsxref("String.prototype.toWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
