---
title: String.prototype.toWellFormed()
short-title: toWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/toWellFormed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toWellFormed()`** von {{jsxref("String")}}-Werten gibt einen String zurück, in dem alle [einzelstehenden Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) des ursprünglichen Strings durch das Unicode-Ersatzzeichen U+FFFD ersetzt wurden.

## Syntax

```js-nolint
toWellFormed()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer String, der eine Kopie des ursprünglichen Strings ist, wobei alle einzelstehenden Surrogate durch das Unicode-Ersatzzeichen U+FFFD ersetzt wurden. Wenn `str` [wohlgeformt ist](/de/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed), wird dennoch ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

## Beschreibung

Strings in JavaScript sind UTF-16-codiert. Die UTF-16-Codierung verwendet sogenannte _Surrogatpaare_, die im Abschnitt [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) ausführlich erläutert werden.

`toWellFormed()` durchläuft die Codeeinheiten des Strings und ersetzt jedes einzelstehende Surrogat durch das [Unicode-Ersatzzeichen](<https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character>) U+FFFD `�`. Dadurch ist der zurückgegebene String wohlgeformt und kann in Funktionen verwendet werden, die wohlgeformte Strings erwarten, beispielsweise {{jsxref("encodeURI")}}. Im Vergleich zu einer eigenen Implementierung ist `toWellFormed()` effizienter, da JavaScript-Engines direkt auf die interne Darstellung von Strings zugreifen können.

Wenn nicht wohlgeformte Strings in bestimmten Kontexten verwendet werden, etwa mit [`TextEncoder`](/de/docs/Web/API/TextEncoder), werden sie automatisch mit demselben Ersatzzeichen in wohlgeformte Strings umgewandelt. Auch bei der Darstellung einzelstehender Surrogate wird das Ersatzzeichen angezeigt (eine Raute mit einem Fragezeichen darin).

## Beispiele

### toWellFormed() verwenden

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
  console.log(str.toWellFormed());
}
// Logs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
```

### Fehler in encodeURI() vermeiden

{{jsxref("encodeURI")}} löst einen Fehler aus, wenn der übergebene String nicht wohlgeformt ist. Dies lässt sich vermeiden, indem Sie den String zuerst mit `toWellFormed()` in einen wohlgeformten String umwandeln.

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

- [Polyfill für `String.prototype.toWellFormed` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.toWellFormed` von es-shims](https://www.npmjs.com/package/string.prototype.towellformed)
- {{jsxref("String.prototype.isWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
