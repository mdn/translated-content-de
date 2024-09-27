---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`finally()`**-Methode von {{jsxref("Promise")}} Instanzen plant eine Funktion ein, die ausgeführt wird, wenn das Promise abgeschlossen ist (entweder erfüllt oder abgelehnt). Sie gibt sofort ein weiteres {{jsxref("Promise")}}-Objekt zurück, sodass Sie Aufrufe anderer Promise-Methoden [verketten](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) können.

Dies ermöglicht es Ihnen, Code sowohl in den {{jsxref("Promise/then", "then()")}}- als auch {{jsxref("Promise/catch", "catch()")}}-Handlern des Promises zu vermeiden.

{{EmbedInteractiveExample("pages/js/promise-finally.html", "taller")}}

## Syntax

```js-nolint
promiseInstance.finally(onFinally)
```

### Parameter

- `onFinally`
  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise abgeschlossen ist. Ihr Rückgabewert wird ignoriert, es sei denn, der zurückgegebene Wert ist ein abgelehntes Promise. Die Funktion wird ohne Argumente aufgerufen.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer schwebend, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen Promises. Wenn `onFinally` einen Fehler wirft oder ein abgelehntes Promise zurückgibt, wird das neue Promise mit diesem Wert abgelehnt. Andernfalls wird das neue Promise mit demselben Zustand wie das aktuelle Promise abgeschlossen.

## Beschreibung

Die `finally()`-Methode kann nützlich sein, wenn Sie eine Verarbeitung oder Bereinigung durchführen möchten, sobald das Promise abgeschlossen ist, unabhängig von seinem Ergebnis.

Die `finally()`-Methode ist sehr ähnlich zu einem Aufruf von {{jsxref("Promise/then", "then(onFinally, onFinally)")}}. Es gibt jedoch einige Unterschiede:

- Beim Erstellen einer Funktion inline können Sie sie einmal übergeben, anstatt gezwungen zu sein, sie entweder zweimal zu deklarieren oder eine Variable dafür zu erstellen.
- Der `onFinally`-Callback erhält kein Argument. Dieser Anwendungsfall ist genau dann gegeben, wenn Ihnen der Ablehnungsgrund oder der Erfüllungswert egal ist, und es daher nicht notwendig ist, diesen bereitzustellen.
- Ein `finally()`-Aufruf ist in der Regel transparent und spiegelt den endgültigen Zustand des ursprünglichen Promises wider. Zum Beispiel:
  - Anders als bei `Promise.resolve(2).then(() => 77, () => {})`, das ein Promise zurückgibt, das schließlich mit dem Wert `77` erfüllt wird, gibt `Promise.resolve(2).finally(() => 77)` ein Promise zurück, das schließlich mit dem Wert `2` erfüllt wird.
  - Ähnlich, anders als bei `Promise.reject(3).then(() => {}, () => 88)`, das ein Promise zurückgibt, das schließlich mit dem Wert `88` erfüllt wird, gibt `Promise.reject(3).finally(() => 88)` ein Promise zurück, das schließlich mit dem Grund `3` abgelehnt wird.

> [!NOTE]
> Ein `throw` (oder die Rückgabe eines abgelehnten Promises) im `finally`-Callback lehnt das zurückgegebene Promise immer noch ab. Zum Beispiel lehnen sowohl `Promise.reject(3).finally(() => { throw 99; })` als auch `Promise.reject(3).finally(() => Promise.reject(99))` das zurückgegebene Promise mit dem Grund `99` ab.

Wie {{jsxref("Promise/catch", "catch()")}} ruft `finally()` intern die `then`-Methode für das Objekt auf, auf dem es aufgerufen wurde. Wenn `onFinally` keine Funktion ist, wird `then()` mit `onFinally` als beide Argumente aufgerufen — was für {{jsxref("Promise.prototype.then()")}} bedeutet, dass kein nützlicher Handler angefügt ist. Andernfalls wird `then()` mit zwei intern erstellten Funktionen aufgerufen, die sich wie folgt verhalten:

> [!WARNING]
> Dies ist nur zu Demonstrationszwecken und kein Polyfill.

```js
promise.then(
  (value) => Promise.resolve(onFinally()).then(() => value),
  (reason) =>
    Promise.resolve(onFinally()).then(() => {
      throw reason;
    }),
);
```

Da `finally()` `then()` aufruft, unterstützt es Subclassing. Beachten Sie außerdem den oben gezeigten Aufruf von {{jsxref("Promise.resolve()")}} — in Wirklichkeit wird der Rückgabewert von `onFinally()` mit demselben Algorithmus wie `Promise.resolve()` aufgelöst, aber der tatsächliche Konstruktor, der für das erstellte aufgelöste Promise verwendet wird, wird die Unterklasse sein. `finally()` erhält diesen Konstruktor über [`promise.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species).

## Beispiele

### Verwendung von finally()

```js
let isLoading = true;

fetch(myRequest)
  .then((response) => {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then((json) => {
    /* process your JSON further */
  })
  .catch((error) => {
    console.error(error); // this line can also throw, e.g. when console = {}
  })
  .finally(() => {
    isLoading = false;
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.prototype.finally` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}
