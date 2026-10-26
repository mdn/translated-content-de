---
title: Promise.withResolvers()
short-title: withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Promise.withResolvers()`** gibt ein Objekt zurück, das ein neues {{jsxref("Promise")}}-Objekt und zwei Funktionen enthält, mit denen dieses erfüllt oder zurückgewiesen werden kann. Die Funktionen entsprechen den beiden Parametern, die an den Executor des {{jsxref("Promise/Promise", "Promise()")}}-Konstruktors übergeben werden.

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
  - : Eine Funktion, die das Promise zurückweist. Informationen zu ihrer Semantik finden Sie in der Referenz zum {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor.

## Beschreibung

`Promise.withResolvers()` entspricht genau dem folgenden Code:

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

Allerdings ist die Methode kürzer und erfordert keine Verwendung von {{jsxref("Statements/let", "let")}}.

Der wesentliche Unterschied bei der Verwendung von `Promise.withResolvers()` besteht darin, dass sich die Funktionen zum Erfüllen und Zurückweisen nun im selben Gültigkeitsbereich wie das Promise selbst befinden, statt innerhalb des Executors erstellt und einmalig verwendet zu werden. Dies ermöglicht möglicherweise fortgeschrittenere Anwendungsfälle, etwa wenn die Funktionen für wiederkehrende Ereignisse wiederverwendet werden, insbesondere bei Streams und Warteschlangen. Außerdem führt dies im Allgemeinen zu weniger Verschachtelung, als wenn umfangreiche Logik im Executor untergebracht wird.

`Promise.withResolvers()` ist generisch und unterstützt Unterklassen. Die Methode kann daher für Unterklassen von `Promise` aufgerufen werden; das Ergebnis enthält dann ein Promise des Unterklassentyps. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren: Er muss eine einzelne `executor`-Funktion entgegennehmen, die mit den Callbacks `resolve` und `reject` als Parametern aufgerufen werden kann.

## Beispiele

### Einen Stream in ein asynchrones Iterable umwandeln

Ein Anwendungsfall für `Promise.withResolvers()` liegt vor, wenn ein Promise durch einen Event-Listener erfüllt oder zurückgewiesen werden soll, der sich nicht in den Promise-Executor einbinden lässt. Das folgende Beispiel wandelt einen [lesbaren Stream](https://nodejs.org/api/stream.html#class-streamreadable) von Node.js in ein [asynchrones Iterable](/de/docs/Web/JavaScript/Reference/Statements/async_function*) um. Jedes `promise` steht dabei für einen einzelnen verfügbaren Datenblock. Sobald der aktuelle Block gelesen wurde, wird ein neues Promise für den nächsten Block erstellt. Beachten Sie, dass die Event-Listener nur einmal registriert werden, bei jedem Aufruf aber eine andere Version der Funktionen `resolve` und `reject` verwenden.

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

### withResolvers() mit einem Konstruktor aufrufen, der kein Promise-Konstruktor ist

`Promise.withResolvers()` ist eine generische Methode. Sie kann mit jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert. Beispielsweise können wir sie mit einem Konstruktor aufrufen, der `console.log` als Funktionen `resolve` und `reject` an `executor` übergibt:

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

- [Polyfill für `Promise.withResolvers` in `core-js`](https://core-js.io/docs/features/ecmascript/promise)
- [Polyfill für `Promise.withResolvers` von es-shims](https://www.npmjs.com/package/promise.withresolvers)
- Leitfaden zur [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- [`Promise()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
