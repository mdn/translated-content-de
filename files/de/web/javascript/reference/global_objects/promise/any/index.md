---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die statische Methode **`Promise.any()`** nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, wenn eines der eingegebenen Promises erfüllt wird, mit diesem ersten Erfüllungswert. Es wird abgelehnt, wenn alle eingegebenen Promises abgelehnt werden (einschließlich wenn ein leeres iterierbares Objekt übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.

{{EmbedInteractiveExample("pages/js/promise-any.html")}}

## Syntax

```js-nolint
Promise.any(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits abgelehnt** ist, wenn das übergebene `iterable` leer ist.
- **Asynchron erfüllt** wird, wenn eines der Promises im gegebenen `iterable` erfüllt wird. Der Erfüllungswert ist der Erfüllungswert des ersten erfüllten Promises.
- **Asynchron abgelehnt** wird, wenn alle Promises im gegebenen `iterable` abgelehnt werden. Der Ablehnungsgrund ist ein {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen in seiner `errors`-Eigenschaft enthält. Die Fehler sind in der Reihenfolge der übergebenen Promises, unabhängig von der Reihenfolge der Fertigstellung. Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise immer noch asynchron (anstatt synchron) abgelehnt.

## Beschreibung

Die Methode `Promise.any()` ist eine der [Promise-Konkurrenzmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Diese Methode ist nützlich, um das erste erfüllte Promise zurückzugeben. Sie beendet die Ausführung, nachdem ein Promise erfüllt ist, sodass sie nicht auf die Fertigstellung der anderen Promises wartet, sobald eines gefunden ist.

Im Gegensatz zu {{jsxref("Promise.all()")}}, das ein _Array_ von Erfüllungswerten zurückgibt, erhalten wir hier nur einen Erfüllungswert (vorausgesetzt, mindestens ein Promise wird erfüllt). Dies kann vorteilhaft sein, wenn wir nur ein erfülltes Promise benötigen, aber nicht darauf achten, welches. Beachten Sie einen weiteren Unterschied: Diese Methode lehnt bei Erhalt eines _leeren iterierbaren Objekts_ ab, da das iterierbare Objekt tatsächlich keine erfüllenden Elemente enthält. Sie können `Promise.any()` und `Promise.all()` mit {{jsxref("Array.prototype.some()")}} und {{jsxref("Array.prototype.every()")}} vergleichen.

Ebenso, im Unterschied zu {{jsxref("Promise.race()")}}, das den ersten _erledigten_ Wert (entweder Erfüllung oder Ablehnung) zurückgibt, liefert diese Methode den ersten _erfüllten_ Wert. Diese Methode ignoriert alle abgelehnten Promises bis zum ersten erfüllten Promise.

## Beispiele

### Verwendung von Promise.any()

`Promise.any()` wird mit dem ersten erfüllten Promise erfüllt, selbst wenn ein Promise zuerst abgelehnt wird. Dies steht im Gegensatz zu {{jsxref("Promise.race()")}}, das erfüllt oder abgelehnt wird, sobald das erste Promise abgeschlossen ist.

```js
const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
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

`Promise.any()` wird mit einem {{jsxref("AggregateError")}} abgelehnt, wenn kein Promise erfüllt wird.

```js
const failure = new Promise((resolve, reject) => {
  reject("Always fails");
});

Promise.any([failure]).catch((err) => {
  console.log(err);
});
// AggregateError: No Promise in Promise.any was resolved
```

### Anzeige des ersten geladenen Bildes

In diesem Beispiel haben wir eine Funktion, die ein Bild abruft und ein Blob zurückgibt. Wir verwenden `Promise.any()`, um ein paar Bilder abzurufen und das erste verfügbare anzuzeigen (d. h. dessen Promise aufgelöst wurde).

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
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.race()")}}
