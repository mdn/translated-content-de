---
title: Promise.try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: b67fd42cfb01dd4d9504c4182b462851588a0bad
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Promise.try()`** nimmt einen Callback jeglicher Art (gibt zurück oder wirft, synchron oder asynchron) und verpackt dessen Ergebnis in ein {{jsxref("Promise")}}.

## Syntax

```js-nolint
Promise.try(func)
```

### Parameter

- `func`
  - : Eine Funktion, die synchron ohne Argumente aufgerufen wird. Sie kann irgendetwas tun – entweder einen Wert zurückgeben, eine Fehlermeldung werfen oder ein Promise zurückgeben.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- Bereits erfüllt ist, wenn `func` synchron einen Wert zurückgibt.
- Bereits abgelehnt ist, wenn `func` synchron eine Fehlermeldung wirft.
- Asynchron erfüllt oder abgelehnt ist, wenn `func` ein Promise zurückgibt.

## Beschreibung

Sie haben möglicherweise eine API, die einen Callback entgegennimmt. Der Callback kann synchron oder asynchron sein. Sie möchten alles einheitlich behandeln, indem Sie das Ergebnis in ein Promise verpacken. Der direkteste Weg könnte {{jsxref("Promise/resolve", "Promise.resolve(func())")}} sein. Das Problem ist, dass wenn `func()` synchron einen Fehler wirft, dieser Fehler nicht aufgefangen und in ein abgelehntes Promise umgewandelt wird.

Der übliche Ansatz (das Ergebnis eines Funktionsaufrufs in ein Promise heben, erfüllt oder abgelehnt) sieht oft so aus:

```js
new Promise((resolve) => resolve(func()));
```

Aber `Promise.try()` ist hier hilfreicher:

```js
Promise.try(func);
```

Bei dem eingebauten `Promise()`-Konstruktor werden Fehler, die vom Executor geworfen werden, automatisch aufgefangen und in Ablehnungen umgewandelt, sodass diese beiden Ansätze größtenteils gleichwertig sind, abgesehen davon, dass `Promise.try()` kürzer und lesbarer ist.

Beachten Sie, dass `Promise.try()` _nicht_ gleichwertig zu diesem Ansatz ist, obwohl er ihm sehr ähnlich ist:

```js
Promise.resolve().then(func);
```

Der Unterschied ist, dass der Callback, der an {{jsxref("Promise/then", "then()")}} übergeben wird, immer asynchron aufgerufen wird, während der Executor des `Promise()`-Konstruktors synchron aufgerufen wird. `Promise.try` ruft die Funktion ebenfalls synchron auf und löst das Promise sofort auf, falls möglich.

`Promise.try()`, kombiniert mit {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}}, kann verwendet werden, um sowohl synchrone als auch asynchrone Fehler in einer einzigen Kette zu behandeln und das Fehlerhandling von Promises fast wie ein synchrones Fehlerhandling erscheinen zu lassen.

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

In async/await würde der gleiche Code so aussehen:

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

### Auslösen von try() auf einem Nicht-Promise-Konstruktor

`Promise.try()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der die gleiche Signatur wie der `Promise()`-Konstruktor implementiert.

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

Aufgrund der Implementierung von `Promise.try()` (d.h. des `try...catch`) können wir `Promise.try()` sicher mit dem `this`-Wert auf jeden benutzerdefinierten Konstruktor aufrufen, und es wird niemals synchron einen Fehler werfen.

```js
class NotPromise {
  constructor(executor) {
    // Die Funktionen "resolve" und "reject" verhalten sich ganz anders als die des
    // nativen Promises, aber Promise.try() ruft einfach nur resolve auf
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

const p = Promise.try.call(NotPromise, () => "hello");
// Protokolliert: Resolved hello

const p2 = Promise.try.call(NotPromise, () => {
  throw new Error("oops");
});
// Protokolliert: Rejected Error: oops
```

Im Gegensatz zu `Promise()` behandelt dieser `NotPromise()`-Konstruktor _nicht_ elegant Ausnahmen bei der Ausführung des Executors. Aber trotz des `throw` fängt `Promise.try()` die Ausnahme immer noch auf und übergibt sie an `reject()`, um sie zu protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.try` in `core-js`](https://github.com/zloirock/core-js#promisetry)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise")}}
- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
