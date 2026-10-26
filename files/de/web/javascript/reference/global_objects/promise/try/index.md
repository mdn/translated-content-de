---
title: Promise.try()
short-title: try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Promise.try()`** nimmt eine Callback-Funktion entgegen, die einen Wert zurückgeben oder einen Fehler auslösen kann – synchron oder asynchron – und [löst](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) ihr Ergebnis zu einem {{jsxref("Promise")}} auf.

## Syntax

```js-nolint
Promise.try(func)
Promise.try(func, arg1)
Promise.try(func, arg1, arg2)
Promise.try(func, arg1, arg2, /* …, */ argN)
```

### Parameter

- `func`
  - : Eine Funktion, die synchron mit den übergebenen Argumenten (`arg1`, `arg2`, …, `argN`) aufgerufen wird. Sie kann einen Wert zurückgeben, einen Fehler auslösen oder ein Promise zurückgeben.
- `arg1`, `arg2`, …, `argN`
  - : Argumente, die an `func` übergeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- bereits erfüllt ist, wenn `func` synchron einen Wert zurückgibt;
- bereits abgelehnt ist, wenn `func` synchron einen Fehler auslöst;
- asynchron erfüllt oder abgelehnt wird, wenn `func` ein Promise zurückgibt. Der Rückgabewert wird [zu einem Promise aufgelöst](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve). Das bedeutet, dass integrierte {{jsxref("Promise")}}-Objekte unverändert zurückgegeben werden.

## Beschreibung

Möglicherweise verwenden Sie eine API, die eine Callback-Funktion entgegennimmt. Diese kann synchron oder asynchron sein. Um beide Fälle einheitlich zu behandeln, möchten Sie das Ergebnis in ein Promise einbinden. Der naheliegendste Weg ist möglicherweise {{jsxref("Promise/resolve", "Promise.resolve(func())")}}. Wenn `func()` jedoch synchron einen Fehler auslöst, wird dieser nicht abgefangen und in ein abgelehntes Promise umgewandelt.

Sie können den Ausdruck in `try...catch` einschließen:

```js
let result;
try {
  result = Promise.resolve(func());
} catch (error) {
  result = Promise.reject(error);
}
```

Das Problem ist, dass `try...catch` kein Ausdruck ist. Sie können es daher nicht direkt dort verwenden, wo ein Ausdruck erwartet wird, etwa als Argument einer anderen Funktion.

Um das Ergebnis eines Funktionsaufrufs in ein erfülltes oder abgelehntes Promise zu überführen, wird daher häufiger Folgendes verwendet:

```js
new Promise((resolve) => resolve(func()));
```

Beim integrierten `Promise()`-Konstruktor werden Fehler, die der Executor auslöst, automatisch abgefangen und in Ablehnungen umgewandelt. Damit werden auch synchrone Fehler behandelt. Allerdings wird dabei ausnahmslos ein neues `Promise`-Objekt erstellt, was unnötig ist, wenn `func()` bereits ein `Promise` zurückgibt. `Promise.resolve()` vermeidet diese zusätzliche Einbindung in ein Promise.

`Promise.try()` ist nahezu gleichwertig mit dem Ansatz über `try...catch`, ist aber kürzer und kann als Ausdruck verwendet werden:

```js
Promise.try(func);
```

Beachten Sie, dass `Promise.try()` trotz großer Ähnlichkeit _nicht_ dem Folgenden entspricht:

```js
Promise.resolve().then(func);
```

Der Unterschied besteht darin, dass die an {{jsxref("Promise/then", "then()")}} übergebene Callback-Funktion immer asynchron aufgerufen wird, während der Executor des `Promise()`-Konstruktors synchron aufgerufen wird. Auch `Promise.try` ruft die Funktion synchron auf und löst das Promise nach Möglichkeit sofort auf.

Zusammen mit {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} kann `Promise.try()` synchrone und asynchrone Fehler in einer einzigen Promise-Kette behandeln. Dadurch ähnelt die Fehlerbehandlung bei Promises der synchronen Fehlerbehandlung.

Wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) akzeptiert `Promise.try()` zusätzliche Argumente, die an die Callback-Funktion übergeben werden. Statt Folgendes zu schreiben:

```js
Promise.try(() => func(arg1, arg2));
```

können Sie Folgendes schreiben:

```js
Promise.try(func, arg1, arg2);
```

Beide Varianten sind gleichwertig. Die zweite vermeidet jedoch die Erstellung einer zusätzlichen Closure und ist effizienter.

`Promise.try()` ist generisch und unterstützt Unterklassen. Es kann also für Unterklassen von `Promise` aufgerufen werden; das Ergebnis enthält dann ein Promise des Unterklassentyps. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren: Er muss eine einzelne `executor`-Funktion entgegennehmen, die mit den Callback-Funktionen `resolve` und `reject` als Parametern aufgerufen werden kann.

## Beispiele

### Promise.try() verwenden

Das folgende Beispiel nimmt eine Callback-Funktion entgegen, überführt sie in ein Promise, verarbeitet das Ergebnis und behandelt mögliche Fehler:

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

Mit async/await sähe derselbe Code so aus:

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

### try() für einen Konstruktor aufrufen, der kein Promise-Konstruktor ist

`Promise.try()` ist eine generische Methode. Sie kann für jeden Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert.

Das Folgende ist eine etwas genauere Annäherung an die tatsächliche Implementierung von `Promise.try()` (sollte aber dennoch nicht als Polyfill verwendet werden):

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

`Promise.try()` verwendet {{jsxref("Promise.resolve()")}} und {{jsxref("Promise.reject()")}}, um den Rückgabewert zu erzeugen. Beide Funktionen sind generisch.

Beispielsweise können wir die Methode für einen Konstruktor aufrufen, der `console.log` als `resolve`- und `reject`-Funktion an `executor` übergibt:

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

- [Polyfill für `Promise.try` in `core-js`](https://core-js.io/docs/features/ecmascript/promise)
- [Polyfill für `Promise.try` von es-shims](https://www.npmjs.com/package/promise.try)
- Leitfaden zur [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
