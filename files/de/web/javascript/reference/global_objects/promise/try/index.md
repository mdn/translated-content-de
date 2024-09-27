---
title: Promise.try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: b67fd42cfb01dd4d9504c4182b462851588a0bad
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Promise.try()`** nimmt einen beliebigen Rückruf (gibt zurück oder wirft, synchron oder asynchron) und verpackt dessen Ergebnis in ein {{jsxref("Promise")}}.

## Syntax

```js-nolint
Promise.try(func)
```

### Parameter

- `func`
  - : Eine Funktion, die synchron ohne Argumente aufgerufen wird. Sie kann alles tun – entweder einen Wert zurückgeben, einen Fehler werfen oder ein Promise zurückgeben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- Bereits erfüllt ist, wenn `func` synchron einen Wert zurückgibt.
- Bereits abgelehnt ist, wenn `func` synchron einen Fehler wirft.
- Asynchron erfüllt oder abgelehnt ist, wenn `func` ein Promise zurückgibt.

## Beschreibung

Sie haben möglicherweise eine API, die einen Rückruf akzeptiert. Der Rückruf kann synchron oder asynchron sein. Sie möchten alles einheitlich behandeln, indem Sie das Ergebnis in ein Promise packen. Der einfachste Weg könnte {{jsxref("Promise/resolve", "Promise.resolve(func())")}} sein. Das Problem ist, dass wenn `func()` synchron einen Fehler wirft, dieser Fehler nicht abgefangen und in ein abgelehntes Promise umgewandelt wird.

Der übliche Ansatz (das Heben eines Funktionsaufrufergebnisses in ein erfülltes oder abgelehntes Promise) sieht oft so aus:

```js
new Promise((resolve) => resolve(func()));
```

Aber `Promise.try()` ist hier nützlicher:

```js
Promise.try(func);
```

Für den eingebauten `Promise()`-Konstruktor werden Fehler, die vom Executor geworfen werden, automatisch abgefangen und in Ablehnungen umgewandelt, so dass diese beiden Ansätze meistens gleichwertig sind, außer dass `Promise.try()` kürzer und lesbarer ist.

Beachten Sie, dass `Promise.try()` _nicht_ gleichwertig zu diesem ist, obwohl es sehr ähnlich ist:

```js
Promise.resolve().then(func);
```

Der Unterschied besteht darin, dass der Rückruf, der an {{jsxref("Promise/then", "then()")}} übergeben wird, immer asynchron aufgerufen wird, während der Executor des `Promise()`-Konstruktors synchron aufgerufen wird. `Promise.try` ruft die Funktion ebenfalls synchron auf und löst das Promise sofort auf, wenn möglich.

`Promise.try()`, kombiniert mit {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}}, kann verwendet werden, um sowohl synchron als auch asynchron auftretende Fehler in einer einzigen Kette zu behandeln und die Fehlerbehandlung von Promises fast wie eine synchrone Fehlerbehandlung erscheinen zu lassen.

## Beispiele

### Verwendung von Promise.try()

Im folgenden Beispiel wird ein Rückruf "gehoben", in ein Promise verpackt, das Ergebnis behandelt und einige Fehlerbehandlungen durchgeführt:

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

### Aufruf von try() bei einem Nicht-Promise-Konstruktor

`Promise.try()` ist eine generische Methode. Sie kann für jeden Konstruktor aufgerufen werden, der die gleiche Signatur wie der `Promise()`-Konstruktor implementiert.

Das Folgende ist eine leicht getreue Annäherung an das tatsächliche `Promise.try()` (obwohl es immer noch nicht als Polyfill verwendet werden sollte):

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

Aufgrund der Implementierung von `Promise.try()` (d. h. durch das `try...catch`) können wir sicher `Promise.try()` mit dessen `this`-Set auf einen beliebigen benutzerdefinierten Konstruktor aufrufen und es wird niemals synchron einen Fehler werfen.

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

Im Gegensatz zu `Promise()` behandelt dieser `NotPromise()`-Konstruktor _nicht_ elegant Ausnahmen während der Ausführung des Executors. Aber trotz des `throw` fängt `Promise.try()` die Ausnahme immer noch ab und übergibt sie an `reject()`, um sie zu protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.try` in `core-js`](https://github.com/zloirock/core-js#promisetry)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise")}}
- [`Promise()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
