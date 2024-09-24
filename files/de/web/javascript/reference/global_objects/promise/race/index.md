---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{JSRef}}

Die statische Methode **`Promise.race()`** nimmt ein iterierbares Objekt von Promises als Eingabe und gibt eine einzelne {{jsxref("Promise")}} zurück. Diese zurückgegebene Promise nimmt den endgültigen Zustand des ersten Promises an, das sich klärt.

{{EmbedInteractiveExample("pages/js/promise-race.html", "taller")}}

## Syntax

```js-nolint
Promise.race(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt (wie etwa ein {{jsxref("Array")}}) von Promises.

### Rückgabewert

Eine {{jsxref("Promise")}}, die **asynchron** den endgültigen Zustand des ersten Promises im `iterable` annimmt, das sich klärt. Mit anderen Worten: sie wird erfüllt, wenn das erste Promise erfüllt ist, und abgelehnt, wenn das erste Promise abgelehnt wird. Die zurückgegebene Promise bleibt für immer schwebend, wenn das übergebene `iterable` leer ist. Wenn das übergebene `iterable` nicht leer ist, aber keine schwebenden Promises enthält, wird die zurückgegebene Promise dennoch asynchron (statt synchron) festgelegt.

## Beschreibung

Die Methode `Promise.race()` ist eine der Methoden für die [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie ist nützlich, wenn Sie die erste asynchrone Aufgabe abschließen möchten, sich aber nicht um ihren endgültigen Zustand kümmern (d. h. sie kann entweder erfolgreich sein oder fehlschlagen).

Wenn das Iterable einen oder mehrere Nicht-Promise-Werte und/oder ein bereits geklärtes Promise enthält, wird `Promise.race()` auf den ersten dieser Werte, die im Iterable gefunden werden, festgelegt.

## Beispiele

### Verwendung von Promise.race()

Dieses Beispiel zeigt, wie `Promise.race()` verwendet werden kann, um mehrere Timer zu starten, die mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) implementiert wurden. Der Timer mit der kürzesten Zeit gewinnt immer das Rennen und wird zum Zustand der resultierenden Promise.

```js
function sleep(time, value, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfill") {
        return resolve(value);
      } else {
        return reject(new Error(value));
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

Dieses folgende Beispiel zeigt die Asynchronität von `Promise.race`. Im Gegensatz zu anderen Methoden der Promise-Konkurrenz ist `Promise.race` immer asynchron: Es wird nie synchron festgelegt, selbst wenn das `iterable` leer ist.

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

Ein leeres Iterable führt dazu, dass die zurückgegebene Promise für immer schwebend bleibt:

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

Wenn das Iterable einen oder mehrere Nicht-Promise-Werte und/oder ein bereits geklärtes Promise enthält, wird `Promise.race` auf den ersten dieser Werte festgelegt, die im Array gefunden werden:

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

### Verwendung von Promise.race() zur Implementierung eines Anforderungszeitlimits

Sie können eine potenziell lang andauernde Anfrage mit einem Timer, der zurückgewiesen wird, kombinieren, sodass die resultierende Promise automatisch zurückgewiesen wird, wenn das Zeitlimit überschritten wird.

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

Wenn die `data`-Promise erfüllt wird, enthält sie die von `/api` abgefragten Daten; andernfalls wird sie abgelehnt, wenn `fetch` für 5 Sekunden schwebend bleibt und das Rennen gegen den `setTimeout`-Timer verliert.

### Verwendung von Promise.race() zur Erkennung des Status einer Promise

Da `Promise.race()` die erste nicht schwebende Promise im Iterable löst, können wir den Zustand einer Promise prüfen, einschließlich ob sie schwebend ist. Dieses Beispiel ist adaptiert von [`promise-status-async`](https://github.com/kudla/promise-status-async/blob/master/lib/promiseState.js).

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

In dieser Funktion wird, wenn `promise` schwebt, der zweite Wert, `pendingState`, der ein Nicht-Promise ist, zum Ergebnis des Rennens; andernfalls, wenn `promise` bereits geklärt ist, können wir seinen Zustand durch die `onFulfilled`- und `onRejected`-Handler kennen. Zum Beispiel:

```js
const p1 = new Promise((res) => setTimeout(() => res(100), 100));
const p2 = new Promise((res) => setTimeout(() => res(200), 200));
const p3 = new Promise((res, rej) => setTimeout(() => rej(300), 100));

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
// { status: 'rejected', reason: 300 }
```

> [!NOTE]
> Die Funktion `promiseState` läuft weiterhin asynchron, da es keine Möglichkeit gibt, den Wert einer Promise synchron zu erhalten (d. h. ohne `then()` oder `await`), selbst wenn sie bereits geklärt ist. Jedoch erfüllt `promiseState()` immer innerhalb eines Ticks und wartet tatsächlich nie auf die Klärung einer Promise.

### Vergleich mit Promise.any()

`Promise.race` nimmt die erste gesettelte {{jsxref("Promise")}}.

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

{{jsxref("Promise.any")}} nimmt die erste erfüllte {{jsxref("Promise")}}.

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
