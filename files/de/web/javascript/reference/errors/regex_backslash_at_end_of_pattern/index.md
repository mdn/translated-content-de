---
title: "SyntaxError: \\ am Ende des Musters"
slug: Web/JavaScript/Reference/Errors/Regex_backslash_at_end_of_pattern
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler „\ am Ende des Musters“ tritt auf, wenn ein reguläres Ausdrucksmuster mit einem nicht-escaped Backslash (`\`) endet. In einem Regex-Literal würde der Backslash den abschließenden Schrägstrich `/` zu einem Literalzeichen machen, sodass dies nur beim Verwenden des {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktors auftreten kann.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /\/: \ at end of pattern (V8-based)
SyntaxError: \ am Ende des Musters (Firefox)
SyntaxError: Invalid regular expression: \ at end of pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Ein Backslash kann nicht wörtlich in einem regulären Ausdruck erscheinen. Er wird entweder verwendet, um ein anderes Zeichen zu [escapen](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences), oder er wird selbst durch einen anderen Backslash escaped. Ein Backslash am Ende eines regulären Ausdrucksmusters ist ungültig, da er nichts escapet.

## Beispiele

### Doppelte Escaping von Backslashes

Dieser Fehler kann nur beim Verwenden des `RegExp()` Konstruktors auftreten. Betrachten Sie den folgenden Code, der versucht, ein einzelnes Backslash-Zeichen zu matchen:

```js example-bad
const pattern = new RegExp("\\");
```

In JavaScript-Strings sind Backslashes ebenfalls Escape-Sequenzen. Daher werden die beiden Backslashes im String-Literal `"\\"` als ein einzelner Backslash interpretiert. Der `RegExp()` Konstruktor sieht dann nur ein einzelnes Backslash-Zeichen in der Regex-Quelle. Um dies zu beheben, müssen Sie den Backslash doppelt escapen:

```js example-good
const pattern = new RegExp("\\\\");
```

Die vier Backslashes im String-Literal repräsentieren zwei Backslashes in der Regex-Quelle, was dann zu einem [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für ein einzelnes Backslash-Literalzeichen wird.

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences)
