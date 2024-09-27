---
title: "SyntaxError: unzulässiges Zeichen"
slug: Web/JavaScript/Reference/Errors/Illegal_character
l10n:
  sourceCommit: 6deab4bdc0b2563d1e32047c4f5b25c3a8f02850
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "unzulässiges Zeichen" tritt auf, wenn der [Lexer](/de/docs/Web/JavaScript/Reference/Lexical_grammar) ein Zeichen liest, das nicht Teil eines Zeichenfolgenliterales ist und kein gültiges Token in der Sprache darstellen kann.

## Meldung

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: illegal character U+201C (Firefox)
SyntaxError: Invalid character '\u201c' (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt ein ungültiges Zeichen, das der Interpreter nicht versteht. Sie sollten es entweder in ein Zeichenfolgenliteral setzen oder durch ein anderes Zeichen ersetzen. Verwenden Sie einen Editor, der Syntaxhervorhebung unterstützt, und prüfen Sie Ihren Code sorgfältig auf Missverständnisse, wie etwa Minuszeichen (`-`) versus Bindestrich (`–`) oder einfache Anführungszeichen (`"`) versus nicht standardisierte Anführungszeichen (`“`).

## Beispiele

### Nicht übereinstimmende Zeichen

Einige Zeichen sehen ähnlich aus, verursachen jedoch das Versagen des Parsers beim Interpretieren Ihres Codes. Berühmte Beispiele hierfür sind Anführungszeichen, das Minus oder das Semikolon (das [griechische Fragezeichen (U+37e)](https://en.wikipedia.org/wiki/Question_mark#Greek_question_mark) sieht gleich aus).

```js-nolint example-bad
“This looks like a string”; // SyntaxError: illegal character
// “ and ” are not " but look like it

42 – 13; // SyntaxError: illegal character
// – (en-dash) is not - but looks like it

const foo = "bar"; // SyntaxError: illegal character
// <37e> is not ; but looks like it
```

Das sollte funktionieren:

```js example-good
"This is actually a string";
42 - 13;
const foo = "bar";
```

Einige Editoren und IDEs benachrichtigen Sie oder verwenden zumindest eine leicht unterschiedliche Hervorhebung dafür, aber nicht alle. Wenn so etwas mit Ihrem Code passiert und Sie die Quelle des Problems nicht finden können, ist es oft am besten, die problematische Zeile einfach zu löschen und neu zu schreiben.

### Vergessene Zeichen

Es ist leicht, hier oder dort ein Zeichen zu vergessen.

```js-nolint example-bad
const operators = ["+", "-", ×", "÷"];
// SyntaxError: illegal character U+00D7
```

Fügen Sie das fehlende Anführungszeichen für `"×"` hinzu.

```js example-good
const operators = ["+", "-", "×", "÷"];
```

### Versteckte Zeichen

Beim Kopieren und Einfügen von Code aus externen Quellen können ungültige Zeichen vorhanden sein. Achten Sie darauf!

```js-nolint example-bad
const foo = "bar";​
// SyntaxError: illegal character
```

Wenn Sie diesen Code in einem Editor wie Vim überprüfen, sehen Sie, dass tatsächlich ein
[Zero-width Space (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space) Zeichen vorhanden ist.

```js-nolint
const foo = "bar";<200b>
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
