---
title: Promise.withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die statische Methode **`Promise.withResolvers()`** gibt ein Objekt zurück, das ein neues {{jsxref("Promise")}}-Objekt und zwei Funktionen enthält, um es aufzulösen oder abzulehnen, entsprechend den beiden Parametern, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Syntax

```js-nolint
Promise.withResolvers()
```

### Parameter

Keine.

### Rückgabewert

Ein einfaches Objekt, das die folgenden Eigenschaften enthält:

- `promise`
  - : Ein {{jsxref("Promise")}}-Objekt.
- `resolve`
  - : Eine Funktion, die das Promise auflöst. Für die Semantik siehe die Referenz des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors.
- `reject`
  - : Eine Funktion, die das Promise ablehnt. Für die Semantik siehe die Referenz des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors.

## Beschreibung

`Promise.withResolvers()` entspricht genau dem folgenden Code:

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

Außer dass es präziser ist und nicht die Verwendung von {{jsxref("Statements/let", "let")}} erfordert.

Der Hauptunterschied bei der Verwendung von `Promise.withResolvers()` besteht darin, dass die Auflösungs- und Ablehnungsfunktionen im gleichen Gültigkeitsbereich wie das Promise selbst leben und nicht einmal innerhalb des Executors erstellt und verwendet werden. Dies kann einige fortgeschrittenere Anwendungsfälle ermöglichen, wie die Wiederverwendung bei wiederkehrenden Ereignissen, insbesondere bei Streams und Warteschlangen. Dies führt auch in der Regel zu weniger Verschachtelung, als wenn viel Logik innerhalb des Executors verpackt wird.

`Promise.withResolvers()` ist generisch und unterstützt Vererbung, was bedeutet, dass es auf Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Promise des Unterklassen-Typs enthalten wird. Dazu muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — er muss eine einzelne `executor`-Funktion akzeptieren, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann.

## Beispiele

### Transformieren eines Streams in ein asynchrones Iterable

Der Anwendungsfall von `Promise.withResolvers()` tritt auf, wenn Sie ein Promise haben, das durch einen Ereignis-Listener aufgelöst oder abgelehnt werden soll, der nicht im Promise-Executor verpackt werden kann. Das folgende Beispiel transformiert einen Node.js [lesbaren Stream](https://nodejs.org/api/stream.html#class-streamreadable) in ein [asynchrones Iterable](/de/docs/Web/JavaScript/Reference/Statements/async_function*). Jedes `promise` hier repräsentiert ein einzelnes verfügbares Datenpaket, und jedes Mal, wenn das aktuelle Paket gelesen wird, wird ein neues Promise für das nächste Paket erstellt. Beachten Sie, wie die Ereignis-Listener nur einmal angehängt werden, tatsächlich aber jedes Mal eine andere Version der `resolve`- und `reject`-Funktionen aufrufen.

```js
async function* readableToAsyncIterable(stream) {
  let { promise, resolve, reject } = Promise.withResolvers();
  stream.on("error", (error) => reject(error));
  stream.on("end", () => resolve());
  stream.on("readable", () => resolve());

  while (stream.readable) {
    await promise;
    let chunk;
    while ((chunk = stream.read())) {
      yield chunk;
    }
    ({ promise, resolve, reject } = Promise.withResolvers());
  }
}
```

### Aufrufen von withResolvers() auf einem Nicht-Promise-Konstruktor

`Promise.withResolvers()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der die gleiche Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir ihn auf einem Konstruktor aufrufen, der `console.log` als `resolve`- und `reject`-Funktionen an `executor` übergibt:

```js
class NotPromise {
  constructor(executor) {
    // The "resolve" and "reject" functions behave nothing like the native
    // promise's, but Promise.withResolvers() just returns them, as is.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

const { promise, resolve, reject } = Promise.withResolvers.call(NotPromise);
resolve("hello");
// Logs: Resolved hello
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.withResolvers` in `core-js`](https://github.com/zloirock/core-js#promisewithresolvers)
- [es-shims Polyfill von `Promise.withResolvers`](https://www.npmjs.com/package/promise.withresolvers)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise")}}
- [`Promise()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
