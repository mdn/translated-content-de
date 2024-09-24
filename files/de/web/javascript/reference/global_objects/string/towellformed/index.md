---
title: String.prototype.toWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/toWellFormed
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`toWellFormed()`** Methode von {{jsxref("String")}}-Werten gibt einen String zurück, bei dem alle [einsamen Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) dieses Strings durch das Unicode-Ersatzzeichen U+FFFD ersetzt werden.

## Syntax

```js-nolint
toWellFormed()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer String, der eine Kopie dieses Strings ist, bei dem alle einsamen Surrogate durch das Unicode-Ersatzzeichen U+FFFD ersetzt werden. Wenn `str` [gut formuliert ist](/de/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed), wird trotzdem ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

## Beschreibung

Strings in JavaScript sind mit UTF-16 codiert. Die UTF-16-Codierung hat das Konzept der _Surrogatpaare_, das detailliert im Abschnitt [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) eingeführt wird.

`toWellFormed()` durchläuft die Codeeinheiten dieses Strings und ersetzt alle einsamen Surrogate durch das [Unicode-Ersatzzeichen](<https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character>) U+FFFD `�`. Dies stellt sicher, dass der zurückgegebene String gut formuliert ist und in Funktionen verwendet werden kann, die gut formulierte Strings erwarten, wie {{jsxref("encodeURI")}}. Im Vergleich zu einer benutzerdefinierten Implementierung ist `toWellFormed()` effizienter, da Engines direkt auf die interne Darstellung von Strings zugreifen können.

Wenn in bestimmten Kontexten, wie {{domxref("TextEncoder")}}, schlecht formulierte Strings verwendet werden, werden sie automatisch in gut formulierte Strings konvertiert, indem das gleiche Ersatzzeichen verwendet wird. Wenn einsame Surrogate gerendert werden, werden sie ebenfalls als Ersatzzeichen angezeigt (ein Diamant mit einem Fragezeichen darin).

## Beispiele

### Verwendung von toWellFormed()

```js
const strings = [
  // Einsames führendes Surrogat
  "ab\uD800",
  "ab\uD800c",
  // Einsames abschließendes Surrogat
  "\uDFFFab",
  "c\uDFFFab",
  // Gut formuliert
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.toWellFormed());
}
// Protokolliert:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
```

### Vermeidung von Fehlern in encodeURI()

{{jsxref("encodeURI")}} löst einen Fehler aus, wenn der übergebene String nicht gut formuliert ist. Dies kann vermieden werden, indem `toWellFormed()` verwendet wird, um den String zuerst in einen gut formulierten String zu konvertieren.

```js
const illFormed = "https://example.com/search?q=\uD800";

try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

console.log(encodeURI(illFormed.toWellFormed())); // "https://example.com/search?q=%EF%BF%BD"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.toWellFormed` in `core-js`](https://github.com/zloirock/core-js#well-formed-unicode-strings)
- {{jsxref("String.prototype.isWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
