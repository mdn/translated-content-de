---
title: AsyncFunction() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Der **`AsyncFunction()`** Konstruktor erstellt {{jsxref("AsyncFunction")}} Objekte.

Beachten Sie, dass `AsyncFunction` _kein_ globales Objekt ist. Es kann mit dem folgenden Code erhalten werden:

```js
const AsyncFunction = async function () {}.constructor;
```

Der `AsyncFunction()` Konstruktor ist nicht dafür vorgesehen, direkt genutzt zu werden, und alle in der Beschreibung von {{jsxref("Function/Function", "Function()")}} erwähnten Vorbehalte gelten auch für `AsyncFunction()`.

## Syntax

```js-nolint
new AsyncFunction(functionBody)
new AsyncFunction(arg1, functionBody)
new AsyncFunction(arg1, arg2, functionBody)
new AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncFunction(functionBody)
AsyncFunction(arg1, functionBody)
AsyncFunction(arg1, arg2, functionBody)
AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> **Note:** `AsyncFunction()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erstellen eine neue `AsyncFunction` Instanz.

### Parameter

Siehe {{jsxref("Function/Function", "Function()")}}.

## Beispiele

### Erstellen einer asynchronen Funktion mit einem AsyncFunction() Konstruktor

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const AsyncFunction = async function () {}.constructor;

const fn = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

fn(10, 20).then((v) => {
  console.log(v); // prints 30 after 4 seconds
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- [`Function()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
