---
title: async function-Ausdruck
slug: Web/JavaScript/Reference/Operators/async_function
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Mit den Schlüsselwörtern **`async function`** können Sie eine asynchrone Funktion innerhalb eines Ausdrucks definieren.

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit den Schlüsselwörtern `async function` beginnen, damit sie nicht mit einer [`async function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwechselt wird. Die Schlüsselwörter `async function` leiten nur dann einen Ausdruck ein, wenn sie in einem Kontext stehen, in dem keine Anweisungen zulässig sind.

### Parameter

- `name` {{optional_inline}}
  - : Der Name der Funktion. Er kann weggelassen werden; in diesem Fall ist die Funktion _anonym_. Der Name ist nur innerhalb des Funktionskörpers verfügbar.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Zur Syntax von Parametern siehe die [Referenz zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, aus denen der Funktionskörper besteht.

### Rückgabewert

Ein {{jsxref("AsyncFunction")}}-Objekt.

## Beschreibung

Ein `async function`-Ausdruck ähnelt einer [`async function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/async_function) sehr und hat fast dieselbe Syntax. Der wesentliche Unterschied ist der _Funktionsname_: Bei einem `async function`-Ausdruck kann er weggelassen werden, um eine _anonyme_ Funktion zu erstellen. Ein `async function`-Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression) verwendet werden. Diese wird sofort nach ihrer Definition ausgeführt und ermöglicht es Ihnen, [Top-Level-`await`](/de/docs/Web/JavaScript/Guide/Modules#top-level_await) nachzuahmen. Weitere Informationen finden Sie im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

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

Mit einer asynchronen {{Glossary("IIFE", "IIFE")}} können Sie [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) und [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) in Kontexten verwenden, in denen [Top-Level-`await`](/de/docs/Web/JavaScript/Reference/Operators/await#top-level_await) nicht verfügbar ist. Hier verwenden wir eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), um die IIFE zu definieren; Sie können dafür aber auch einen `async function`-Ausdruck verwenden.

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
