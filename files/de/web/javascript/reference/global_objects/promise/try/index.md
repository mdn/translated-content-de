---
title: Promise.try()
short-title: try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`Promise.try()`** statische Methode nimmt einen Callback beliebiger Art entgegen (gibt einen Wert zurück oder wirft, synchron oder asynchron) und umschließt das Ergebnis in einem {{jsxref("Promise")}}.

## Syntax

```js-nolint
Promise.try(func)
Promise.try(func, arg1)
Promise.try(func, arg1, arg2)
Promise.try(func, arg1, arg2, /* …, */ argN)
```

### Parameter

- `func`
  - : Eine Funktion, die synchron mit den bereitgestellten Argumenten aufgerufen wird (`arg1`, `arg2`, …, `argN`). Sie kann alles tun – entweder einen Wert zurückgeben, einen Fehler werfen oder ein Promise zurückgeben.
- `arg1`, `arg2`, …, `argN`
  - : Argumente, die an `func` übergeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- Bereits erfüllt ist, wenn `func` synchron einen Wert zurückgibt.
- Bereits abgelehnt ist, wenn `func` synchron einen Fehler wirft.
- Asynchron erfüllt oder abgelehnt wird, wenn `func` ein Promise zurückgibt.

## Beschreibung

Möglicherweise haben Sie eine API, die einen Callback benötigt. Der Callback kann synchron oder asynchron sein. Sie möchten alles einheitlich behandeln, indem Sie das Ergebnis in ein Promise umschließen. Der einfachste Weg wäre möglicherweise {{jsxref("Promise/resolve", "Promise.resolve(func())")}}. Das Problem ist, dass, wenn `func()` synchron einen Fehler wirft, dieser Fehler nicht abgefangen und in ein abgelehntes Promise umgewandelt würde.

Der übliche Ansatz (das Heben eines Funktionsaufrufergebnisses in ein Promise, erfüllt oder abgelehnt) sieht oft so aus:

```js
new Promise((resolve) => resolve(func()));
```

Aber `Promise.try()` ist hier hilfreicher:

```js
Promise.try(func);
```

Bei dem eingebauten `Promise()` Konstruktor werden Fehler, die vom Executor geworfen werden, automatisch abgefangen und in Ablehnungen umgewandelt, sodass diese beiden Ansätze größtenteils gleichwertig sind, außer dass `Promise.try()` prägnanter und lesbarer ist.

Beachten Sie, dass `Promise.try()` _nicht_ äquivalent zu diesem Ansatz ist, obwohl es sehr ähnlich ist:

```js
Promise.resolve().then(func);
```

Der Unterschied besteht darin, dass der Callback, der an {{jsxref("Promise/then", "then()")}} übergeben wird, immer asynchron aufgerufen wird, während der Executor des `Promise()` Konstruktors synchron aufgerufen wird. `Promise.try` ruft die Funktion ebenfalls synchron auf und löst das Promise sofort, wenn möglich.

`Promise.try()`, kombiniert mit {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}}, kann verwendet werden, um sowohl synchrone als auch asynchrone Fehler in einer einzigen Kette zu behandeln, und lässt die Fehlerbehandlung bei Promises fast wie eine synchrone Fehlerbehandlung erscheinen.

Wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), akzeptiert `Promise.try()` zusätzliche Argumente, die an den Callback übergeben werden. Das bedeutet, dass Sie anstelle von Folgendem dies tun können:

```js
Promise.try(() => func(arg1, arg2));
```

Sie können das stattdessen tun:

```js
Promise.try(func, arg1, arg2);
```

Die beiden Ansätze sind äquivalent, aber der letztere vermeidet die Erstellung einer zusätzlichen Closure und ist effizienter.

## Beispiele

### Verwendung von Promise.try()

Das folgende Beispiel nimmt einen Callback, "hebt" ihn in ein Promise, behandelt das Ergebnis und führt eine Fehlerbehandlung durch:

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

In async/await würde derselbe Code so aussehen:

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

### Aufrufen von try() mit einem Nicht-Promise-Konstruktor

`Promise.try()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()` Konstruktor implementiert.

Das folgende Beispiel ist eine etwas genauere Annäherung an das tatsächliche `Promise.try()` (obwohl es immer noch nicht als Polyfill verwendet werden sollte):

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

Aufgrund der Implementierung von `Promise.try()` (d.h. das `try...catch`) können wir `Promise.try()` sicher mit einem `this` Aufruf von jedem benutzerdefinierten Konstruktor aufrufen, und es wird niemals synchron einen Fehler werfen.

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

Im Gegensatz zu `Promise()` behandelt dieser `NotPromise()` Konstruktor _nicht_ elegant Ausnahmen beim Ausführen des Executors. Aber trotz des `throw` fängt `Promise.try()` die Ausnahme immer noch ab und übergibt sie an `reject()`, um sie auszugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.try` in `core-js`](https://github.com/zloirock/core-js#promisetry)
- [es-shims Polyfill von `Promise.try`](https://www.npmjs.com/package/promise.try)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise")}}
- [`Promise()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
