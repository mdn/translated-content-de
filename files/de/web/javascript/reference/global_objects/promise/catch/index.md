---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`catch()`**-Methode von {{jsxref("Promise")}}-Instanzen plant die Ausführung einer Funktion, wenn das `Promise`-Objekt abgelehnt wird. Sie gibt sofort ein weiteres {{jsxref("Promise")}}-Objekt zurück, sodass Sie Aufrufe an andere `Promise`-Methoden [verketteln](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) können. Sie ist eine Abkürzung für {{jsxref("Promise/then", "then(undefined, onRejected)")}}.

{{InteractiveExample("JavaScript Demo: Promise.catch()")}}

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
  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses `Promise`-Objekt abgelehnt wird. Der Rückgabewert dieser Funktion wird zum Erfüllungswert des von `catch()` zurückgegebenen `Promise`-Objekts. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `reason`
      - : Der Wert, mit dem das `Promise`-Objekt abgelehnt wurde.

### Rückgabewert

Gibt ein neues {{jsxref("Promise")}}-Objekt zurück. Dieses neue `Promise` ist immer schwebend, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen `Promise`. Wenn `onRejected` aufgerufen wird, wird das zurückgegebene `Promise` entsprechend dem Rückgabewert dieses Aufrufs aufgelöst oder mit dem von diesem Aufruf geworfenen Fehler abgelehnt. Wenn das aktuelle `Promise` erfüllt wird, wird `onRejected` nicht aufgerufen und das zurückgegebene `Promise` wird mit demselben Wert erfüllt.

## Beschreibung

Die Methode `catch` wird für die Fehlerbehandlung in der Promise-Zusammensetzung verwendet. Da sie ein {{jsxref("Promise")}} zurückgibt, [kann sie verkettet werden](/de/docs/Web/JavaScript/Guide/Using_promises#chaining_after_a_catch), genauso wie ihre Schwester-Methode {{jsxref("Promise/then", "then()")}}.

Wenn ein `Promise`-Objekt abgelehnt wird und es keine Ablehnungs-Handler gibt, die aufgerufen werden können (ein Handler kann über {{jsxref("Promise/then", "then()")}}, `catch()` oder {{jsxref("Promise/finally", "finally()")}} angehängt werden), wird das Ablehnungsereignis vom Host sichtbar gemacht. Im Browser resultiert dies in einem [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Ereignis. Wenn ein Handler an ein abgelehntes `Promise`-Objekt angehängt wird, dessen Ablehnung bereits ein "unhandled rejection"-Ereignis verursacht hat, wird ein weiteres [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)-Ereignis ausgelöst.

`catch()` ruft intern `then()` auf dem Objekt auf, auf dem es aufgerufen wurde, und übergibt `undefined` und `onRejected` als Argumente. Der Rückgabewert dieses Aufrufs wird direkt zurückgegeben. Dies ist erkennbar, wenn die Methoden gekapselt werden.

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

Dies bedeutet, dass das Übergeben von `undefined` dazu führt, dass das zurückgegebene `Promise` weiterhin abgelehnt wird, und Sie eine Funktion übergeben müssen, um zu verhindern, dass das endgültige `Promise` abgelehnt wird.

Da `catch()` nur `then()` aufruft, unterstützt es die Verwendung in Unterklassen.

> [!NOTE]
> Die untenstehenden Beispiele werfen Instanzen von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error). Wie bei synchronen [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisungen wird dies als gute Praxis angesehen; andernfalls müsste die fangende Komponente überprüfen, ob das Argument ein String oder ein Fehler war, und Sie könnten wertvolle Informationen wie Stack-Traces verlieren.

## Beispiele

### Verwendung und Verkettung der catch()-Methode

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
  return Promise.reject("oh, no!");
})
  .catch((e) => {
    console.error(e); // "oh, no!"
  })
  .then(
    () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
    () => console.log("Not fired due to the catch"),
  );
```

### Fallstricke beim Werfen von Fehlern

Das Werfen eines Fehlers wird die `catch()`-Methode meistens aufrufen:

```js
const p1 = new Promise((resolve, reject) => {
  throw new Error("Uh-oh!");
});

p1.catch((e) => {
  console.error(e); // "Uh-oh!"
});
```

Fehler, die innerhalb asynchroner Funktionen geworfen werden, verhalten sich wie nicht abgefangene Fehler:

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

Fehler, die nach dem Aufruf von `resolve` geworfen werden, werden unterdrückt:

```js
const p3 = new Promise((resolve, reject) => {
  resolve();
  throw new Error("Silenced Exception!");
});

p3.catch((e) => {
  console.error(e); // This is never called
});
```

### catch() wird nicht aufgerufen, wenn das Promise erfüllt ist

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
