---
title: Promise.prototype.catch()
short-title: catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`catch()`** Methode von {{jsxref("Promise")}} Instanzen plant eine Funktion ein, die aufgerufen wird, wenn das Promise abgelehnt wird. Sie gibt sofort ein weiteres {{jsxref("Promise")}} Objekt zurück, was es Ihnen ermöglicht, Aufrufe anderer Promise-Methoden zu [verketteten](/de/docs/Web/JavaScript/Guide/Using_promises#chaining). Es ist eine Abkürzung für {{jsxref("Promise/then", "then(undefined, onRejected)")}}.

{{InteractiveExample("JavaScript Demo: Promise.prototype.catch()")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  throw new Error("Uh-oh!");
});

promise1.catch((error) => {
  console.error(error);
});
// Expected output: Error: Uh-oh!
```

## Syntax

```js-nolint
promiseInstance.catch(onRejected)
```

### Parameter

- `onRejected`
  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise abgelehnt wird. Ihr Rückgabewert wird der Erfüllungswert des von `catch()` zurückgegebenen Promises. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `reason`
      - : Der Wert, mit dem das Promise abgelehnt wurde.

### Rückgabewert

Gibt ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer ausstehend, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen Promises. Wenn `onRejected` aufgerufen wird, wird das zurückgegebene Promise basierend auf dem Rückgabewert dieses Aufrufs aufgelöst oder mit dem geworfenen Fehler aus diesem Aufruf abgelehnt. Wenn das aktuelle Promise erfüllt wird, wird `onRejected` nicht aufgerufen und das zurückgegebene Promise wird mit demselben Wert erfüllt.

## Beschreibung

Die `catch`-Methode wird für die Fehlerbehandlung in der Promise-Komposition verwendet. Da es ein {{jsxref("Promise")}} zurückgibt, [kann es verkettet werden](/de/docs/Web/JavaScript/Guide/Using_promises#chaining_after_a_catch) auf die gleiche Weise wie seine Schwester-Methode {{jsxref("Promise/then", "then()")}}.

Wenn ein Promise abgelehnt wird und es keine Ablehnungshandler zum Aufrufen gibt (ein Handler kann über eines von {{jsxref("Promise/then", "then()")}}, `catch()`, oder {{jsxref("Promise/finally", "finally()")}} angehängt werden), dann wird das Ablehnungsereignis vom Host angezeigt. Im Browser führt dies zu einem [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) Ereignis. Wenn ein Handler an ein abgelehntes Promise angehängt wird, dessen Ablehnung bereits ein unbehandeltes Ablehnungsereignis verursacht hat, wird ein weiteres [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) Ereignis ausgelöst.

`catch()` ruft intern `then()` auf dem Objekt auf, auf dem es aufgerufen wurde, und übergibt `undefined` und `onRejected` als Argumente. Der Wert dieses Aufrufs wird direkt zurückgegeben. Dies ist beobachtbar, wenn Sie die Methoden umschließen.

```js
// overriding original Promise.prototype.then/catch just to add some logs
((Promise) => {
  const originalThen = Promise.prototype.then;
  const originalCatch = Promise.prototype.catch;

  Promise.prototype.then = function (...args) {
    console.log("Called .then on %o with arguments: %o", this, args);
    return originalThen.apply(this, args);
  };
  Promise.prototype.catch = function (...args) {
    console.error("Called .catch on %o with arguments: %o", this, args);
    return originalCatch.apply(this, args);
  };
})(Promise);

// calling catch on an already resolved promise
Promise.resolve().catch(function XXX() {});

// Logs:
// Called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// Called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]
```

Das bedeutet, dass das Übergeben von `undefined` immer noch dazu führt, dass das zurückgegebene Promise abgelehnt wird, und Sie müssen eine Funktion übergeben, um zu verhindern, dass das endgültige Promise abgelehnt wird.

Da `catch()` einfach `then()` aufruft, unterstützt es Subclassing.

> [!NOTE]
> Die unten stehenden Beispiele werfen Instanzen von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Wie bei synchronen [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw) Anweisungen wird dies als gute Praxis angesehen; andernfalls müsste der Teil, der das Abfangen durchführt, Überprüfungen vornehmen, um zu sehen, ob das Argument ein String oder ein Fehler war, und Sie könnten wertvolle Informationen wie Stacktraces verlieren.

## Beispiele

### Verwenden und Verkettung der catch() Methode

```js
const p1 = new Promise((resolve, reject) => {
  resolve("Success");
});

p1.then((value) => {
  console.log(value); // "Success!"
  throw new Error("oh, no!");
})
  .catch((e) => {
    console.error(e.message); // "oh, no!"
  })
  .then(
    () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
    () => console.log("Not fired due to the catch"),
  );

// The following behaves the same as above
p1.then((value) => {
  console.log(value); // "Success!"
  return Promise.reject(new Error("oh, no!"));
})
  .catch((e) => {
    console.error(e); // Error: oh, no!
  })
  .then(
    () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
    () => console.log("Not fired due to the catch"),
  );
```

### Falle, wenn Fehler geworfen werden

Ein Fehlerwurf wird die `catch()`-Methode meistens aufrufen:

```js
const p1 = new Promise((resolve, reject) => {
  throw new Error("Uh-oh!");
});

p1.catch((e) => {
  console.error(e); // "Uh-oh!"
});
```

Fehler, die innerhalb von asynchronen Funktionen geworfen werden, verhalten sich wie unbehandelte Fehler:

```js
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Uncaught Exception!");
  }, 1000);
});

p2.catch((e) => {
  console.error(e); // This is never called
});
```

Fehler, die nach dem Aufrufen von `resolve` geworfen werden, werden stillschweigend behandelt:

```js
const p3 = new Promise((resolve, reject) => {
  resolve();
  throw new Error("Silenced Exception!");
});

p3.catch((e) => {
  console.error(e); // This is never called
});
```

### catch() wird nicht aufgerufen, wenn das Promise erfüllt wird

```js
// Create a promise which would not call onReject
const p1 = Promise.resolve("calling next");

const p2 = p1.catch((reason) => {
  // This is never called
  console.error("catch p1!");
  console.error(reason);
});

p2.then(
  (value) => {
    console.log("next promise's onFulfilled");
    console.log(value); // calling next
  },
  (reason) => {
    console.log("next promise's onRejected");
    console.log(reason);
  },
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.finally()")}}
