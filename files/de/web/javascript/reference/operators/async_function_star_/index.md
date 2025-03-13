---
title: async function* Ausdruck
slug: Web/JavaScript/Reference/Operators/async_function*
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Die **`async function*`** Schlüsselwörter können verwendet werden, um eine asynchrone Generatorfunktion innerhalb eines Ausdrucks zu definieren.

Sie können auch asynchrone Generatorfunktionen mithilfe der [`async function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) definieren.

{{InteractiveExample("JavaScript Demo: async function* expression", "taller")}}

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `async function` beginnen, um Mehrdeutigkeiten mit einer [`async function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zu vermeiden. Die `async function` Schlüsselwörter beginnen nur dann einen Ausdruck, wenn sie in einem Kontext erscheinen, der keine Anweisungen akzeptiert.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in diesem Fall ist die Funktion _anonym_. Der Name ist nur lokal im Funktionskörper sichtbar.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe die [Funktionen-Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion ausmachen.

## Beschreibung

Ein `async function*` Ausdruck ist einem [`async function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `async function*` Ausdruck und einer `async function*` Deklaration ist der _Funktionsname_, der in `async function*` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `async function*` Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression) verwendet werden, der sofort ausgeführt wird, sobald er definiert ist. Dies ermöglicht die Erstellung eines ad-hoc [asynchronen iterierbaren Objekts](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols). Weitere Informationen finden Sie im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

## Beispiele

### Verwendung des async function\* Ausdrucks

Das folgende Beispiel definiert eine unbenannte asynchrone Generatorfunktion und ordnet sie `x` zu. Die Funktion gibt das Quadrat ihres Arguments zurück:

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

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("AsyncGeneratorFunction")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
