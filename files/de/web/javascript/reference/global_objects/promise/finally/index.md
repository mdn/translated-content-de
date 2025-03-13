---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`finally()`**-Methode von {{jsxref("Promise")}} Instanzen plant eine Funktion, die aufgerufen wird, wenn das Promise erfüllt oder abgelehnt wird. Es gibt sofort ein weiteres {{jsxref("Promise")}}-Objekt zurück, was es Ihnen ermöglicht, [aufeinanderfolgende](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) Aufrufe anderer Promise-Methoden zu verketten.

Dies ermöglicht es Ihnen, Code in den {{jsxref("Promise/then", "then()")}} und {{jsxref("Promise/catch", "catch()")}}-Handlern des Promises nicht zu duplizieren.

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
  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise abgeschlossen wird. Der Rückgabewert wird ignoriert, es sei denn, der zurückgegebene Wert ist ein abgelehntes Promise. Die Funktion wird ohne Argumente aufgerufen.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer ausstehend, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen Promises. Wenn `onFinally` einen Fehler auslöst oder ein abgelehntes Promise zurückgibt, wird das neue Promise mit diesem Wert abgelehnt. Andernfalls wird das neue Promise mit dem gleichen Zustand wie das aktuelle Promise abgeschlossen.

## Beschreibung

Die `finally()`-Methode kann nützlich sein, wenn Sie eine Verarbeitung oder Bereinigung durchführen möchten, sobald das Promise abgeschlossen ist, unabhängig vom Ergebnis.

Die `finally()`-Methode ist sehr ähnlich dem Aufruf von {{jsxref("Promise/then", "then(onFinally, onFinally)")}}. Es gibt jedoch einige Unterschiede:

- Wenn Sie eine Funktion Inline erstellen, können Sie sie nur einmal übergeben, anstatt gezwungen zu sein, sie entweder zweimal zu deklarieren oder eine Variable dafür zu erstellen.
- Der `onFinally`-Callback erhält kein Argument. Dieser Anwendungsfall ist genau dann interessant, wenn Ihnen der Ablehnungsgrund oder der Erfüllungswert _egal_ ist und es daher keinen Grund gibt, ihn bereitzustellen.
- Ein `finally()`-Aufruf ist normalerweise transparent und reflektiert den endgültigen Zustand des ursprünglichen Promises. Zum Beispiel:
  - Anders als `Promise.resolve(2).then(() => 77, () => {})`, das ein Promise zurückgibt, das schließlich mit dem Wert `77` erfüllt ist, gibt `Promise.resolve(2).finally(() => 77)` ein Promise zurück, das schließlich mit dem Wert `2` erfüllt ist.
  - Ähnlich, anders als `Promise.reject(3).then(() => {}, () => 88)`, das ein Promise zurückgibt, das schließlich mit dem Wert `88` erfüllt ist, gibt `Promise.reject(3).finally(() => 88)` ein Promise zurück, das schließlich mit dem Grund `3` abgelehnt ist.

> [!NOTE]
> Ein `throw` (oder das Zurückgeben eines abgelehnten Promises) im `finally`-Callback lehnt das zurückgegebene Promise immer noch ab. Zum Beispiel lehnen sowohl `Promise.reject(3).finally(() => { throw 99; })` als auch `Promise.reject(3).finally(() => Promise.reject(99))` das zurückgegebene Promise mit dem Grund `99` ab.

Wie {{jsxref("Promise/catch", "catch()")}} ruft `finally()` intern die `then`-Methode auf dem Objekt auf, auf dem es aufgerufen wurde. Wenn `onFinally` keine Funktion ist, wird `then()` mit `onFinally` als beiden Argumenten aufgerufen — was für {{jsxref("Promise.prototype.then()")}} bedeutet, dass kein nützlicher Handler angehängt wird. Andernfalls wird `then()` mit zwei intern erstellten Funktionen aufgerufen, die sich wie folgt verhalten:

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

Da `finally()` `then()` aufruft, unterstützt es Subclassing. Beachten Sie zudem den {{jsxref("Promise.resolve()")}}-Aufruf oben. In Wirklichkeit wird der Rückgabewert von `onFinally()` mit dem gleichen Algorithmus wie bei `Promise.resolve()` aufgelöst, aber der tatsächliche Konstruktor, der verwendet wird, um das aufgelöste Promise zu konstruieren, wird die Subklasse sein. `finally()` erhält diesen Konstruktor durch [`promise.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species).

## Beispiele

### Nutzung von finally()

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
