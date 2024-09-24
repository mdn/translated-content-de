---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`finally()`**-Methode von {{jsxref("Promise")}}-Instanzen plant eine Funktion ein, die aufgerufen wird, wenn das Promise abgerechnet ist (entweder erfüllt oder abgelehnt). Sie gibt sofort ein anderes {{jsxref("Promise")}}-Objekt zurück, sodass Sie Aufrufe an andere Promisemethoden [verketteln](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) können.

Dies ermöglicht es Ihnen, Code in den {{jsxref("Promise/then", "then()")}}- und {{jsxref("Promise/catch", "catch()")}}-Handlern des Promises zu vermeiden.

{{EmbedInteractiveExample("pages/js/promise-finally.html", "taller")}}

## Syntax

```js-nolint
promiseInstance.finally(onFinally)
```

### Parameter

- `onFinally`
  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise abgeschlossen wird. Der Rückgabewert wird ignoriert, es sei denn, der zurückgegebene Wert ist ein abgelehntes Promise. Die Funktion wird ohne Argumente aufgerufen.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer ausstehend, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen Promises. Wenn `onFinally` einen Fehler auslöst oder ein abgelehntes Promise zurückgibt, wird das neue Promise mit diesem Wert abgelehnt. Andernfalls wird das neue Promise im gleichen Zustand wie das aktuelle Promise abgeschlossen.

## Beschreibung

Die Methode `finally()` kann nützlich sein, wenn Sie nach dem Settlen des Promises eine Verarbeitung oder Aufräumarbeiten durchführen möchten, unabhängig vom Ergebnis.

Die Methode `finally()` ist sehr ähnlich zum Aufruf von {{jsxref("Promise/then", "then(onFinally, onFinally)")}}. Es gibt jedoch einige Unterschiede:

- Wenn Sie eine Funktion inline erstellen, können Sie sie einmal übergeben, anstatt gezwungen zu sein, sie entweder zweimal zu deklarieren oder eine Variable dafür zu erstellen.
- Der `onFinally`-Callback erhält kein Argument. Dieser Anwendungsfall ist genau dann vorhanden, wenn Sie sich _nicht kümmern_ um den Ablehnungsgrund oder den Erfüllungswert, und daher muss er nicht bereitgestellt werden.
- Ein `finally()`-Aufruf ist normalerweise transparent und spiegelt den endgültigen Zustand des ursprünglichen Promises wider. Zum Beispiel:
  - Im Gegensatz zu `Promise.resolve(2).then(() => 77, () => {})`, das ein Promise zurückgibt, das schließlich mit dem Wert `77` erfüllt ist, gibt `Promise.resolve(2).finally(() => 77)` ein Promise zurück, das schließlich mit dem Wert `2` erfüllt ist.
  - Ähnlich, im Gegensatz zu `Promise.reject(3).then(() => {}, () => 88)`, das ein Promise zurückgibt, das schließlich mit dem Wert `88` erfüllt ist, gibt `Promise.reject(3).finally(() => 88)` ein Promise zurück, das schließlich mit dem Grund `3` abgelehnt wird.

> [!NOTE]
> Ein `throw` (oder das Zurückgeben eines abgelehnten Promises) im `finally`-Callback lehnt das zurückgegebene Promise weiterhin ab. Zum Beispiel lehnen sowohl `Promise.reject(3).finally(() => { throw 99; })` als auch `Promise.reject(3).finally(() => Promise.reject(99))` das zurückgegebene Promise mit dem Grund `99` ab.

Wie {{jsxref("Promise/catch", "catch()")}} ruft `finally()` intern die Methode `then` auf dem Objekt auf, auf dem sie aufgerufen wurde. Wenn `onFinally` keine Funktion ist, wird `then()` mit `onFinally` als beiden Argumenten aufgerufen — was für {{jsxref("Promise.prototype.then()")}} bedeutet, dass kein nützlicher Handler angehängt wird. Andernfalls wird `then()` mit zwei intern erstellten Funktionen aufgerufen, die sich wie folgt verhalten:

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

Da `finally()` `then()` aufruft, unterstützt es Entsubklassierung. Beachten Sie zudem den Aufruf von {{jsxref("Promise.resolve()")}} oben — in Wirklichkeit wird der Rückgabewert von `onFinally()` mit demselben Algorithmus aufgelöst wie `Promise.resolve()`, aber der tatsächlich verwendete Konstruktor, um das aufgelöste Promise zu konstruieren, wird die Unterklasse sein. `finally()` erhält diesen Konstruktor über [`promise.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species).

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
