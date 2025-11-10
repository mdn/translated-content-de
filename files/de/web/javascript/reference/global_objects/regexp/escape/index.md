---
title: RegExp.escape()
short-title: escape()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/escape
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`RegExp.escape()`** [maskiert](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) alle potenziellen regulären Ausdruckssyntaxzeichen in einem String und gibt einen neuen String zurück, der sicher als [Literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) für den {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor verwendet werden kann.

Wenn Sie dynamisch einen {{jsxref("RegExp")}} mit vom Benutzer bereitgestellten Inhalten erstellen, sollten Sie diese Funktion verwenden, um die Eingabe zu bereinigen (es sei denn, die Eingabe soll tatsächlich Regulärausdruckssyntax enthalten). Darüber hinaus sollten Sie nicht versuchen, die Funktionalität selbst zu implementieren, indem Sie beispielsweise {{jsxref("String.prototype.replaceAll()")}} verwenden, um ein `\` vor alle Syntaxzeichen einzufügen. `RegExp.escape()` ist darauf ausgelegt, Escape-Sequenzen zu verwenden, die in viel mehr Eckfällen/Kontexten funktionieren, als handgefertigter Code wahrscheinlich erreichen kann.

## Syntax

```js-nolint
RegExp.escape(string)
```

### Parameter

- `string`
  - : Der zu maskierende String.

### Rückgabewert

Ein neuer String, der sicher als Literal-Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor verwendet werden kann. Insbesondere werden die folgenden Elemente im Eingabe-String ersetzt:

- Das erste Zeichen des Strings, wenn es entweder eine Dezimalziffer (0–9) oder ein ASCII-Buchstabe (a–z, A–Z) ist, wird unter Verwendung der `\x` [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) Syntax maskiert. Zum Beispiel gibt `RegExp.escape("foo")` `"\\x66oo"` zurück (hier und danach stehen die zwei Backslashes in einem Stringliteral für ein einzelnes Backslash-Zeichen). Dieser Schritt stellt sicher, dass, wenn dieser maskierte String in ein größeres Muster eingebettet ist, wo er unmittelbar von `\1`, `\x0`, `\u000`, etc. vorangestellt wird, das führende Zeichen nicht als Teil der Escape-Sequenz interpretiert wird.
- Regex [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character#description), einschließlich `^`, `$`, `\`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, und `|`, sowie der `/`-Delimiter, werden durch Einfügen eines `\`-Zeichens vor ihnen maskiert. Zum Beispiel gibt `RegExp.escape("foo.bar")` `"\\x66oo\\.bar"` zurück, und `RegExp.escape("(foo)")` gibt `"\\(foo\\)"` zurück.
- Andere Interpunktionszeichen, einschließlich `,`, `-`, `=`, `<`, `>`, `#`, `&`, `!`, `%`, `:`, `;`, `@`, `~`, `'`, `` ` ``, und `"`, werden unter Verwendung der `\x`-Syntax maskiert. Zum Beispiel ergibt `RegExp.escape("foo-bar")` `"\\x66oo\\x2dbar"`. Diese Zeichen können nicht durch Voranstellen mit `\` maskiert werden, da es zum Beispiel einen Syntaxfehler verursacht: `/foo\-bar/u`.
- Die Zeichen mit ihren eigenen [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)-Sequenzen: `\f` (U+000C FORM FEED), `\n` (U+000A LINE FEED), `\r` (U+000D CARRIAGE RETURN), `\t` (U+0009 CHARACTER TABULATION), und `\v` (U+000B LINE TABULATION), werden durch ihre Escape-Sequenzen ersetzt. Zum Beispiel gibt `RegExp.escape("foo\nbar")` `"\\x66oo\\nbar"` zurück.
- Das Leerzeichen wird als `"\\x20"` maskiert.
- Andere Nicht-ASCII [Zeilenbruch- und Leerzeichenzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) werden durch ein oder zwei `\uXXXX`-Escape-Sequenzen ersetzt, die ihre UTF-16-Codeeinheiten darstellen. Zum Beispiel gibt `RegExp.escape("foo\u2028bar")` `"\\x66oo\\u2028bar"` zurück.
- [Einzelne Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) werden durch ihre `\uXXXX`-Escape-Sequenzen ersetzt. Zum Beispiel gibt `RegExp.escape("foo\uD800bar")` `"\\x66oo\\ud800bar"` zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `string` kein String ist.

## Beispiele

### Verwendung von RegExp.escape()

Die folgenden Beispiele zeigen verschiedene Eingaben und Ausgaben für die `RegExp.escape()`-Methode.

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

Der Hauptanwendungsfall von `RegExp.escape()` ist, wenn Sie einen String in ein größeres Regulärausdrucksmuster einbetten möchten und sicherstellen wollen, dass der String als Literal-Muster und nicht als Regulärausdruckssyntax behandelt wird. Betrachten Sie das folgende naive Beispiel, das URLs ersetzt:

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

Das Einfügen der `domain` oben ergibt das reguläre Ausdrucksliteral `https?://developer.mozilla.org(?=/)`, wobei das Zeichen "." ein [Wildcard](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard) Zeichen für den Regulärausdruck ist. Dies bedeutet, dass der String mit einem beliebigen Zeichen anstelle von "." übereinstimmen würde, wie `developer-mozilla-org`. Daher würde es fälschlicherweise auch den folgenden Text ändern:

```js
const input =
  "This is not an MDN link: https://developer-mozilla.org/, be careful!";
const domain = "developer.mozilla.org";
console.log(removeDomain(input, domain));
// This is not an MDN link: /, be careful!
```

Um dies zu beheben, können wir `RegExp.escape()` verwenden, um sicherzustellen, dass jede Benutzereingabe als Literal-Muster behandelt wird:

```js
function removeDomain(text, domain) {
  return text.replace(
    new RegExp(`https?://${RegExp.escape(domain)}(?=/)`, "g"),
    "",
  );
}
```

Jetzt wird diese Funktion genau das tun, was wir beabsichtigen, und keine `developer-mozilla.org`-URLs umwandeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `RegExp.escape` in `core-js`](https://github.com/zloirock/core-js#regexp-escaping)
- [es-shims polyfill von `Reflect.escape`](https://www.npmjs.com/package/regexp.escape)
- {{jsxref("RegExp")}}
