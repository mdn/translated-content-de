---
title: Promise.prototype.finally()
short-title: finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`finally()`**-Methode von {{jsxref("Promise")}}-Instanzen plant eine Funktion ein, die aufgerufen wird, wenn das Promise abgeschlossen ist (entweder erfüllt oder abgelehnt). Sie gibt sofort ein anderes {{jsxref("Promise")}}-Objekt zurück, sodass Sie Aufrufe an andere Promise-Methoden [verketteln](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) können.

Dies ermöglicht es Ihnen, Code-Duplizierungen sowohl in den {{jsxref("Promise/then", "then()")}}- als auch in den {{jsxref("Promise/catch", "catch()")}}-Handlern des Promises zu vermeiden.

{{InteractiveExample("JavaScript Demo: Promise.prototype.finally()", "taller")}}

```js interactive-example
function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Mail has arrived");
    } else {
      reject(new Error("Failed to arrive"));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Experiment completed");
  });
```

## Syntax

```js-nolint
promiseInstance.finally(onFinally)
```

### Parameter

- `onFinally`
  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise abgeschlossen ist. Ihr Rückgabewert wird ignoriert, es sei denn, der zurückgegebene Wert ist ein abgelehntes Promise. Die Funktion wird ohne Argumente aufgerufen.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer anhängig, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen Promises. Wenn `onFinally` einen Fehler wirft oder ein abgelehntes Promise zurückgibt, wird das neue Promise mit diesem Wert abgelehnt. Andernfalls wird das neue Promise im gleichen Zustand wie das aktuelle Promise abgeschlossen.

## Beschreibung

Die Methode `finally()` kann nützlich sein, wenn Sie nach Abschluss des Promises einige Verarbeitungsschritte oder Aufräumarbeiten durchführen möchten, unabhängig vom Ergebnis.

Die `finally()`-Methode ist sehr ähnlich dem Aufruf von {{jsxref("Promise/then", "then(onFinally, onFinally)")}}. Es gibt jedoch ein paar Unterschiede:

- Beim Erstellen einer Funktion inline können Sie diese einmal übergeben, anstatt sie entweder zweimal deklarieren zu müssen oder eine Variable dafür zu erstellen.
- Der `onFinally`-Callback erhält kein Argument. Dieser Anwendungsfall ist genau dann gegeben, wenn Ihnen der Ablehnungsgrund oder der Erfüllungswert egal ist, und daher keine Notwendigkeit besteht, diesen bereitzustellen.
- Ein `finally()`-Aufruf ist in der Regel transparent und spiegelt den endgültigen Zustand des ursprünglichen Promises wider. Ein Beispiel:
  - Anders als `Promise.resolve(2).then(() => 77, () => {})`, das ein Promise zurückgibt, das schließlich mit dem Wert `77` erfüllt wird, gibt `Promise.resolve(2).finally(() => 77)` ein Promise zurück, das schließlich mit dem Wert `2` erfüllt wird.
  - Ebenso gibt `Promise.reject(3).then(() => {}, () => 88)`, das ein Promise zurückgibt, das schließlich mit dem Wert `88` erfüllt wird, `Promise.reject(3).finally(() => 88)` ein Promise zurück, das schließlich aus dem Grund `3` abgelehnt wird.

> [!NOTE]
> Ein `throw` (oder das Zurückgeben eines abgelehnten Promises) im `finally`-Callback lehnt weiterhin das zurückgegebene Promise ab. Zum Beispiel lehnen sowohl `Promise.reject(3).finally(() => { throw 99; })` als auch `Promise.reject(3).finally(() => Promise.reject(99))` das zurückgegebene Promise mit dem Grund `99` ab.

Wie {{jsxref("Promise/catch", "catch()")}}, ruft `finally()` intern die `then`-Methode für das Objekt auf, auf dem es aufgerufen wurde. Wenn `onFinally` keine Funktion ist, wird `then()` mit `onFinally` als beiden Argumenten aufgerufen – was für {{jsxref("Promise.prototype.then()")}} bedeutet, dass kein nützlicher Handler angefügt wird. Andernfalls wird `then()` mit zwei intern erstellten Funktionen aufgerufen, die sich wie folgt verhalten:

> [!WARNING]
> Dies dient nur zu Demonstrationszwecken und ist kein Polyfill.

```js
promise.then(
  (value) => Promise.resolve(onFinally()).then(() => value),
  (reason) =>
    Promise.resolve(onFinally()).then(() => {
      throw reason;
    }),
);
```

Da `finally()` `then()` aufruft, unterstützt es die Vererbung. Beachten Sie außerdem den {{jsxref("Promise.resolve()")}}-Aufruf oben – in Wirklichkeit wird der Rückgabewert von `onFinally()` mit dem gleichen Algorithmus wie `Promise.resolve()` aufgelöst, aber der tatsächliche Konstruktor, der verwendet wird, um das aufgelöste Promise zu konstruieren, wird die Unterklasse sein. `finally()` erhält diesen Konstruktor über [`promise.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species).

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
- [es-shims Polyfill von `Promise.prototype.finally`](https://www.npmjs.com/package/promise.prototype.finally)
- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}
