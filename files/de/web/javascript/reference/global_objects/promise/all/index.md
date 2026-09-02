---
title: Promise.all()
short-title: all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
l10n:
  sourceCommit: 9bda33365e40b6c609fa5190a0af9b5dc6438cf0
---

Die **`Promise.all()`**-statische Methode nimmt ein Iterable von Promises als Eingabe und gibt ein einziges {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Promises der Eingabe erfüllt werden (einschließlich, wenn ein leeres Iterable übergeben wird) und gibt ein Array der Erfüllungswerte zurück. Es wird abgelehnt, wenn eines der Eingabe-Promises abgelehnt wird, mit dem Ablehnungsgrund des ersten abgelehnten Promises.

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
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises. Diese Werte werden [erwartet](/de/docs/Web/JavaScript/Reference/Operators/await), sodass andere [thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ebenfalls aufgelöst werden, während Nicht-thenables so zurückgegeben werden, wie sie sind.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `iterable` leer ist.
- **Asynchron erfüllt** ist, wenn alle Promises im übergebenen `iterable` erfüllt werden. Der Erfüllungswert ist ein Array von Erfüllungswerten in der Reihenfolge der übergebenen Promises, unabhängig von der Abschlussreihenfolge. Wenn das `iterable`, das übergeben wird, nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise trotzdem asynchron (statt synchron) erfüllt.
- **Asynchron abgelehnt** wird, wenn eines der Promises im übergebenen `iterable` abgelehnt wird. Der Ablehnungsgrund ist der Ablehnungsgrund des ersten Promise, das abgelehnt wurde.

## Beschreibung

Die Methode `Promise.all()` ist eine der [Promise-Konkurrenzmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie kann nützlich sein, um die Ergebnisse mehrerer Promises zu aggregieren. Sie wird typischerweise verwendet, wenn es mehrere verwandte asynchrone Aufgaben gibt, auf die der gesamte Code angewiesen ist, um erfolgreich zu funktionieren - von denen wir möchten, dass sie erfüllt werden, bevor der Code weiter ausgeführt wird.

`Promise.all()` wird sofort abgelehnt, wenn **irgendeines** der Eingabe-Promises abgelehnt wird. Im Vergleich dazu wartet das von {{jsxref("Promise.allSettled()")}} zurückgegebene Promise darauf, dass alle Eingabe-Promises abgeschlossen sind, unabhängig davon, ob eines abgelehnt wird oder nicht. Verwenden Sie `allSettled()`, wenn Sie das Endergebnis jedes Promises im Eingabearray benötigen.

Wie andere Promise-Kombinatoren markiert `Promise.all()` alle Promises sofort als "behandelt", wenn es aufgerufen wird (indem es ihre `.then()`-Methoden aufruft). Nachfolgende Ablehnungen nach der ersten Ablehnung werden ignoriert und lösen keine `unhandledrejection`-Ereignisse aus.

Die Ablehnung des zurückgegebenen Promises storniert nicht die verbleibenden Operationen oder hebt die Abonnements der an ihre Promises gebundenen Handler auf. Wenn Sie wiederholt ein lang laufendes, ausstehendes Promise an `Promise.all()` übergeben, kann es vorkommen, dass dadurch Handler auf diesem Promise angesammelt werden, selbst wenn eine andere Eingabe jedes Mal abgelehnt wird.

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

Wenn das `iterable` Nicht-Promise-Werte enthält, werden diese ignoriert, aber dennoch im zurückgegebenen Promise-Array-Wert mitgezählt (wenn das Promise erfüllt ist):

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

### Destrukturierung des Ergebnisses

Sie werden das [Destrukturieren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sehr nützlich finden, wenn Sie eine bekannte Anzahl von Aufgaben zusammenführen.

```js
// With then()
Promise.all([p1, p2, p3]).then(([a, b, c]) => {
  console.log(a, b, c); // 3 1337 "foo"
});

// With await
const [a, b, c] = await Promise.all([p1, p2, p3]);
```

Seien Sie vorsichtig: Wenn die Reihenfolge der Original-Promises und die der Ergebnisvariablen nicht übereinstimmen, können subtile Fehler auftreten. Die {{jsxref("Promise.allKeyed()")}}-Methode löst genau dieses Problem.

### Asynchronicität oder Synchronicität von Promise.all

Dieses folgende Beispiel zeigt die Asynchronicität von `Promise.all`, wenn ein nicht-leeres `iterable` übergeben wird:

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

Dasselbe passiert, wenn `Promise.all` abgelehnt wird:

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

### Verwendung von Promise.all() mit asynchronen Funktionen

Innerhalb von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) ist es sehr üblich, Ihren Code "übermäßig zu erwarten". Zum Beispiel bei den folgenden Funktionen:

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

Könnten Sie eine Funktion wie diese schreiben:

```js example-bad
async function getPrice() {
  const choice = await promptForDishChoice();
  const prices = await fetchPrices();
  return prices[choice];
}
```

Beachten Sie jedoch, dass die Ausführung von `promptForDishChoice` und `fetchPrices` nicht vom Ergebnis des anderen abhängt. Während der Benutzer sein Gericht auswählt, können die Preise im Hintergrund abgerufen werden, aber im obigen Code bewirkt der `await`-Operator, dass die asynchrone Funktion pausiert, bis die Auswahl getroffen wird, und dann erneut, bis die Preise abgerufen werden. Wir können `Promise.all` verwenden, um sie gleichzeitig auszuführen, sodass der Benutzer nicht warten muss, bis die Preise abgerufen werden, bevor das Ergebnis angezeigt wird:

```js example-good
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice(),
    fetchPrices(),
  ]);
  return prices[choice];
}
```

`Promise.all` ist die beste Wahl der [Konkurrenzmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) hier, weil das Fehler-Handling intuitiv ist - wenn eines der Promises abgelehnt wird, ist das Ergebnis nicht mehr verfügbar, sodass der gesamte `await`-Ausdruck eine Ausnahme auslöst.

`Promise.all` akzeptiert ein Iterable von Promises, daher müssen Sie, wenn Sie es verwenden, um mehrere asynchrone Funktionen gleichzeitig auszuführen, die asynchronen Funktionen aufrufen und die zurückgegebenen Promises verwenden. Das direkte Übergeben der Funktionen an `Promise.all` funktioniert nicht, da sie keine Promises sind.

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

Beachten Sie, dass das Folgende, trotz anderer unerwünschter Aspekte (wie das Erstellen von mehr Variablen und fehleranfälligem Fehler-Handling), auch Konkurrenz erreicht:

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

### Das Fail-Fast-Verhalten von Promise.all

`Promise.all` wird abgelehnt, wenn eines der Elemente abgelehnt wird. Beispielsweise, wenn Sie vier Promises übergeben, die sich nach einer Zeitüberschreitung auflösen, und ein Promise, das sofort abgelehnt wird, dann wird `Promise.all` sofort abgelehnt.

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
- {{jsxref("Promise.allKeyed()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
