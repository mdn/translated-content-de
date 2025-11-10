---
title: "SyntaxError: missing variable name"
slug: Web/JavaScript/Reference/Errors/No_variable_name
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "missing variable name" ist ein häufiger Fehler. Er wird normalerweise durch das Auslassen eines Variablennamens oder einen Tippfehler verursacht.

## Meldung

```plain
SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token '='. Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Einer Variablen fehlt ein Name. Die Ursache ist höchstwahrscheinlich ein Tippfehler oder ein vergessener Variablenname. Stellen Sie sicher, dass Sie vor dem `=`-Zeichen den Namen der Variablen angegeben haben.

Wenn Sie mehrere Variablen gleichzeitig deklarieren, stellen Sie sicher, dass die vorherigen Zeilen/Deklarationen nicht mit einem Komma statt mit einem Semikolon enden.

## Beispiele

### Ein Variablenname fehlt

```js-nolint example-bad
const = "foo";
```

Es ist leicht, zu vergessen, einen Namen für Ihre Variable zu vergeben!

```js example-good
const description = "foo";
```

### Reservierte Schlüsselwörter können keine Variablennamen sein

Es gibt einige Variablennamen, die [reservierte Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sind. Diese können Sie nicht verwenden. Entschuldigung :(

```js-nolint example-bad
const debugger = "whoop";
// SyntaxError: missing variable name
```

### Mehrere Variablen deklarieren

Achten Sie besonders auf Kommas, wenn Sie mehrere Variablen deklarieren. Gibt es ein überflüssiges Komma oder haben Sie Kommas statt Semikolons verwendet? Haben Sie daran gedacht, allen Ihren `const`-Variablen Werte zuzuweisen?

```js-nolint example-bad
let x, y = "foo",
const z, = "foo"

const first = document.getElementById("one"),
const second = document.getElementById("two"),

// SyntaxError: missing variable name
```

Die korrigierte Version:

```js example-good
let x,
  y = "foo";
const z = "foo";

const first = document.getElementById("one");
const second = document.getElementById("two");
```

### Arrays

{{jsxref("Array")}}-Literale in JavaScript benötigen eckige Klammern um die Werte. Das funktioniert nicht:

```js-nolint example-bad
const arr = 1,2,3,4,5;
// SyntaxError: missing variable name
```

Dies wäre korrekt:

```js example-good
const arr = [1, 2, 3, 4, 5];
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- {{jsxref("Statements/var", "var")}}
- [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types) Leitfaden
