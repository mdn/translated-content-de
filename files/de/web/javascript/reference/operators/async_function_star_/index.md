---
title: async function* Ausdruck
slug: Web/JavaScript/Reference/Operators/async_function*
l10n:
  sourceCommit: 6512bd0089204441d9a3137bef016c92170e8467
---

{{jsSidebar("Operators")}}

Die **`async function*`** Schlüsselwörter können verwendet werden, um eine asynchrone Generatorfunktion innerhalb eines Ausdrucks zu definieren.

Sie können asynchrone Generatorfunktionen auch mithilfe der [`async function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) definieren.

{{InteractiveExample("JavaScript Demo: Expressions - Async Function Asterisk", "taller")}}

```js interactive-example
async function joinAll(generator) {
  let str = "";
  for await (const val of generator()) {
    str = str + val;
  }
  return str;
}

const str = joinAll(async function* () {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
});
console.log(str);
// Expected output: "abc"
```

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
> Ein [Ausdrucksbefehl](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `async function` beginnen, um Verwechslungen mit einer [`async function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zu vermeiden. Die Schlüsselwörter `async function` beginnen nur dann einen Ausdruck, wenn sie in einem Kontext erscheinen, der keine Befehle akzeptieren kann.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in diesem Fall ist die Funktion _anonym_. Der Name ist nur lokal im Funktionskörper vorhanden.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Siehe den [Funktions-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_parameters) für die Syntax der Parameter.
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `async function*` Ausdruck ist dem [`async function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `async function*` Ausdruck und einer `async function*` Deklaration ist der _Funktionsname_, der in `async function*` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `async function*` Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression) verwendet werden, die ausgeführt wird, sobald sie definiert ist, wodurch Sie ein ad-hoc [asynchrones iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) erstellen können. Siehe auch das Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) für weitere Informationen.

## Beispiele

### Verwendung von async function\* Ausdruck

Das folgende Beispiel definiert eine unbenannte asynchrone Generatorfunktion und weist sie `x` zu. Die Funktion liefert das Quadrat ihres Arguments zurück:

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
- [Iteration-Protokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
