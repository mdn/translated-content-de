---
title: RegExp.escape()
short-title: escape()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/escape
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`RegExp.escape()`** [maskiert](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) alle Zeichen in einem String, die als Regex-Syntax interpretiert werden könnten, und gibt einen neuen String zurück, der sicher als [literales](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor verwendet werden kann.

Wenn Sie ein {{jsxref("RegExp")}} dynamisch mit benutzerseitig bereitgestellten Inhalten erstellen, sollten Sie diese Funktion verwenden, um die Eingabe zu bereinigen – es sei denn, die Eingabe soll tatsächlich Regex-Syntax enthalten. Versuchen Sie nicht, die Funktionalität selbst nachzubilden, indem Sie beispielsweise mit {{jsxref("String.prototype.replaceAll()")}} vor allen Syntaxzeichen ein `\` einfügen. `RegExp.escape()` verwendet Escape-Sequenzen, die in wesentlich mehr Sonderfällen und Kontexten funktionieren, als sich mit selbst geschriebenem Code zuverlässig abdecken lassen.

## Syntax

```js-nolint
RegExp.escape(string)
```

### Parameter

- `string`
  - : Der String, der maskiert werden soll.

### Rückgabewert

Ein neuer String, der sicher als literales Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor verwendet werden kann. Dazu werden die folgenden Bestandteile des Eingabestrings ersetzt:

- Das erste Zeichen des Strings wird, falls es eine Dezimalziffer (0–9) oder ein ASCII-Buchstabe (a–z, A–Z) ist, mit der `\x`-[Zeichen-Escape-Syntax](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) maskiert. Beispielsweise gibt `RegExp.escape("foo")` `"\\x66oo"` zurück (hier und im Folgenden stehen die beiden Backslashes in einem String-Literal für ein einzelnes Backslash-Zeichen). Dadurch wird verhindert, dass das erste Zeichen als Teil einer Escape-Sequenz interpretiert wird, wenn der maskierte String in ein größeres Muster eingebettet wird und unmittelbar auf `\1`, `\x0`, `\u000` usw. folgt.
- Regex-[Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character#description), darunter `^`, `$`, `\`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}` und `|`, sowie das Trennzeichen `/` werden maskiert, indem ihnen ein `\` vorangestellt wird. Beispielsweise gibt `RegExp.escape("foo.bar")` `"\\x66oo\\.bar"` zurück und `RegExp.escape("(foo)")` gibt `"\\(foo\\)"` zurück.
- Andere Satzzeichen, darunter `,`, `-`, `=`, `<`, `>`, `#`, `&`, `!`, `%`, `:`, `;`, `@`, `~`, `'`, `` ` `` und `"`, werden mit der `\x`-Syntax maskiert. Beispielsweise gibt `RegExp.escape("foo-bar")` `"\\x66oo\\x2dbar"` zurück. Diese Zeichen können nicht durch ein vorangestelltes `\` maskiert werden, da beispielsweise `/foo\-bar/u` ein Syntaxfehler ist.
- Zeichen mit eigenen [Zeichen-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) – `\f` (U+000C FORM FEED), `\n` (U+000A LINE FEED), `\r` (U+000D CARRIAGE RETURN), `\t` (U+0009 CHARACTER TABULATION) und `\v` (U+000B LINE TABULATION) – werden durch ihre Escape-Sequenzen ersetzt. Beispielsweise gibt `RegExp.escape("foo\nbar")` `"\\x66oo\\nbar"` zurück.
- Das Leerzeichen wird als `"\\x20"` maskiert.
- Andere Nicht-ASCII-[Zeilenumbruch- und Leerraumzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) werden durch eine oder zwei `\uXXXX`-Escape-Sequenzen ersetzt, die ihre UTF-16-Codeeinheiten darstellen. Beispielsweise gibt `RegExp.escape("foo\u2028bar")` `"\\x66oo\\u2028bar"` zurück.
- [Einzelne Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) werden durch ihre `\uXXXX`-Escape-Sequenzen ersetzt. Beispielsweise gibt `RegExp.escape("foo\uD800bar")` `"\\x66oo\\ud800bar"` zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `string` kein String ist.

## Beispiele

### RegExp.escape() verwenden

Die folgenden Beispiele zeigen verschiedene Eingaben und Ausgaben der Methode `RegExp.escape()`.

```js
RegExp.escape("Buy it. use it. break it. fix it.");
// "\\x42uy\\x20it\\.\\x20use\\x20it\\.\\x20break\\x20it\\.\\x20fix\\x20it\\."
RegExp.escape("foo.bar"); // "\\x66oo\\.bar"
RegExp.escape("foo-bar"); // "\\x66oo\\x2dbar"
RegExp.escape("foo\nbar"); // "\\x66oo\\nbar"
RegExp.escape("foo\uD800bar"); // "\\x66oo\\ud800bar"
RegExp.escape("foo\u2028bar"); // "\\x66oo\\u2028bar"
```

### RegExp.escape() mit dem RegExp-Konstruktor verwenden

`RegExp.escape()` wird hauptsächlich verwendet, wenn Sie einen String in ein größeres Regex-Muster einbetten möchten und sicherstellen wollen, dass er als literales Muster und nicht als Regex-Syntax behandelt wird. Betrachten Sie das folgende einfache Beispiel, das URLs ersetzt:

```js
function removeDomain(text, domain) {
  return text.replace(new RegExp(`https?://${domain}(?=/)`, "g"), "");
}

const input =
  "Consider using [RegExp.escape()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) to escape special characters in a string.";
const domain = "developer.mozilla.org";
console.log(removeDomain(input, domain));
// Consider using [RegExp.escape()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) to escape special characters in a string.
```

Wird der obige Wert von `domain` eingefügt, entsteht das reguläre Ausdrucksliteral `https?://developer.mozilla.org(?=/)`. Darin ist das Zeichen „.“ ein Regex-[Platzhalterzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard). Der Ausdruck stimmt daher auch mit Strings überein, in denen anstelle des „.“ ein beliebiges Zeichen steht, etwa `developer-mozilla-org`. Folglich würde er auch den folgenden Text fälschlicherweise ändern:

```js
const input =
  "This is not an MDN link: https://developer-mozilla.org/, be careful!";
const domain = "developer.mozilla.org";
console.log(removeDomain(input, domain));
// This is not an MDN link: /, be careful!
```

Um dies zu beheben, können wir mit `RegExp.escape()` sicherstellen, dass jede Benutzereingabe als literales Muster behandelt wird:

```js
function removeDomain(text, domain) {
  return text.replace(
    new RegExp(`https?://${RegExp.escape(domain)}(?=/)`, "g"),
    "",
  );
}
```

Nun verhält sich die Funktion wie beabsichtigt und verändert keine `developer-mozilla.org`-URLs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `RegExp.escape` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `RegExp.escape` von es-shims](https://www.npmjs.com/package/regexp.escape)
- {{jsxref("RegExp")}}
