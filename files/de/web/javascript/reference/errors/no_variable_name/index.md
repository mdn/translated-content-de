---
title: "SyntaxError: missing variable name"
slug: Web/JavaScript/Reference/Errors/No_variable_name
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "missing variable name" ist ein häufiger Fehler. Er wird in der Regel durch das Auslassen eines Variablennamens oder einen Schreibfehler verursacht.

## Meldung

```plain
SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token '='. Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Einer Variablen fehlt ein Name. Die Ursache ist höchstwahrscheinlich ein Tippfehler oder ein vergessener Variablenname. Stellen Sie sicher, dass Sie den Namen der Variablen vor dem `=`-Zeichen angegeben haben.

Wenn Sie mehrere Variablen gleichzeitig deklarieren, stellen Sie sicher, dass die vorhergehenden Zeilen/Deklarationen nicht mit einem Komma statt mit einem Semikolon enden.

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

Es gibt einige Variablennamen, die [reservierte Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sind. Sie können diese nicht verwenden. Leider :(

```js-nolint example-bad
const debugger = "whoop";
// SyntaxError: missing variable name
```

### Mehrere Variablen deklarieren

Achten Sie besonders auf Kommata, wenn Sie mehrere Variablen deklarieren. Gibt es ein überflüssiges Komma oder haben Sie Kommata anstelle von Semikolons verwendet? Haben Sie daran gedacht, allen Ihren `const`-Variablen Werte zuzuweisen?

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

{{jsxref("Array")}}-Literale in JavaScript benötigen eckige Klammern um die Werte. Das wird nicht funktionieren:

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
