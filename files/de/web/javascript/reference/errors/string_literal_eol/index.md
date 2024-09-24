---
title: "SyntaxError: Zeichenfolgenliterale enthalten einen nicht-escaped Zeilenumbruch"
slug: Web/JavaScript/Reference/Errors/String_literal_EOL
l10n:
  sourceCommit: bd401d0045851cd5c7c145c3acdeabe5062059f5
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "string literal contains an unescaped line break" tritt auf, wenn irgendwo ein nicht abgeschlossenes [Zeichenfolgenliteral](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals) vorhanden ist. Zeichenfolgenliterale müssen in einfache (`'`) oder doppelte (`"`) Anführungszeichen eingeschlossen sein und dürfen nicht über mehrere Zeilen verteilt werden.

## Meldung

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: '' string literal contains an unescaped line break (Firefox)
SyntaxError: Unexpected EOF (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was schiefgelaufen ist

Es gibt irgendwo ein nicht abgeschlossenes [Zeichenfolgenliteral](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals). Zeichenfolgenliterale müssen in einfache (`'`) oder doppelte (`"`) Anführungszeichen eingeschlossen sein. JavaScript macht keinen Unterschied zwischen einfach- und doppelt-zugeführten Zeichenfolgen. [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) funktionieren in Zeichenfolgen, die mit entweder einfachen oder doppelten Anführungszeichen erstellt wurden. Um diesen Fehler zu beheben, überprüfen Sie, ob:

- Sie Öffnungs- und Schlusszeichen (einfach oder doppelt) für Ihr Zeichenfolgenliteral haben,
- Sie Ihr Zeichenfolgenliteral korrekt escaped haben,
- Ihr Zeichenfolgenliteral nicht über mehrere Zeilen verteilt ist.

## Beispiele

### Mehrere Zeilen

Sie können eine Zeichenfolge in JavaScript nicht so über mehrere Zeilen verteilen:

```js-nolint example-bad
const longString = "This is a very long string which needs
                    to wrap across multiple lines because
                    otherwise my code is unreadable.";
// SyntaxError: unterminated string literal
```

Stattdessen verwenden Sie den [+ Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition), einen Backslash oder [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).
Die Variante mit dem `+` Operator sieht so aus:

```js example-good
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Oder Sie können das Backslash-Zeichen ("\\") am Ende jeder Zeile verwenden, um anzuzeigen, dass die Zeichenfolge in der nächsten Zeile fortgesetzt wird. Stellen Sie sicher, dass kein Leerzeichen oder ein anderes Zeichen nach dem Backslash (außer einem Zeilenumbruch) oder als Einzug steht, sonst funktioniert es nicht. Diese Form sieht so aus:

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

- [Zeichenfolgenliteral](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)
- [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals)
