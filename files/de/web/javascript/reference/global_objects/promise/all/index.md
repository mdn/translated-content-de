---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
l10n:
  sourceCommit: d0156d21ba35d916e70b13f2576324e31d8b686c
---

{{JSRef}}

Die **`Promise.all()`** statische Methode nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Eingabewerte erfüllt sind (einschließlich der Fälle, in denen ein leeres iterierbares Objekt übergeben wird), wobei ein Array der Erfüllungswerte geliefert wird. Es wird abgelehnt, wenn eines der Eingabepromises abgelehnt wird, und zwar mit dem Ablehnungsgrund des ersten abgelehnten Promises.

{{EmbedInteractiveExample("pages/js/promise-all.html")}}

## Syntax

```js-nolint
Promise.all(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `iterable` leer ist.
- **Asynchron erfüllt** wird, wenn alle Promises im gegebenen `iterable` erfüllt werden. Der Erfüllungswert ist ein Array von Erfüllungswerten, in der Reihenfolge der übergebenen Promises, unabhängig von der Abschlussreihenfolge. Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (statt synchron) erfüllt.
- **Asynchron abgelehnt** wird, wenn eines der Promises im gegebenen `iterable` abgelehnt wird. Der Ablehnungsgrund ist der Ablehnungsgrund des ersten abgelehnten Promises.

## Beschreibung

Die `Promise.all()` Methode ist eine der [Promise-Konkurrenzmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie kann nützlich sein, um die Ergebnisse mehrerer Promises zusammenzufassen. Sie wird typischerweise verwendet, wenn es mehrere zusammenhängende asynchrone Aufgaben gibt, von denen der gesamte Code abhängig ist, um erfolgreich zu funktionieren – all diese Aufgaben wollen wir erfüllt haben, bevor die Codeausführung fortgesetzt wird.

`Promise.all()` wird sofort abgelehnt, sobald **irgendeines** der Eingabepromises abgelehnt wird. Im Vergleich dazu wartet das von {{jsxref("Promise.allSettled()")}} zurückgegebene Promise darauf, dass alle Eingabepromises abgeschlossen sind, unabhängig davon, ob eines abgelehnt wird oder nicht. Verwenden Sie `allSettled()`, wenn Sie das Endergebnis jedes Promises im Eingabe-iterable benötigen.

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

Wenn das `iterable` Nicht-Promise-Werte enthält, werden diese ignoriert, aber dennoch im zurückgegebenen Promise-Array-Wert gezählt (wenn das Promise erfüllt ist):

```js
// Alle Werte sind keine Promises, daher wird das zurückgegebene Promise erfüllt
const p = Promise.all([1, 2, 3]);
// Das einzige Eingabepromise ist bereits erfüllt,
// daher wird das zurückgegebene Promise erfüllt
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// Ein (und das einzige) Eingabepromise wird abgelehnt,
// daher wird das zurückgegebene Promise abgelehnt
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// Mit setTimeout können wir Code ausführen, nachdem die Warteschlange leer ist
setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// Protokolle:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }
```

### Asynchronität oder Synchronität von Promise.all

Das folgende Beispiel zeigt die Asynchronität von `Promise.all`, wenn ein nicht-leeres `iterable` übergeben wird:

```js
// Übergeben eines Arrays von Promises, die bereits aufgelöst sind,
// um Promise.all so schnell wie möglich auszulösen
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);
// Sofortiges Protokollieren des Wertes von p
console.log(p);

// Mit setTimeout können wir Code ausführen, nachdem die Warteschlange leer ist
setTimeout(() => {
  console.log("die Warteschlange ist jetzt leer");
  console.log(p);
});

// Protokolle, in der Reihenfolge:
// Promise { <state>: "pending" }
// die Warteschlange ist jetzt leer
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

Das Gleiche passiert, wenn `Promise.all` abgelehnt wird:

```js
const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(() => {
  console.log("die Warteschlange ist jetzt leer");
  console.log(p);
});

// Protokolle:
// Promise { <state>: "pending" }
// die Warteschlange ist jetzt leer
// Promise { <state>: "rejected", <reason>: 44 }
```

