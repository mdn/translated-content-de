---
title: "SyntaxError: fehlender formaler Parameter"
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "fehlender formaler Parameter" tritt auf, wenn Ihrer Funktionsdeklaration gültige Parameter fehlen.

## Nachricht

```plain
SyntaxError: missing formal parameter (Firefox)
SyntaxError: Unexpected number '3'. Expected a parameter pattern or a ')' in parameter list. (Safari)
SyntaxError: Unexpected string literal "x". Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

"Formaler Parameter" ist eine elegante Art zu sagen "Funktionsparameter". Ihrer Funktionsdeklaration fehlen gültige Parameter. In der Deklaration einer Funktion müssen die Parameter [Identifikatoren](/de/docs/Glossary/Identifier) sein, nicht irgendein Wert wie Zahlen, Zeichenfolgen oder Objekte. Funktionen deklarieren und Funktionen aufrufen sind zwei separate Schritte. Deklarationen erfordern Identifikatoren als Parameter, und nur beim Aufrufen (Ausführen) der Funktion geben Sie die Werte an, die die Funktion verwenden soll.

In [JavaScript](/de/docs/Glossary/JavaScript) können Identifikatoren nur alphanumerische Zeichen (oder "$" oder "\_") enthalten und dürfen nicht mit einer Ziffer beginnen. Ein Identifikator unterscheidet sich von einer **Zeichenfolge** darin, dass eine Zeichenfolge Daten ist, während ein Identifikator Teil des Codes ist.

## Beispiele

### Geben Sie gültige Funktionsparameter an

Funktionsparameter müssen Identifikatoren sein, wenn eine Funktion eingerichtet wird. Alle diese Funktionsdeklarationen schlagen fehl, da sie Werte für ihre Parameter angeben:

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

Sie können dann diese Funktionen mit den gewünschten Argumenten aufrufen:

```js
square(2); // 4

greet("Howdy"); // "Howdy"

log({ obj: "value" }); // { obj: "value" }
```

## Siehe auch

- [SyntaxError: redeclaration of formal parameter "x"](/de/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
