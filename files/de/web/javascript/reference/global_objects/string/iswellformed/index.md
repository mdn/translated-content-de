---
title: String.prototype.isWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/isWellFormed
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`isWellFormed()`**-Methode von {{jsxref("String")}}-Werten gibt einen boolean zurück, der anzeigt, ob diese Zeichenkette [einsame Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Syntax

```js-nolint
isWellFormed()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn diese Zeichenkette keine einsamen Surrogate enthält, andernfalls `false`.

## Beschreibung

Zeichenketten in JavaScript sind UTF-16-codiert. Die UTF-16-Codierung hat das Konzept von _Surrogatpaaren_, das im Abschnitt [UTF-16-Zeichen, Unicode-Codepoints und Graphem-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) detailliert eingeführt wird.

`isWellFormed()` ermöglicht es Ihnen zu testen, ob eine Zeichenkette gut geformt ist (d. h. keine einsamen Surrogate enthält). Im Vergleich zu einer benutzerdefinierten Implementierung ist `isWellFormed()` effizienter, da Engines direkt auf die interne Repräsentation von Zeichenketten zugreifen können. Wenn Sie eine Zeichenkette in eine gut geformte Zeichenkette umwandeln müssen, verwenden Sie die {{jsxref("String/toWellFormed", "toWellFormed()")}}-Methode. `isWellFormed()` ermöglicht es Ihnen, fehlerhaft geformte Zeichenketten anders zu behandeln als gut geformte, z. B. durch Werfen eines Fehlers oder Markieren als ungültig.

## Beispiele

### Verwendung von isWellFormed()

```js
const strings = [
  // Einsame führende Surrogate
  "ab\uD800",
  "ab\uD800c",
  // Einsame nachfolgende Surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Gut geformt
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.isWellFormed());
}
// Protokolle:
// false
// false
// false
// false
// true
// true
```

### Vermeidung von Fehlern in encodeURI()

{{jsxref("encodeURI")}} wirft einen Fehler, wenn die übergebene Zeichenkette nicht gut geformt ist. Dies kann vermieden werden, indem `isWellFormed()` verwendet wird, um die Zeichenkette zu testen, bevor sie an `encodeURI()` übergeben wird.

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
  console.warn("Fehlerhaft geformte Zeichenketten gefunden."); // Fehlerhaft geformte Zeichenketten gefunden.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.isWellFormed` in `core-js`](https://github.com/zloirock/core-js#well-formed-unicode-strings)
- {{jsxref("String.prototype.toWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
