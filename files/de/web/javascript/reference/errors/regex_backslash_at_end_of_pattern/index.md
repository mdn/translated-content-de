---
title: "SyntaxError: \\ am Ende des Musters"
slug: Web/JavaScript/Reference/Errors/Regex_backslash_at_end_of_pattern
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme „\ am Ende des Musters“ tritt auf, wenn ein regulärer Ausdrück mit einem nicht-escapedem Backslash (`\`) endet. In einem Regex-Literal würde der Backslash den abschließenden Schrägstrich `/` zu einem literalen Zeichen machen, daher kann dies nur auftreten, wenn der {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor verwendet wird.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /\/: \ at end of pattern (V8-based)
SyntaxError: \ at end of pattern (Firefox)
SyntaxError: Invalid regular expression: \ at end of pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Ein Backslash kann nicht wörtlich in einem regulären Ausdruck erscheinen. Er steht entweder vor einem anderen Zeichen, um [es zu escapen](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences), oder wird selbst von einem anderen Backslash geescaped. Ein Backslash am Ende eines regulären Ausdrucks-Musters ist ungültig, da er nichts escapet.

## Beispiele

### Doppelte Escape-Sequenzen für Backslashes

Dieser Fehler kann nur bei der Verwendung des `RegExp()`-Konstruktors auftreten. Betrachten Sie den folgenden Code, der versucht, ein einzelnes Backslash-Zeichen zu matchen:

```js example-bad
const pattern = new RegExp("\\");
```

In JavaScript-Strings sind Backslashes ebenfalls Escape-Sequenzen. Daher werden die zwei Backslashes im String-Literal `"\\"` als ein einzelner Backslash interpretiert. Der `RegExp()`-Konstruktor sieht dann nur ein einzelnes Backslash-Zeichen in der Regex-Quelle. Um dies zu beheben, müssen Sie den Backslash doppelt escapen:

```js example-good
const pattern = new RegExp("\\\\");
```

Die vier Backslashes im String-Literal stehen für zwei Backslashes in der Regex-Quelle, die dann zu einem [character escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für ein einzelnes Backslash-Literal werden.

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences)
