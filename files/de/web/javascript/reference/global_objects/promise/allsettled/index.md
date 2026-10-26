---
title: Promise.allSettled()
short-title: allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Promise.allSettled()`** nimmt ein Iterable von Promises entgegen und gibt ein einzelnes {{jsxref("Promise")}} zurück. Dieses zurückgegebene Promise wird erfüllt, sobald alle übergebenen Promises abgeschlossen sind (auch wenn ein leeres Iterable übergeben wird). Sein Erfüllungswert ist ein Array von Objekten, die das Ergebnis jedes Promise beschreiben.

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
  - : Ein [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (beispielsweise ein {{jsxref("Array")}}) von Promises. Auf diese Werte wird mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) gewartet. Daher werden auch andere [Thenables](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) aufgelöst, während Werte, die keine Thenables sind, unverändert zurückgegeben werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das:

- **bereits erfüllt ist**, wenn das übergebene `iterable` leer ist.
- **asynchron erfüllt wird**, sobald alle Promises im übergebenen `iterable` abgeschlossen sind (entweder erfüllt oder zurückgewiesen). Der Erfüllungswert ist ein Array von Objekten. Jedes Objekt beschreibt das Ergebnis eines Promise aus dem `iterable`. Die Reihenfolge entspricht der Reihenfolge der übergebenen Promises, unabhängig davon, wann sie abgeschlossen wurden. Jedes Ergebnisobjekt hat die folgenden Eigenschaften:
  - `status`
    - : Ein String, entweder `"fulfilled"` oder `"rejected"`, der den endgültigen Zustand des Promise angibt.
  - `value`
    - : Nur vorhanden, wenn `status` den Wert `"fulfilled"` hat. Der Wert, mit dem das Promise erfüllt wurde.
  - `reason`
    - : Nur vorhanden, wenn `status` den Wert `"rejected"` hat. Der Grund, aus dem das Promise zurückgewiesen wurde.

  Wenn das übergebene `iterable` nicht leer ist, aber keine ausstehenden Promises enthält, wird das zurückgegebene Promise dennoch asynchron (und nicht synchron) erfüllt.

## Beschreibung

Die Methode `Promise.allSettled()` gehört zu den Methoden für die [nebenläufige Verarbeitung von Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). `Promise.allSettled()` wird typischerweise verwendet, wenn mehrere asynchrone Aufgaben unabhängig voneinander erfolgreich abgeschlossen werden können oder wenn Sie in jedem Fall das Ergebnis jedes Promise erfahren möchten.

Im Vergleich dazu kann das von {{jsxref("Promise.all()")}} zurückgegebene Promise besser geeignet sein, wenn die Aufgaben voneinander abhängen oder wenn das zurückgegebene Promise sofort zurückgewiesen werden soll, sobald eines der übergebenen Promises zurückgewiesen wird.

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

Sie können die Ergebnisse auch destrukturieren, sodass Sie für jedes Ergebnis eine eigene Variable erhalten.

```js
const [status1, status2] = await Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
]);

// status1 = { status: 'fulfilled', value: 33 }
// status2 = { status: 'fulfilled', value: 66 }
```

Wenn Sie das Ergebnis destrukturieren, müssen die Ergebnisvariablen in derselben Reihenfolge stehen wie die übergebenen Promises. Eine abweichende Reihenfolge kann schwer erkennbare Fehler verursachen. Die Methode {{jsxref("Promise.allSettledKeyed()")}} vermeidet dieses Problem, indem sie jedem Eingabe- und Ausgabewert einen Schlüssel zuordnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Promise.allSettled` in `core-js`](https://core-js.io/docs/features/ecmascript/promise)
- [Polyfill für `Promise.allSettled` von es-shims](https://www.npmjs.com/package/promise.allsettled)
- [Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises) – Leitfaden
- [Robuste asynchrone Programmierung mit Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettledKeyed()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
