---
title: "SyntaxError: fehlender Variablenname"
slug: Web/JavaScript/Reference/Errors/No_variable_name
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "fehlender Variablenname" ist ein häufiger Fehler. Sie wird normalerweise durch das Weglassen eines Variablennamens oder einen typografischen Fehler verursacht.

## Nachricht

```plain
SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token '='. Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schief gelaufen?

Einer Variablen fehlt ein Name. Die Ursache ist höchstwahrscheinlich ein Tippfehler oder ein vergessener Variablenname. Stellen Sie sicher, dass Sie den Namen der Variablen vor dem `=`-Zeichen angegeben haben.

Wenn mehrere Variablen gleichzeitig deklariert werden, stellen Sie sicher, dass die vorherigen Zeilen/Deklarationen nicht mit einem Komma anstelle eines Semikolons enden.

## Beispiele

### Fehlender Variablenname

```js-nolint example-bad
const = "foo";
```

Es ist leicht zu vergessen, Ihrer Variablen einen Namen zuzuweisen!

```js example-good
const description = "foo";
```

### Reservierte Schlüsselwörter können keine Variablennamen sein

Es gibt einige Variablennamen, die [reservierte Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sind. Sie können diese nicht verwenden. Entschuldigung :(

```js-nolint example-bad
const debugger = "whoop";
// SyntaxError: missing variable name
```

### Deklaration mehrerer Variablen

Achten Sie besonders auf Kommas, wenn Sie mehrere Variablen deklarieren. Gibt es ein überschüssiges Komma oder haben Sie Kommas anstelle von Semikolons verwendet? Haben Sie daran gedacht, allen Ihren `const`-Variablen Werte zuzuweisen?

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

Das wäre korrekt:

```js example-good
const arr = [1, 2, 3, 4, 5];
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- {{jsxref("Statements/var", "var")}}
- [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types) Leitfaden
