---
title: Promise.try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: 37300118615fafd93673b658e9bf9762f309897b
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Promise.try()`** nimmt einen Callback beliebiger Art entgegen (gibt zurück oder wirft, synchron oder asynchron) und umhüllt dessen Ergebnis in einem {{jsxref("Promise")}}.

## Syntax

```js-nolint
Promise.try(func)
Promise.try(func, arg1)
Promise.try(func, arg1, arg2)
Promise.try(func, arg1, arg2, /* …, */ argN)
```

### Parameter

- `func`
  - : Eine Funktion, die synchron mit den bereitgestellten Argumenten (`arg1`, `arg2`, …, `argN`) aufgerufen wird. Sie kann alles tun – entweder einen Wert zurückgeben, einen Fehler werfen oder ein `promise` zurückgeben.
- `arg1`, `arg2`, …, `argN`
  - : Argumente, die an `func` übergeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, der:

- Bereits erfüllt ist, wenn `func` synchron einen Wert zurückgibt.
- Bereits abgelehnt ist, wenn `func` synchron einen Fehler wirft.
- Asynchron erfüllt oder abgelehnt ist, wenn `func` ein `promise` zurückgibt.

## Beschreibung

Es kann sein, dass Sie eine API haben, die einen Callback benötigt. Der Callback kann entweder synchron oder asynchron sein. Sie möchten alles einheitlich handhaben, indem Sie das Ergebnis in ein Promise einhüllen. Der direkteste Weg könnte {{jsxref("Promise/resolve", "Promise.resolve(func())")}} sein. Das Problem ist, dass wenn `func()` synchron einen Fehler wirft, dieser Fehler nicht abgefangen und in ein abgelehntes Promise umgewandelt würde.

Der häufige Ansatz (das Heben eines Funktionsaufrufergebnisses in ein Promise, erfüllt oder abgelehnt) sieht oft so aus:

```js
new Promise((resolve) => resolve(func()));
```

Aber `Promise.try()` ist hier hilfreicher:

```js
Promise.try(func);
```

Für den eingebauten `Promise()`-Konstruktor werden Fehler, die vom Executor geworfen werden, automatisch abgefangen und in Ablehnungen umgewandelt. Daher sind diese beiden Ansätze größtenteils äquivalent, außer dass `Promise.try()` kürzer und lesbarer ist.

Beachten Sie, dass `Promise.try()` _nicht_ äquivalent zu diesem ist, obwohl es sehr ähnlich ist:

```js
Promise.resolve().then(func);
```

Der Unterschied ist, dass der Callback, der an {{jsxref("Promise/then", "then()")}} übergeben wird, immer asynchron aufgerufen wird, während der Executor des `Promise()`-Konstruktors synchron aufgerufen wird. Auch `Promise.try` ruft die Funktion synchron auf und löst das Promise sofort auf, wenn es möglich ist.

`Promise.try()`, in Kombination mit {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}}, kann verwendet werden, um sowohl synchrone als auch asynchrone Fehler in einer einzigen Kette zu behandeln und die Fehlerbehandlung von Promises fast wie bei synchronen Fehlern erscheinen zu lassen.

Wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) akzeptiert `Promise.try()` zusätzliche Argumente, die an den Callback übergeben werden. Das bedeutet, dass anstatt dies zu tun:

```js
Promise.try(() => func(arg1, arg2));
```

Sie können dies tun:

```js
Promise.try(func, arg1, arg2);
```

Die beiden sind äquivalent, aber letzteres vermeidet die Erzeugung einer zusätzlichen Closure und ist effizienter.

## Beispiele

### Verwendung von Promise.try()

Das folgende Beispiel nimmt einen Callback, "hebt" ihn in ein Promise, verarbeitet das Ergebnis und führt eine Fehlerbehandlung durch:

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

### Aufruf von try() auf einem Nicht-Promise-Konstruktor

`Promise.try()` ist eine generische Methode. Sie kann auf jeden Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert.

Das folgende ist eine etwas genauere Annäherung an das tatsächliche `Promise.try()` (obwohl es immer noch nicht als Polyfill verwendet werden sollte):

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

Aufgrund der Art und Weise, wie `Promise.try()` implementiert ist (d. h. das `try...catch`), können wir `Promise.try()` sicher mit diesem Operator auf jeden benutzerdefinierten Konstruktor anwenden und es wird niemals synchron einen Fehler werfen.

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

Im Gegensatz zu `Promise()` behandelt dieser `NotPromise()`-Konstruktor _nicht_ auf elegante Weise Ausnahmen, die beim Ausführen des Executors auftreten. Aber trotz des `throw` fängt `Promise.try()` immer noch die Ausnahme ab und übergibt sie an `reject()`, um sie zu protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.try` in `core-js`](https://github.com/zloirock/core-js#promisetry)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise")}}
- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
