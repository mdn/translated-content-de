---
title: Promise.allSettled()
short-title: allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Promise.allSettled()`** nimmt ein Iterable von Promises als Eingabe entgegen und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, wenn alle Promises der Eingabe abgeschlossen sind (einschließlich wenn ein leeres Iterable übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes einzelnen Promises beschreiben.

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
  - : Ein [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `iterable` leer ist.
- **Asynchron erfüllt** ist, wenn alle Promises im gegebenen `iterable` abgeschlossen sind (entweder erfüllt oder abgelehnt). Der Erfüllungswert ist ein Array von Objekten, von denen jedes das Ergebnis eines Promises im `iterable` beschreibt, in der Reihenfolge der übergebenen Promises, unabhängig von der Reihenfolge des Abschlusses. Jedes Ergebnisobjekt hat die folgenden Eigenschaften:
  - `status`
    - : Ein String, entweder `"fulfilled"` oder `"rejected"`, der den endgültigen Zustand des Promises angibt.
  - `value`
    - : Nur vorhanden, wenn `status` `"fulfilled"` ist. Der Wert, mit dem das Promise erfüllt wurde.
  - `reason`
    - : Nur vorhanden, wenn `status` `"rejected"` ist. Der Grund, aus dem das Promise abgelehnt wurde.

  Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (statt synchron) erfüllt.

## Beschreibung

Die `Promise.allSettled()` Methode ist eine der Methoden für [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). `Promise.allSettled()` wird typischerweise verwendet, wenn Sie mehrere asynchrone Aufgaben haben, die nicht voneinander abhängig sind, um erfolgreich abgeschlossen zu werden, oder wenn Sie das Ergebnis jedes Promises wissen möchten.

Im Vergleich dazu könnte das von {{jsxref("Promise.all()")}} zurückgegebene Promise geeigneter sein, wenn die Aufgaben voneinander abhängig sind, oder wenn Sie bei einer Ablehnung einer davon sofort ablehnen möchten.

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
- [es-shims Polyfill von `Promise.allSettled`](https://www.npmjs.com/package/promise.allsettled)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Anleitung zur asynchronen Programmierung mit Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
