---
title: Promise.allSettled()
short-title: allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
l10n:
  sourceCommit: cbf7f4b55e2c0bc0c096773435b159edcaa8c9e2
---

Die **`Promise.allSettled()`** statische Methode nimmt ein iterables Objekt von Promises als Eingabe und gibt ein einziges {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise erfüllt sich, wenn alle Promises der Eingabe abgeschlossen sind (einschließlich bei Übergabe eines leeren iterablen Objekts), mit einem Array von Objekten, die das Ergebnis jedes Promises beschreiben.

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
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Promises. Diese Werte werden [awaited](/de/docs/Web/JavaScript/Reference/Operators/await), sodass auch andere [thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) aufgelöst werden, während nicht-thenable Werte unverändert zurückgegeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **Bereits erfüllt** ist, wenn das übergebene `iterable` leer ist.
- **Asynchron erfüllt** wird, wenn alle Promises im gegebenen `iterable` abgeschlossen sind (entweder erfüllt oder abgelehnt). Der Erfüllungswert ist ein Array von Objekten, die jeweils das Ergebnis eines Promises im `iterable` beschreiben, in der Reihenfolge der übergebenen Promises, unabhängig von der Abschlussreihenfolge. Jedes Ergebnisobjekt hat die folgenden Eigenschaften:
  - `status`
    - : Ein String, entweder `"fulfilled"` oder `"rejected"`, der den endgültigen Status des Promises angibt.
  - `value`
    - : Nur vorhanden, wenn `status` `"fulfilled"` ist. Der Wert, mit dem das Promise erfüllt wurde.
  - `reason`
    - : Nur vorhanden, wenn `status` `"rejected"` ist. Der Grund, warum das Promise abgelehnt wurde.

  Wenn das übergebene `iterable` nicht leer ist, jedoch keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (anstatt synchron) erfüllt.

## Beschreibung

Die `Promise.allSettled()` Methode ist eine der [Promise-Konkurrenzmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). `Promise.allSettled()` wird typischerweise verwendet, wenn Sie mehrere asynchrone Aufgaben haben, die nicht voneinander abhängig sind, um erfolgreich abgeschlossen zu werden, oder wenn Sie immer das Ergebnis jedes Promises erfahren möchten.

Zum Vergleich: Das von {{jsxref("Promise.all()")}} zurückgegebene Promise könnte geeigneter sein, wenn die Aufgaben voneinander abhängig sind oder wenn Sie bei Ablehnung eines Promises sofort eine Ablehnung wünschen.

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

Sie können die Ergebnisse auch destrukturieren, um für jedes Ergebnis einer Erledigung eine eigene Variable zu haben.

```js
const [status1, status2] = Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
]);

// status1 = { status: 'fulfilled', value: 33 }
// status2 = { status: 'fulfilled', value: 66 }
```

Wenn Sie das Ergebnis destrukturieren, müssen Sie die Ergebnisvariablen in der gleichen Reihenfolge halten wie die Eingabepromises; eine Abweichung kann subtile Fehler verursachen. Die Methode {{jsxref("Promise.allSettledKeyed()")}} vermeidet dieses Problem, indem sie jede Eingabe und Ausgabe mit einem Schlüssel verknüpft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.allSettled` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [es-shims Polyfill von `Promise.allSettled`](https://www.npmjs.com/package/promise.allsettled)
- [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Asynchrone Programmierung mit Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettledKeyed()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
