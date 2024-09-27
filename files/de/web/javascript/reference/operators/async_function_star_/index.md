---
title: async function* Ausdruck
slug: Web/JavaScript/Reference/Operators/async_function*
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Die Schlüsselwörter **`async function*`** können verwendet werden, um eine asynchrone Generatorfunktion innerhalb eines Ausdrucks zu definieren.

Sie können auch asynchrone Generatorfunktionen mithilfe der [`async function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) definieren.

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

## Syntax

```js-nolint
async function* (param0) {
  statements
}
async function* (param0, param1) {
  statements
}
async function* (param0, param1, /* …, */ paramN) {
  statements
}

async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `async function` beginnen, um Verwechslungen mit einer [`async function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zu vermeiden. Die Schlüsselwörter `async function` beginnen nur dann einen Ausdruck, wenn sie in einem Kontext erscheinen, der keine Anweisungen akzeptieren kann.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in diesem Fall ist die Funktion _anonym_. Der Name ist nur lokal im Funktionskörper verfügbar.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe die [Funktionen-Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `async function*` Ausdruck ist dem in der Syntax sehr ähnlich und hat fast die gleiche Syntax wie eine [`async function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*). Der Hauptunterschied zwischen einem `async function*` Ausdruck und einer `async function*` Deklaration ist der _Funktionsname_, der in `async function*` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `async function*` Ausdruck kann als [IIFE](/de/docs/Glossary/IIFE) (Immediately Invoked Function Expression) verwendet werden, die ausgeführt wird, sobald sie definiert ist, wodurch Sie ein maßgeschneidertes [asynchrones iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) erstellen können. Siehe auch das Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) für mehr Informationen.

## Beispiele

### Verwendung von async function\* Ausdruck

Das folgende Beispiel definiert eine unbenannte asynchrone Generatorfunktion und weist sie `x` zu. Die Funktion liefert das Quadrat ihres Arguments:

```js
const x = async function* (y) {
  yield Promise.resolve(y * y);
};
x(6)
  .next()
  .then((res) => console.log(res.value)); // 36
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("AsyncGeneratorFunction")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
