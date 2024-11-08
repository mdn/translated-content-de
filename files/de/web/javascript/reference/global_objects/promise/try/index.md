---
title: Promise.try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{JSRef}}

Die **`Promise.try()`**-Methode ist eine statische Methode, die einen Rückruf jeder Art (synchron oder asynchron, Rückgabe oder Ausnahme) nimmt und ihr Ergebnis in ein {{jsxref("Promise")}} einhüllt.

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

Sie könnten eine API haben, die einen Rückruf benötigt. Dieser Rückruf kann synchron oder asynchron sein. Sie möchten alles einheitlich behandeln, indem Sie das Ergebnis in ein Promise einhüllen. Der einfachste Weg könnte {{jsxref("Promise/resolve", "Promise.resolve(func())")}} sein. Das Problem ist, wenn `func()` synchron einen Fehler wirft, würde dieser Fehler nicht abgefangen und in ein abgelehntes Promise umgewandelt.

Der übliche Ansatz (das Heben eines Funktionsaufrufergebnisses in ein Promise, das erfüllt oder abgelehnt ist) sieht oft so aus:

```js
new Promise((resolve) => resolve(func()));
```

Aber `Promise.try()` ist hier hilfreicher:

```js
Promise.try(func);
```

Für den eingebauten `Promise()`-Konstruktor werden Fehler, die vom Executor geworfen werden, automatisch abgefangen und in Ablehnungen umgewandelt, sodass diese beiden Ansätze größtenteils gleichwertig sind, außer dass `Promise.try()` kürzer und lesbarer ist.

Beachten Sie, dass `Promise.try()` _nicht_ gleichbedeutend mit diesem ist, obwohl es sehr ähnlich ist:

```js
Promise.resolve().then(func);
```

Der Unterschied besteht darin, dass der Rückruf, der an {{jsxref("Promise/then", "then()")}} übergeben wird, immer asynchron aufgerufen wird, während der Executor des `Promise()`-Konstruktors synchron aufgerufen wird. `Promise.try` ruft die Funktion ebenfalls synchron auf und löst das Promise sofort auf, wenn möglich.

`Promise.try()`, kombiniert mit {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}}, kann verwendet werden, um sowohl synchron als auch asynchron auftretende Fehler in einer einzigen Kette zu behandeln und die Fehlerbehandlung von Promises fast wie eine synchrone Fehlerbehandlung erscheinen zu lassen.

Wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) akzeptiert `Promise.try()` zusätzliche Argumente, die an den Rückruf übergeben werden. Das bedeutet, anstatt dies zu tun:

```js
Promise.try(() => func(arg1, arg2));
```

Können Sie dies tun:

```js
Promise.try(func, arg1, arg2);
```

Was gleichwertig ist, aber letzteres vermeidet die Erstellung eines zusätzlichen Closures und ist effizienter.

## Beispiele

### Verwendung von Promise.try()

Das folgende Beispiel nimmt einen Rückruf, "hebt" ihn in ein Promise, behandelt das Ergebnis und führt eine Fehlerbehandlung durch:

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

### Aufrufen von try() auf einem Nicht-Promise-Konstruktor

`Promise.try()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert.

Das Folgende ist eine etwas genauere Annäherung an das eigentliche `Promise.try()` (obwohl es dennoch nicht als Polyfill verwendet werden sollte):

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

Aufgrund der Implementierung von `Promise.try()` (d.h. das `try...catch`), können wir `Promise.try()` sicher mit `this` auf jeden benutzerdefinierten Konstruktor aufrufen, und es wird niemals synchron einen Fehler werfen.

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

Im Gegensatz zu `Promise()` behandelt dieser `NotPromise()`-Konstruktor _nicht_ fehlerfrei Ausnahmen, während der Executor ausgeführt wird. Aber trotz des `throw` fängt `Promise.try()` die Ausnahme dennoch ab, übergibt sie an `reject()`, um sie auszugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.try` in `core-js`](https://github.com/zloirock/core-js#promisetry)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise")}}
- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
