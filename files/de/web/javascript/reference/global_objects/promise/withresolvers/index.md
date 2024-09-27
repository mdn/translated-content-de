---
title: Promise.withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: 6af0c0d0b640e756765976ad854f4cc64c2f911c
---

{{JSRef}}

Die statische Methode **`Promise.withResolvers()`** gibt ein Objekt zurück, das ein neues {{jsxref("Promise")}}-Objekt und zwei Funktionen zum Auflösen oder Ablehnen des Versprechens enthält, die den beiden Parametern entsprechen, die dem Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben wurden.

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
  - : Eine Funktion, die das Versprechen auflöst. Für deren Semantik siehe die {{jsxref("Promise/Promise", "Promise()")}}-Konstruktorreferenz.
- `reject`
  - : Eine Funktion, die das Versprechen ablehnt. Für deren Semantik siehe die {{jsxref("Promise/Promise", "Promise()")}}-Konstruktorreferenz.

## Beschreibung

`Promise.withResolvers()` ist genau äquivalent zu folgendem Code:

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

Der Unterschied besteht darin, dass sie kürzer ist und nicht die Verwendung von {{jsxref("Statements/let", "let")}} erfordert.

Der wesentliche Unterschied bei der Verwendung von `Promise.withResolvers()` besteht darin, dass die Auflösungs- und Ablehnungsfunktionen sich nun im selben Gültigkeitsbereich wie das Versprechen selbst befinden, anstatt einmal innerhalb des Executors erstellt und verwendet zu werden. Dies kann einige fortgeschrittenere Anwendungsfälle ermöglichen, z. B. wenn sie für wiederkehrende Ereignisse wiederverwendet werden, insbesondere bei Streams und Queues. Dies führt auch in der Regel zu weniger Verschachtelung als das Einwickeln von viel Logik innerhalb des Executors.

`Promise.withResolvers()` ist generisch und unterstützt Subclassing, was bedeutet, dass es auf Subklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Versprechen des Subklassen-Typs enthalten wird. Dazu muss der Konstruktor der Subklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — mit einer einzigen `executor`-Funktion, die mit den `resolve`- und `reject`-Rückrufen als Parameter aufgerufen werden kann.

## Beispiele

### Einen Stream in ein asynchrones Iterable transformieren

Der Anwendungsfall von `Promise.withResolvers()` besteht darin, wenn Sie ein Versprechen haben, das durch einen Ereignis-Listener aufgelöst oder abgelehnt werden soll, der nicht innerhalb des Promise-Executors erfasst werden kann. Das folgende Beispiel transformiert einen Node.js-[lesbaren Stream](https://nodejs.org/api/stream.html#class-streamreadable) in ein [asynchrones Iterable](/de/docs/Web/JavaScript/Reference/Statements/async_function*). Jedes `promise` hier repräsentiert eine einzelne Charge von verfügbaren Daten, und jedes Mal, wenn die aktuelle Charge gelesen wird, wird ein neues Versprechen für die nächste Charge erstellt. Beachten Sie, wie die Ereignis-Listener nur einmal angehängt werden, aber tatsächlich jedes Mal eine andere Version der `resolve`- und `reject`-Funktionen aufrufen.

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

`Promise.withResolvers()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der die gleiche Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir sie auf einem Konstruktor aufrufen, der `console.log` als `resolve`- und `reject`-Funktionen an `executor` übergibt:

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
