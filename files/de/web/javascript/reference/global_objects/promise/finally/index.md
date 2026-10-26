---
title: Promise.prototype.finally()
short-title: finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`finally()`** von {{jsxref("Promise")}}-Instanzen plant die Ausführung einer Funktion ein, sobald das Promise abgeschlossen ist (entweder erfüllt oder abgelehnt). Sie gibt sofort ein weiteres {{jsxref("Promise")}}-Objekt zurück, sodass Sie Aufrufe anderer Promise-Methoden [verketten](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) können.

Wie der [`finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block)-Block ist diese Methode in der Regel für Aufräumarbeiten gedacht, unabhängig vom Ergebnis des Promise. So müssen Sie Code nicht sowohl im {{jsxref("Promise/then", "then()")}}- als auch im {{jsxref("Promise/catch", "catch()")}}-Handler des Promise wiederholen.

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
  - : Eine Funktion, die asynchron ausgeführt wird, sobald dieses Promise abgeschlossen ist. Gibt die Funktion ein Promise zurück, wartet das resultierende Promise, bis dieses Promise abgeschlossen ist, bevor es fortfährt. Wird das zurückgegebene Promise abgelehnt, wird das resultierende Promise mit demselben Grund abgelehnt. Jeder andere Rückgabewert sowie der Erfüllungswert des zurückgegebenen Promise werden ignoriert.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist zum Zeitpunkt der Rückgabe immer noch ausstehend, unabhängig vom Zustand des aktuellen Promise. Löst `onFinally` einen Fehler aus oder gibt es ein abgelehntes Promise zurück, wird das neue Promise mit diesem Wert abgelehnt. Andernfalls nimmt das neue Promise denselben Endzustand wie das aktuelle Promise an.

## Beschreibung

Die Methode `finally()` ist nützlich, wenn Sie nach Abschluss eines Promise Verarbeitungsschritte oder Aufräumarbeiten durchführen möchten, unabhängig von dessen Ergebnis.

Die Methode `finally()` ist dem Aufruf von {{jsxref("Promise/then", "then(onFinally, onFinally)")}} sehr ähnlich. Es gibt jedoch einige Unterschiede:

- Wenn Sie eine Funktion direkt an dieser Stelle erstellen, müssen Sie sie nur einmal übergeben, statt sie zweimal anzugeben oder eine Variable dafür anzulegen.
- Der `onFinally`-Callback erhält kein Argument. Er ist genau für Fälle gedacht, in denen der Ablehnungsgrund oder der Erfüllungswert _keine Rolle spielt_ und daher nicht übergeben werden muss.
- Ein `finally()`-Aufruf ist normalerweise transparent und spiegelt den endgültigen Zustand des ursprünglichen Promise wider. Zum Beispiel:
  - Anders als `Promise.resolve(2).then(() => 77, () => 77)`, das ein Promise zurückgibt, das schließlich mit dem Wert `77` erfüllt wird, gibt `Promise.resolve(2).finally(() => 77)` ein Promise zurück, das schließlich mit dem Wert `2` erfüllt wird.
  - Ebenso gibt `Promise.reject(3).then(() => 88, () => 88)` ein Promise zurück, das schließlich mit dem Wert `88` erfüllt wird. `Promise.reject(3).finally(() => 88)` gibt dagegen ein Promise zurück, das schließlich mit dem Grund `3` abgelehnt wird.

> [!NOTE]
> Ein `throw` im `finally`-Callback (oder die Rückgabe eines abgelehnten Promise) führt dennoch dazu, dass das zurückgegebene Promise abgelehnt wird. Beispielsweise werden die von `Promise.reject(3).finally(() => { throw 99; })` und `Promise.reject(3).finally(() => Promise.reject(99))` zurückgegebenen Promises beide mit dem Grund `99` abgelehnt.

Wie {{jsxref("Promise/catch", "catch()")}} ruft `finally()` intern die Methode `then` auf dem Objekt auf, auf dem es selbst aufgerufen wurde. Wenn `onFinally` keine Funktion ist, wird `then()` mit `onFinally` als beiden Argumenten aufgerufen. Bei {{jsxref("Promise.prototype.then()")}} bedeutet das, dass kein wirksamer Handler angehängt wird. Andernfalls wird `then()` mit zwei intern erstellten Funktionen aufgerufen, die sich wie folgt verhalten:

> [!WARNING]
> Dies dient nur zur Veranschaulichung und ist kein Polyfill.

```js
promise.then(
  (value) => Promise.resolve(onFinally()).then(() => value),
  (reason) =>
    Promise.resolve(onFinally()).then(() => {
      throw reason;
    }),
);
```

Da `finally()` die Methode `then()` aufruft, unterstützt es Unterklassen. Beachten Sie außerdem den obigen Aufruf von {{jsxref("Promise.resolve()")}}: Tatsächlich wird der Rückgabewert von `onFinally()` mit demselben Algorithmus wie bei `Promise.resolve()` verarbeitet. Als Konstruktor für das dabei erzeugte Promise wird jedoch der Konstruktor der Unterklasse verwendet. `finally()` erhält diesen Konstruktor über [`promise.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species).

## Beispiele

### finally() verwenden

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

- [Polyfill für `Promise.prototype.finally` in `core-js`](https://core-js.io/docs/features/ecmascript/promise)
- [Polyfill für `Promise.prototype.finally` von es-shims](https://www.npmjs.com/package/promise.prototype.finally)
- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}
