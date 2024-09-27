---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
l10n:
  sourceCommit: d0156d21ba35d916e70b13f2576324e31d8b686c
---

{{JSRef}}

Die statische Methode **`Promise.all()`** nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Promises der Eingabe erfüllt werden (einschließlich wenn ein leeres Iterable übergeben wird), mit einem Array der Erfüllungswerte. Es wird abgelehnt, wenn eines der Promises der Eingabe abgelehnt wird, mit diesem ersten Ablehnungsgrund.

{{EmbedInteractiveExample("pages/js/promise-all.html")}}

## Syntax

```js-nolint
Promise.all(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterables Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `iterable` leer ist.
- **Asynchron erfüllt** ist, wenn alle Promises im gegebenen `iterable` erfüllt sind. Der Erfüllungswert ist ein Array von Erfüllungswerten, in der Reihenfolge der übergebenen Promises, unabhängig von der Abschlussreihenfolge. Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise trotzdem asynchron (anstatt synchron) erfüllt.
- **Asynchron abgelehnt** wird, wenn eines der Promises im gegebenen `iterable` abgelehnt wird. Der Ablehnungsgrund ist der Ablehnungsgrund des ersten abgelehnten Promises.

## Beschreibung

Die Methode `Promise.all()` ist eine der Methoden für [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie kann nützlich sein, um die Ergebnisse mehrerer Promises zu aggregieren. Sie wird typischerweise verwendet, wenn mehrere verwandte asynchrone Aufgaben vorliegen, die der gesamte Code benötigt, um erfolgreich zu funktionieren — alle diese wollen wir erfüllen, bevor die Codeausführung fortgesetzt wird.

`Promise.all()` wird sofort abgelehnt, wenn **eins** der Eingabe-Promises abgelehnt wird. Im Vergleich dazu wartet das von {{jsxref("Promise.allSettled()")}} zurückgegebene Promise darauf, dass alle Eingabe-Promises abgeschlossen sind, unabhängig davon, ob eines abgelehnt wird oder nicht. Verwenden Sie `allSettled()`, wenn Sie das Endergebnis jedes Promises im Eingabe-Iterable benötigen.

## Beispiele

### Verwendung von Promise.all()

`Promise.all` wartet auf alle Erfüllungen (oder die erste Ablehnung).

```js
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
```

Wenn das `iterable` Nicht-Promise-Werte enthält, werden diese ignoriert, aber trotzdem in der zurückgegebenen Promise-Array-Wert gezählt (falls das Promise erfüllt wird):

```js
// All values are non-promises, so the returned promise gets fulfilled
const p = Promise.all([1, 2, 3]);
// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// One (and the only) input promise is rejected,
// so the returned promise gets rejected
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }
```

### Asynchronität oder Synchronität von Promise.all

Dieses folgende Beispiel demonstriert die Asynchronität von `Promise.all`, wenn ein nicht leeres `iterable` übergeben wird:

```js
// Passing an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);
// Immediately logging the value of p
console.log(p);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p);
});

// Logs, in order:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

Dasselbe geschieht, wenn `Promise.all` abgelehnt wird:

```js
const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p);
});

// Logs:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "rejected", <reason>: 44 }
```

`Promise.all` löst sich synchron auf, wenn und nur wenn das übergebene `iterable` leer ist:

```js
const p = Promise.all([]); // Will be immediately resolved
const p2 = Promise.all([1337, "hi"]); // Non-promise values are ignored, but the evaluation is done asynchronously
console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p2);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

### Verwendung von Promise.all() mit async-Funktionen

Innerhalb von [async-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) ist es sehr üblich, dass Code zu viele `await`-Anweisungen enthält. Zum Beispiel, gegeben die folgenden Funktionen:

```js
function promptForDishChoice() {
  return new Promise((resolve, reject) => {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
<form method="dialog">
  <p>What would you like to eat?</p>
  <select>
    <option value="pizza">Pizza</option>
    <option value="pasta">Pasta</option>
    <option value="salad">Salad</option>
  </select>
  <menu>
    <li><button value="cancel">Cancel</button></li>
    <li><button type="submit" value="ok">OK</button></li>
  </menu>
</form>
    `;
    dialog.addEventListener("close", () => {
      if (dialog.returnValue === "ok") {
        resolve(dialog.querySelector("select").value);
      } else {
        reject(new Error("User cancelled dialog"));
      }
    });
    document.body.appendChild(dialog);
    dialog.showModal();
  });
}

async function fetchPrices() {
  const response = await fetch("/prices");
  return await response.json();
}
```

Können Sie eine Funktion so schreiben:

```js example-bad
async function getPrice() {
  const choice = await promptForDishChoice();
  const prices = await fetchPrices();
  return prices[choice];
}
```

Beachten Sie jedoch, dass die Ausführung von `promptForDishChoice` und `fetchPrices` nicht voneinander abhängt. Während der Benutzer sein Gericht auswählt, können die Preise ohne Weiteres im Hintergrund abgerufen werden, aber im obigen Code bewirkt der [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator, dass die asynchrone Funktion pausiert, bis die Auswahl getroffen ist, und dann erneut, bis die Preise abgerufen sind. Wir können `Promise.all` verwenden, um sie gleichzeitig auszuführen, sodass der Benutzer nicht warten muss, bis die Preise abgerufen sind, bevor das Ergebnis angegeben wird:

```js example-good
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice(),
    fetchPrices(),
  ]);
  return prices[choice];
}
```

`Promise.all` ist hier die beste Wahl der [Konkurrenzmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency), da das Fehler-Handling intuitiv ist — wenn eines der Promises abgelehnt wird, ist das Ergebnis nicht mehr verfügbar, sodass der gesamte `await`-Ausdruck eine Ausnahme auslöst.

`Promise.all` akzeptiert ein Iterable von Promises. Wenn Sie es verwenden, um mehrere async-Funktionen gleichzeitig auszuführen, müssen Sie die async-Funktionen aufrufen und die zurückgegebenen Promises verwenden. Die Funktionen direkt an `Promise.all` zu übergeben funktioniert nicht, da sie keine Promises sind.

```js example-bad
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice,
    fetchPrices,
  ]);
  // `choice` and `prices` are still the original async functions;
  // Promise.all() does nothing to non-promises
}
```

### Die "fail-fast"-Eigenschaft von Promise.all

`Promise.all` wird abgelehnt, wenn eines der Elemente abgelehnt wird. Beispiel: Wenn Sie vier Promises übergeben, die nach einer Verzögerung aufgelöst werden, und ein Promise, das sofort abgelehnt wird, wird `Promise.all` sofort abgelehnt.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 3000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("four"), 4000);
});
const p5 = new Promise((resolve, reject) => {
  reject(new Error("reject"));
});

// Using .catch:
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error.message);
  });

// Logs:
// "reject"
```

Es ist möglich, dieses Verhalten zu ändern, indem mögliche Ablehnungen behandelt werden:

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1_delayed_resolution"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  reject(new Error("p2_immediate_rejection"));
});

Promise.all([p1.catch((error) => error), p2.catch((error) => error)]).then(
  (values) => {
    console.log(values[0]); // "p1_delayed_resolution"
    console.error(values[1]); // "Error: p2_immediate_rejection"
  },
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
