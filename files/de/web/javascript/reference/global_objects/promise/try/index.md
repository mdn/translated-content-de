---
title: Promise.try()
short-title: try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: ff5a8ae3b5d69a777068b9571934342443e14ab0
---

Die statische Methode **`Promise.try()`** nimmt einen Callback beliebiger Art entgegen (der synchron oder asynchron zurückgibt oder einen Fehler auslöst) und [löst](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) dessen Ergebnis zu einem {{jsxref("Promise")}} auf.

## Syntax

```js-nolint
Promise.try(func)
Promise.try(func, arg1)
Promise.try(func, arg1, arg2)
Promise.try(func, arg1, arg2, /* …, */ argN)
```

### Parameter

- `func`
  - : Eine Funktion, die synchron mit den bereitgestellten Argumenten (`arg1`, `arg2`, …, `argN`) aufgerufen wird. Sie kann beliebige Aktionen ausführen – entweder einen Wert zurückgeben, einen Fehler auslösen oder ein Promise zurückgeben.
- `arg1`, `arg2`, …, `argN`
  - : Argumente, die an `func` übergeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- bereits erfüllt ist, wenn `func` synchron einen Wert zurückgibt.
- bereits abgelehnt ist, wenn `func` synchron einen Fehler auslöst.
- asynchron erfüllt oder abgelehnt wird, wenn `func` ein Promise zurückgibt. Der zurückgegebene Wert wird zu einem Promise [aufgelöst](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve), was bedeutet, dass integrierte {{jsxref("Promise")}}-Objekte unverändert zurückgegeben werden.

## Beschreibung

Möglicherweise haben Sie eine API, die einen Callback entgegennimmt. Der Callback kann synchron oder asynchron sein. Sie möchten alles einheitlich behandeln, indem Sie das Ergebnis in ein Promise einschließen. Der direkteste Ansatz könnte {{jsxref("Promise/resolve", "Promise.resolve(func())")}} sein. Das Problem besteht darin, dass ein Fehler, den `func()` synchron auslöst, nicht abgefangen und in ein abgelehntes Promise umgewandelt würde.

Sie können diesen Ausdruck in `try...catch` einschließen:

```js
let result;
try {
  result = Promise.resolve(func());
} catch (error) {
  result = Promise.reject(error);
}
```

Das Problem ist, dass `try...catch` kein Ausdruck ist, sodass Sie es nicht direkt an Ausdruckspositionen verwenden können, beispielsweise beim Übergeben an andere Funktionen.

Daher wird beim Überführen eines Funktionsergebnisses in ein Promise – erfüllt oder abgelehnt – häufiger Folgendes verwendet:

```js
new Promise((resolve) => resolve(func()));
```

Beim integrierten `Promise()`-Konstruktor werden Fehler, die vom Executor ausgelöst werden, automatisch abgefangen und in Ablehnungen umgewandelt, sodass dies auch synchrone Fehler verhindert. Das Problem ist, dass dadurch bedingungslos ein neues `Promise`-Objekt erstellt wird, was unnötig ist, wenn `func()` bereits ein `Promise` zurückgibt. `Promise.resolve()` hingegen ist intelligent genug, dieses zusätzliche Einschließen in ein Promise zu vermeiden.

`Promise.try()` entspricht fast genau dem `try...catch`-Ansatz, außer dass es kürzer ist und als Ausdruck verwendet werden kann:

```js
Promise.try(func);
```

Beachten Sie, dass `Promise.try()` trotz großer Ähnlichkeit _nicht_ diesem Ausdruck entspricht:

```js
Promise.resolve().then(func);
```

Der Unterschied besteht darin, dass der an {{jsxref("Promise/then", "then()")}} übergebene Callback immer asynchron aufgerufen wird, während der Executor des `Promise()`-Konstruktors synchron aufgerufen wird. `Promise.try` ruft die Funktion ebenfalls synchron auf und löst das Promise, wenn möglich, sofort auf.

`Promise.try()` kann zusammen mit {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} verwendet werden, um sowohl synchrone als auch asynchrone Fehler in einer einzigen Kette zu behandeln und die Fehlerbehandlung von Promises fast wie synchrone Fehlerbehandlung erscheinen zu lassen.

Wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) akzeptiert `Promise.try()` zusätzliche Argumente, die an den Callback übergeben werden. Das bedeutet, dass Sie statt Folgendem:

```js
Promise.try(() => func(arg1, arg2));
```

Folgendes tun können:

```js
Promise.try(func, arg1, arg2);
```

Beide Varianten sind gleichwertig, aber die letztere vermeidet das Erstellen eines zusätzlichen Closure und ist effizienter.

`Promise.try()` ist generisch und unterstützt Vererbung, was bedeutet, dass es auf Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Promise des Unterklassentyps enthält. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren – also eine einzelne `executor`-Funktion akzeptieren, die mit den Callbacks `resolve` und `reject` als Parametern aufgerufen werden kann.

## Beispiele

### Verwenden von Promise.try()

Das folgende Beispiel nimmt einen Callback entgegen, „hebt“ ihn in ein Promise, verarbeitet das Ergebnis und führt eine Fehlerbehandlung durch:

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

Mit async/await würde derselbe Code folgendermaßen aussehen:

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

### Aufrufen von try() bei einem Nicht-Promise-Konstruktor

`Promise.try()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert.

Das Folgende ist eine etwas originalgetreuere Annäherung an das tatsächliche `Promise.try()` (sollte jedoch weiterhin nicht als Polyfill verwendet werden):

```js
Promise.try = function (func, ...args) {
  let result;
  try {
    result = func(...args);
  } catch (error) {
    return Promise.reject.call(this, error);
  }
  return Promise.resolve.call(this, result);
};
```

`Promise.try()` delegiert an {{jsxref("Promise.resolve()")}} und {{jsxref("Promise.reject()")}}, um den Rückgabewert zu erstellen, und beide Funktionen sind generisch.

Beispielsweise können wir es bei einem Konstruktor aufrufen, der `console.log` als die Funktionen `resolve` und `reject` an `executor` übergibt:

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

  static try = Promise.try;
}

const p = NotPromise.try(() => "hello");
// Logs: Resolved hello
// p is a NotPromise instance

const p2 = NotPromise.try(() => {
  throw new Error("oops");
});
// Logs: Rejected Error: oops
// p2 is a NotPromise instance
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.try` in `core-js`](https://github.com/zloirock/core-js#promisetry)
- [es-shims-Polyfill von `Promise.try`](https://www.npmjs.com/package/promise.try)
- Leitfaden [Verwenden von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
