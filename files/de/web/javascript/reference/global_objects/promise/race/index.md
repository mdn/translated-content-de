---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Promise.race()`** nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise erfüllt sich mit dem endgültigen Zustand des ersten Promise, das sich erfüllt.

{{EmbedInteractiveExample("pages/js/promise-race.html", "taller")}}

## Syntax

```js-nolint
Promise.race(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich **asynchron erfüllt** mit dem endgültigen Zustand des ersten Promise im `iterable`, das sich erfüllt. Mit anderen Worten, es erfüllt sich, wenn das erste Promise, das sich erfüllt, erfüllt ist, und es schlägt fehl, wenn das erste Promise, das sich erfüllt, fehlschlägt. Das zurückgegebene Promise bleibt für immer ausstehend, wenn das übergebene `iterable` leer ist. Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise immer noch asynchron (statt synchron) erfüllt.

## Beschreibung

Die Methode `Promise.race()` ist eine der [Promise-Konkurrenz-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie ist nützlich, wenn Sie die erste asynchrone Aufgabe abschließen möchten, aber sich nicht um deren endgültigen Zustand kümmern (d.h. sie kann entweder erfolgreich sein oder fehlschlagen).

Wenn das iterable ein oder mehrere nicht-Promise-Werte und/oder bereits erfüllte Promises enthält, wird `Promise.race()` auf den ersten dieser Werte eingestellt, der im iterable gefunden wird.

## Beispiele

### Verwendung von Promise.race()

Dieses Beispiel zeigt, wie `Promise.race()` verwendet werden kann, um mehrere Timer zu konkurrieren, die mit [`setTimeout()`](/de/docs/Web/API/setTimeout) implementiert sind. Der Timer mit der kürzesten Zeit gewinnt immer das Rennen und wird zum Zustand des resultierenden Promises.

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
  // Beide erfüllen sich, aber p2 ist schneller
});

const p3 = sleep(100, "three", "fulfill");
const p4 = sleep(500, "four", "reject");

Promise.race([p3, p4]).then(
  (value) => {
    console.log(value); // "three"
    // p3 ist schneller, also erfüllt es sich
  },
  (error) => {
    // Wird nicht aufgerufen
  },
);

const p5 = sleep(500, "five", "fulfill");
const p6 = sleep(100, "six", "reject");

Promise.race([p5, p6]).then(
  (value) => {
    // Wird nicht aufgerufen
  },
  (error) => {
    console.error(error.message); // "six"
    // p6 ist schneller, also schlägt es fehl
  },
);
```

### Asynchronität von Promise.race

Dieses folgende Beispiel demonstriert die Asynchronität von `Promise.race`. Anders als andere Methoden der Promise-Konkurrenz ist `Promise.race` immer asynchron: Es wird niemals synchron erfüllt, selbst wenn das `iterable` leer ist.

```js
// Übergabe eines Arrays von Promises, die bereits erfüllt sind,
// um Promise.race so schnell wie möglich auszulösen
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.race(resolvedPromisesArray);
// Unmittelbares Protokollieren des Werts von p
console.log(p);

// Mit setTimeout können wir Code ausführen, nachdem der Stapel leer ist
setTimeout(() => {
  console.log("Der Stapel ist jetzt leer");
  console.log(p);
});

// Logs, der Reihe nach:
// Promise { <state>: "pending" }
// Der Stapel ist jetzt leer
// Promise { <state>: "fulfilled", <value>: 33 }
```

Ein leeres iterable führt dazu, dass das zurückgegebene Promise für immer aussteht:

```js
const foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(() => {
  console.log("Der Stapel ist jetzt leer");
  console.log(foreverPendingPromise);
});

