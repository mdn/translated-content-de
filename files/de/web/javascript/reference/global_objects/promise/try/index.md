---
title: Promise.try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`Promise.try()`** statische Methode nimmt einen Callback beliebiger Art (gibt zurück oder wirft, synchron oder asynchron) und umhüllt dessen Ergebnis in einem {{jsxref("Promise")}}.

## Syntax

```js-nolint
Promise.try(func)
Promise.try(func, arg1)
Promise.try(func, arg1, arg2)
Promise.try(func, arg1, arg2, /* …, */ argN)
```

### Parameter

- `func`
  - : Eine Funktion, die synchron mit den bereitgestellten Argumenten (`arg1`, `arg2`, …, `argN`) aufgerufen wird. Sie kann alles tun - entweder einen Wert zurückgeben, einen Fehler werfen oder ein Promise zurückgeben.
- `arg1`, `arg2`, …, `argN`
  - : Argumente, die an `func` übergeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- Bereits erfüllt ist, wenn `func` synchron einen Wert zurückgibt.
- Bereits abgelehnt ist, wenn `func` synchron einen Fehler wirft.
- Asynchron erfüllt oder abgelehnt ist, wenn `func` ein Promise zurückgibt.

## Beschreibung

Sie könnten eine API haben, die einen Callback erfordert. Der Callback kann synchron oder asynchron sein. Sie möchten alles einheitlich behandeln, indem Sie das Ergebnis in ein Promise umhüllen. Der einfachste Weg wäre {{jsxref("Promise/resolve", "Promise.resolve(func())")}}. Das Problem ist, dass wenn `func()` synchron einen Fehler wirft, dieser Fehler nicht abgefangen und in ein abgelehntes Promise umgewandelt wird.

Der übliche Ansatz (heben eines Funktionsaufrufergebnisses in ein Promise, erfüllt oder abgelehnt) sieht oft so aus:

```js
new Promise((resolve) => resolve(func()));
```

Aber `Promise.try()` ist hier hilfreicher:

```js
Promise.try(func);
```

Beim eingebauten `Promise()`-Konstruktor werden aus dem Executor geworfene Fehler automatisch abgefangen und in Ablehnungen umgewandelt, sodass diese beiden Ansätze größtenteils gleichwertig sind, abgesehen davon, dass `Promise.try()` prägnanter und lesbarer ist.

Beachten Sie, dass `Promise.try()` _nicht_ diesem entspricht, obwohl es sehr ähnlich ist:

```js
Promise.resolve().then(func);
```

Der Unterschied ist, dass der Callback, der an {{jsxref("Promise/then", "then()")}} übergeben wird, immer asynchron aufgerufen wird, während der Executor des `Promise()`-Konstruktors synchron aufgerufen wird. `Promise.try` ruft die Funktion ebenfalls synchron auf und erfüllt das Promise sofort, wenn dies möglich ist.

`Promise.try()`, in Kombination mit {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}}, kann verwendet werden, um sowohl synchrone als auch asynchrone Fehler in einer einzigen Kette zu behandeln und das Fehlerbehandeln von Promises fast wie das synchrone Fehlerbehandeln erscheinen zu lassen.

Wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), akzeptiert `Promise.try()` zusätzliche Argumente, die an den Callback übergeben werden. Das bedeutet, anstatt dies zu tun:

```js
Promise.try(() => func(arg1, arg2));
```

Könnten Sie dies tun:

```js
Promise.try(func, arg1, arg2);
```

Die äquivalent sind, aber letzteres vermeidet die Erstellung einer zusätzlichen Closure und ist effizienter.

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

In async/await, würde derselbe Code so aussehen:

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

### Aufruf von try() auf einem Nicht-Promise-Konstruktor

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

Aufgrund der Implementierung von `Promise.try()` (d. h. durch `try...catch`), können wir `Promise.try()` sicher mit seinem `this` auf einen beliebigen benutzerdefinierten Konstruktor setzen und es wird niemals synchron einen Fehler werfen.

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

Anders als `Promise()`, behandelt dieser `NotPromise()`-Konstruktor _nicht_ elegant Ausnahmefehler während der Ausführung des Executors. Aber trotz des `throw` fängt `Promise.try()` die Ausnahme ein und übergibt sie an `reject()`, um sie auszugeben.

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
