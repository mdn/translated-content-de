---
title: async function*-Ausdruck
slug: Web/JavaScript/Reference/Operators/async_function*
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Die Schlüsselwörter **`async function*`** können verwendet werden, um eine asynchrone Generatorfunktion innerhalb eines Ausdrucks zu definieren.

Sie können asynchrone Generatorfunktionen auch mittels der [`async function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) definieren.

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
> Ein [Ausdrucks-Statement](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `async function` beginnen, um Verwechslungen mit einer [`async function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zu vermeiden. Die Schlüsselwörter `async function` beginnen nur dann einen Ausdruck, wenn sie in einem Kontext erscheinen, der keine Statements akzeptieren kann.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in welchem Fall die Funktion _anonym_ ist. Der Name ist nur lokal zum Funktionskörper.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe die [Funktionsreferenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `async function*`-Ausdruck ist dem [`async function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `async function*`-Ausdruck und einer `async function*`-Deklaration ist der _Funktionsname_, der in `async function*`-Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `async function*`-Ausdruck kann als [IIFE](/de/docs/Glossary/IIFE) (Immediately Invoked Function Expression) verwendet werden, der ausgeführt wird, sobald er definiert ist und es Ihnen ermöglicht, ein Ad-hoc- [asynchrones iterables Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) zu erstellen. Siehe auch das Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) für weitere Informationen.

## Beispiele

### Verwendung des async function\*-Ausdrucks

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