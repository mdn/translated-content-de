---
title: Promise.any()
short-title: any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Promise.any()`** statische Methode nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, wenn irgendeines der Eingabe-Promises erfüllt wird, wobei dies den ersten Erfüllungswert darstellt. Es wird abgelehnt, wenn alle Eingabe-Promises abgelehnt werden (einschließlich wenn ein leeres iterierbares Objekt übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.

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
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits abgelehnt** ist, wenn das übergebene `iterable` leer ist.
- **Asynchron erfüllt** wird, sobald eines der Promises im übergebenen `iterable` erfüllt wird. Der Erfüllungswert ist der Erfüllungswert des ersten Promises, das erfüllt wurde.
- **Asynchron abgelehnt** wird, wenn alle Promises im übergebenen `iterable` abgelehnt werden. Der Ablehnungsgrund ist ein {{jsxref("AggregateError")}}, das ein Array von Ablehnungsgründen in seiner `errors`-Eigenschaft enthält. Die Fehler sind in der Reihenfolge der übergebenen Promises aufgeführt, unabhängig von der Reihenfolge des Abschlusses. Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (anstatt synchron) abgelehnt.

## Beschreibung

Die `Promise.any()` Methode ist eine der [promise concurrency](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) Methoden. Diese Methode ist nützlich, um das erste Promise zurückzugeben, das erfüllt wird. Sie bricht ab, nachdem ein Promise erfüllt wird, sodass sie nicht auf die anderen Promises wartet, sobald eines gefunden wurde.

Im Gegensatz zu {{jsxref("Promise.all()")}}, das ein _Array_ von Erfüllungswerten zurückgibt, erhalten wir nur einen Erfüllungswert (vorausgesetzt, mindestens ein Promise wird erfüllt). Dies kann vorteilhaft sein, wenn wir nur möchten, dass ein Promise erfüllt wird, es uns aber egal ist, welches das ist. Beachten Sie einen weiteren Unterschied: Diese Methode lehnt bei Erhalt eines _leeren iterierbaren Objekts_ ab, da das iterierbare Objekt tatsächlich keine Elemente enthält, die erfüllt werden. Sie können `Promise.any()` und `Promise.all()` mit {{jsxref("Array.prototype.some()")}} und {{jsxref("Array.prototype.every()")}} vergleichen.

Auch im Gegensatz zu {{jsxref("Promise.race()")}}, das den ersten _abgewickelten_ Wert (entweder Erfüllung oder Ablehnung) zurückgibt, gibt diese Methode den ersten _erfüllten_ Wert zurück. Diese Methode ignoriert alle abgelehnten Promises bis zu dem ersten Promise, das erfüllt wird.

## Beispiele

### Verwendung von Promise.any()

`Promise.any()` wird mit dem ersten erfüllten Promise erfüllt, selbst wenn ein Promise zuerst abgelehnt wird. Dies steht im Gegensatz zu {{jsxref("Promise.race()")}}, das mit dem ersten abgeschlossenen Promise erfüllt oder abgelehnt wird.

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

### Anzeige des ersten geladenen Bildes

In diesem Beispiel haben wir eine Funktion, die ein Bild abrufen und ein Blob zurückgeben soll. Wir verwenden `Promise.any()`, um ein paar Bilder abzurufen und das erste verfügbare anzuzeigen (d.h. dessen Promise aufgelöst wurde).

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
- [es-shims polyfill von `Promise.any`](https://www.npmjs.com/package/promise.any)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.race()")}}
