---
title: Promise.withResolvers()
short-title: withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`Promise.withResolvers()`** statische Methode gibt ein Objekt zurück, das ein neues {{jsxref("Promise")}}-Objekt und zwei Funktionen zum Auflösen oder Ablehnen enthält, die den beiden Parametern entsprechen, die dem Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

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
  - : Eine Funktion, die das Promise auflöst. Für die Semantik siehe die {{jsxref("Promise/Promise", "Promise()")}}-Konstruktorreferenz.
- `reject`
  - : Eine Funktion, die das Promise ablehnt. Für die Semantik siehe die {{jsxref("Promise/Promise", "Promise()")}}-Konstruktorreferenz.

## Beschreibung

`Promise.withResolvers()` ist genau äquivalent zu folgendem Code:

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

Abgesehen davon, dass es prägnanter ist und die Verwendung von {{jsxref("Statements/let", "let")}} nicht erfordert.

Der entscheidende Unterschied bei der Verwendung von `Promise.withResolvers()` besteht darin, dass die Auflösungs- und Ablehnungsfunktionen nun im gleichen Gültigkeitsbereich wie das Promise selbst liegen, anstatt einmal innerhalb des Executors erstellt und verwendet zu werden. Dies kann einige fortgeschrittene Anwendungsfälle ermöglichen, wie zum Beispiel das Wiederverwenden für wiederkehrende Ereignisse, insbesondere bei Streams und Warteschlangen. Dies führt auch im Allgemeinen zu weniger Verschachtelung als das Einwickeln vieler Logik innerhalb des Executors.

`Promise.withResolvers()` ist generisch und unterstützt Subclassing, das bedeutet, dass es auf Unterklassen von `Promise` aufgerufen werden kann, und das Ergebnis ein Promise des Unterklassentyps enthalten wird. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor implementieren – eine einzelne `executor`-Funktion, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann.

## Beispiele

### Ein Stream in ein asynchrones Iterable umwandeln

Ein Anwendungsfall von `Promise.withResolvers()` ist, wenn Sie ein Promise haben, das durch irgendeinen Event-Listener aufgelöst oder abgelehnt werden soll, der nicht innerhalb des Promise-Executors eingehüllt werden kann. Das folgende Beispiel wandelt einen Node.js [lesbaren Stream](https://nodejs.org/api/stream.html#class-streamreadable) in ein [asynchrones Iterable](/de/docs/Web/JavaScript/Reference/Statements/async_function*) um. Jedes `promise` hier repräsentiert einen einzelnen verfügbaren Datenblock, und jedes Mal, wenn der aktuelle Block gelesen wird, wird ein neues Promise für den nächsten Block erstellt. Beachten Sie, wie die Event-Listener nur einmal angehängt werden, aber tatsächlich jedes Mal eine andere Version der `resolve`- und `reject`-Funktionen aufrufen.

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

`Promise.withResolvers()` ist eine generische Methode. Sie kann auf jeden Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir es auf einem Konstruktor aufrufen, der `console.log` als die `resolve`- und `reject`-Funktionen zum `executor` übergibt:

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
- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
