---
title: Promise.withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: 6af0c0d0b640e756765976ad854f4cc64c2f911c
---

{{JSRef}}

Die statische Methode **`Promise.withResolvers()`** gibt ein Objekt zurück, das ein neues {{jsxref("Promise")}}-Objekt und zwei Funktionen enthält, um es zu lösen oder abzulehnen, entsprechend der beiden Parameter, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

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
  - : Eine Funktion, die das Versprechen löst. Für die Semantik siehe die Referenz des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors.
- `reject`
  - : Eine Funktion, die das Versprechen ablehnt. Für die Semantik siehe die Referenz des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors.

## Beschreibung

`Promise.withResolvers()` ist genau äquivalent zu folgendem Code:

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

Abgesehen davon, dass es kürzer ist und nicht den Einsatz von {{jsxref("Statements/let", "let")}} erfordert.

Der Hauptunterschied bei der Verwendung von `Promise.withResolvers()` besteht darin, dass die Auflösungs- und Ablehnungsfunktionen nun im selben Geltungsbereich wie das Versprechen selbst leben, anstatt innerhalb des Executors erstellt und einmal verwendet zu werden. Dies kann einige fortgeschrittene Anwendungsfälle ermöglichen, wie zum Beispiel deren Wiederverwendung für wiederkehrende Ereignisse, insbesondere bei Streams und Warteschlangen. Dies führt außerdem im Allgemeinen zu weniger Verschachtelung als das Einbetten vieler Logik innerhalb des Executors.

`Promise.withResolvers()` ist generisch und unterstützt Subclassing, was bedeutet, dass es auf Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Versprechen des Unterklassentyps enthält. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor implementieren – also eine einzelne `executor` Funktion akzeptieren, die mit den `resolve` und `reject` Rückrufen als Parameter aufgerufen werden kann.

## Beispiele

### Umwandlung eines Streams in ein asynchrones Iterable

Ein Anwendungsfall von `Promise.withResolvers()` ist, wenn Sie ein Versprechen haben, das durch einen Ereignislistener gelöst oder abgelehnt werden soll, der nicht in den Executor des Versprechens eingebettet werden kann. Das folgende Beispiel wandelt einen Node.js [readable stream](https://nodejs.org/api/stream.html#class-streamreadable) in ein [asynchrones Iterable](/de/docs/Web/JavaScript/Reference/Statements/async_function*) um. Jedes `promise` hier repräsentiert ein einzelnes Datenpaket, das verfügbar ist, und jedes Mal, wenn das aktuelle Paket gelesen wird, wird ein neues Versprechen für das nächste Paket erstellt. Beachten Sie, wie die Ereignislistener nur einmal angehängt werden, aber tatsächlich jedes Mal eine andere Version der `resolve` und `reject` Funktionen aufrufen.

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

### Aufruf von withResolvers() auf einem Nicht-Versprechen-Konstruktor

`Promise.withResolvers()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir sie auf einem Konstruktor aufrufen, der `console.log` als die `resolve` und `reject` Funktionen an den `executor` übergibt:

```js
class NotPromise {
  constructor(executor) {
    // Die Funktionen "resolve" und "reject" verhalten sich nicht wie die nativen
    // des Versprechens, aber Promise.withResolvers() gibt sie genau so zurück, wie sie sind.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

const { promise, resolve, reject } = Promise.withResolvers.call(NotPromise);
resolve("hello");
// Protrokolliert: Resolved hello
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Promise.withResolvers` in `core-js`](https://github.com/zloirock/core-js#promisewithresolvers)
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- {{jsxref("Promise")}}
- [`Promise()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
