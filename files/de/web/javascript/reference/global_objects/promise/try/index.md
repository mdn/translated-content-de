---
title: Promise.try()
short-title: try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Promise.try()`** nimmt einen beliebigen Rückruf (der zurückgibt oder wirft, synchron oder asynchron) und verpackt dessen Ergebnis in ein {{jsxref("Promise")}}.

## Syntax

```js-nolint
Promise.try(func)
Promise.try(func, arg1)
Promise.try(func, arg1, arg2)
Promise.try(func, arg1, arg2, /* …, */ argN)
```

### Parameter

- `func`
  - : Eine Funktion, die synchron mit den bereitgestellten Argumenten (`arg1`, `arg2`, …, `argN`) aufgerufen wird. Sie kann alles tun – entweder einen Wert zurückgeben, einen Fehler werfen oder ein Promise zurückgeben.
- `arg1`, `arg2`, …, `argN`
  - : Argumente, die an `func` übergeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- Bereits erfüllt ist, wenn `func` synchron einen Wert zurückgibt.
- Bereits abgelehnt ist, wenn `func` synchron einen Fehler wirft.
- Asynchron erfüllt oder abgelehnt ist, wenn `func` ein Promise zurückgibt.

## Beschreibung

Möglicherweise haben Sie eine API, die einen Rückruf entgegennimmt. Der Rückruf kann synchron oder asynchron sein. Sie möchten alles einheitlich behandeln, indem Sie das Ergebnis in einem Promise verpacken. Der einfachste Weg wäre möglicherweise {{jsxref("Promise/resolve", "Promise.resolve(func())")}}. Das Problem ist, dass wenn `func()` synchron einen Fehler wirft, dieser Fehler nicht abgefangen und in ein abgelehntes Promise umgewandelt wird.

Der übliche Ansatz (das Heben eines Funktionsaufrufergebnisses in ein erfülltes oder abgelehntes Promise) sieht oft so aus:

```js
new Promise((resolve) => resolve(func()));
```

Aber `Promise.try()` ist hier hilfreicher:

```js
Promise.try(func);
```

Für den eingebauten `Promise()`-Konstruktor werden vom Executor geworfene Fehler automatisch abgefangen und in Ablehnungen umgewandelt, sodass diese beiden Ansätze weitgehend gleichwertig sind, außer dass `Promise.try()` prägnanter und lesbarer ist.

Beachten Sie, dass `Promise.try()` _nicht_ gleich diesem Ansatz ist, obwohl es ihm sehr ähnlich ist:

```js
Promise.resolve().then(func);
```

Der Unterschied besteht darin, dass der Rückruf, der an {{jsxref("Promise/then", "then()")}} übergeben wird, immer asynchron aufgerufen wird, während der Executor des `Promise()`-Konstruktors synchron aufgerufen wird. `Promise.try` ruft die Funktion ebenfalls synchron auf und löst das Promise sofort auf, wenn möglich.

`Promise.try()`, kombiniert mit {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}}, kann verwendet werden, um sowohl synchrone als auch asynchrone Fehler in einer einzigen Kette zu behandeln und das Fehlerhandling von Versprechen fast wie ein synchrones Fehlerhandling erscheinen zu lassen.

Ähnlich wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) akzeptiert `Promise.try()` zusätzliche Argumente, die an den Rückruf übergeben werden. Das bedeutet, dass anstatt dies zu tun:

```js
Promise.try(() => func(arg1, arg2));
```

Sie können dies tun:

```js
Promise.try(func, arg1, arg2);
```

Die sind gleichwertig, aber letzteres vermeidet die Erstellung eines zusätzlichen Closures und ist effizienter.

## Beispiele

### Nutzung von Promise.try()

Das folgende Beispiel nimmt einen Rückruf entgegen, „hebt“ ihn in ein Promise, behandelt das Ergebnis und führt etwas Fehlerbehandlung durch:

```js
function doSomething(action) {
  return Promise.try(action)
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Done"));
}

doSomething(() => "Sync result");

doSomething(() => {
  throw new Error("Sync error");
});

doSomething(async () => "Async result");

doSomething(async () => {
  throw new Error("Async error");
});
```

Bei async/await würde derselbe Code so aussehen:

```js
async function doSomething(action) {
  try {
    const result = await action();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Done");
  }
}
```

### Aufruf von try() bei einem Nicht-Promise-Konstruktor

`Promise.try()` ist eine generische Methode. Sie kann auf einen beliebigen Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert.

Das folgende Beispiel ist eine etwas genauere Annäherung an das tatsächliche `Promise.try()` (es sollte dennoch nicht als Polyfill verwendet werden):

```js
Promise.try = function (func) {
  return new this((resolve, reject) => {
    try {
      resolve(func());
    } catch (error) {
      reject(error);
    }
  });
};
```

Aufgrund der Implementierung von `Promise.try()` (d.h. durch `try...catch`) können wir `Promise.try()` sicher mit seinem `this` auf einen beliebigen benutzerdefinierten Konstruktor aufrufen, und es wird niemals synchron einen Fehler werfen.

```js
class NotPromise {
  constructor(executor) {
    // The "resolve" and "reject" functions behave nothing like the native
    // promise's, but Promise.try() just calls resolve
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

const p = Promise.try.call(NotPromise, () => "hello");
// Logs: Resolved hello

const p2 = Promise.try.call(NotPromise, () => {
  throw new Error("oops");
});
// Logs: Rejected Error: oops
```

Im Gegensatz zu `Promise()` behandelt dieser `NotPromise()`-Konstruktor _nicht_ elegant Ausnahmen, während er den Executor ausführt. Aber trotz des `throw` fängt `Promise.try()` die Ausnahme immer noch ab und übergibt sie an `reject()`, um sie zu protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.try` in `core-js`](https://github.com/zloirock/core-js#promisetry)
- [es-shims Polyfill von `Promise.try`](https://www.npmjs.com/package/promise.try)
- [Verwendung von Versprechen](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise")}}
- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
