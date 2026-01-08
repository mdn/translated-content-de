---
title: Promise.prototype.finally()
short-title: finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
l10n:
  sourceCommit: a99bc85f30c0c5a8dc5c85b7b552b442d411a082
---

Die **`finally()`**-Methode von {{jsxref("Promise")}}-Instanzen plant eine Funktion ein, die aufgerufen wird, wenn das Promise beendet ist (entweder erfüllt oder abgelehnt). Sie gibt sofort ein weiteres {{jsxref("Promise")}}-Objekt zurück, wodurch es möglich ist, [Aufrufe zu anderen Promise-Methoden zu verketten](/de/docs/Web/JavaScript/Guide/Using_promises#chaining).

Wie der [`finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) Block ist diese Methode normalerweise für Aufräumarbeiten gedacht, unabhängig vom Ergebnis des Promises. Es ermöglicht Ihnen, Code in den {{jsxref("Promise/then", "then()")}} und {{jsxref("Promise/catch", "catch()")}} Handlern des Promises zu vermeiden.

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
  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise beendet ist. Wenn die Funktion ein Promise zurückgibt, wartet das resultierende Promise darauf, dass dieses Promise beendet wird, bevor es fortfährt. Wenn das zurückgegebene Promise abgelehnt wird, wird das resultierende Promise mit demselben Grund abgelehnt. Jeder andere zurückgegebene Wert oder der erfüllte Wert des zurückgegebenen Promises wird ignoriert.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer ausstehend, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen Promises. Wenn `onFinally` einen Fehler auslöst oder ein abgelehntes Promise zurückgibt, wird das neue Promise mit diesem Wert abgelehnt. Andernfalls wird das neue Promise mit demselben Status wie das aktuelle Promise beendet.

## Beschreibung

Die `finally()`-Methode kann nützlich sein, wenn Sie einige Verarbeitung oder Aufräumarbeiten durchführen möchten, sobald das Promise beendet ist, unabhängig von seinem Ergebnis.

Die `finally()`-Methode ist sehr ähnlich wie das Aufrufen von {{jsxref("Promise/then", "then(onFinally, onFinally)")}}. Es gibt jedoch ein paar Unterschiede:

- Bei der Erstellung einer Funktion inline können Sie sie einmal übergeben, anstatt gezwungen zu sein, sie entweder zweimal zu deklarieren oder eine Variable dafür zu erstellen.
- Der `onFinally`-Callback erhält kein Argument. Dieser Anwendungsfall ist genau dann, wenn Sie sich _nicht_ um den Ablehnungsgrund oder den Erfüllungswert kümmern, und daher besteht keine Notwendigkeit, ihn bereitzustellen.
- Ein `finally()`-Aufruf ist normalerweise transparent und spiegelt den endgültigen Status des ursprünglichen Promises wider. Beispielsweise:
  - Im Gegensatz zu `Promise.resolve(2).then(() => 77, () => 77)`, das ein Promise zurückgibt, das schließlich mit dem Wert `77` erfüllt wird, gibt `Promise.resolve(2).finally(() => 77)` ein Promise zurück, das schließlich mit dem Wert `2` erfüllt wird.
  - Ähnlich, im Gegensatz zu `Promise.reject(3).then(() => 88, () => 88)`, das ein Promise zurückgibt, das schließlich mit dem Wert `88` erfüllt wird, gibt `Promise.reject(3).finally(() => 88)` ein Promise zurück, das schließlich mit dem Grund `3` abgelehnt wird.

> [!NOTE]
> Ein `throw` (oder das Zurückgeben eines abgelehnten Versprechens) im `finally`-Callback lehnt das zurückgegebene Promise weiterhin ab. Zum Beispiel lehnen sowohl `Promise.reject(3).finally(() => { throw 99; })` als auch `Promise.reject(3).finally(() => Promise.reject(99))` das zurückgegebene Promise mit dem Grund `99` ab.

Wie {{jsxref("Promise/catch", "catch()")}} ruft `finally()` intern die `then`-Methode für das Objekt auf, auf dem sie aufgerufen wurde. Wenn `onFinally` keine Funktion ist, wird `then()` mit `onFinally` als beide Argumente aufgerufen – was für {{jsxref("Promise.prototype.then()")}} bedeutet, dass kein nützlicher Handler angehängt ist. Andernfalls wird `then()` mit zwei intern erstellten Funktionen aufgerufen, die sich wie folgt verhalten:

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

Da `finally()` `then()` aufruft, unterstützt es das Subklassing. Zudem beachten Sie den {{jsxref("Promise.resolve()")}}-Aufruf oben — in Wirklichkeit wird der Rückgabewert von `onFinally()` unter Verwendung des gleichen Algorithmus wie `Promise.resolve()` aufgelöst, aber der tatsächliche Konstruktor, der verwendet wird, um das aufgelöste Promise zu konstruieren, wird die Unterklasse sein. `finally()` erhält diesen Konstruktor über [`promise.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species).

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
