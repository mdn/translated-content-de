---
title: "SyntaxError: identifier starts immediately after numeric literal"
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "identifier starts immediately after numeric literal" tritt auf, wenn ein Bezeichner mit einer Ziffer beginnt. Bezeichner dürfen nur mit einem Buchstaben, Unterstrich (\_) oder Dollarzeichen ($) beginnen.

## Meldung

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: identifier starts immediately after numeric literal (Firefox)
SyntaxError: No identifiers allowed directly after numeric literal (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ging schief?

Die Namen von Variablen, genannt {{Glossary("Identifier", "Bezeichner")}}, müssen bestimmten Regeln entsprechen, die Ihr Code einhalten muss!

Ein JavaScript-Bezeichner muss mit einem Buchstaben, Unterstrich (\_) oder Dollarzeichen ($) beginnen. Sie dürfen nicht mit einer Ziffer anfangen! Nur folgende Zeichen können Ziffern (0-9) sein.

## Beispiele

### Variablennamen, die mit numerischen Literalen beginnen

Variablennamen dürfen in JavaScript nicht mit Zahlen beginnen. Folgendes schlägt fehl:

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

In JavaScript gibt es eine syntaktische Besonderheit beim Aufrufen von Eigenschaften oder Methoden auf Zahlen. Wenn Sie eine Methode auf einer ganzen Zahl aufrufen möchten, können Sie nicht unmittelbar ein Punkt nach der Zahl verwenden, da der Punkt als Beginn eines Dezimalbruchs interpretiert wird, wodurch der Parser den Namen der Methode als Bezeichner unmittelbar nach einem Zahl-Literal erkennt. Um dies zu vermeiden, müssen Sie entweder die Zahl in Klammern setzen oder einen Doppelpunkten verwenden, wobei der erste Punkt ein Dezimalpunkt für das Zahl-Literal ist und der zweite Punkt der Eigenschafts-Zugriff ist.

```js-nolint example-bad
alert(typeof 1.toString())
// SyntaxError: identifier starts immediately after numeric literal
```

Korrekte Möglichkeiten, um Methoden auf Zahlen aufzurufen:

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
- [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types) Leitfaden
