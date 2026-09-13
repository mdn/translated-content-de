---
title: Promise.any()
short-title: any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
l10n:
  sourceCommit: 9bda33365e40b6c609fa5190a0af9b5dc6438cf0
---

Die statische Methode **`Promise.any()`** akzeptiert ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise erfüllt sich, wenn eines der Eingabe-Promises erfüllt wird, mit diesem ersten Erfüllungswert. Es wird abgelehnt, wenn alle Eingabe-Promises abgelehnt werden (einschließlich, wenn ein leeres iterierbares Objekt übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.

{{InteractiveExample("JavaScript Demo: Promise.any()")}}

```js interactive-example
const promise1 = Promise.reject(new Error("error"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"
```

## Syntax

```js-nolint
Promise.any(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises. Diese Werte werden [abgewartet](/de/docs/Web/JavaScript/Reference/Operators/await), daher werden auch andere [thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) aufgelöst, während nicht-thenable Werte unverändert zurückgegeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits abgelehnt** ist, wenn das übergebene `iterable` leer ist.
- **Asynchron erfüllt** wird, wenn eines der Promises im gegebenen `iterable` erfüllt wird. Der Erfüllungswert ist der Erfüllungswert des ersten Promises, das erfüllt wurde.
- **Asynchron abgelehnt** wird, wenn alle Promises im gegebenen `iterable` abgelehnt werden. Der Ablehnungsgrund ist ein {{jsxref("AggregateError")}}, der in seiner `errors`-Eigenschaft ein Array von Ablehnungsgründen enthält. Die Fehler sind in der Reihenfolge der übergebenen Promises, unabhängig von der Abschlussreihenfolge. Wenn das übergebene `iterable` nicht leer ist, aber keine anstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (anstatt synchron) abgelehnt.

## Beschreibung

Die Methode `Promise.any()` ist eine der [Promise-Konkurrenz-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Diese Methode ist nützlich, um das erste Promise zurückzugeben, das erfüllt wird. Sie bricht ab, nachdem ein Promise erfüllt wird, sodass sie nicht auf die Fertigstellung der anderen Promises wartet, sobald eines gefunden ist.

Im Gegensatz zu {{jsxref("Promise.all()")}}, das ein _Array_ von Erfüllungswerten zurückgibt, erhalten wir nur einen Erfüllungswert (vorausgesetzt, mindestens ein Promise wird erfüllt). Dies kann von Vorteil sein, wenn wir nur ein erfülltes Promise benötigen, ohne dass es darauf ankommt, welches. Beachten Sie einen weiteren Unterschied: Diese Methode lehnt bei einem _leeren iterierbaren Objekt_ ab, da tatsächlich keine Elemente im iterierbaren Objekt enthalten sind, die erfüllt werden. Sie können `Promise.any()` und `Promise.all()` mit {{jsxref("Array.prototype.some()")}} und {{jsxref("Array.prototype.every()")}} vergleichen.

Auch im Gegensatz zu {{jsxref("Promise.race()")}}, das den ersten _abgeschlossenen_ Wert (Erfüllung oder Ablehnung) zurückgibt, gibt diese Methode den ersten _erfüllten_ Wert zurück. Diese Methode ignoriert alle abgelehnten Promises bis zum ersten erfüllten Promise.

Wie andere Promise-Kombinatoren markiert `Promise.any()` sofort alle Promises als "behandelt", wenn es aufgerufen wird (indem es ihre `.then()`-Methoden aufruft). Nachfolgende Ablehnungen nach der ersten Erfüllung werden ignoriert und lösen keine `unhandledrejection`-Ereignisse aus.

Das Erfüllen des zurückgegebenen Promises beendet nicht die verbleibenden Operationen oder entfernt die an deren Promises angehängten Handler. Wenn wiederholt ein langlebiges anstehendes Promise an `Promise.any()` übergeben wird, können sich selbst dann Handler auf diesem Promise ansammeln, wenn bei jeder Eingabe ein anderes erfüllt wird.

## Beispiele

### Verwendung von Promise.any()

`Promise.any()` erfüllt sich mit dem ersten Promise, das sich erfüllt, selbst wenn ein anderes Promise zuerst abgelehnt wird. Dies steht im Gegensatz zu {{jsxref("Promise.race()")}}, das sich mit dem ersten Promise, das abgeschlossen wird, erfüllt oder ablehnt.

```js
const pErr = new Promise((resolve, reject) => {
  reject(new Error("Always fails"));
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast fulfills first
});
// Logs:
// Done quick
```

### Ablehnungen mit AggregateError

`Promise.any()` lehnt mit einem {{jsxref("AggregateError")}} ab, wenn kein Promise erfüllt wird.

```js
const failure = new Promise((resolve, reject) => {
  reject(new Error("Always fails"));
});

Promise.any([failure]).catch((err) => {
  console.log(err);
});
// AggregateError: No Promise in Promise.any was resolved
```

### Die erste geladene Grafik anzeigen

In diesem Beispiel haben wir eine Funktion, die ein Bild abruft und ein Blob zurückgibt. Wir verwenden `Promise.any()`, um ein paar Bilder abzurufen und das erste verfügbare anzuzeigen (d.h. dessen Promise aufgelöst wurde).

```js
async function fetchAndDecode(url, description) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.blob();
  return [data, description];
}

const coffee = fetchAndDecode("coffee.jpg", "Coffee");
const tea = fetchAndDecode("tea.jpg", "Tea");

Promise.any([coffee, tea])
  .then(([blob, description]) => {
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement("img");
    image.src = objectURL;
    image.alt = description;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.error(e);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.any` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [es-shims Polyfill von `Promise.any`](https://www.npmjs.com/package/promise.any)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.race()")}}
