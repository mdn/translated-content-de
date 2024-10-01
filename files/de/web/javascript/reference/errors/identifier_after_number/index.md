---
title: "SyntaxError: identifier startet direkt nach einer numerischen Literal"
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "identifier starts immediately after numeric literal" tritt auf, wenn ein Bezeichner mit einer Ziffer beginnt. Bezeichner können nur mit einem Buchstaben, Unterstrich (\_) oder Dollarzeichen ($) beginnen.

## Meldung

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: identifier starts immediately after numeric literal (Firefox)
SyntaxError: No identifiers allowed directly after numeric literal (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die Namen von Variablen, die als {{Glossary("Identifier", "Bezeichner")}} bezeichnet werden, unterliegen bestimmten Regeln, an die sich Ihr Code halten muss!

Ein JavaScript-Bezeichner muss mit einem Buchstaben, Unterstrich (\_) oder Dollarzeichen ($) beginnen. Sie dürfen nicht mit einer Ziffer beginnen! Nur nachfolgende Zeichen können Ziffern (0-9) sein.

## Beispiele

### Variablennamen, die mit numerischen Literalen beginnen

Variablennamen dürfen in JavaScript nicht mit Zahlen beginnen. Das folgende Beispiel schlägt fehl:

```js-nolint example-bad
const 1life = "foo";
// SyntaxError: identifier starts immediately after numeric literal

const foo = 1life;
// SyntaxError: identifier starts immediately after numeric literal

alert(1.foo);
// SyntaxError: identifier starts immediately after numeric literal
```

Sie müssen Ihre Variable umbenennen, um die führende Zahl zu vermeiden.

```js example-good
const life1 = "foo";
const foo = life1;
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types) Leitfaden
