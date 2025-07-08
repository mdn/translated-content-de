---
title: "SyntaxError: missing formal parameter"
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "missing formal parameter" tritt auf, wenn Ihrer Funktionsdeklaration gültige Parameter fehlen.

## Meldung

```plain
SyntaxError: missing formal parameter (Firefox)
SyntaxError: Unexpected number '3'. Expected a parameter pattern or a ')' in parameter list. (Safari)
SyntaxError: Unexpected string literal "x". Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

"Formal parameter" ist eine elegante Art zu sagen "Funktionsparameter". Ihrer Funktionsdeklaration fehlen gültige Parameter. In der Deklaration einer Funktion müssen die Parameter {{Glossary("Identifier", "Identifiers")}} sein, keine Werte wie Zahlen, Zeichenfolgen oder Objekte. Funktionen zu deklarieren und Funktionen aufzurufen sind zwei getrennte Schritte. Deklarationen erfordern Identifikatoren als Parameter, und erst beim Aufruf (der Ausführung) der Funktion geben Sie die Werte an, die die Funktion verwenden soll.

In {{Glossary("JavaScript", "JavaScript")}} dürfen Identifikatoren nur alphanumerische Zeichen (oder "$" oder "\_") enthalten und dürfen nicht mit einer Ziffer beginnen. Ein Identifikator unterscheidet sich von einer **Zeichenfolge** darin, dass eine Zeichenfolge Daten ist, während ein Identifikator Teil des Codes ist.

## Beispiele

### Richtig bereitgestellte Funktionsparameter

Funktionsparameter müssen beim Einrichten einer Funktion Identifikatoren sein. Alle diese Funktionsdeklarationen schlagen fehl, da sie Werte für ihre Parameter bereitstellen:

```js-nolint example-bad
function square(3) {
  return number * number;
}
// SyntaxError: missing formal parameter

function greet("Howdy") {
  return greeting;
}
// SyntaxError: missing formal parameter

function log({ obj: "value"}) {
  console.log(arg)
}
// SyntaxError: missing formal parameter
```

Sie müssen Identifikatoren in Funktionsdeklarationen verwenden:

```js example-good
function square(number) {
  return number * number;
}

function greet(greeting) {
  return greeting;
}

function log(arg) {
  console.log(arg);
}
```

Sie können diese Funktionen dann mit beliebigen Argumenten aufrufen:

```js
square(2); // 4

greet("Howdy"); // "Howdy"

log({ obj: "value" }); // { obj: "value" }
```

## Siehe auch

- [SyntaxError: redeclaration of formal parameter "x"](/de/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
