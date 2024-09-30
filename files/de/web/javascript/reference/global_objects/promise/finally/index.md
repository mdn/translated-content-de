---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`finally()`**-Methode von {{jsxref("Promise")}}-Instanzen plant eine Funktion zur Ausführung, wenn das Promise abgeschlossen ist (entweder erfüllt oder abgelehnt). Sie gibt sofort ein weiteres {{jsxref("Promise")}}-Objekt zurück und ermöglicht es Ihnen, Aufrufe anderer Promise-Methoden zu [verketteln](/de/docs/Web/JavaScript/Guide/Using_promises#chaining).

Dadurch können Sie Code-Duplikate in den {{jsxref("Promise/then", "then()")}}- und {{jsxref("Promise/catch", "catch()")}}-Handlern eines Promises vermeiden.

{{EmbedInteractiveExample("pages/js/promise-finally.html", "taller")}}

## Syntax

```js-nolint
promiseInstance.finally(onFinally)
```

### Parameter

- `onFinally`
  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise abgeschlossen wird. Der Rückgabewert wird ignoriert, es sei denn, es ist ein abgelehntes Promise. Die Funktion wird ohne Argumente aufgerufen.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer ausstehend, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen Promises. Wenn `onFinally` einen Fehler auslöst oder ein abgelehntes Promise zurückgibt, wird das neue Promise mit diesem Wert abgelehnt. Andernfalls wird das neue Promise mit dem gleichen Status wie das aktuelle Promise abgeschlossen.

## Beschreibung

Die `finally()`-Methode kann nützlich sein, wenn Sie einige Verarbeitung oder Bereinigung durchführen möchten, sobald das Promise abgeschlossen ist, unabhängig von dessen Ergebnis.

Die `finally()`-Methode ist der Verwendung von {{jsxref("Promise/then", "then(onFinally, onFinally)")}} sehr ähnlich. Es gibt jedoch einige Unterschiede:

- Bei der Erstellung einer Funktion in einer Zeile können Sie diese einmal übergeben, anstatt sie entweder zweimal zu deklarieren oder eine Variable dafür zu erstellen.
- Der `onFinally` Callback erhält kein Argument. Dieser Anwendungsfall ist genau dann, wenn Sie _nicht interessiert sind_ am Grund für die Ablehnung oder dem Erfüllungswert und deshalb keine Notwendigkeit besteht, diesen anzugeben.
- Ein `finally()`-Aufruf ist normalerweise transparent und spiegelt den letztendlichen Zustand des ursprünglichen Promises wider. Zum Beispiel:
  - Anders als `Promise.resolve(2).then(() => 77, () => {})`, welches ein Promise zurückgibt, das letztendlich mit dem Wert `77` erfüllt wird, gibt `Promise.resolve(2).finally(() => 77)` ein Promise zurück, das letztendlich mit dem Wert `2` erfüllt wird.
  - Ähnlich, anders als `Promise.reject(3).then(() => {}, () => 88)`, welches ein Promise zurückgibt, das letztendlich mit dem Wert `88` erfüllt wird, gibt `Promise.reject(3).finally(() => 88)` ein Promise zurück, das letztendlich mit dem Grund `3` abgelehnt wird.

> [!NOTE]
> Ein `throw` (oder die Rückgabe eines abgelehnten Promises) im `finally` Callback lehnt das zurückgegebene Promise weiterhin ab. Zum Beispiel lehnen sowohl `Promise.reject(3).finally(() => { throw 99; })` als auch `Promise.reject(3).finally(() => Promise.reject(99))` das zurückgegebene Promise mit dem Grund `99` ab.

Wie {{jsxref("Promise/catch", "catch()")}} ruft `finally()` intern die `then`-Methode auf dem Objekt auf, bei dem sie aufgerufen wurde. Wenn `onFinally` keine Funktion ist, wird `then()` mit `onFinally` als beide Argumente aufgerufen — was für {{jsxref("Promise.prototype.then()")}} bedeutet, dass kein hilfreicher Handler angehängt wird. Andernfalls wird `then()` mit zwei intern erstellten Funktionen aufgerufen, die sich wie folgt verhalten:

> [!WARNING]
> Dies dient nur Demonstrationszwecken und ist kein Polyfill.

```js
promise.then(
  (value) => Promise.resolve(onFinally()).then(() => value),
  (reason) =>
    Promise.resolve(onFinally()).then(() => {
      throw reason;
    }),
);
```

Da `finally()` `then()` aufruft, unterstützt es das Subclassing. Außerdem beachten Sie den obigen {{jsxref("Promise.resolve()")}}-Aufruf — in Wirklichkeit wird der Rückgabewert von `onFinally()` unter Verwendung des gleichen Algorithmus wie `Promise.resolve()` aufgelöst, aber der tatsächliche Konstruktor, der verwendet wird, um das aufgelöste Promise zu konstruieren, wird die Unterklasse sein. `finally()` erhält diesen Konstruktor durch [`promise.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species).

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
