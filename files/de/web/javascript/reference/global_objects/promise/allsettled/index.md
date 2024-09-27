---
title: Promise.allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
l10n:
  sourceCommit: c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{JSRef}}

Die statische Methode **`Promise.allSettled()`** nimmt ein Iterable von Promises als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Diese zurückgegebene Promise wird erfüllt, wenn alle Promises des Eingabe-Iterables abgewickelt sind (einschließlich wenn ein leeres Iterable übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.

{{EmbedInteractiveExample("pages/js/promise-allsettled.html", "taller")}}

## Syntax

```js-nolint
Promise.allSettled(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `iterable` leer ist.
- **Asynchron erfüllt** ist, wenn alle Promises im gegebenen `iterable` abgewickelt sind (entweder erfüllt oder abgelehnt). Der Erfüllungswert ist ein Array von Objekten, die das Ergebnis jedes Promises im `iterable` beschreiben, in der Reihenfolge der übergebenen Promises, unabhängig von der Reihenfolge der Erfüllung. Jedes Ergebnisobjekt hat die folgenden Eigenschaften:

  - `status`
    - : Ein String, entweder `"fulfilled"` oder `"rejected"`, der den endgültigen Zustand des Promises angibt.
  - `value`
    - : Nur vorhanden, wenn `status` `"fulfilled"` ist. Der Wert, mit dem das Promise erfüllt wurde.
  - `reason`
    - : Nur vorhanden, wenn `status` `"rejected"` ist. Der Grund, warum das Promise abgelehnt wurde.

  Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise trotzdem asynchron (anstatt synchron) erfüllt.

## Beschreibung

Die Methode `Promise.allSettled()` ist eine der Methoden zur [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). `Promise.allSettled()` wird typischerweise verwendet, wenn Sie mehrere asynchrone Aufgaben haben, die nicht voneinander abhängen, um erfolgreich abgeschlossen zu werden, oder wenn Sie immer das Ergebnis jedes Promises erfahren möchten.

Im Vergleich dazu könnte das Promise, das von {{jsxref("Promise.all()")}} zurückgegeben wird, geeigneter sein, wenn die Aufgaben voneinander abhängig sind oder wenn Sie bei Ablehnung sofort reagieren möchten.

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
- [Anleitung zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Elegante asynchrone Programmierung mit Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
