---
title: "SyntaxError: illegales Zeichen"
slug: Web/JavaScript/Reference/Errors/Illegal_character
l10n:
  sourceCommit: 6deab4bdc0b2563d1e32047c4f5b25c3a8f02850
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "illegales Zeichen" tritt auf, wenn der [Lexer](/de/docs/Web/JavaScript/Reference/Lexical_grammar) ein Zeichen liest, das nicht Teil eines Zeichenketten-Literals ist und kein gültiges Token in der Sprache darstellen kann.

## Meldung

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: illegal character U+201C (Firefox)
SyntaxError: Invalid character '\u201c' (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt ein ungültiges Zeichen, das der Interpreter nicht versteht. Sie sollten es entweder in ein Zeichenketten-Literal einfügen oder durch ein anderes Zeichen ersetzen. Verwenden Sie einen Editor, der Syntaxhervorhebung unterstützt, und prüfen Sie sorgfältig Ihren Code auf Unterschiede wie ein Minuszeichen (`-`) gegenüber einem Bindestrich (`–`) oder einfache Anführungszeichen (`"`) gegenüber nicht standardmäßigen Anführungszeichen (`“`).

## Beispiele

### Nicht übereinstimmende Zeichen

Einige Zeichen sehen ähnlich aus, führen jedoch dazu, dass der Parser Ihren Code nicht interpretieren kann. Bekannte Beispiele dafür sind Anführungszeichen, das Minuszeichen oder das Semikolon ([griechisches Fragezeichen (U+37e)](https://en.wikipedia.org/wiki/Question_mark#Greek_question_mark) sieht gleich aus).

```js-nolint example-bad
“This looks like a string”; // SyntaxError: illegales Zeichen
// “ und ” sind nicht " sehen jedoch so aus

42 – 13; // SyntaxError: illegales Zeichen
// – (Gedankenstrich) ist nicht - sieht jedoch so aus

const foo = "bar"; // SyntaxError: illegales Zeichen
// <37e> ist nicht ; sieht jedoch so aus
```

Dies sollte funktionieren:

```js example-good
"This is actually a string";
42 - 13;
const foo = "bar";
```

Einige Editoren und IDEs werden Sie darauf hinweisen oder verwenden zumindest eine leicht unterschiedliche Hervorhebung dafür, aber nicht alle. Wenn so etwas in Ihrem Code passiert und Sie die Ursache des Problems nicht finden können, ist es oft am besten, einfach die problematische Zeile zu löschen und neu zu schreiben.

### Vergessene Zeichen

Es ist leicht, ein Zeichen hier oder da zu vergessen.

```js-nolint example-bad
const operators = ["+", "-", ×", "÷"];
// SyntaxError: illegales Zeichen U+00D7
```

Fügen Sie das fehlende Anführungszeichen für `"×"` hinzu.

```js example-good
const operators = ["+", "-", "×", "÷"];
```

### Versteckte Zeichen

Beim Kopieren von Code aus externen Quellen könnten ungültige Zeichen vorhanden sein. Seien Sie wachsam!

```js-nolint example-bad
const foo = "bar";​
// SyntaxError: illegales Zeichen
```

Wenn Sie diesen Code in einem Editor wie Vim untersuchen, können Sie sehen, dass tatsächlich ein Zeichen für ein [Leerzeichen mit Breite Null (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space) vorhanden ist.

```js-nolint
const foo = "bar";<200b>
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
