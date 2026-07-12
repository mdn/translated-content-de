---
title: Promise.race()
short-title: race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
l10n:
  sourceCommit: b4239bf3b36fea3f76e8d64bf362ef18bfa652b0
---

Die statische Methode **`Promise.race()`** nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird mit dem endgültigen Zustand des ersten Promises, das sich auflöst, abgeschlossen.

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

Ein {{jsxref("Promise")}}, das sich **asynchron** mit dem endgültigen Zustand des ersten Promises im `iterable` auflöst. Mit anderen Worten, es erfüllt sich, wenn das erste Promise, das sich auflöst, erfüllt wird, und es schlägt fehl, wenn das erste Promise, das sich auflöst, abgelehnt wird. Das zurückgegebene Promise bleibt für immer ausstehend, wenn das übergebene `iterable` leer ist. Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise trotzdem asynchron (anstatt synchron) aufgelöst.

## Beschreibung

Die Methode `Promise.race()` gehört zu den Methoden der [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie ist nützlich, wenn Sie möchten, dass die erste asynchrone Aufgabe abgeschlossen wird, aber nicht an ihrem endgültigen Zustand interessiert sind (d.h. sie kann entweder erfolgreich sein oder fehlschlagen).

Enthält das iterable einen oder mehrere Nicht-Promise-Werte und/oder ein bereits aufgelöstes Promise, wird `Promise.race()` auf den ersten dieser Werte im iterable festgelegt.

Wie andere Promise-Kombinatoren markiert `Promise.race()` alle Promises sofort als "bearbeitet", wenn es aufgerufen wird (indem ihre `.then()`-Methoden aufgerufen werden). Nachfolgende Ablehnungen nach der ersten Auflösung werden ignoriert und lösen keine `unhandledrejection`-Ereignisse aus.

## Beispiele

### Verwendung von Promise.race()

Dieses Beispiel zeigt, wie `Promise.race()` verwendet werden kann, um mehrere Timer zu vergleichen, die mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) implementiert wurden. Der Timer mit der kürzesten Zeit gewinnt immer das Rennen und wird zum Status des resultierenden Promises.

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

Dieses folgende Beispiel zeigt die Asynchronität von `Promise.race`. Im Gegensatz zu anderen Promise-Konkurrenzmethoden ist `Promise.race` immer asynchron: Es wird nie synchron aufgelöst, selbst wenn das `iterable` leer ist.

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

Ein leeres iterable führt dazu, dass das zurückgegebene Promise für immer ausstehend bleibt:

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

Enthält das iterable einen oder mehrere Nicht-Promise-Werte und/oder ein bereits aufgelöstes Promise, wird `Promise.race` auf den ersten dieser Werte im Array festgelegt:

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

Sie können eine potenziell langanhaltende Anfrage mit einem Timer vergleichen, der abbricht, sodass das resultierende Promise automatisch abgelehnt wird, wenn das Zeitlimit abgelaufen ist.

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

Wenn das `data`-Promise erfüllt wird, enthält es die von `/api` abgerufenen Daten; andernfalls wird es abgelehnt, wenn `fetch` für 5 Sekunden ausstehend bleibt und das Rennen mit dem `setTimeout`-Timer verliert.

Beachten Sie, dass es nicht notwendig ist, das Timeout-Ablehnen explizit aufzuräumen (z.B. das Timeout zu löschen), falls das `fetch`-Promise zuerst abgeschlossen wird. `Promise.race` erfasst und verwirft die Auflösungsergebnisse der verlierenden Promises, sodass die Ablehnung "`Request timed out`" nicht als unbehandelt nach oben steigt.

### Verwendung von Promise.race() zur Erkennung des Status eines Promises

Da `Promise.race()` auf das erste nicht ausstehende Promise im iterable reagiert, können wir den Zustand eines Promises überprüfen, einschließlich, ob es ausstehend ist. Dieses Beispiel ist adaptiert von [`promise-status-async`](https://github.com/kudla/promise-status-async/blob/master/lib/promiseState.js).

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

In dieser Funktion, wenn `promise` ausstehend ist, wird der zweite Wert, `pendingState`, der ein Nicht-Promise ist, zum Ergebnis des Rennens; andernfalls, wenn `promise` bereits aufgelöst ist, können wir seinen Zustand durch die `onFulfilled`- und `onRejected`-Handler erkennen. Zum Beispiel:

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
> Die Funktion `promiseState` läuft immer noch asynchron, da es keine Möglichkeit gibt, den Wert eines Promises synchron zu erhalten (d.h. ohne `then()` oder `await`), selbst wenn es bereits aufgelöst ist. Allerdings erfüllt sich `promiseState()` immer innerhalb eines Ticks und wartet nie wirklich auf die Auflösung eines Promises.

### Vergleich mit Promise.any()

`Promise.race` wählt das erste aufgelöste {{jsxref("Promise")}}.

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

{{jsxref("Promise.any")}} wählt das erste erfüllte {{jsxref("Promise")}}.

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
