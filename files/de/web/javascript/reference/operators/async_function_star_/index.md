---
title: async function* expression
slug: Web/JavaScript/Reference/Operators/async_function*
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die Schlüsselwörter **`async function*`** können verwendet werden, um eine asynchrone Generatorfunktion in einem Ausdruck zu definieren.

Sie können auch asynchrone Generatorfunktionen mithilfe der [`async function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) definieren.

{{InteractiveExample("JavaScript Demo: async function* expression", "taller")}}

```js interactive-example
async function joinAll(generator) {
  let str = "";
  for await (const val of generator()) {
    str += val;
  }
  return str;
}
joinAll(async function* () {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
}).then((str) => console.log(str));
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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `async function` beginnen, um Mehrdeutigkeiten mit einer [`async function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zu vermeiden. Die Schlüsselwörter `async function` leiten nur dann einen Ausdruck ein, wenn sie in einem Kontext erscheinen, der keine Anweisungen akzeptiert.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in diesem Fall ist die Funktion _anonym_. Der Name ist nur lokal im Funktionskörper gültig.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Zur Syntax der Parameter siehe die [Funktionsreferenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `async function*` Ausdruck ist dem [`async function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function*) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `async function*` Ausdruck und einer `async function*` Deklaration ist der _Funktionsname_, der in `async function*` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `async function*` Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Sofortig Ausgeführter Funktionsausdruck) verwendet werden, der sofort ausgeführt wird, sobald er definiert ist, wodurch Sie ein ad-hoc [asynchrones iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) erstellen können. Weitere Informationen finden Sie auch im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

## Beispiele

### Verwendung des async function\* Ausdrucks

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

- [Leitfaden für Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("AsyncGeneratorFunction")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
