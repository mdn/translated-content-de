---
title: Promise.allSettled()
short-title: allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
l10n:
  sourceCommit: be192f259ab62db4718f9120ee95a2a6874d9838
---

Die statische Methode **`Promise.allSettled()`** nimmt ein Iterable von Promises entgegen und gibt eine einzelne {{jsxref("Promise")}} zurück. Die zurückgegebene Promise wird erfüllt, sobald alle übergebenen Promises abgeschlossen sind (auch wenn ein leeres Iterable übergeben wurde). Ihr Erfüllungswert ist ein Array von Objekten, die das Ergebnis jeder Promise beschreiben.

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
  - : Ein [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) von Promises (beispielsweise ein {{jsxref("Array")}}). Auf diese Werte wird mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) gewartet. Daher werden auch andere [Thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) aufgelöst, während Werte, die keine Thenables sind, unverändert zurückgegeben werden.

### Rückgabewert

Eine {{jsxref("Promise")}}, die:

- **bereits erfüllt** ist, wenn das übergebene `iterable` leer ist.
- **asynchron erfüllt** wird, sobald alle Promises im übergebenen `iterable` abgeschlossen sind (entweder erfüllt oder zurückgewiesen). Der Erfüllungswert ist ein Array von Objekten. Jedes Objekt beschreibt das Ergebnis einer Promise im `iterable`. Die Reihenfolge entspricht der Reihenfolge der übergebenen Promises, unabhängig davon, wann sie abgeschlossen werden. Jedes Ergebnisobjekt hat die folgenden Eigenschaften:
  - `status`
    - : Ein String, entweder `"fulfilled"` oder `"rejected"`, der den endgültigen Zustand der Promise angibt.
  - `value`
    - : Nur vorhanden, wenn `status` den Wert `"fulfilled"` hat. Der Wert, mit dem die Promise erfüllt wurde.
  - `reason`
    - : Nur vorhanden, wenn `status` den Wert `"rejected"` hat. Der Grund, aus dem die Promise zurückgewiesen wurde.

  Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird die zurückgegebene Promise trotzdem asynchron (statt synchron) erfüllt.

## Beschreibung

Die Methode `Promise.allSettled()` gehört zu den Methoden für die [Promise-Konkurrenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). `Promise.allSettled()` wird üblicherweise verwendet, wenn mehrere asynchrone Aufgaben unabhängig voneinander erfolgreich abgeschlossen werden können oder wenn Sie das Ergebnis jeder Promise in jedem Fall erfahren möchten.

Im Vergleich dazu ist die von {{jsxref("Promise.all()")}} zurückgegebene Promise möglicherweise besser geeignet, wenn die Aufgaben voneinander abhängen oder wenn die zurückgegebene Promise sofort zurückgewiesen werden soll, sobald eine der übergebenen Promises zurückgewiesen wird.

## Beispiele

### Promise.allSettled() verwenden

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

Sie können die Ergebnisse auch destrukturieren, um für jedes Ergebnis eine eigene Variable zu erhalten.

```js
const [status1, status2] = await Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
]);

// status1 = { status: 'fulfilled', value: 33 }
// status2 = { status: 'fulfilled', value: 66 }
```

Wenn Sie das Ergebnis destrukturieren, müssen die Ergebnisvariablen in derselben Reihenfolge stehen wie die übergebenen Promises. Eine abweichende Reihenfolge kann schwer erkennbare Fehler verursachen. Die Methode {{jsxref("Promise.allSettledKeyed()")}} vermeidet dieses Problem, indem sie jeder Eingabe und Ausgabe einen Schlüssel zuordnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Promise.allSettled` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Polyfill für `Promise.allSettled` von es-shims](https://www.npmjs.com/package/promise.allsettled)
- [Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises) – Leitfaden
- [Robuste asynchrone Programmierung mit Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettledKeyed()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
