---
title: "SyntaxError: missing formal parameter"
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "missing formal parameter" tritt auf, wenn Ihre Funktionsdeklaration keine gültigen Parameter enthält.

## Meldung

```plain
SyntaxError: missing formal parameter (Firefox)
SyntaxError: Unexpected number '3'. Expected a parameter pattern or a ')' in parameter list. (Safari)
SyntaxError: Unexpected string literal "x". Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

"Formal parameter" ist ein anderer Ausdruck für "Funktionsparameter". Ihre Funktionsdeklaration fehlt gültige Parameter. In der Deklaration einer Funktion müssen die Parameter [Bezeichner](/de/docs/Glossary/Identifier) sein, nicht irgendwelche Werte wie Zahlen, Zeichenfolgen oder Objekte. Das Deklarieren von Funktionen und das Aufrufen von Funktionen sind zwei separate Schritte. Deklarationen erfordern Bezeichner als Parameter, und nur beim Aufrufen (Invokation) der Funktion, liefern Sie die Werte, die die Funktion verwenden soll.

In [JavaScript](/de/docs/Glossary/JavaScript) können Bezeichner nur alphanumerische Zeichen (oder "$" oder "\_") enthalten und dürfen nicht mit einer Ziffer beginnen. Ein Bezeichner unterscheidet sich von einer **Zeichenkette** darin, dass eine Zeichenkette Daten ist, während ein Bezeichner Teil des Codes ist.

## Beispiele

### Richtige Funktionsparameter bereitstellen

Funktionsparameter müssen bei der Einrichtung einer Funktion Bezeichner sein. Alle diese Funktionsdeklarationen schlagen fehl, da sie Werte für ihre Parameter bereitstellen:

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
