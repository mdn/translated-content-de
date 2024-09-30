---
title: async function expression
slug: Web/JavaScript/Reference/Operators/async_function
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Die Schlüsselwörter **`async function`** können verwendet werden, um eine asynchrone Funktion innerhalb eines Ausdrucks zu definieren.

Sie können auch asynchrone Funktionen mit der [`async function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder der [Pfeilsyntax](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definieren.

## Syntax

```js-nolint
async function (param0) {
  statements
}
async function (param0, param1) {
  statements
}
async function (param0, param1, /* …, */ paramN) {
  statements
}

async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `async function` beginnen, um Mehrdeutigkeiten mit einer [`async function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu vermeiden. Die Schlüsselwörter `async function` leiten nur dann einen Ausdruck ein, wenn sie in einem Kontext erscheinen, der keine Anweisungen akzeptieren kann.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in diesem Fall ist die Funktion _anonym_. Der Name ist nur lokal im Funktionskörper bekannt.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Für die Syntax der Parameter siehe die [Funktionsreferenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `async function` Ausdruck ist dem [`async function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `async function` Ausdruck und einer `async function` Deklaration ist der _Funktionsname_, der in `async function` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `async function` Ausdruck kann als [IIFE](/de/docs/Glossary/IIFE) (Immediately Invoked Function Expression) verwendet werden, die ausgeführt wird, sobald sie definiert ist, was es Ihnen ermöglicht, [top-level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) nachzuahmen. Siehe auch das Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) für weitere Informationen.

## Beispiele

### Verwendung des async function Ausdrucks

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

// async function expression assigned to a variable
const add = async function (x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});

// async function expression used as an IIFE
(async function (x) {
  const p1 = resolveAfter2Seconds(20);
  const p2 = resolveAfter2Seconds(30);
  return x + (await p1) + (await p2);
})(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("Operators/await", "await")}}
