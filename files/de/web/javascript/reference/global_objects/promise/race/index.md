---
title: Promise.race()
short-title: race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Promise.race()`** nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird mit dem endgültigen Zustand des ersten Promises abgeschlossen, das sich erledigt.

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

Ein {{jsxref("Promise")}}, das **asynchron erledigt** wird mit dem endgültigen Zustand des ersten Promises im `iterable`, das sich erledigt. Mit anderen Worten, es wird erfüllt, wenn das erste Promise, das sich erledigt, erfüllt ist, und es wird abgelehnt, wenn das erste Promise, das sich erledigt, abgelehnt wird. Das zurückgegebene Promise bleibt für immer schwebend, wenn das übergebene `iterable` leer ist. Wenn das übergebene `iterable` nicht leer ist, aber keine schwebenden Promises enthält, wird das zurückgegebene Promise immer noch asynchron (statt synchron) erledigt.

## Beschreibung

Die Methode `Promise.race()` ist eine der [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency)-Methoden. Sie ist nützlich, wenn Sie die erste asynchrone Aufgabe, die abgeschlossen wird, verwenden möchten, aber nicht interessiert sind am endgültigen Zustand (d.h. sie kann entweder erfolgreich sein oder fehlschlagen).

Wenn das iterierbare Objekt einen oder mehrere Nicht-Promise-Werte und/oder ein bereits abgeschlossenes Promise enthält, dann wird `Promise.race()` sich auf den ersten dieser im `iterable` gefundenen Werte einlassen.

## Beispiele

### Verwendung von Promise.race()

Dieses Beispiel zeigt, wie `Promise.race()` genutzt werden kann, um mehrere Timer zu gewinnen, die mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) implementiert sind. Der Timer mit der kürzesten Zeit gewinnt immer das Rennen und bestimmt den Zustand des resultierenden Promises.

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

Dieses folgende Beispiel demonstriert die Asynchronität von `Promise.race`. Im Gegensatz zu anderen Methoden der Promise-Konkurrenz ist `Promise.race` immer asynchron: es wird niemals synchron erledigt, selbst wenn das `iterable` leer ist.

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

Ein leeres iterierbares Objekt führt dazu, dass das zurückgegebene Promise für immer schwebend bleibt:

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

Wenn das iterierbare Objekt einen oder mehrere Nicht-Promise-Werte und/oder ein bereits abgeschlossenes Promise enthält, dann wird `Promise.race` sich auf den ersten dieser im Array gefundenen Werte einlassen:

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

### Verwendung von Promise.race() zur Implementierung eines Anforderungstimeouts

Sie können eine potenziell langwierige Anfrage mit einem Timer verbinden, der abgelehnt wird, sodass das resultierende Promise automatisch abgelehnt wird, wenn das Zeitlimit erreicht ist.

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

Wenn das `data`-Promise erfüllt wird, enthält es die von `/api` abgerufenen Daten; andernfalls wird es abgelehnt, wenn `fetch` 5 Sekunden lang schwebend bleibt und das Rennen mit dem `setTimeout`-Timer verliert.

### Verwendung von Promise.race() zur Erkennung des Status eines Promises

Da `Promise.race()` sich auf das erste nicht schwebende Promise im iterierbaren Objekt einlässt, können wir den Status eines Promises überprüfen, einschließlich ob es schwebend ist. Dieses Beispiel ist angepasst von [`promise-status-async`](https://github.com/kudla/promise-status-async/blob/master/lib/promiseState.js).

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

In dieser Funktion, wenn `promise` schwebend ist, wird der zweite Wert, `pendingState`, welcher ein Nicht-Promise ist, zum Ergebnis des Rennens; andernfalls, wenn `promise` bereits erledigt ist, können wir seinen Status über die `onFulfilled` und `onRejected` Handler kennen. Zum Beispiel:

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
> Die Funktion `promiseState` läuft weiterhin asynchron, da es keine Möglichkeit gibt, den Wert eines Promises synchron zu erhalten (d.h. ohne `then()` oder `await`), selbst wenn es bereits erledigt ist. Allerdings wird `promiseState()` immer innerhalb eines Ticks erfüllt und wartet tatsächlich nie auf die Erledigung eines Promises.

### Vergleich mit Promise.any()

`Promise.race` nimmt das erste erledigte {{jsxref("Promise")}}.

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
