---
title: "SyntaxError: String Literal enthält einen nicht maskierten Zeilenumbruch"
slug: Web/JavaScript/Reference/Errors/String_literal_EOL
l10n:
  sourceCommit: bd401d0045851cd5c7c145c3acdeabe5062059f5
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "string literal contains an unescaped line break" tritt auf, wenn irgendwo ein nicht abgeschlossener [String Literal](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals) vorhanden ist. String-Literale müssen von einfachen (`'`) oder doppelten (`"`) Anführungszeichen umschlossen werden und dürfen nicht über mehrere Zeilen verteilt sein.

## Nachricht

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: '' string literal contains an unescaped line break (Firefox)
SyntaxError: Unexpected EOF (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt irgendwo ein nicht abgeschlossenes [String Literal](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals). String-Literale müssen von einfachen (`'`) oder doppelten (`"`) Anführungszeichen umschlossen sein. JavaScript unterscheidet nicht zwischen einfach- und doppelt-quoted Strings. [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) funktionieren in Strings, die mit einfachen oder doppelten Anführungszeichen erstellt wurden. Um diesen Fehler zu beheben, überprüfen Sie, ob:

- Sie Eröffnungs- und Abschlusszeichen (einfach oder doppelt) für Ihr String Literal haben,
- Ihr String Literal korrekt maskiert ist,
- Ihr String Literal nicht über mehrere Zeilen verteilt ist.

## Beispiele

### Mehrere Zeilen

Sie können einen String in JavaScript nicht über mehrere Zeilen wie folgt aufteilen:

```js-nolint example-bad
const longString = "This is a very long string which needs
                    to wrap across multiple lines because
                    otherwise my code is unreadable.";
// SyntaxError: unterminated string literal
```

Stattdessen verwenden Sie den [+ Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition), einen Backslash oder [Template Literale](/de/docs/Web/JavaScript/Reference/Template_literals). Die Variante mit dem `+`-Operator sieht so aus:

```js example-good
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Oder Sie können das Backslash-Zeichen ("\\") am Ende jeder Zeile verwenden, um anzuzeigen, dass der String in der nächsten Zeile fortgesetzt wird. Stellen Sie sicher, dass sich nach dem Backslash (außer einem Zeilenumbruch) kein Leerzeichen oder anderes Zeichen befindet, oder als Einzug; andernfalls funktioniert es nicht. Diese Form sieht so aus:

```js example-good
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Eine weitere Möglichkeit ist die Verwendung von [Template Literalen](/de/docs/Web/JavaScript/Reference/Template_literals).

```js example-good
const longString = `This is a very long string which needs 
to wrap across multiple lines because 
otherwise my code is unreadable.`;
```

## Siehe auch

- [String Literal](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)
- [Template Literale](/de/docs/Web/JavaScript/Reference/Template_literals)
