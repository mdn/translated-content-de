---
title: Promise.withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: 6af0c0d0b640e756765976ad854f4cc64c2f911c
---

{{JSRef}}

Die statische Methode **`Promise.withResolvers()`** gibt ein Objekt zurück, das ein neues {{jsxref("Promise")}}-Objekt sowie zwei Funktionen zum Auflösen oder Ablehnen dieses Promise enthält, entsprechend den zwei Parametern, die dem Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

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
  - : Eine Funktion, die das Promise auflöst. Informationen zur Semantik finden Sie im Referenzdokument des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors.
- `reject`
  - : Eine Funktion, die das Promise ablehnt. Informationen zur Semantik finden Sie im Referenzdokument des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors.

## Beschreibung

`Promise.withResolvers()` entspricht genau dem folgenden Code:

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

Es ist jedoch kürzer und erfordert nicht die Verwendung von {{jsxref("Statements/let", "let")}}.

Der Hauptunterschied bei der Verwendung von `Promise.withResolvers()` besteht darin, dass die Auflösungs- und Ablehnungsfunktionen nun im selben Gültigkeitsbereich wie das Promise selbst leben, anstatt einmal innerhalb des Executors erstellt und verwendet zu werden. Dies kann einige fortgeschrittene Anwendungsfälle ermöglichen, wie zum Beispiel deren Wiederverwendung für sich wiederholende Ereignisse, insbesondere bei Streams und Queues. Dies führt auch im Allgemeinen zu weniger Verschachtelung, als wenn viele Logiken innerhalb des Executors umschlossen werden.

`Promise.withResolvers()` ist generisch und unterstützt das Subclassing, was bedeutet, dass es auf Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Promise des Unterklassen-Typs enthalten wird. Dazu muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — das heißt, er muss eine einzelne `executor`-Funktion akzeptieren, die mit den `resolve`- und `reject`-Rückrufen als Parameter aufgerufen werden kann.

## Beispiele

### Umwandlung eines Streams in ein asynchrones Iterable

Der Anwendungsfall von `Promise.withResolvers()` besteht darin, wann Sie ein Promise haben, das von einem Ereignis-Listener aufgelöst oder abgelehnt werden sollte, der nicht innerhalb des Promise-Executors umschlossen werden kann. Das folgende Beispiel transformiert einen Node.js-[lesbaren Stream](https://nodejs.org/api/stream.html#class-streamreadable) in ein [asynchrones Iterable](/de/docs/Web/JavaScript/Reference/Statements/async_function*). Jedes `promise` repräsentiert hier einen einzelnen Datenblock, und jedes Mal, wenn der aktuelle Block gelesen wird, wird ein neues Promise für den nächsten Block erstellt. Beachten Sie, wie die Ereignis-Listener nur einmal angefügt werden, aber tatsächlich jede Version der `resolve`- und `reject`-Funktionen jedes Mal aufrufen.

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

`Promise.withResolvers()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der die gleiche Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir sie auf einem Konstruktor aufrufen, der `console.log` als die `resolve`- und `reject`-Funktionen an den `executor` übergibt:

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
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise")}}
- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
