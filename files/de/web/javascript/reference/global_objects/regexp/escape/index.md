---
title: RegExp.escape()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/escape
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`RegExp.escape()`** statische Methode [escaped](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) alle potenziellen RegEx-Syntaxzeichen in einem String und gibt einen neuen String zurück, der sicher als [literales](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor verwendet werden kann.

Wenn Sie dynamisch einen {{jsxref("RegExp")}} mit benutzerdefiniertem Inhalt erstellen, sollten Sie diese Funktion in Betracht ziehen, um die Eingabe zu bereinigen (es sei denn, die Eingabe soll tatsächlich RegEx-Syntax enthalten). Versuchen Sie außerdem nicht, deren Funktionalität durch den Einsatz von {{jsxref("String.prototype.replaceAll()")}} nachzubilden, um einen `\` vor alle Syntaxzeichen einzufügen. `RegExp.escape()` ist darauf ausgelegt, Escape-Sequenzen zu verwenden, die in viel mehr Randfällen/Kontexten funktionieren als durch Handarbeit erstellter Code wahrscheinlich erreicht.

## Syntax

```js-nolint
RegExp.escape(string)
```

### Parameter

- `string`
  - : Der zu escapende String.

### Rückgabewert

Ein neuer String, der sicher als literales Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktor verwendet werden kann. Insbesondere werden folgende Dinge im Eingabestring ersetzt:

- Das erste Zeichen des Strings, falls es sich um eine dezimale Ziffer (0–9) oder einen ASCII-Buchstaben (a–z, A–Z) handelt, wird mit der `\x` [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) Syntax escaped. Zum Beispiel gibt `RegExp.escape("foo")` `"\\x66oo"` zurück (hier und im Folgenden bezeichnen die zwei Backslashes in einem Stringliteral ein einzelnes Backslash-Zeichen). Dieser Schritt stellt sicher, dass, wenn dieser escaped String in ein größeres Muster eingebettet ist, wo es unmittelbar von `\1`, `\x0`, `\u000` usw. gefolgt wird, das führende Zeichen nicht als Teil der Escape-Sequenz interpretiert wird.
- RegEx [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character#description), einschließlich `^`, `$`, `\`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, und `|`, sowie der `/`-Begrenzer, werden escapet, indem ein `\` Zeichen vor ihnen eingefügt wird. Zum Beispiel gibt `RegExp.escape("foo.bar")` `"\\x66oo\\.bar"` zurück und `RegExp.escape("(foo)")` gibt `"\\(foo\\)"` zurück.
- Andere Interpunktionszeichen, einschließlich `,`, `-`, `=`, `<`, `>`, `#`, `&`, `!`, `%`, `:`, `;`, `@`, `~`, `'`, `` ` `` und `"`, werden mit der `\x` Syntax escapet. Zum Beispiel gibt `RegExp.escape("foo-bar")` `"\\x66oo\\x2dbar"` zurück. Diese Zeichen können nicht durch Voranstellen eines `\` escapet werden, da zum Beispiel `/foo\-bar/u` ein Syntaxfehler ist.
- Die Zeichen mit ihren eigenen [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) Sequenzen: `\f` (U+000C FORM FEED), `\n` (U+000A LINE FEED), `\r` (U+000D CARRIAGE RETURN), `\t` (U+0009 CHARACTER TABULATION), und `\v` (U+000B LINE TABULATION), werden mit ihren Escape-Sequenzen ersetzt. Zum Beispiel gibt `RegExp.escape("foo\nbar")` `"\\x66oo\\nbar"` zurück.
- Das Leerzeichen wird als `"\\x20"` escaped.
- Andere nicht-ASCII [Zeilenumbrüche und Leerraumzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) werden durch ein oder zwei `\uXXXX` Escape-Sequenzen ersetzt, die ihre UTF-16-Codeeinheiten darstellen. Zum Beispiel gibt `RegExp.escape("foo\u2028bar")` `"\\x66oo\\u2028bar"` zurück.
- [Einsame Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) werden durch ihre `\uXXXX` Escape-Sequenzen ersetzt. Zum Beispiel gibt `RegExp.escape("foo\uD800bar")` `"\\x66oo\\ud800bar"` zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `string` kein String ist.

## Beispiele

### Verwendung von RegExp.escape()

Die folgenden Beispiele zeigen verschiedene Eingaben und Ausgaben für die `RegExp.escape()` Methode.

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

Der Hauptanwendungsfall von `RegExp.escape()` ist, wenn Sie einen String in ein größeres RegEx-Muster einbetten möchten und sicherstellen wollen, dass der String als literales Muster behandelt wird, nicht als RegEx-Syntax. Betrachten Sie das folgende naive Beispiel, das URLs ersetzt:

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

Das Einfügen der oben genannten `domain` führt zu dem regulären Ausdruckspender `https?://developer.mozilla.org(?=/)`, wobei das "." Zeichen ein RegEx [Wildcard](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard) Zeichen ist. Das bedeutet, dass der String mit jedem Zeichen anstelle des "." übereinstimmen wird, wie zum Beispiel `developer-mozilla-org`. Daher würde es fälschlicherweise auch den folgenden Text ändern:

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

Jetzt wird diese Funktion genau das tun, was wir beabsichtigen, und wird keine `developer-mozilla.org` URLs transformieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `RegExp.escape` in `core-js`](https://github.com/zloirock/core-js#regexp-escaping)
- [es-shims polyfill von `Reflect.escape`](https://www.npmjs.com/package/regexp.escape)
- {{jsxref("RegExp")}}
