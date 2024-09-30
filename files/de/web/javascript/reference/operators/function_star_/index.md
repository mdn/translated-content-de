---
title: function* Ausdruck
slug: Web/JavaScript/Reference/Operators/function*
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Das **`function*`** Schlüsselwort kann verwendet werden, um eine Generatorfunktion innerhalb eines Ausdrucks zu definieren.

Sie können auch Generatorfunktionen mit der [`function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren.

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, um Mehrdeutigkeiten mit einer [`function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) zu vermeiden. Das Schlüsselwort `function` beginnt nur dann einen Ausdruck, wenn es in einem Kontext erscheint, der keine Anweisungen akzeptiert.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, wobei die Funktion dann _anonym_ ist. Der Name ist nur innerhalb des Funktionskörpers lokal.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe das [Funktionen-Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `function*` Ausdruck ist einem [`function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `function*` Ausdruck und einer `function*` Deklaration ist der _Funktionsname_, der in `function*` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `function*` Ausdruck kann als [IIFE](/de/docs/Glossary/IIFE) (Immediately Invoked Function Expression) verwendet werden, die sofort nach der Definition ausgeführt wird und es ermöglicht, ein ad-hoc [iterables Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) zu erstellen. Siehe auch das Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) für weitere Informationen.

## Beispiele

### Verwendung des function\* Ausdrucks

Das folgende Beispiel definiert eine unbenannte Generatorfunktion und weist sie `x` zu. Die Funktion liefert das Quadrat ihres Arguments:

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
