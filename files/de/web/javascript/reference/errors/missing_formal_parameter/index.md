---
title: "SyntaxError: missing formal parameter"
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "missing formal parameter" tritt auf, wenn Ihre Funktionsdeklaration gültige Parameter vermissen lässt.

## Meldung

```plain
SyntaxError: missing formal parameter (Firefox)
SyntaxError: Unexpected number '3'. Expected a parameter pattern or a ')' in parameter list. (Safari)
SyntaxError: Unexpected string literal "x". Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

"Formalparameter" ist ein anspruchsvoller Ausdruck für "Funktionsparameter". Ihre Funktionsdeklaration fehlt es an gültigen Parametern. In der Deklaration einer Funktion müssen die Parameter [Bezeichner](/de/docs/Glossary/Identifier) sein, nicht irgendwelche Werte wie Zahlen, Strings oder Objekte. Funktionen zu deklarieren und Funktionen aufzurufen sind zwei separate Schritte. Deklarationen erfordern Bezeichner als Parameter, und nur beim Aufruf (Invocation) der Funktion geben Sie die Werte an, die die Funktion verwenden soll.

In [JavaScript](/de/docs/Glossary/JavaScript) können Bezeichner nur alphanumerische Zeichen (oder "$" oder "\_") enthalten und dürfen nicht mit einer Ziffer beginnen. Ein Bezeichner unterscheidet sich von einem **String** darin, dass ein String Daten darstellt, während ein Bezeichner Teil des Codes ist.

## Beispiele

### Geben Sie ordnungsgemäße Funktionsparameter an

Funktionsparameter müssen Bezeichner sein, wenn eine Funktion eingerichtet wird. Alle diese Funktionsdeklarationen schlagen fehl, da sie Werte für ihre Parameter bereitstellen:

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

Sie müssen Bezeichner in Funktionsdeklarationen verwenden:

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

Sie können dann diese Funktionen mit den gewünschten Argumenten aufrufen:

```js
square(2); // 4

greet("Howdy"); // "Howdy"

log({ obj: "value" }); // { obj: "value" }
```

## Siehe auch

- [SyntaxError: redeclaration of formal parameter "x"](/de/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
