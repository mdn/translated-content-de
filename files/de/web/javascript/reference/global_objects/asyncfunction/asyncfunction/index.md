---
title: AsyncFunction()-Konstruktor
short-title: AsyncFunction()
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`AsyncFunction()`**-Konstruktor erstellt {{jsxref("AsyncFunction")}}-Objekte.

Beachten Sie, dass `AsyncFunction` _kein_ globales Objekt ist. Es kann mit folgendem Code erhalten werden:

```js
const AsyncFunction = async function () {}.constructor;
```

Der `AsyncFunction()`-Konstruktor ist nicht dafür vorgesehen, direkt verwendet zu werden, und alle Einschränkungen, die in der Beschreibung von {{jsxref("Function/Function", "Function()")}} erwähnt werden, gelten auch für `AsyncFunction()`.

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

> [!NOTE]
> `AsyncFunction()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Methoden erstellen eine neue Instanz von `AsyncFunction`.

### Parameter

Siehe {{jsxref("Function/Function", "Function()")}}.

## Beispiele

### Erstellen einer asynchronen Funktion aus einem AsyncFunction()-Konstruktor

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
- [`async function` expression](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- [`Function()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
