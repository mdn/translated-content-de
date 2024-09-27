---
title: String.prototype.isWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/isWellFormed
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`isWellFormed()`**-Methode von {{jsxref("String")}}-Werten gibt einen booleschen Wert zurück, der angibt, ob dieser String irgendwelche [einsamen Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.

## Syntax

```js-nolint
isWellFormed()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn dieser String keine einsamen Surrogate enthält, andernfalls `false`.

## Beschreibung

Strings in JavaScript sind UTF-16-codiert. Die UTF-16-Codierung hat das Konzept der _Surrogatpaare_, welches im Abschnitt [UTF-16 characters, Unicode code points, and grapheme clusters](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) ausführlich beschrieben wird.

`isWellFormed()` ermöglicht es Ihnen zu testen, ob ein String wohlgeformt ist (d.h. keine einsamen Surrogate enthält). Im Vergleich zu einer benutzerdefinierten Implementierung ist `isWellFormed()` effizienter, da Engines direkt auf die interne Repräsentation von Strings zugreifen können. Wenn Sie einen String in einen wohlgeformten String umwandeln müssen, verwenden Sie die Methode {{jsxref("String/toWellFormed", "toWellFormed()")}}. `isWellFormed()` ermöglicht es Ihnen, fehlerhaft geformte Strings anders zu behandeln als wohlgeformte, wie z.B. das Auslösen eines Fehlers oder die Markierung als ungültig.

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

### Fehler in encodeURI() vermeiden

{{jsxref("encodeURI")}} löst einen Fehler aus, wenn der übergebene String nicht wohlgeformt ist. Dies kann vermieden werden, indem `isWellFormed()` verwendet wird, um den String zu testen, bevor er an `encodeURI()` übergeben wird.

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
- {{jsxref("String.prototype.toWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
