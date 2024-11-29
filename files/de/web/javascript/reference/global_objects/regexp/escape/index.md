---
title: RegExp.escape()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/escape
l10n:
  sourceCommit: a73295d4344aeab38c67262717d0dda8b3b9f0c5
---

{{JSRef}}

Die **`RegExp.escape()`** statische Methode [escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) alle potenziellen Regex-Syntaxzeichen in einem String und gibt einen neuen String zurück, der sicher als [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor verwendet werden kann.

Wenn Sie dynamisch eine {{jsxref("RegExp")}} mit von Benutzern bereitgestellten Inhalten erstellen, sollten Sie erwägen, diese Funktion zu verwenden, um die Eingabe zu bereinigen (es sei denn, die Eingabe soll tatsächlich Regex-Syntax enthalten). Versuchen Sie außerdem nicht, ihre Funktionalität neu zu implementieren, indem Sie zum Beispiel {{jsxref("String.prototype.replaceAll()")}} verwenden, um ein `\` vor allen Syntaxzeichen einzufügen. `RegExp.escape()` ist konzipiert, um Escape-Sequenzen zu verwenden, die in vielen mehr Randfällen/Kontexten funktionieren, als handgeschriebener Code wahrscheinlich erreichen kann.

## Syntax

```js-nolint
RegExp.escape(string)
```

### Parameter

- `string`
  - : Der zu escapende String.

### Rückgabewert

Ein neuer String, der sicher als literales Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor verwendet werden kann. Insbesondere werden folgende Dinge im Eingabewert ersetzt:

- Das erste Zeichen des Strings, falls es entweder eine Dezimalziffer (0–9) oder ein ASCII-Buchstabe (a–z, A–Z) ist, wird mit der `\x` [character escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) Syntax escaped. Zum Beispiel gibt `RegExp.escape("foo")` `"\\x66oo"` zurück (hier und nachfolgend bezeichnen die beiden Backslashes in einem String-Literal ein einzelnes Backslash-Zeichen). Dieser Schritt stellt sicher, dass, wenn dieser escapede String in ein größeres Muster eingebettet wird, wo er unmittelbar von `\1`, `\x0`, `\u000` etc. gefolgt wird, das führende Zeichen nicht als Teil der Escape-Sequenz interpretiert wird.
- Regex [syntax characters](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character#description), einschließlich `^`, `$`, `\`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, und `|`, sowie dem `/` Delimiter, werden durch Einfügen eines `\` Zeichens davor escapet. Zum Beispiel gibt `RegExp.escape("foo.bar")` `"\\x66oo\\.bar"` zurück und `RegExp.escape("(foo)")` gibt `"\\(foo\\)"` zurück.
- Andere Satzzeichen, einschließlich `,`, `-`, `=`, `<`, `>`, `#`, `&`, `!`, `%`, `:`, `;`, `@`, `~`, `'`, `` ` ``, und `"`, werden mit der `\x` Syntax escapet. Zum Beispiel gibt `RegExp.escape("foo-bar")` `"\\x66oo\\x2dbar"` zurück. Diese Zeichen können nicht durch Voranstellen mit `\` escapet werden, weil zum Beispiel `/foo\-bar/u` ein Syntaxfehler ist.
- Die Zeichen mit ihren eigenen [character escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) Sequenzen: `\f` (U+000C FORM FEED), `\n` (U+000A LINE FEED), `\r` (U+000D CARRIAGE RETURN), `\t` (U+0009 CHARACTER TABULATION), und `\v` (U+000B LINE TABULATION), werden durch ihre Escape-Sequenzen ersetzt. Zum Beispiel gibt `RegExp.escape("foo\nbar")` `"\\x66oo\\nbar"` zurück.
- Das Leerzeichen wird als `"\\x20"` escapet.
- Andere nicht-ASCII [line break and white space characters](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) werden durch ein oder zwei `\uXXXX` Escape-Sequenzen ersetzt, die ihre UTF-16 Code-Einheiten darstellen. Zum Beispiel gibt `RegExp.escape("foo\u2028bar")` `"\\x66oo\\u2028bar"` zurück.
- [Lone surrogates](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) werden durch ihre `\uXXXX` Escape-Sequenzen ersetzt. Zum Beispiel gibt `RegExp.escape("foo\uD800bar")` `"\\x66oo\\ud800bar"` zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `string` kein String ist.

## Beispiele

### Verwendung von RegExp.escape()

Die folgenden Beispiele demonstrieren verschiedene Eingaben und Ausgaben für die `RegExp.escape()` Methode.

```js
RegExp.escape("Buy it. use it. break it. fix it.");
// "\\x42uy\\x20it\\.\\x20use\\x20it\\.\\x20break\\x20it\\.\\x20fix\\x20it\\."
RegExp.escape("foo.bar"); // "\\x66oo\\.bar"
RegExp.escape("foo-bar"); // "\\x66oo\\x2dbar"
RegExp.escape("foo\nbar"); // "\\x66oo\\nbar"
RegExp.escape("foo\uD800bar"); // "\\x66oo\\ud800bar"
RegExp.escape("foo\u2028bar"); // "\\x66oo\\u2028bar"
```

### Verwendung von RegExp.escape() mit dem RegExp-Konstruktor

Der Hauptanwendungsfall von `RegExp.escape()` ist, wenn Sie einen String in ein größeres Regex-Muster einbetten möchten und sicherstellen möchten, dass der String als literal Pattern behandelt wird und nicht als Regex-Syntax. Betrachten Sie das folgende naive Beispiel, das URLs ersetzt:

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

Das Einfügen der `domain` oben führt zu dem regulären Ausdruckliteral `https?://developer.mozilla.org(?=/)`, wobei das "." Zeichen ein Regex [wildcard](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard) Zeichen ist. Das bedeutet, dass der String den String mit jedem Zeichen an Stelle des ".", wie `developer-mozilla-org`, übereinstimmt. Daher würde es fälschlicherweise auch den folgenden Text ändern:

```js
const input =
  "This is not an MDN link: https://developer-mozilla.org/, be careful!";
const domain = "developer.mozilla.org";
console.log(removeDomain(input, domain));
// This is not an MDN link: /, be careful!
```

Um dies zu beheben, können wir `RegExp.escape()` verwenden, um sicherzustellen, dass jede Benutzereingabe als literales Muster behandelt wird:

```js
function removeDomain(text, domain) {
  return text.replace(
    new RegExp(`https?://${RegExp.escape(domain)}(?=/)`, "g"),
    "",
  );
}
```

Nun wird diese Funktion genau das tun, was wir beabsichtigen, und nicht `developer-mozilla.org` URLs transformieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `RegExp.escape` in `core-js`](https://github.com/zloirock/core-js#regexp-escaping)
- {{jsxref("RegExp")}}
