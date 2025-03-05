---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`finally()`** Methode von {{jsxref("Promise")}} Instanzen plant eine Funktion, die aufgerufen wird, sobald das Promise abgeschlossen ist (entweder erfüllt oder abgelehnt). Sie gibt sofort ein anderes {{jsxref("Promise")}} Objekt zurück, wodurch Sie [Aufrufe an andere Promise-Methoden verketten](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) können.

Dies ermöglicht es Ihnen, Code-Duplikationen sowohl in den `then()`- als auch `catch()`-Handlern des Promises zu vermeiden.

{{InteractiveExample("JavaScript Demo: Promise.finally()", "taller")}}

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

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer schwebend, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen Promises. Wenn `onFinally` einen Fehler wirft oder ein abgelehntes Promise zurückgibt, wird das neue Promise mit diesem Wert abgelehnt. Andernfalls wird das neue Promise im gleichen Zustand wie das aktuelle Promise abgeschlossen.

## Beschreibung

Die `finally()` Methode kann nützlich sein, wenn Sie eine Verarbeitung oder Bereinigung durchführen möchten, sobald das Promise abgeschlossen ist, unabhängig von dessen Ergebnis.

Die `finally()` Methode ist der Verwendung von {{jsxref("Promise/then", "then(onFinally, onFinally)")}} sehr ähnlich. Es gibt jedoch ein paar Unterschiede:

- Bei der Inline-Erstellung einer Funktion können Sie diese einmal übergeben, anstatt sie entweder zweimal deklarieren oder eine Variable dafür erstellen zu müssen.
- Der `onFinally` Callback erhält kein Argument. Dieser Anwendungsfall ist genau dann geeignet, wenn Ihnen der Ablehnungsgrund oder der Erfüllungswert egal ist und daher keine Bereitstellung erforderlich ist.
- Ein `finally()` Aufruf ist normalerweise transparent und spiegelt den endgültigen Zustand des ursprünglichen Promises wider. Zum Beispiel:
  - Anders als `Promise.resolve(2).then(() => 77, () => {})`, das ein Promise zurückgibt, das letztendlich mit dem Wert `77` erfüllt ist, gibt `Promise.resolve(2).finally(() => 77)` ein Promise zurück, das letztendlich mit dem Wert `2` erfüllt ist.
  - Ebenso gibt `Promise.reject(3).then(() => {}, () => 88)`, das ein Promise zurückgibt, das letztendlich mit dem Wert `88` erfüllt ist, im Gegensatz zu `Promise.reject(3).finally(() => 88)` ein Promise zurück, das letztendlich mit dem Grund `3` abgelehnt ist.

> [!NOTE]
> Ein `throw` (oder das Zurückgeben eines abgelehnten Promises) im `finally` Callback lehnt das zurückgegebene Promise dennoch ab. Zum Beispiel lehnen sowohl `Promise.reject(3).finally(() => { throw 99; })` als auch `Promise.reject(3).finally(() => Promise.reject(99))` das zurückgegebene Promise mit dem Grund `99` ab.

Ähnlich wie {{jsxref("Promise/catch", "catch()")}}, ruft `finally()` intern die `then` Methode auf dem Objekt auf, auf dem es aufgerufen wurde. Wenn `onFinally` keine Funktion ist, wird `then()` mit `onFinally` als beiden Argumenten aufgerufen — was bedeutet, dass für {{jsxref("Promise.prototype.then()")}} kein nützlicher Handler angefügt wird. Andernfalls wird `then()` mit zwei intern erstellten Funktionen aufgerufen, die sich wie folgt verhalten:

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

Da `finally()` `then()` aufruft, unterstützt es Unterklassenbildung. Beachten Sie außerdem den {{jsxref("Promise.resolve()")}} Aufruf oben — in Wirklichkeit wird der Rückgabewert von `onFinally()` mit demselben Algorithmus wie `Promise.resolve()` aufgelöst, aber der tatsächliche Konstruktor, der zur Konstruktion des aufgelösten Promises verwendet wird, wird die Unterklasse sein. `finally()` erhält diesen Konstruktor über [`promise.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species).

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