`Promise.all` wird synchron aufgelöst, wenn und nur wenn das übergebene `iterable` leer ist:

```js
const p = Promise.all([]); // Wird sofort aufgelöst
const p2 = Promise.all([1337, "hi"]); // Nicht-Promise-Werte werden ignoriert, aber die Auswertung erfolgt asynchron
console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("die Warteschlange ist jetzt leer");
  console.log(p2);
});

// Protokolle:
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// die Warteschlange ist jetzt leer
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

### Verwendung von Promise.all() mit asynchronen Funktionen

Innerhalb von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) ist es sehr üblich, Ihren Code "zu viel zu erwarten". Zum Beispiel, gegeben die folgenden Funktionen:

```js
function promptForDishChoice() {
  return new Promise((resolve, reject) => {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
<form method="dialog">
  <p>Was möchten Sie essen?</p>
  <select>
    <option value="pizza">Pizza</option>
    <option value="pasta">Pasta</option>
    <option value="salad">Salat</option>
  </select>
  <menu>
    <li><button value="cancel">Abbrechen</button></li>
    <li><button type="submit" value="ok">OK</button></li>
  </menu>
</form>
    `;
    dialog.addEventListener("close", () => {
      if (dialog.returnValue === "ok") {
        resolve(dialog.querySelector("select").value);
      } else {
        reject(new Error("Benutzer hat Dialog abgebrochen"));
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

Sie könnten eine Funktion wie diese schreiben:

```js example-bad
async function getPrice() {
  const choice = await promptForDishChoice();
  const prices = await fetchPrices();
  return prices[choice];
}
```

Beachten Sie jedoch, dass die Ausführung von `promptForDishChoice` und `fetchPrices` nicht vom Ergebnis des jeweils anderen abhängt. Während der Benutzer sein Gericht auswählt, ist es in Ordnung, dass die Preise im Hintergrund abgerufen werden. Im obigen Code jedoch verursacht der [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) Operator, dass die asynchrone Funktion pausiert, bis die Auswahl getroffen wird, und dann erneut, bis die Preise abgerufen sind. Wir können `Promise.all` verwenden, um sie gleichzeitig auszuführen, sodass der Benutzer nicht warten muss, bis die Preise abgerufen sind, bevor das Ergebnis angegeben wird:

```js example-good
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice(),
    fetchPrices(),
  ]);
  return prices[choice];
}
```

`Promise.all` ist hier die beste Wahl der [Konkurrenzmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency), weil das Fehlerhandling intuitiv ist – wenn eines der Promises abgelehnt wird, ist das Ergebnis nicht mehr verfügbar, daher wirft der gesamte `await` Ausdruck.

`Promise.all` akzeptiert ein iterierbares Objekt von Promises, daher müssen Sie, wenn Sie es verwenden, um mehrere asynchrone Funktionen gleichzeitig auszuführen, die asynchronen Funktionen aufrufen und die zurückgegebenen Promises verwenden. Die Funktionen direkt an `Promise.all` zu übergeben funktioniert nicht, da sie keine Promises sind.

```js example-bad
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice,
    fetchPrices,
  ]);
  // `choice` und `prices` sind immer noch die ursprünglichen asynchronen Funktionen;
  // Promise.all() tut nichts für Nicht-Promise-Werte
}
```

### Schnellfehlverhalten von Promise.all

`Promise.all` wird abgelehnt, wenn eines der Elemente abgelehnt wird. Wenn Sie zum Beispiel vier Promises übergeben, die nach einem Timeout aufgelöst werden, und ein Promise, das sofort abgelehnt wird, dann wird `Promise.all` sofort abgelehnt.

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

// Verwendung von .catch:
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error.message);
  });

// Protokolle:
// "reject"
```

Es ist möglich, dieses Verhalten zu ändern, indem Sie mögliche Ablehnungen abfangen:

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
