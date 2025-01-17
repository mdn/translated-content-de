---
title: "SyntaxError: identifier starts immediately after numeric literal"
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
l10n:
  sourceCommit: 9ad94afb35bf16a6be881d39eb20b9c13aa5097e
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "identifier starts immediately after numeric literal" tritt auf, wenn ein Bezeichner mit einer Ziffer beginnt. Bezeichner können nur mit einem Buchstaben, Unterstrich (\_) oder Dollarzeichen ($) beginnen.

## Nachricht

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: identifier starts immediately after numeric literal (Firefox)
SyntaxError: No identifiers allowed directly after numeric literal (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die Namen von Variablen, sogenannte {{Glossary("Identifier", "Bezeichner")}}, unterliegen bestimmten Regeln, an die sich Ihr Code halten muss!

Ein JavaScript-Bezeichner muss mit einem Buchstaben, Unterstrich (\_) oder Dollarzeichen ($) beginnen. Sie dürfen nicht mit einer Ziffer beginnen! Nur nachfolgende Zeichen können Ziffern (0-9) sein.

## Beispiele

### Variablennamen, die mit numerischen Literalen beginnen

Variablennamen dürfen in JavaScript nicht mit Zahlen beginnen. Das Folgende schlägt fehl:

```js-nolint example-bad
const 1life = "foo";
// SyntaxError: identifier starts immediately after numeric literal

const foo = 1life;
// SyntaxError: identifier starts immediately after numeric literal
```

Sie müssen Ihre Variable umbenennen, um die führende Zahl zu vermeiden.

```js example-good
const life1 = "foo";
const foo = life1;
```

In JavaScript gibt es eine syntaktische Besonderheit beim Aufrufen von Eigenschaften oder Methoden auf Zahlen. Wenn Sie eine Methode auf einer ganzen Zahl aufrufen möchten, können Sie nicht sofort nach der Zahl einen Punkt verwenden, da der Punkt als Beginn eines Dezimalbruchs interpretiert wird, wodurch der Parser den Methoden-Namen als Bezeichner sieht, der unmittelbar nach einer Zahl vorkommt. Um dies zu vermeiden, müssen Sie entweder die Zahl in Klammern setzen oder einen doppelten Punkt verwenden, wobei der erste Punkt ein Dezimalpunkt für die Zahl ist und der zweite Punkt der Zugriff auf die Eigenschaft.

```js-nolint example-bad
alert(typeof 1.toString())
// SyntaxError: identifier starts immediately after numeric literal
```

Korrekte Wege, um Methoden auf Zahlen aufzurufen:

```js-nolint example-good
// Wrap the number in parentheses
alert(typeof (1).toString());

// Add an extra dot for the number literal
alert(typeof 2..toString());

// Use square brackets
alert(typeof 3["toString"]());
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- Leitfaden zur [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types)
