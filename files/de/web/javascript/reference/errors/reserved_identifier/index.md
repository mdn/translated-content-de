---
title: 'SyntaxError: "x" ist ein reservierter Bezeichner'
slug: Web/JavaScript/Reference/Errors/Reserved_identifier
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "_variable_ ist ein reservierter Bezeichner" tritt auf, wenn [reservierte Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) als Bezeichner verwendet werden.

## Meldung

```plain
SyntaxError: Unexpected reserved word (V8-based)
SyntaxError: implements is a reserved identifier (Firefox)
SyntaxError: Cannot use the reserved word 'implements' as a variable name. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schief gelaufen?

[Reservierte Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) verursachen einen Fehler, wenn sie als Bezeichner verwendet werden. Diese sind im strikten und im nicht-strikten Modus reserviert:

- `enum`

Die folgenden Schlüsselwörter sind nur reserviert, wenn sie im strikten Modus verwendet werden:

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

## Beispiele

### Strikte und nicht-strikte reservierte Schlüsselwörter

Das `enum` ist im Allgemeinen ein reservierter Bezeichner.

```js-nolint example-bad
const enum = { RED: 0, GREEN: 1, BLUE: 2 };
// SyntaxError: enum is a reserved identifier
```

Im strikten Modus sind mehr Bezeichner reserviert.

```js-nolint example-bad
"use strict";
const package = ["potatoes", "rice", "fries"];
// SyntaxError: package is a reserved identifier
```

Sie müssen diese Variablen umbenennen.

```js example-good
const colorEnum = { RED: 0, GREEN: 1, BLUE: 2 };
const list = ["potatoes", "rice", "fries"];
```

### Aktualisieren Sie ältere Browser

Wenn Sie einen älteren Browser verwenden, der noch kein [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder
[`class`](/de/docs/Web/JavaScript/Reference/Statements/class) implementiert, sollten Sie auf eine aktuellere Browserversion aktualisieren, die diese neuen Sprachmerkmale unterstützt.

```js
"use strict";
class DocArchiver {}

// SyntaxError: class is a reserved identifier
// (throws in older browsers only, e.g. Firefox 44 and older)
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
