---
title: Promise.allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Promise.allSettled()`** statische Methode nimmt ein iterierbares Objekt von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Promises der Eingabe abgeschlossen sind (auch wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array von Objekten, die das Ergebnis jeder Promise beschreiben.

{{InteractiveExample("JavaScript Demo: Promise.allSettled()", "taller")}}

```js interactive-example
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo"),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

// Expected output:
// "fulfilled"
// "rejected"
```

## Syntax

```js-nolint
Promise.allSettled(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `iterable` leer ist.
- **Asynchron erfüllt** ist, wenn alle Promises im gegebenen `iterable` abgeschlossen sind (entweder erfüllt oder abgelehnt). Der Erfüllungswert ist ein Array von Objekten, die das Ergebnis jeder Promise im `iterable` beschreiben, in der Reihenfolge der übergebenen Promises, unabhängig von der Abschlussreihenfolge. Jedes Ergebnisobjekt hat die folgenden Eigenschaften:

  - `status`
    - : Ein String, entweder `"fulfilled"` oder `"rejected"`, der den endgültigen Zustand der Promise angibt.
  - `value`
    - : Nur vorhanden, wenn `status` `"fulfilled"` ist. Der Wert, mit dem die Promise erfüllt wurde.
  - `reason`
    - : Nur vorhanden, wenn `status` `"rejected"` ist. Der Grund, warum die Promise abgelehnt wurde.

  Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (anstatt synchron) erfüllt.

## Beschreibung

Die Methode `Promise.allSettled()` ist eine der [Promise-Konkurrenzmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). `Promise.allSettled()` wird typischerweise verwendet, wenn Sie mehrere asynchrone Aufgaben haben, die nicht voneinander abhängig sind, erfolgreich abgeschlossen zu werden, oder wenn Sie immer das Ergebnis jeder Promise kennen möchten.

Im Vergleich dazu könnte das von {{jsxref("Promise.all()")}} zurückgegebene Promise besser geeignet sein, wenn die Aufgaben voneinander abhängig sind, oder wenn Sie möchten, dass eine Ablehnung einer Promise sofort alle weiteren ablehnt.

## Beispiele

### Verwendung von Promise.allSettled()

```js
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: an error }
// ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.allSettled` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Anleitung
- [Elegantes asynchrones Programmieren mit Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
