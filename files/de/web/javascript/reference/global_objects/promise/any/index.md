---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Promise.any()`** statische Methode nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses Promise wird erfüllt, wenn eines der Eingabepromises erfüllt wird, mit dem Erfüllungswert des ersten erfüllten Promises. Es wird abgelehnt, wenn alle Eingabepromises abgelehnt werden (einschließlich, wenn ein leeres iterierbares Objekt übergeben wird), mit einem {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen enthält.

{{InteractiveExample("JavaScript Demo: Promise.any()")}}

```js interactive-example
const promise1 = Promise.reject(0);
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

- **Bereits abgelehnt** ist, wenn ein leeres `iterable` übergeben wurde.
- **Asynchron erfüllt** wird, wenn eines der Promises im übergebenen `iterable` erfüllt wird. Der Erfüllungswert ist der Erfüllungswert des ersten erfüllten Promises.
- **Asynchron abgelehnt** wird, wenn alle Promises im übergebenen `iterable` abgelehnt werden. Der Ablehnungsgrund ist ein {{jsxref("AggregateError")}}, der ein Array von Ablehnungsgründen in seiner `errors`-Eigenschaft enthält. Die Fehler befinden sich in der Reihenfolge der übergebenen Promises, unabhängig von ihrer Abschlussreihenfolge. Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise trotzdem asynchron (statt synchron) abgelehnt.

## Beschreibung

Die Methode `Promise.any()` ist eine der [Promise-Konkurrenzmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Diese Methode ist nützlich, um das erste Promise, das erfüllt wird, zurückzugeben. Sie bricht ab, nachdem ein Promise erfüllt wurde, und wartet somit nicht auf den Abschluss der anderen Promises, sobald eines gefunden wurde.

Im Gegensatz zu {{jsxref("Promise.all()")}}, das ein _Array_ von Erfüllungswerten zurückgibt, erhalten wir hier nur einen Erfüllungswert (unter der Annahme, dass mindestens ein Promise erfüllt wird). Dies kann vorteilhaft sein, wenn wir nur ein erfülltes Promise benötigen, unabhängig davon, welches es ist. Beachten Sie einen weiteren Unterschied: Diese Methode lehnt ab, wenn ein _leeres iterierbares Objekt_ übergeben wird, da das Objekt tatsächlich keine Elemente enthält, die erfüllt werden können. Sie können `Promise.any()` und `Promise.all()` mit {{jsxref("Array.prototype.some()")}} und {{jsxref("Array.prototype.every()")}} vergleichen.

Ebenfalls im Unterschied zu {{jsxref("Promise.race()")}}, das den ersten _abgewickelten_ Wert (entweder Erfüllung oder Ablehnung) zurückgibt, gibt diese Methode den ersten _erfüllten_ Wert zurück. Diese Methode ignoriert alle abgelehnten Promises, bis das erste erfüllte Promise gefunden wird.

## Beispiele

### Verwendung von Promise.any()

`Promise.any()` wird mit dem ersten erfüllten Promise erfüllt, selbst wenn ein anderes Promise zuerst abgelehnt wird. Dies steht im Gegensatz zu {{jsxref("Promise.race()")}}, das sich mit dem zuerst abgeschlossenen Promise (Erfüllung oder Ablehnung) erfüllt oder ablehnt.

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

`Promise.any()` lehnt mit einem {{jsxref("AggregateError")}} ab, wenn kein Promise erfüllt wird.

```js
const failure = new Promise((resolve, reject) => {
  reject("Always fails");
});

Promise.any([failure]).catch((err) => {
  console.log(err);
});
// AggregateError: No Promise in Promise.any was resolved
```

### Anzeigen des ersten geladenen Bildes

In diesem Beispiel haben wir eine Funktion, die ein Bild abruft und einen Blob zurückgibt. Wir verwenden `Promise.any()`, um einige Bilder abzurufen und das erste verfügbare Bild (d.h. das Promise, das zuerst aufgelöst wurde) anzuzeigen.

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
