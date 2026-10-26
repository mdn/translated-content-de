---
title: Promise.any()
short-title: any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Promise.any()`** nimmt ein Iterable von Promises entgegen und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, sobald eines der übergebenen Promises erfüllt wird, und übernimmt dessen Erfüllungswert. Wenn alle übergebenen Promises abgelehnt werden – auch wenn ein leeres Iterable übergeben wird –, wird es mit einem {{jsxref("AggregateError")}} abgelehnt, der ein Array mit den Ablehnungsgründen enthält.

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
  - : Ein [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises, beispielsweise ein {{jsxref("Array")}}. Auf diese Werte wird mit [await](/de/docs/Web/JavaScript/Reference/Operators/await) gewartet. Daher werden auch andere [Thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) aufgelöst, während Werte, die keine Thenables sind, unverändert zurückgegeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **bereits abgelehnt ist**, wenn das übergebene `iterable` leer ist.
- **asynchron erfüllt wird**, sobald eines der Promises im übergebenen `iterable` erfüllt wird. Der Erfüllungswert ist der Wert des zuerst erfüllten Promise.
- **asynchron abgelehnt wird**, wenn alle Promises im übergebenen `iterable` abgelehnt werden. Der Ablehnungsgrund ist ein {{jsxref("AggregateError")}}, dessen Eigenschaft `errors` ein Array mit den Ablehnungsgründen enthält. Die Fehler stehen in der Reihenfolge der übergebenen Promises, unabhängig davon, in welcher Reihenfolge diese abgeschlossen werden. Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron statt synchron abgelehnt.

## Beschreibung

Die Methode `Promise.any()` gehört zu den Methoden für die [gleichzeitige Verarbeitung von Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Sie ist nützlich, wenn das erste erfüllte Promise zurückgegeben werden soll. Sobald ein Promise erfüllt wird, wartet die Methode nicht mehr auf den Abschluss der übrigen Promises.

Anders als {{jsxref("Promise.all()")}}, das ein _Array_ von Erfüllungswerten zurückgibt, erhalten wir nur einen Erfüllungswert – vorausgesetzt, mindestens ein Promise wird erfüllt. Das ist hilfreich, wenn nur ein Promise erfüllt werden muss und es keine Rolle spielt, welches. Ein weiterer Unterschied: Diese Methode lehnt ein _leeres Iterable_ ab, da es keine Elemente enthält, die erfüllt werden könnten. `Promise.any()` und `Promise.all()` lassen sich mit {{jsxref("Array.prototype.some()")}} und {{jsxref("Array.prototype.every()")}} vergleichen.

Anders als {{jsxref("Promise.race()")}}, das den Wert des ersten _abgeschlossenen_ Promise zurückgibt – unabhängig davon, ob es erfüllt oder abgelehnt wurde –, gibt diese Methode den ersten _Erfüllungswert_ zurück. Bis zum ersten erfüllten Promise ignoriert sie alle abgelehnten Promises.

Wie andere Methoden zur Kombination von Promises markiert `Promise.any()` beim Aufruf sofort alle Promises als „behandelt“, indem es ihre `.then()`-Methoden aufruft. Spätere Ablehnungen nach der ersten Erfüllung werden ignoriert und lösen keine `unhandledrejection`-Ereignisse aus.

Wenn das zurückgegebene Promise erfüllt wird, werden die verbleibenden Operationen nicht abgebrochen und die an ihre Promises angehängten Handler nicht entfernt. Wird ein langlebiges, ausstehendes Promise wiederholt an `Promise.any()` übergeben, können sich Handler für dieses Promise ansammeln, selbst wenn jedes Mal ein anderes übergebenes Promise erfüllt wird.

## Beispiele

### Promise.any() verwenden

`Promise.any()` wird mit dem Wert des ersten erfüllten Promise erfüllt, selbst wenn zuvor ein anderes Promise abgelehnt wurde. Im Gegensatz dazu wird {{jsxref("Promise.race()")}} entsprechend dem ersten abgeschlossenen Promise erfüllt oder abgelehnt.

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

`Promise.any()` wird mit einem {{jsxref("AggregateError")}} abgelehnt, wenn kein Promise erfüllt wird.

```js
const failure = new Promise((resolve, reject) => {
  reject(new Error("Always fails"));
});

Promise.any([failure]).catch((err) => {
  console.log(err);
});
// AggregateError: No Promise in Promise.any was resolved
```

### Das zuerst geladene Bild anzeigen

In diesem Beispiel ruft eine Funktion ein Bild ab und gibt einen Blob zurück. Mit `Promise.any()` rufen wir mehrere Bilder ab und zeigen das zuerst verfügbare Bild an, also das Bild, dessen Promise zuerst erfüllt wurde.

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

- [Polyfill für `Promise.any` in `core-js`](https://core-js.io/docs/features/ecmascript/promise)
- [Polyfill für `Promise.any` von es-shims](https://www.npmjs.com/package/promise.any)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.race()")}}
