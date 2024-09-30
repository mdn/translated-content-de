---
title: "SyntaxError: illegal character"
slug: Web/JavaScript/Reference/Errors/Illegal_character
l10n:
  sourceCommit: 6deab4bdc0b2563d1e32047c4f5b25c3a8f02850
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "illegal character" tritt auf, wenn der [Lexer](/de/docs/Web/JavaScript/Reference/Lexical_grammar) ein Zeichen liest, das nicht Teil eines Zeichenfolgenliterals ist und kein gültiges Token in der Sprache darstellen kann.

## Meldung

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: illegal character U+201C (Firefox)
SyntaxError: Invalid character '\u201c' (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt ein ungültiges Zeichen, das der Interpreter nicht versteht. Sie sollten es entweder in ein Zeichenfolgenliteral einfügen oder durch ein anderes Zeichen ersetzen. Verwenden Sie einen Editor, der Syntaxhervorhebung unterstützt, und überprüfen Sie Ihren Code sorgfältig auf Unterschiede wie ein Minuszeichen (`-`) im Gegensatz zu einem Gedankenstrich (`–`) oder einfache Anführungszeichen (`"`) im Gegensatz zu nicht standardmäßigen Anführungszeichen (`“`).

## Beispiele

### Unstimmige Zeichen

Einige Zeichen sehen ähnlich aus, führen aber dazu, dass der Parser Ihren Code nicht interpretiert. Berühmte Beispiele dafür sind Anführungszeichen, das Minus- oder das Semikolon (das [griechische Fragezeichen (U+37e)](https://en.wikipedia.org/wiki/Question_mark#Greek_question_mark) sieht gleich aus).

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

Einige Editoren und IDEs werden Sie darauf hinweisen oder zumindest eine leicht andere Hervorhebung verwenden, aber nicht alle. Wenn so etwas mit Ihrem Code passiert und Sie die Ursache des Problems nicht finden können, ist es oft am besten, einfach die problematische Zeile zu löschen und neu zu schreiben.

### Vergessene Zeichen

Es ist einfach, hier oder da ein Zeichen zu vergessen.

```js-nolint example-bad
const operators = ["+", "-", ×", "÷"];
// SyntaxError: illegal character U+00D7
```

Fügen Sie das fehlende Anführungszeichen für `"×"` hinzu.

```js example-good
const operators = ["+", "-", "×", "÷"];
```

### Versteckte Zeichen

Beim Kopieren und Einfügen von Code aus externen Quellen kann es zu ungültigen Zeichen kommen. Achtung!

```js-nolint example-bad
const foo = "bar";​
// SyntaxError: illegal character
```

Wenn Sie diesen Code in einem Editor wie Vim inspizieren, können Sie sehen, dass es tatsächlich ein [zeichensperrenloses Leerzeichen (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space) gibt.

```js-nolint
const foo = "bar";<200b>
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