// Logs, der Reihe nach:
// Promise { <state>: "pending" }
// Der Stapel ist jetzt leer
// Promise { <state>: "pending" }
```

Wenn das iterable einen oder mehrere nicht-Promise-Werte und/oder ein bereits erfülltes Promise enthält, wird `Promise.race` auf den ersten dieser Werte eingestellt, der im Array gefunden wird:

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
  console.log("Der Stapel ist jetzt leer");
  console.log(p);
  console.log(p2);
});

// Logs, der Reihe nach:
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// Der Stapel ist jetzt leer
// Promise { <state>: "fulfilled", <value>: 100 }
// Promise { <state>: "fulfilled", <value>: "non-Promise value" }
```

### Verwendung von Promise.race() zur Implementierung eines Anfrage-Timeouts

Sie können eine potenziell langwierige Anfrage mit einem Timer konkurrieren lassen, der abbricht, damit das resultierende Promise automatisch abbricht, wenn das Zeitlimit erreicht ist.

```js
const data = Promise.race([
  fetch("/api"),
  new Promise((resolve, reject) => {
    // Abbrechen nach 5 Sekunden
    setTimeout(() => reject(new Error("Anfrage abgelaufen")), 5000);
  }),
])
  .then((res) => res.json())
  .catch((err) => displayError(err));
```

Wenn das `data`-Promise sich erfüllt, wird es die Daten enthalten, die von `/api` abgerufen wurden; andernfalls wird es abgelehnt, wenn `fetch` 5 Sekunden lang ausstehend bleibt und das Rennen mit dem `setTimeout`-Timer verliert.

### Verwendung von Promise.race() zur Erkennung des Status eines Promises

Da `Promise.race()` auf das erste nicht ausstehende Promise im iterable auflöst, können wir den Status eines Promises überprüfen, einschließlich ob es aussteht. Dieses Beispiel ist aus [`promise-status-async`](https://github.com/kudla/promise-status-async/blob/master/lib/promiseState.js) angepasst.

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

In dieser Funktion, wenn `promise` aussteht, wird der zweite Wert, `pendingState`, welches kein Promise ist, zum Ergebnis des Rennens; andernfalls, wenn `promise` bereits erfüllt ist, können wir seinen Zustand über die Handler `onFulfilled` und `onRejected` erkennen. Zum Beispiel:

```js
const p1 = new Promise((res) => setTimeout(() => res(100), 100));
const p2 = new Promise((res) => setTimeout(() => res(200), 200));
const p3 = new Promise((res, rej) => setTimeout(() => rej(300), 100));

async function getStates() {
  console.log(await promiseState(p1));
  console.log(await promiseState(p2));
  console.log(await promiseState(p3));
}

console.log("Unmittelbar nach Beginn:");
getStates();
setTimeout(() => {
  console.log("Nach 100ms Warten:");
  getStates();
}, 100);

// Logs:
// Unmittelbar nach Beginn:
// { status: 'pending' }
// { status: 'pending' }
// { status: 'pending' }
// Nach 100ms Warten:
// { status: 'fulfilled', value: 100 }
// { status: 'pending' }
// { status: 'rejected', reason: 300 }
```

> [!NOTE]
> Die Funktion `promiseState` läuft weiterhin asynchron, da es keine Möglichkeit gibt, den Wert eines Promises synchron zu erhalten (d.h. ohne `then()` oder `await`), selbst wenn es bereits erfüllt ist. `promiseState()` wird jedoch immer innerhalb eines Ticks erfüllt und wartet nie tatsächlich auf die Erfüllung eines Promises.

### Vergleich mit Promise.any()

`Promise.race` nimmt das erste erfüllte {{jsxref("Promise")}}.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log("erfolgreich mit Wert:", value);
  })
  .catch((reason) => {
    // Nur promise1 ist erfüllt, aber promise2 ist schneller
    console.error("fehlgeschlagen mit Grund:", reason);
  });
// fehlgeschlagen mit Grund: two
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
    // Nur promise1 ist erfüllt, obwohl promise2 schneller erfüllt wurde
    console.log("erfolgreich mit Wert:", value);
  })
  .catch((reason) => {
    console.error("fehlgeschlagen mit Grund:", reason);
  });
// erfolgreich mit Wert: one
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
