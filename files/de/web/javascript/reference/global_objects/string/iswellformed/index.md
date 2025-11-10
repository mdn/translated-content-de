---
title: String.prototype.isWellFormed()
short-title: isWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/isWellFormed
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`isWellFormed()`** Methode von {{jsxref("String")}} Werten gibt einen Booleschen Wert zurück, der anzeigt, ob diese Zeichenkette [lone surrogates](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Syntax

```js-nolint
isWellFormed()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn diese Zeichenkette keine lone surrogates enthält, andernfalls `false`.

## Beschreibung

Zeichenketten in JavaScript sind UTF-16-kodiert. Die UTF-16-Kodierung hat das Konzept der _Surrogatpaare_, die im Abschnitt [UTF-16-Zeichen, Unicode-Codierungen und Graphem-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) ausführlich erläutert werden.

`isWellFormed()` ermöglicht es Ihnen zu testen, ob eine Zeichenkette wohlgeformt ist (d.h. keine lone surrogates enthält). Im Vergleich zu einer benutzerdefinierten Implementierung ist `isWellFormed()` effizienter, da Engines direkt auf die interne Repräsentation von Zeichenketten zugreifen können. Wenn Sie eine Zeichenkette in eine wohlgeformte Zeichenkette umwandeln müssen, verwenden Sie die {{jsxref("String/toWellFormed", "toWellFormed()")}} Methode. `isWellFormed()` erlaubt es, fehlerhafte Zeichenketten anders zu behandeln als wohlgeformte, wie z.B. das Werfen eines Fehlers oder das Markieren als ungültig.

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

{{jsxref("encodeURI")}} löst einen Fehler aus, wenn die übergebene Zeichenkette nicht wohlgeformt ist. Dies kann vermieden werden, indem `isWellFormed()` verwendet wird, um die Zeichenkette zu testen, bevor sie an `encodeURI()` übergeben wird.

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
