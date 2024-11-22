---
title: "SyntaxError: illegales Zeichen"
slug: Web/JavaScript/Reference/Errors/Illegal_character
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "illegales Zeichen" tritt auf, wenn der [Lexer](/de/docs/Web/JavaScript/Reference/Lexical_grammar) ein Zeichen liest, das nicht Teil eines Zeichenfolgenliterals ist, und das Zeichen kein gültiges Token in der Sprache bilden kann.

## Meldung

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: illegal character U+201C (Firefox)
SyntaxError: Invalid character '\u201c' (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt ein ungültiges Zeichen, das der Interpreter nicht versteht. Sie sollten es entweder in ein Zeichenfolgenliteral setzen oder es durch ein anderes Zeichen ersetzen. Verwenden Sie einen Editor mit Syntaxhervorhebung und überprüfen Sie Ihren Code sorgfältig auf Unterschiede wie ein Minuszeichen (`-`) gegenüber einem Gedankenstrich (`–`) oder einfache Anführungszeichen (`"`) gegenüber nicht standardmäßigen Anführungszeichen (`“`).

## Beispiele

### Nicht passende Zeichen

Einige Zeichen sehen ähnlich aus, führen jedoch dazu, dass der Parser Ihr Code nicht interpretieren kann. Bekannte Beispiele dafür sind Anführungszeichen, der Bindestrich oder das Semikolon (das [griechische Fragezeichen (U+37e)](https://en.wikipedia.org/wiki/Question_mark#Greek_question_mark) sieht gleich aus).

```js-nolint example-bad
“This looks like a string”; // SyntaxError: illegal character
// “ and ” are not " but look like it

42 – 13; // SyntaxError: illegal character
// – (en-dash) is not - but looks like it

const foo = "bar"; // SyntaxError: illegal character
// <37e> is not ; but looks like it
```

Dies sollte funktionieren:

```js example-good
"This is actually a string";
42 - 13;
const foo = "bar";
```

Einige Editoren und IDEs benachrichtigen Sie oder verwenden zumindest eine leicht unterschiedliche Hervorhebung dafür, aber nicht alle. Wenn so etwas in Ihrem Code passiert und Sie die Quelle des Problems nicht finden können, ist es oft am besten, einfach die problematische Zeile zu löschen und neu zu schreiben.

### Vergessene Zeichen

Es ist leicht, hier oder da ein Zeichen zu vergessen.

```js-nolint example-bad
const operators = ["+", "-", ×", "÷"];
// SyntaxError: illegal character U+00D7
```

Fügen Sie das fehlende Anführungszeichen für `"×"` hinzu.

```js example-good
const operators = ["+", "-", "×", "÷"];
```

### Versteckte Zeichen

Wenn Sie Code aus externen Quellen kopieren und einfügen, können ungültige Zeichen vorhanden sein. Seien Sie wachsam!

```js-nolint example-bad
const foo = "bar";​
// SyntaxError: illegal character
```

Beim Inspizieren dieses Codes in einem Editor wie VIM können Sie sehen, dass tatsächlich ein [Nullbreitenraum (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space)-Zeichen vorhanden ist.

```js-nolint
const foo = "bar";<200b>
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
