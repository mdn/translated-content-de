---
title: Promise.all()
short-title: all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
l10n:
  sourceCommit: cbf7f4b55e2c0bc0c096773435b159edcaa8c9e2
---

Die statische Methode **`Promise.all()`** nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe erfüllt sind (auch wenn ein leeres Iterable übergeben wird), mit einem Array der Erfüllungswerte. Es schlägt fehl (rejected), wenn eines der Eingabepromises fehlschlägt, mit dem Grund des ersten Fehlers.

{{InteractiveExample("JavaScript Demo: Promise.all()")}}

```js interactive-example
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]
```

## Syntax

```js-nolint
Promise.all(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises. Diese Werte werden [awaited](/de/docs/Web/JavaScript/Reference/Operators/await), sodass andere [thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ebenfalls aufgelöst werden, während Nicht-thenables unverändert zurückgegeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `iterable` leer ist.
- **Asynchron erfüllt** ist, wenn alle Promises im gegebenen `iterable` erfüllt werden. Der Erfüllungswert ist ein Array von Erfüllungswerten, in der Reihenfolge der übergebenen Promises, unabhängig von der Reihenfolge ihrer Fertigstellung. Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (statt synchron) erfüllt.
- **Asynchron abgelehnt** wird, wenn eines der Promises im gegebenen `iterable` fehlschlägt. Der Grund für das Versagen ist der Ablehnungsgrund des ersten abgelehnten Promises.

## Beschreibung

Die Methode `Promise.all()` ist eine der Methoden zur [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie kann nützlich sein, um die Ergebnisse mehrerer Promises zusammenzuführen. Sie wird typischerweise verwendet, wenn es mehrere verwandte asynchrone Aufgaben gibt, auf die der gesamte Code angewiesen ist, um erfolgreich zu arbeiten - und alle sollen erfüllt sein, bevor die Codeausführung fortgesetzt wird.

`Promise.all()` wird sofort abgelehnt, sobald **irgendeines** der Eingabepromises fehlschlägt. Im Vergleich dazu wartet das Promise, das von {{jsxref("Promise.allSettled()")}} zurückgegeben wird, bis alle Eingabepromises abgeschlossen sind, unabhängig davon, ob eines fehlschlägt oder nicht. Verwenden Sie `allSettled()`, wenn Sie das Endergebnis jedes Promises im Eingabe-Iterable benötigen.

Wie bei anderen Promise-Kombinatoren markiert `Promise.all()` sofort alle Promises als "behandelt", wenn es aufgerufen wird (indem es ihre `.then()`-Methoden aufruft). Nachfolgende Ablehnungen nach der ersten Ablehnung werden ignoriert und lösen keine `unhandledrejection`-Ereignisse aus.

## Beispiele

### Verwendung von Promise.all()

`Promise.all` wartet auf alle Erfüllungen (oder das erste Scheitern).

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

Wenn das `iterable` Nicht-Promise-Werte enthält, werden diese ignoriert, aber dennoch in der zurückgegebenen Promise-Array-Wert gezählt (wenn das Promise erfüllt wird):

```js
// All values are non-promises, so the returned promise gets fulfilled
const p = Promise.all([1, 2, 3]);
// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// One (and the only) input promise is rejected,
// so the returned promise gets rejected
const p3 = Promise.all([1, 2, 3, Promise.reject(new Error("bad"))]);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: Error: bad }
```

### Destructuring des Ergebnisses

Sie werden [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sehr nützlich finden, wenn Sie eine bekannte Anzahl von Aufgaben bündeln.

```js
// With then()
Promise.all([p1, p2, p3]).then(([a, b, c]) => {
  console.log(a, b, c); // 3 1337 "foo"
});

// With await
const [a, b, c] = await Promise.all([p1, p2, p3]);
```

Seien Sie vorsichtig: Wenn die Reihenfolge der ursprünglichen Promises und der Ergebnisvariablen nicht übereinstimmt, können subtile Fehler auftreten. Die Methode {{jsxref("Promise.allKeyed()")}} löst genau dieses Problem.

### Asynchronität oder Synchronität von Promise.all

Dieses folgende Beispiel demonstriert die Asynchronität von `Promise.all`, wenn ein nicht-leeres `iterable` übergeben wird:

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

Das Gleiche passiert, wenn `Promise.all` abgelehnt wird:

```js
const mixedPromisesArray = [
  Promise.resolve(33),
  Promise.reject(new Error("bad")),
];
const p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p);
});

// Logs:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "rejected", <reason>: Error: bad }
```

`Promise.all` wird nur dann synchron aufgelöst, wenn das übergebene `iterable` leer ist:

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

### Verwendung von Promise.all() mit Async-Funktionen

Innerhalb von [Async-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) ist es sehr häufig, Ihren Code "übermäßig zu warten" (over-await). Zum Beispiel, wenn es folgende Funktionen gibt:

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
        reject(new Error("User canceled dialog"));
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

Sie können eine Funktion so schreiben:

```js example-bad
async function getPrice() {
  const choice = await promptForDishChoice();
  const prices = await fetchPrices();
  return prices[choice];
}
```

Beachten Sie jedoch, dass die Ausführung von `promptForDishChoice` und `fetchPrices` nicht voneinander abhängig ist. Während der Benutzer sein Gericht auswählt, ist es in Ordnung, wenn die Preise im Hintergrund abgerufen werden, aber im obigen Code sorgt der [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator dafür, dass die Async-Funktion pausiert, bis die Auswahl getroffen wurde, und dann erneut, bis die Preise abgerufen wurden. Wir können `Promise.all` verwenden, um sie gleichzeitig auszuführen, damit der Benutzer nicht warten muss, bis die Preise abgerufen werden, bevor das Ergebnis angezeigt wird:

```js example-good
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice(),
    fetchPrices(),
  ]);
  return prices[choice];
}
```

`Promise.all` ist die beste Wahl der [Konkurrenzmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) hier, weil das Fehlerhandling intuitiv ist — wenn eines der Promises fehlschlägt, ist das Ergebnis nicht mehr verfügbar, sodass der gesamte `await`-Ausdruck eine Ausnahme auslöst.

`Promise.all` nimmt ein Iterable von Promises, daher müssen Sie die Async-Funktionen aufrufen und die zurückgegebenen Promises verwenden, wenn Sie es verwenden, um mehrere Async-Funktionen gleichzeitig auszuführen. Das direkte Übergeben der Funktionen an `Promise.all` funktioniert nicht, da sie keine Promises sind.

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

Beachten Sie, dass das folgende, trotz anderer unerwünschter Aspekte (wie das Erstellen weiterer Variablen und fehleranfälliges Fehlerhandling), ebenfalls Konkurrenz erreicht:

```js
async function getPrice() {
  // Fire all async operations upfront
  const choicePromise = promptForDishChoice();
  const pricesPromise = fetchPrices();

  // Wait for each promise (all in-progress async operations keep running)
  const choice = await choicePromise;
  const prices = await pricesPromise;
}
```

### Promise.all Fail-Fast-Verhalten

`Promise.all` wird abgelehnt, wenn eines der Elemente abgelehnt wird. Beispielsweise, wenn Sie vier Promises übergeben, die nach einem Timeout aufgelöst werden, und ein Promise, das sofort abgelehnt wird, dann wird `Promise.all` sofort abgelehnt.

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

Es ist möglich, dieses Verhalten zu ändern, indem potenzielle Ablehnungen behandelt werden:

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
- {{jsxref("Promise.allKeyed()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
