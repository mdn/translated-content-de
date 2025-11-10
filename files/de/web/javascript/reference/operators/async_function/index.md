---
title: async function expression
slug: Web/JavaScript/Reference/Operators/async_function
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die Schlüsselwörter **`async function`** können verwendet werden, um eine asynchrone Funktion innerhalb eines Ausdrucks zu definieren.

Sie können auch asynchrone Funktionen mit der [`async function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder der [Pfeil-Syntax](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definieren.

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `async function` beginnen, um Mehrdeutigkeiten mit einer [`async function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu vermeiden. Die Schlüsselwörter `async function` beginnen nur dann einen Ausdruck, wenn sie in einem Kontext erscheinen, der keine Anweisungen akzeptiert.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in diesem Fall ist die Funktion _anonym_. Der Name ist nur innerhalb des Funktionskörpers lokal.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe das [Funktionen Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `async function` Ausdruck ist dem [`async function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) sehr ähnlich und hat fast dieselbe Syntax. Der Hauptunterschied zwischen einem `async function` Ausdruck und einer `async function` Deklaration ist der _Funktionsname_, der in `async function` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `async function` Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression) verwendet werden, die ausgeführt wird, sobald sie definiert ist, und es Ihnen ermöglicht, [Top-Level Await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) nachzuahmen. Siehe auch das Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) für weitere Informationen.

## Beispiele

### Verwendung eines async function Ausdrucks

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

### Asynchrone IIFE

Ein `async` {{Glossary("IIFE", "IIFE")}} ermöglicht Ihnen die Verwendung von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) und [`for...await`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) in Kontexten, in denen [Top-Level Await](/de/docs/Web/JavaScript/Reference/Operators/await#top_level_await) nicht verfügbar ist. Hier verwenden wir eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), um das IIFE zu definieren, aber auch `async function` Ausdrücke können verwendet werden.

```js
const getFileStream = async (url) => {
  // implementation
};

(async () => {
  const stream = await getFileStream("https://domain.name/path/file.ext");
  for await (const chunk of stream) {
    console.log({ chunk });
  }
})();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("Operators/await", "await")}}
