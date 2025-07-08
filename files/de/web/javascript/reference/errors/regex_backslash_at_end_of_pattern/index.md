---
title: "SyntaxError: \\ am Ende des Musters"
slug: Web/JavaScript/Reference/Errors/Regex_backslash_at_end_of_pattern
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "\ am Ende des Musters" tritt auf, wenn ein regulärer Ausdruck mit einem nicht escapeten Backslash (`\`) endet. In einem Regex-Literal würde der Backslash das abschließende Schrägstrich `/` zu einem Literal-Zeichen machen, sodass dies nur beim Verwenden des {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktors auftreten kann.

## Meldung

```plain
SyntaxError: Invalid regular expression: /\/: \ at end of pattern (V8-based)
SyntaxError: \ at end of pattern (Firefox)
SyntaxError: Invalid regular expression: \ at end of pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Ein Backslash kann nicht wörtlich in einem regulären Ausdruck erscheinen. Er geht entweder einem anderen Zeichen voraus, um [es zu escapen](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences), oder er wird selbst von einem anderen Backslash escaped. Ein Backslash am Ende eines regulären Ausdrucksmusters ist ungültig, da er nichts escapet.

## Beispiele

### Doppelte Escapierung von Backslashes

Dieser Fehler kann nur beim Verwenden des `RegExp()` Konstruktors auftreten. Betrachten Sie den folgenden Code, der versucht, ein einzelnes Backslash-Zeichen zu matchen:

```js example-bad
const pattern = new RegExp("\\");
```

In JavaScript-Strings sind Backslashes ebenfalls Escape-Sequenzen. Daher werden die zwei Backslashes im string-Literal `"\\"` als einzelner Backslash interpretiert. Der `RegExp()` Konstruktor sieht dann nur ein einzelnes Backslash-Zeichen in der Regex-Quelle. Um dies zu beheben, müssen Sie den Backslash doppelt escapen:

```js example-good
const pattern = new RegExp("\\\\");
```

Die vier Backslashes im string-Literal repräsentieren zwei Backslashes in der Regex-Quelle, die dann zu einem [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für ein einzelnes Backslash-Literal-Zeichen werden.

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences)
