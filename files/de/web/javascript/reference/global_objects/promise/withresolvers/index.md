---
title: Promise.withResolvers()
short-title: withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Promise.withResolvers()`** gibt ein Objekt zurück, das ein neues {{jsxref("Promise")}}-Objekt sowie zwei Funktionen zur Auflösung oder Ablehnung desselben enthält, die den beiden Parametern entsprechen, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

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
  - : Eine Funktion, die das Promise auflöst. Für seine Semantik siehe die Referenz des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors.
- `reject`
  - : Eine Funktion, die das Promise ablehnt. Für seine Semantik siehe die Referenz des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors.

## Beschreibung

`Promise.withResolvers()` ist exakt gleichbedeutend mit dem folgenden Code:

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

Mit der Ausnahme, dass es kürzer ist und nicht die Verwendung von {{jsxref("Statements/let", "let")}} erfordert.

Der entscheidende Unterschied bei der Verwendung von `Promise.withResolvers()` ist, dass die Auflösungs- und Ablehnungsfunktionen nun im gleichen Gültigkeitsbereich wie das Promise selbst leben, anstatt einmal im Executor erstellt und verwendet zu werden. Dies kann einige fortgeschrittenere Anwendungsfälle ermöglichen, wie z.B. deren Wiederverwendung für wiederkehrende Ereignisse, insbesondere bei Streams und Warteschlangen. Dies führt auch im Allgemeinen zu weniger Verschachtelung als beim Einwickeln von viel Logik innerhalb des Executors.

`Promise.withResolvers()` ist generisch und unterstützt Subklassenbildung, was bedeutet, dass es auf Subklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Promise des Subklasstyps enthält. Um dies zu tun, muss der Konstruktor der Subklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — er muss eine einzelne `executor`-Funktion akzeptieren, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann.

## Beispiele

### Umwandlung eines Streams in ein asynchrones Iterable

Der Anwendungsfall von `Promise.withResolvers()` ist, wenn Sie ein Promise haben, das durch einen Ereignislistener aufgelöst oder abgelehnt werden soll, der nicht innerhalb des Promise-Executors umwickelt werden kann. Das folgende Beispiel transformiert einen Node.js-[lesbaren Stream](https://nodejs.org/api/stream.html#class-streamreadable) in ein [asynchrones Iterable](/de/docs/Web/JavaScript/Reference/Statements/async_function*). Jedes `promise` repräsentiert hier einen einzelnen Datenbatch, der verfügbar ist, und jedes Mal, wenn der aktuelle Batch gelesen wird, wird ein neues Promise für den nächsten Batch erstellt. Beachten Sie, wie die Ereignislistener nur einmal angehängt werden, aber tatsächlich jedes Mal eine andere Version der `resolve`- und `reject`-Funktionen aufrufen.

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

### Aufruf von withResolvers() auf einem Nicht-Promise-Konstruktor

`Promise.withResolvers()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der die gleiche Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir sie auf einen Konstruktor aufrufen, der `console.log` als `resolve`- und `reject`-Funktionen an den `executor` übergibt:

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
- [es-shims polyfill von `Promise.withResolvers`](https://www.npmjs.com/package/promise.withresolvers)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise")}}
- [`Promise()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
