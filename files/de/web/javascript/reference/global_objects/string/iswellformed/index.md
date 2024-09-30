---
title: String.prototype.isWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/isWellFormed
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`isWellFormed()`**-Methode von {{jsxref("String")}}-Werten gibt einen booleschen Wert zurück, der angibt, ob dieser String [lone surrogates](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält oder nicht.

## Syntax

```js-nolint
isWellFormed()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn dieser String keine lone surrogates enthält, andernfalls `false`.

## Beschreibung

Strings in JavaScript sind UTF-16-codiert. Die UTF-16-Codierung hat das Konzept der _surrogate pairs_, welches im Abschnitt [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) ausführlich erläutert wird.

`isWellFormed()` erlaubt es Ihnen zu überprüfen, ob ein String wohlgeformt ist (d.h. keine lone surrogates enthält). Im Vergleich zu einer benutzerdefinierten Implementierung ist `isWellFormed()` effizienter, da Engines direkt auf die interne Darstellung von Strings zugreifen können. Wenn Sie einen String in einen wohlgeformten String umwandeln müssen, verwenden Sie die Methode {{jsxref("String/toWellFormed", "toWellFormed()")}}. `isWellFormed()` ermöglicht es Ihnen, schlecht geformte Strings anders zu behandeln als wohlgeformte, z.B. durch Auslösen eines Fehlers oder Markieren als ungültig.

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
