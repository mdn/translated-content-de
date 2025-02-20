---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`finally()`**-Methode von {{jsxref("Promise")}}-Instanzen plant eine Funktion ein, die aufgerufen wird, wenn das Promise abgeschlossen ist (entweder erfüllt oder abgelehnt). Sie gibt sofort ein anderes {{jsxref("Promise")}}-Objekt zurück und ermöglicht es Ihnen, [Aufrufe zu verketteten Promises-Methoden](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) fortzusetzen.

Dies erlaubt es Ihnen, die Duplizierung von Code in den {{jsxref("Promise/then", "then()")}}- und {{jsxref("Promise/catch", "catch()")}}-Handlern des Promises zu vermeiden.

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
  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise abgeschlossen wird. Ihr Rückgabewert wird ignoriert, es sei denn, der Rückgabewert ist ein abgelehntes Promise. Die Funktion wird ohne Argumente aufgerufen.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist beim Zurückgeben immer ausstehend, unabhängig vom Status des aktuellen Promises. Wenn `onFinally` einen Fehler auslöst oder ein abgelehntes Promise zurückgibt, wird das neue Promise mit diesem Wert abgelehnt. Andernfalls wird das neue Promise denselben Status wie das aktuelle Promise erhalten.

## Beschreibung

Die Methode `finally()` kann nützlich sein, wenn Sie nach dem Abschluss eines Promises, unabhängig von dessen Ergebnis, eine Verarbeitung oder Bereinigung durchführen möchten.

Die Methode `finally()` ist der Verwendung von {{jsxref("Promise/then", "then(onFinally, onFinally)")}} sehr ähnlich. Es gibt jedoch einige Unterschiede:

- Wenn Sie eine Funktion inline erstellen, können Sie diese einmal übergeben, anstatt sie zweimal deklarieren oder eine Variable dafür erstellen zu müssen.
- Der `onFinally`-Callback erhält keine Argumente. Dieser Anwendungsfall eignet sich genau dann, wenn Sie sich _nicht für_ den Ablehnungsgrund oder den Erfüllungswert interessieren und es daher nicht notwendig ist, diesen bereitzustellen.
- Ein `finally()`-Aufruf ist in der Regel transparent und spiegelt den endgültigen Status des ursprünglichen Promises wider. Zum Beispiel:
  - Im Gegensatz zu `Promise.resolve(2).then(() => 77, () => {})`, das ein Promise zurückgibt, das schließlich mit dem Wert `77` erfüllt wird, gibt `Promise.resolve(2).finally(() => 77)` ein Promise zurück, das schließlich mit dem Wert `2` erfüllt wird.
  - Ebenso gibt `Promise.reject(3).then(() => {}, () => 88)`, das ein Promise zurückgibt, das schließlich mit dem Wert `88` erfüllt wird, ein Promise zurück, das schließlich mit dem Grund `3` abgelehnt wird, wenn es als `Promise.reject(3).finally(() => 88)` ausgeführt wird.

> [!NOTE]
> Ein `throw` (oder das Zurückgeben eines abgelehnten Promises) im `finally`-Callback lehnt dennoch das zurückgegebene Promise ab. Zum Beispiel lehnen sowohl `Promise.reject(3).finally(() => { throw 99; })` als auch `Promise.reject(3).finally(() => Promise.reject(99))` das zurückgegebene Promise mit dem Wert `99` ab.

Ähnlich wie {{jsxref("Promise/catch", "catch()")}} ruft `finally()` intern die Methode `then` auf dem Objekt auf, auf dem sie aufgerufen wurde. Wenn `onFinally` keine Funktion ist, wird `then()` mit `onFinally` als beiden Argumenten aufgerufen — was für {{jsxref("Promise.prototype.then()")}} bedeutet, dass kein nützlicher Handler angefügt wird. Andernfalls wird `then()` mit zwei intern erstellten Funktionen aufgerufen, die sich wie folgt verhalten:

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

Da `finally()` `then()` aufruft, unterstützt es Subklassenbildung. Beachten Sie zudem den {{jsxref("Promise.resolve()")}}-Aufruf oben — tatsächlich wird der Rückgabewert von `onFinally()` mithilfe desselben Algorithmus aufgelöst wie `Promise.resolve()`. Allerdings wird der tatsächliche Konstruktor, der verwendet wird, um das aufgelöste Promise zu erstellen, die Subklasse sein. `finally()` erhält diesen Konstruktor durch [`promise.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species).

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
