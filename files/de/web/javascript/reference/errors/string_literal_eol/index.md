---
title: "SyntaxError: string literal enthält einen nicht-escaped Zeilenumbruch"
slug: Web/JavaScript/Reference/Errors/String_literal_EOL
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "string literal contains an unescaped line break" tritt auf, wenn irgendwo ein nicht abgeschlossenes [String-Literal](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals) vorhanden ist. String-Literale müssen von einfachen (`'`) oder doppelten (`"`) Anführungszeichen umschlossen sein und dürfen nicht über mehrere Zeilen hinweg aufgeteilt werden.

## Nachricht

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: '' string literal contains an unescaped line break (Firefox)
SyntaxError: Unexpected EOF (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt irgendwo ein nicht abgeschlossenes [String-Literal](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals). String-Literale müssen von einfachen (`'`) oder doppelten (`"`) Anführungszeichen umschlossen werden. JavaScript macht keinen Unterschied zwischen einfach- und doppelt-quotierten Strings. [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) funktionieren in Strings, die entweder mit einfachen oder doppelten Anführungszeichen erstellt wurden. Um diesen Fehler zu beheben, überprüfen Sie:

- ob Sie Anfangs- und Endanführungszeichen (einfach oder doppelt) für Ihr String-Literal haben,
- ob Sie Ihr String-Literal korrekt escaping,
- ob Ihr String-Literal nicht über mehrere Zeilen hinweg aufgeteilt ist.

## Beispiele

### Mehrere Zeilen

Sie können einen String in JavaScript nicht über mehrere Zeilen hinweg wie folgt aufteilen:

```js-nolint example-bad
const longString = "This is a very long string which needs
                    to wrap across multiple lines because
                    otherwise my code is unreadable.";
// SyntaxError: unterminated string literal
```

Verwenden Sie stattdessen den [+ Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition), einen Backslash oder [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals). Die Variante mit dem `+` Operator sieht so aus:

```js example-good
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Oder Sie können das Backslash-Zeichen ("\\") am Ende jeder Zeile verwenden, um anzuzeigen, dass der String in der nächsten Zeile fortgesetzt wird. Stellen Sie sicher, dass nach dem Backslash kein Leerzeichen oder ein anderes Zeichen (außer einem Zeilenumbruch) oder als Einzug vorhanden ist; andernfalls funktioniert es nicht. Diese Form sieht folgendermaßen aus:

```js example-good
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Eine weitere Möglichkeit ist die Verwendung von [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals).

```js example-good
const longString = `This is a very long string which needs 
to wrap across multiple lines because 
otherwise my code is unreadable.`;
```

## Siehe auch

- [String-Literal](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)
- [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals)
