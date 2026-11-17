---
title: async function-Ausdruck
slug: Web/JavaScript/Reference/Operators/async_function
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Die Schlüsselwörter **`async function`** können verwendet werden, um eine asynchrone Funktion innerhalb eines Ausdrucks zu definieren.

Sie können asynchrone Funktionen auch mit einer [`async function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder der [Pfeilfunktionssyntax](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definieren.

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `async function` beginnen, um Mehrdeutigkeiten mit einer [`async function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) zu vermeiden. Die Schlüsselwörter `async function` leiten nur dann einen Ausdruck ein, wenn sie in einem Kontext stehen, der keine Anweisungen zulässt.

### Parameter

- `name` {{optional_inline}}
  - : Der Name der Funktion. Er kann weggelassen werden; in diesem Fall ist die Funktion _anonym_. Der Name gilt nur innerhalb des Funktionskörpers.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Zur Syntax der Parameter siehe die [Referenz zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, aus denen der Funktionskörper besteht.

## Beschreibung

Ein `async function`-Ausdruck ist einer [`async function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) sehr ähnlich und hat nahezu dieselbe Syntax. Der wichtigste Unterschied zwischen einem `async function`-Ausdruck und einer `async function`-Deklaration ist der _Funktionsname_: Bei `async function`-Ausdrücken kann er weggelassen werden, um _anonyme_ Funktionen zu erstellen. Ein `async function`-Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression) verwendet werden. Diese wird unmittelbar nach ihrer Definition ausgeführt und ermöglicht es Ihnen, [top-level await](/de/docs/Web/JavaScript/Guide/Modules#top-level_await) nachzubilden. Weitere Informationen finden Sie im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

## Beispiele

### Einen async function-Ausdruck verwenden

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

Mit einer asynchronen {{Glossary("IIFE", "IIFE")}} können Sie [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) und [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) in Kontexten verwenden, in denen [top-level await](/de/docs/Web/JavaScript/Reference/Operators/await#top-level_await) nicht verfügbar ist. Hier verwenden wir eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), um die IIFE zu definieren. Sie können dafür aber auch `async function`-Ausdrücke verwenden.

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

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) – Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("Operators/await", "await")}}
