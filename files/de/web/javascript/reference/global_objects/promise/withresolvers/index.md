---
title: Promise.withResolvers()
short-title: withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: a6a2daec3965d85ef6dfc06cfd3507c1b2f886e2
---

Die statische Methode **`Promise.withResolvers()`** gibt ein Objekt zurück, das ein neues {{jsxref("Promise")}}-Objekt und zwei Funktionen enthält, um es zu erfüllen oder abzulehnen, entsprechend den zwei Parametern, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

## Syntax

```js-nolint
Promise.withResolvers()
```

### Parameter

Keine.

### Rückgabewert

Ein einfaches Objekt mit den folgenden Eigenschaften:

- `promise`
  - : Ein {{jsxref("Promise")}}-Objekt.
- `resolve`
  - : Eine Funktion, die das Promise erfüllt. Informationen zu ihrer Semantik finden Sie in der Referenz zum {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor.
- `reject`
  - : Eine Funktion, die das Promise ablehnt. Informationen zu ihrer Semantik finden Sie in der Referenz zum {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor.

## Beschreibung

`Promise.withResolvers()` entspricht exakt dem folgenden Code:

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

Abgesehen davon, dass sie kürzer ist und die Verwendung von {{jsxref("Statements/let", "let")}} nicht erfordert.

Der wesentliche Unterschied bei der Verwendung von `Promise.withResolvers()` besteht darin, dass die Funktionen zum Erfüllen und Ablehnen nun im selben Gültigkeitsbereich wie das Promise selbst existieren, anstatt einmal innerhalb des Executors erstellt und verwendet zu werden. Dies kann einige fortgeschrittenere Anwendungsfälle ermöglichen, etwa wenn sie für wiederkehrende Ereignisse wiederverwendet werden, insbesondere bei Streams und Queues. Außerdem führt dies im Allgemeinen zu weniger Verschachtelungen, als wenn viel Logik innerhalb des Executors gekapselt wird.

`Promise.withResolvers()` ist generisch und unterstützt Unterklassenbildung. Das bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Promise des Unterklassentyps enthält. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren – also eine einzelne `executor`-Funktion akzeptieren, die mit den Callbacks `resolve` und `reject` als Parameter aufgerufen werden kann.

## Beispiele

### Einen Stream in ein asynchrones Iterable umwandeln

Der Anwendungsfall für `Promise.withResolvers()` ist, wenn Sie ein Promise haben, das durch einen Event-Listener erfüllt oder abgelehnt werden soll, der nicht innerhalb des Promise-Executors gekapselt werden kann. Das folgende Beispiel wandelt einen Node.js-[lesbaren Stream](https://nodejs.org/api/stream.html#class-streamreadable) in ein [asynchrones Iterable](/de/docs/Web/JavaScript/Reference/Statements/async_function*) um. Jedes `promise` repräsentiert hier einen einzelnen verfügbaren Datenblock, und jedes Mal, wenn der aktuelle Datenblock gelesen wird, wird ein neues Promise für den nächsten Datenblock erstellt. Beachten Sie, dass die Event-Listener nur einmal angehängt werden, aber jedes Mal tatsächlich eine andere Version der Funktionen `resolve` und `reject` aufrufen.

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

### withResolvers() auf einem Nicht-Promise-Konstruktor aufrufen

`Promise.withResolvers()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert. Beispielsweise können wir sie auf einem Konstruktor aufrufen, der `console.log` als Funktionen `resolve` und `reject` an `executor` übergibt:

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

  static withResolvers = Promise.withResolvers;
}

const { promise, resolve, reject } = NotPromise.withResolvers();
resolve("hello");
// Logs: Resolved hello
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.withResolvers` in `core-js`](https://github.com/zloirock/core-js#promisewithresolvers)
- [es-shims-Polyfill von `Promise.withResolvers`](https://www.npmjs.com/package/promise.withresolvers)
- Leitfaden [Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
