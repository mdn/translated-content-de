---
title: "SyntaxError: string literal enthält einen nicht-escaped Zeilenumbruch"
slug: Web/JavaScript/Reference/Errors/String_literal_EOL
l10n:
  sourceCommit: bd401d0045851cd5c7c145c3acdeabe5062059f5
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "string literal enthält einen nicht-escaped Zeilenumbruch" tritt auf, wenn irgendwo ein nicht abgeschlossenes
[String-Literal](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals) vorhanden ist. String-Literale müssen durch einfache
(`'`) oder doppelte (`"`) Anführungszeichen eingeschlossen werden und können nicht über mehrere Zeilen hinweg verteilt werden.

## Meldung

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: '' string literal contains an unescaped line break (Firefox)
SyntaxError: Unexpected EOF (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt irgendwo ein nicht abgeschlossenes
[String-Literal](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals). String-Literale müssen durch einfache (`'`) oder doppelte (`"`) Anführungszeichen eingeschlossen sein. JavaScript macht keinen Unterschied zwischen einfach- und doppelt-gequoteten Zeichenfolgen.
[Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) funktionieren in Zeichenfolgen, die entweder mit einfachen oder doppelten Anführungszeichen erstellt wurden.
Um diesen Fehler zu beheben, prüfen Sie, ob:

- Sie sowohl ein öffnendes als auch ein schließendes Anführungszeichen (einfach oder doppelt) für Ihr String-Literal haben,
- Sie Ihr String-Literal korrekt escaped haben,
- Ihr String-Literal nicht über mehrere Zeilen verteilt ist.

## Beispiele

### Mehrere Zeilen

Sie können einen String in JavaScript nicht wie folgt über mehrere Zeilen verteilen:

```js-nolint example-bad
const longString = "This is a very long string which needs
                    to wrap across multiple lines because
                    otherwise my code is unreadable.";
// SyntaxError: unterminated string literal
```

Stattdessen verwenden Sie den [+ Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition),
einen Backslash oder [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).
Die Variante mit dem `+` Operator sieht so aus:

```js example-good
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Oder Sie verwenden das Backslash-Zeichen ("\\") am Ende jeder Zeile, um anzuzeigen, dass
der String in der nächsten Zeile fortgesetzt wird. Stellen Sie sicher, dass sich kein Leerzeichen oder ein anderes
Zeichen nach dem Backslash befindet (außer für einen Zeilenumbruch) oder als Einrückung; andernfalls funktioniert es nicht. Diese Form sieht so aus:

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

- [string literal](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)
- [Template literals](/de/docs/Web/JavaScript/Reference/Template_literals)
