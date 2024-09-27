---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die statische Methode **`Promise.any()`** nimmt eine iterierbare Sammlung von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise erfüllt sich, wenn eines der angegebenen Promises erfüllt wird und zwar mit dem ersten Erfüllungswert. Es wird abgelehnt, wenn alle der angegebenen Promises (einschließlich wenn eine leere iterierbare Sammlung übergeben wird) abgelehnt werden, mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.

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
- **Asynchron erfüllt** wird, wenn eines der Promises im angegebenen `iterable` erfüllt wird. Der Erfüllungswert ist der Erfüllungswert des ersten erfüllten Promises.
- **Asynchron abgelehnt** wird, wenn alle der Promises im angegebenen `iterable` abgelehnt werden. Der Ablehnungsgrund ist ein {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen in seiner `errors`-Eigenschaft enthält. Die Fehler sind in der Reihenfolge der übergebenen Promises, ungeachtet der Reihenfolge der Fertigstellung. Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise immer noch asynchron (statt synchron) abgelehnt.

## Beschreibung

Die Methode `Promise.any()` ist eine der Methoden für [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Diese Methode ist nützlich, um das erste erfüllte Promise zurückzugeben. Sie bricht ab, sobald ein Promise erfüllt wird, sodass sie nicht auf den Abschluss der anderen Promises wartet, wenn sie ein erfülltes gefunden hat.

Anders als {{jsxref("Promise.all()")}}, das ein _Array_ von Erfüllungswerten zurückgibt, erhalten wir bei `Promise.any()` nur einen Erfüllungswert (sofern mindestens ein Promise erfüllt wird). Dies kann vorteilhaft sein, wenn wir nur ein erfülltes Promise benötigen, es aber egal ist, welches es ist. Beachten Sie einen weiteren Unterschied: Diese Methode lehnt bei einem _leeren iterierbaren Objekt_ ab, da das Iterierbare tatsächlich keine erfüllbaren Elemente enthält. Sie können `Promise.any()` und `Promise.all()` mit {{jsxref("Array.prototype.some()")}} und {{jsxref("Array.prototype.every()")}} vergleichen.

Auch anders als {{jsxref("Promise.race()")}}, das den ersten _festgelegten_ Wert (entweder Erfüllung oder Ablehnung) zurückgibt, gibt diese Methode den ersten _erfüllten_ Wert zurück. Diese Methode ignoriert alle abgelehnten Versprechen bis zum ersten erfüllten Promise.

## Beispiele

### Verwendung von Promise.any()

`Promise.any()` erfüllt sich mit dem ersten erfüllten Promise, auch wenn ein Promise zuerst abgelehnt wird. Dies steht im Gegensatz zu {{jsxref("Promise.race()")}}, das sich mit dem ersten festgelegten Promise erfüllt oder ablehnt.

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

`Promise.any()` lehnt sich mit einem {{jsxref("AggregateError")}} ab, wenn kein Promise erfüllt wird.

```js
const failure = new Promise((resolve, reject) => {
  reject("Always fails");
});

Promise.any([failure]).catch((err) => {
  console.log(err);
});
// AggregateError: No Promise in Promise.any was resolved
```

### Erste geladene Bild anzeigen

In diesem Beispiel haben wir eine Funktion, die ein Bild abruft und ein Blob zurückgibt. Wir verwenden `Promise.any()`, um ein paar Bilder abzurufen und das erste verfügbare anzuzeigen (d.h. dessen Promise aufgelöst ist).

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
