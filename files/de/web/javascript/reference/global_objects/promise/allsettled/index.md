---
title: Promise.allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{JSRef}}

Die statische Methode **`Promise.allSettled()`** nimmt ein iterierbares Objekt von `Promises` als Eingabe und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Eingabepromises abgeschlossen sind (auch wenn ein leeres iterierbares Objekt übergeben wird), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.

{{EmbedInteractiveExample("pages/js/promise-allsettled.html", "taller")}}

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
- **Asynchron erfüllt** ist, wenn alle Promises im gegebenen `iterable` abgeschlossen sind (entweder erfüllt oder abgelehnt). Der Erfüllungswert ist ein Array von Objekten, die das Ergebnis eines jeden Promises im `iterable` beschreiben, in der Reihenfolge der übergebenen Promises, unabhängig von der Reihenfolge der Erledigung. Jedes Ergebnisobjekt hat die folgenden Eigenschaften:

  - `status`
    - : Ein String, entweder `"fulfilled"` oder `"rejected"`, der den endgültigen Zustand des Promises angibt.
  - `value`
    - : Nur vorhanden, wenn `status` `"fulfilled"` ist. Der Wert, mit dem das Promise erfüllt wurde.
  - `reason`
    - : Nur vorhanden, wenn `status` `"rejected"` ist. Der Grund, warum das Promise abgelehnt wurde.

  Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (anstatt synchron) erfüllt.

## Beschreibung

Die Methode `Promise.allSettled()` ist eine der [Promise-Konkurrenzmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). `Promise.allSettled()` wird typischerweise verwendet, wenn Sie mehrere asynchrone Aufgaben haben, die nicht voneinander abhängig sind, um erfolgreich abgeschlossen zu werden, oder wenn Sie immer das Ergebnis jedes Promises wissen möchten.

Im Vergleich dazu kann das von {{jsxref("Promise.all()")}} zurückgegebene Promise geeigneter sein, wenn die Aufgaben voneinander abhängig sind oder wenn Sie eine sofortige Ablehnung wünschen, sobald eines von ihnen abgelehnt wird.

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
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Graceful asynchronous programming with promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
