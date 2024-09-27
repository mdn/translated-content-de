---
title: function* Ausdruck
slug: Web/JavaScript/Reference/Operators/function*
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Das **`function*`** Schlüsselwort kann verwendet werden, um eine Generatorfunktion innerhalb eines Ausdrucks zu definieren.

Sie können Generatorfunktionen auch mit der [`function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren.

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html", "taller")}}

## Syntax

```js-nolint
function* (param0) {
  statements
}
function* (param0, param1) {
  statements
}
function* (param0, param1, /* …, */ paramN) {
  statements
}

function* name(param0) {
  statements
}
function* name(param0, param1) {
  statements
}
function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, um Mehrdeutigkeiten mit einer [`function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) zu vermeiden. Das `function` Schlüsselwort beginnt nur dann einen Ausdruck, wenn es in einem Kontext erscheint, der keine Anweisungen akzeptieren kann.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in diesem Fall ist die Funktion _anonym_. Der Name ist nur lokal für den Funktionskörper.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe die [Funktionsreferenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `function*` Ausdruck ist dem [`function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `function*` Ausdruck und einer `function*` Deklaration ist der _Funktionsname_, der in `function*` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erzeugen. Ein `function*` Ausdruck kann als [IIFE](/de/docs/Glossary/IIFE) (Sofort aufgerufener Funktionsausdruck) verwendet werden, der sofort ausgeführt wird, sobald er definiert ist, und es Ihnen ermöglicht, ein ad-hoc [iterierbares Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) zu erstellen. Weitere Informationen finden Sie auch im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

## Beispiele

### Verwenden des function\* Ausdrucks

Das folgende Beispiel definiert eine unbenannte Generatorfunktion und weist sie `x` zu. Die Funktion liefert das Quadrat des Arguments:

```js
const x = function* (y) {
  yield y * y;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("GeneratorFunction")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
