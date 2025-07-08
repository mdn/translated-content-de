---
title: "SyntaxError: unerlaubtes Zeichen"
slug: Web/JavaScript/Reference/Errors/Illegal_character
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "unerlaubtes Zeichen" tritt auf, wenn der [Lexer](/de/docs/Web/JavaScript/Reference/Lexical_grammar) ein Zeichen liest, das nicht Teil eines Zeichenkettenliterals ist und kein gültiges Token in der Sprache darstellen kann.

## Meldung

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: illegal character U+201C (Firefox)
SyntaxError: Invalid character '\u201c' (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt ein ungültiges Zeichen, das der Interpreter nicht versteht. Sie sollten es entweder in ein Zeichenkettenliteral einfügen oder durch ein anderes Zeichen ersetzen. Verwenden Sie einen Editor, der Syntax-Highlighting unterstützt, und überprüfen Sie Ihren Code sorgfältig auf Diskrepanzen wie ein Minuszeichen (`-`) gegenüber einem Gedankenstrich (`–`) oder einfache Anführungszeichen (`"`) gegenüber nicht standardisierten Anführungszeichen (`“`).

## Beispiele

### Nicht übereinstimmende Zeichen

Einige Zeichen sehen ähnlich aus, werden jedoch dazu führen, dass der Parser Ihren Code nicht interpretieren kann. Bekannte Beispiele hierfür sind Anführungszeichen, das Minus oder Semikolon (das [griechische Fragezeichen (U+37e)](https://en.wikipedia.org/wiki/Question_mark#Greek_question_mark) sieht genauso aus).

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

Einige Editoren und IDEs benachrichtigen Sie oder verwenden zumindest eine etwas andere Hervorhebung dafür, aber nicht alle. Wenn so etwas mit Ihrem Code passiert und Sie die Quelle des Problems nicht finden können, ist es oft das Beste, einfach die problematische Zeile zu löschen und neu zu tippen.

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

Beim Kopieren und Einfügen von Code aus externen Quellen können ungültige Zeichen vorhanden sein. Passen Sie auf!

```js-nolint example-bad
const foo = "bar";​
// SyntaxError: illegal character
```

Wenn Sie diesen Code in einem Editor wie VIM inspizieren, können Sie feststellen, dass sich tatsächlich ein [Zero-Width Space (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space) Zeichen darin befindet.

```js-nolint
const foo = "bar";<200b>
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
