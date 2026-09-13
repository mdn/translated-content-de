---
title: Promise.race()
short-title: race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
l10n:
  sourceCommit: 9bda33365e40b6c609fa5190a0af9b5dc6438cf0
---

Die statische Methode **`Promise.race()`** nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird mit dem endgültigen Zustand des ersten Promise, das sich auflöst, abgeschlossen.

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
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie z. B. ein {{jsxref("Array")}}) von Promises. Diese Werte werden [erwartet](/de/docs/Web/JavaScript/Reference/Operators/await), sodass andere [thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ebenfalls aufgelöst werden, während Nicht-thenables unverändert zurückgegeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das **asynchron abgeschlossen** wird mit dem endgültigen Zustand des ersten Promise im `iterable`, das sich auflöst. Mit anderen Worten, es erfüllt sich, wenn das erste Promise, das sich auflöst, erfüllt ist, und schlägt fehl, wenn das erste Promise, das sich auflöst, fehlgeschlagen ist. Das zurückgegebene Promise bleibt für immer ausstehend, wenn das übergebene `iterable` leer ist. Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (statt synchron) abgeschlossen.

## Beschreibung

Die Methode `Promise.race()` ist eine der Methoden für [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie ist nützlich, wenn Sie die erste asynchrone Aufgabe abschließen möchten, jedoch nicht an deren endgültigem Zustand interessiert sind (d.h. sie kann entweder erfolgreich sein oder fehlschlagen).

Wenn das iterierbare Objekt einen oder mehrere Nicht-Promise-Werte und/oder ein bereits abgeschlossenes Promise enthält, wird `Promise.race()` sich auf den ersten dieser Werte im iterierbaren Objekt einstellen.

Wie andere Promise-Kombinatoren markiert `Promise.race()` sofort alle Promises als "behandelt", wenn sie aufgerufen wird (indem ihre `.then()`-Methoden aufgerufen werden). Nachfolgende Ablehnungen nach der ersten Erfüllung werden ignoriert und lösen keine `unhandledrejection`-Ereignisse aus.

Das Abschließen des zurückgegebenen Promise storniert nicht die verlierenden Operationen oder kündigt die an ihre Promises angehängten Handler ab. Wenn Sie wiederholt ein langlebiges ausstehendes Promise gegen kurzfristige Promises antreten lassen, können sich Handler an dem ausstehenden Promise ansammeln, auch nachdem jedes Rennen abgeschlossen ist.

## Beispiele

### Verwendung von Promise.race()

Dieses Beispiel zeigt, wie `Promise.race()` verwendet werden kann, um mehrere Timer zu vergleichen, die mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) implementiert sind. Der Timer mit der kürzesten Zeit gewinnt immer das Rennen und wird zum Zustand des resultierenden Promises.

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

Das folgende Beispiel demonstriert die Asynchronität von `Promise.race`. Im Gegensatz zu anderen Methoden der Promise-Konkurrenz ist `Promise.race` immer asynchron: Es wird nie synchron abgeschlossen, selbst wenn das `iterable` leer ist.

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

Wenn das iterierbare Objekt einen oder mehrere Nicht-Promise-Werte und/oder ein bereits abgeschlossenes Promise enthält, wird `Promise.race` auf den ersten dieser Werte im Array eingestellt:

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

### Verwendung von Promise.race() zur Implementierung einer Anforderungszeitüberschreitung

Sie können eine möglicherweise lang anhaltende Anforderung mit einem Timer, der fehlschlägt, antreten lassen, sodass das resultierende Promise automatisch abgelehnt wird, wenn das Zeitlimit abgelaufen ist.

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

Wenn das `data`-Promise erfüllt wird, enthält es die von `/api` abgerufenen Daten. `Promise.race` wird die Erfüllungsergebnisse der verlierenden Promises erfassen und verwerfen, sodass die Ablehnung "Anforderung abgelaufen" nicht als unbehandelt weitergegeben wird. Andernfalls, wenn `fetch` für 5 Sekunden ausstehend bleibt und das Rennen mit dem `setTimeout`-Timer verliert, wird das endgültige Promise abgelehnt.

Das Abschließen eines Promises bedeutet nicht automatisch die Stornierung des anderen; das Ergebnis des anderen wird einfach ignoriert. Dies stellt in diesem kleinen Beispiel keine Probleme dar, hält jedoch Ressourcen wie Netzwerkverbindungen und Timer länger als nötig am Leben. Um Ressourcen frühzeitig freizugeben, brechen Sie den Fetch ab, wenn das Timeout gewinnt, oder löschen Sie das Timeout, wenn der Fetch gewinnt. Wann immer möglich - einschließlich Fetch - bevorzugen Sie die Verwendung der [`AbortController`](/de/docs/Web/API/AbortController) API.

### Verwendung von Promise.race() zur Erkennung des Status eines Promises

Da `Promise.race()` sich auf das erste nicht ausstehende Promise im iterierbaren Objekt einstellt, können wir den Status eines Promises prüfen, einschließlich dessen, ob es ausstehend ist. Dieses Beispiel ist aus [`promise-status-async`](https://github.com/kudla/promise-status-async/blob/master/lib/promiseState.js) adaptiert.

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

In dieser Funktion, wenn `promise` ausstehend ist, wird der zweite Wert, `pendingState`, der ein Nicht-Promise ist, das Ergebnis des Rennens; andernfalls, wenn `promise` bereits abgeschlossen ist, können wir seinen Status durch die `onFulfilled`- und `onRejected`-Handler kennen. Zum Beispiel:

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
> Die Funktion `promiseState` läuft weiterhin asynchron ab, da es keine Möglichkeit gibt, den Wert eines Promises synchron (d.h. ohne `then()` oder `await`) zu erhalten, selbst wenn es bereits abgeschlossen ist. `promiseState()` erfüllt sich jedoch immer innerhalb eines Ticks und wartet niemals tatsächlich auf die Erfüllung eines Promises.

### Vergleich mit Promise.any()

`Promise.race` nimmt das erste erfüllte {{jsxref("Promise")}} an.

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

{{jsxref("Promise.any")}} nimmt das erste erfüllte {{jsxref("Promise")}} an.

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
