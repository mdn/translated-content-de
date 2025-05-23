---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{JSRef}}

Die statische Methode **`Promise.race()`** nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird in dem Zustand des ersten Promise berücksichtigt, das sich erfüllt.

{{InteractiveExample("JavaScript Demo: Promise.race()", "taller")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"
```

## Syntax

```js-nolint
Promise.race(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises.

### Rückgabewert

Ein {{jsxref("Promise")}}, das **asynchron den Zustand** des ersten Promise im `iterable`, das sich erfüllt, übernimmt. Mit anderen Worten, es wird erfüllt, wenn das erste Promise, das sich erfüllt, auch erfüllt ist, und abgelehnt, wenn das erste Promise, das sich erfüllt, abgelehnt wird. Das zurückgegebene Promise bleibt für immer ausstehend, wenn das übergebene `iterable` leer ist. Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (anstatt synchron) erfüllt.

## Beschreibung

Die Methode `Promise.race()` ist eine der Methoden zur [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie ist nützlich, wenn Sie die erste asynchrone Aufgabe abschließen möchten, ohne sich um deren endgültigen Zustand zu kümmern (d.h. sie kann entweder erfolgreich sein oder fehlschlagen).

Wenn das iterierbare Objekt einen oder mehrere Nicht-Promise-Werte und/oder ein bereits erfülltes Promise enthält, wird `Promise.race()` auf den ersten dieser Werte festgelegt, der im iterierbaren Objekt gefunden wird.

## Beispiele

### Verwendung von Promise.race()

Dieses Beispiel zeigt, wie `Promise.race()` verwendet werden kann, um mehrere Timer, die mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) implementiert sind, zu starten. Der Timer mit der kürzesten Zeit gewinnt immer das Rennen und wird zum Zustand des resultierenden Promises.

```js
function sleep(time, value, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfill") {
        resolve(value);
      } else {
        reject(new Error(value));
      }
    }, time);
  });
}

const p1 = sleep(500, "one", "fulfill");
const p2 = sleep(100, "two", "fulfill");

Promise.race([p1, p2]).then((value) => {
  console.log(value); // "two"
  // Both fulfill, but p2 is faster
});

const p3 = sleep(100, "three", "fulfill");
const p4 = sleep(500, "four", "reject");

Promise.race([p3, p4]).then(
  (value) => {
    console.log(value); // "three"
    // p3 is faster, so it fulfills
  },
  (error) => {
    // Not called
  },
);

const p5 = sleep(500, "five", "fulfill");
const p6 = sleep(100, "six", "reject");

Promise.race([p5, p6]).then(
  (value) => {
    // Not called
  },
  (error) => {
    console.error(error.message); // "six"
    // p6 is faster, so it rejects
  },
);
```

### Asynchronität von Promise.race

Das folgende Beispiel demonstriert die Asynchronität von `Promise.race`. Im Gegensatz zu anderen Promise-Konkurrenzmethoden ist `Promise.race` immer asynchron: es wird nie synchron erfüllt, sogar wenn das `iterable` leer ist.

```js
// Passing an array of promises that are already resolved,
// to trigger Promise.race as soon as possible
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.race(resolvedPromisesArray);
// Immediately logging the value of p
console.log(p);

// Using setTimeout, we can execute code after the stack is empty
setTimeout(() => {
  console.log("the stack is now empty");
  console.log(p);
});

// Logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 33 }
```

Ein leeres iterierbares Objekt führt dazu, dass das zurückgegebene Promise für immer ausstehend bleibt:

```js
const foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(() => {
  console.log("the stack is now empty");
  console.log(foreverPendingPromise);
});

// Logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "pending" }
```

Wenn das iterierbare Objekt einen oder mehrere Nicht-Promise-Werte und/oder ein bereits erfülltes Promise enthält, wird `Promise.race` auf den ersten dieser Werte festgelegt, der im Array gefunden wird:

```js
const foreverPendingPromise = Promise.race([]);
const alreadyFulfilledProm = Promise.resolve(100);

const arr = [foreverPendingPromise, alreadyFulfilledProm, "non-Promise value"];
const arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(100)];
const p = Promise.race(arr);
const p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("the stack is now empty");
  console.log(p);
  console.log(p2);
});

// Logs, in order:
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 100 }
// Promise { <state>: "fulfilled", <value>: "non-Promise value" }
```

### Verwendung von Promise.race() zur Implementierung eines Anfragezeitlimits

Sie können eine potenziell lang andauernde Anfrage mit einem Timer, der abgelehnt wird, verknüpfen, sodass, wenn das Zeitlimit abläuft, das resultierende Promise automatisch abgelehnt wird.

```js
const data = Promise.race([
  fetch("/api"),
  new Promise((resolve, reject) => {
    // Reject after 5 seconds
    setTimeout(() => reject(new Error("Request timed out")), 5000);
  }),
])
  .then((res) => res.json())
  .catch((err) => displayError(err));
```

Wenn das `data` Promise erfüllt wird, enthält es die von `/api` abgerufenen Daten; andernfalls wird es abgelehnt, wenn `fetch` 5 Sekunden lang ausstehend bleibt und das Rennen gegen den `setTimeout` Timer verliert.

### Verwendung von Promise.race() zur Erkennung des Status eines Promises

Weil `Promise.race()` sich auf das erste nicht ausstehende Promise im iterierbaren Objekt festlegt, können wir den Status eines Promises überprüfen, einschließlich ob es ausstehend ist. Dieses Beispiel wurde von [`promise-status-async`](https://github.com/kudla/promise-status-async/blob/master/lib/promiseState.js) adaptiert.

```js
function promiseState(promise) {
  const pendingState = { status: "pending" };

  return Promise.race([promise, pendingState]).then(
    (value) =>
      value === pendingState ? value : { status: "fulfilled", value },
    (reason) => ({ status: "rejected", reason }),
  );
}
```

In dieser Funktion, wenn `promise` ausstehend ist, wird der zweite Wert, `pendingState`, der ein Nicht-Promise ist, das Ergebnis des Rennens; andernfalls, wenn `promise` bereits erfüllt ist, können wir seinen Zustand durch die `onFulfilled` und `onRejected` Handler kennen. Zum Beispiel:

```js
const p1 = new Promise((res) => setTimeout(() => res(100), 100));
const p2 = new Promise((res) => setTimeout(() => res(200), 200));
const p3 = new Promise((res, rej) =>
  setTimeout(() => rej(new Error("failed")), 100),
);

async function getStates() {
  console.log(await promiseState(p1));
  console.log(await promiseState(p2));
  console.log(await promiseState(p3));
}

console.log("Immediately after initiation:");
getStates();
setTimeout(() => {
  console.log("After waiting for 100ms:");
  getStates();
}, 100);

// Logs:
// Immediately after initiation:
// { status: 'pending' }
// { status: 'pending' }
// { status: 'pending' }
// After waiting for 100ms:
// { status: 'fulfilled', value: 100 }
// { status: 'pending' }
// { status: 'rejected', reason: Error: failed }
```

> [!NOTE]
> Die Funktion `promiseState` wird immer noch asynchron ausgeführt, da es keine Möglichkeit gibt, den Wert eines Promises synchron (d.h. ohne `then()` oder `await`) zu erhalten, selbst wenn es bereits erfüllt ist. Jedoch erfüllt `promiseState()` immer innerhalb eines Ticks und wartet nie tatsächlich auf die Erfüllung irgendeines Promises.

### Vergleich mit Promise.any()

`Promise.race` nimmt das erste erfüllte oder abgelehnte {{jsxref("Promise")}}.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log("succeeded with value:", value);
  })
  .catch((reason) => {
    // Only promise1 is fulfilled, but promise2 is faster
    console.error("failed with reason:", reason);
  });
// failed with reason: two
```

{{jsxref("Promise.any")}} nimmt das erste erfüllte {{jsxref("Promise")}}.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.any([promise1, promise2])
  .then((value) => {
    // Only promise1 is fulfilled, even though promise2 settled sooner
    console.log("succeeded with value:", value);
  })
  .catch((reason) => {
    console.error("failed with reason:", reason);
  });
// succeeded with value: one
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.any()")}}
