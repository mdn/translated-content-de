---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die **`for await...of`**-Anweisung erstellt eine Schleife, die über [asynchron iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) sowie [synchron iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) iteriert. Diese Anweisung kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) zulässig ist, etwa innerhalb des Funktionskörpers einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder in einem [Modul](/de/docs/Web/JavaScript/Guide/Modules).

{{InteractiveExample("JavaScript Demo: for await...of statement", "taller")}}

```js interactive-example
async function* foo() {
  yield 1;
  yield 2;
}

(async () => {
  for await (const num of foo()) {
    console.log(num);
    // Expected output: 1

    break; // Closes iterator, triggers return
  }
})();
```

## Syntax

```js-nolint
for await (variable of iterable)
  statement
```

- `variable`
  - : Erhält bei jeder Iteration einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein Ziel für eine [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Mit `var` deklarierte Variablen sind nicht auf die Schleife beschränkt, sondern befinden sich im selben Gültigkeitsbereich wie die `for await...of`-Schleife.
- `iterable`
  - : Ein asynchron oder synchron iterierbares Objekt. Es liefert die Sequenz von Werten, über die die Schleife iteriert.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Sie kann auf `variable` verweisen. Mit einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) können Sie mehrere Anweisungen ausführen.

## Beschreibung

Wenn eine `for await...of`-Schleife über ein iterierbares Objekt iteriert, ruft sie zunächst dessen Methode [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) ab und führt sie aus. Diese gibt einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) zurück. Wenn die Methode `@asyncIterator` nicht existiert, sucht die Schleife nach einer Methode [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator), die einen [synchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt. Der zurückgegebene synchrone Iterator wird anschließend in einen asynchronen Iterator umgewandelt: Jedes von den Methoden `next()`, `return()` und `throw()` zurückgegebene Objekt wird in ein erfülltes oder abgelehntes Promise verpackt. Ist die Eigenschaft `value` ebenfalls ein Promise, wird sie aufgelöst. Die Schleife ruft dann wiederholt die Methode [`next()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) des resultierenden asynchronen Iterators auf und [wartet](/de/docs/Web/JavaScript/Reference/Operators/await) auf das zurückgegebene Promise. So entsteht die Sequenz von Werten, die `variable` zugewiesen werden.

Eine `for await...of`-Schleife endet, wenn der Iterator abgeschlossen ist (das Ergebnis von `next()`, auf das gewartet wurde, ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie innerhalb von `statement` [Anweisungen zur Steuerung des Kontrollflusses](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} beendet die Ausführung von `statement` und setzt die Ausführung mit der ersten Anweisung nach der Schleife fort.
- {{jsxref("Statements/continue", "continue")}} beendet die Ausführung von `statement` und setzt die Schleife mit der nächsten Iteration fort.

Wenn die `for await...of`-Schleife vorzeitig verlassen wird (z. B. weil eine `break`-Anweisung erreicht oder ein Fehler ausgelöst wird), wird die Methode [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) des Iterators aufgerufen, um Aufräumarbeiten durchzuführen. Die Schleife wartet auf das zurückgegebene Promise, bevor sie endet.

`for await...of` funktioniert im Allgemeinen genauso wie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife und weist weitgehend dieselbe Syntax und Semantik auf. Es gibt jedoch einige Unterschiede:

- `for await...of` funktioniert sowohl mit synchron als auch mit asynchron iterierbaren Objekten, während `for...of` nur mit synchron iterierbaren Objekten funktioniert.
- `for await...of` kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) zulässig ist, etwa innerhalb des Funktionskörpers einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder in einem [Modul](/de/docs/Web/JavaScript/Guide/Modules). Auch bei einem synchron iterierbaren Objekt wartet die Schleife bei jeder Iteration auf den zurückgegebenen Wert. Das wiederholte Auspacken von Promises verlangsamt die Ausführung.
- Wenn `iterable` ein synchron iterierbares Objekt ist, das Promises liefert, erzeugt `for await...of` eine Sequenz aufgelöster Werte, während `for...of` eine Sequenz von Promises erzeugt.
- Bei `for await...of` kann `variable` der Bezeichner `async` sein (z. B. `for await (async of foo)`); bei `for...of` ist dies nicht zulässig.

Wie bei `for...of` darf die Variable bei Verwendung einer `using`-Deklaration nicht `of` heißen:

```js-nolint example-bad
for await (using of of []); // SyntaxError
```

Dadurch wird eine syntaktische Mehrdeutigkeit mit dem Code `for await (using of [])` vermieden, der vor der Einführung von `using` gültig war.

## Beispiele

### Über asynchron iterierbare Objekte iterieren

Sie können auch über ein Objekt iterieren, das das Protokoll für asynchron iterierbare Objekte ausdrücklich implementiert:

```js
const LIMIT = 3;

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        const done = i === LIMIT;
        const value = done ? undefined : i++;
        return Promise.resolve({ value, done });
      },
      return() {
        // This will be reached if the consumer called 'break' or 'return' early in the loop.
        return { done: true };
      },
    };
  },
};

(async () => {
  for await (const num of asyncIterable) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

### Über asynchrone Generatoren iterieren

Da die Rückgabewerte asynchroner Generatorfunktionen dem Protokoll für asynchron iterierbare Objekte entsprechen, können Sie mit `for await...of` über sie iterieren.

```js
async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async () => {
  for await (const num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

Ein konkreteres Beispiel für die Iteration über einen asynchronen Generator mit `for await...of` ist die Verarbeitung von Daten aus einer API.

In diesem Beispiel wird zunächst ein asynchron iterierbares Objekt für einen Datenstrom erstellt. Anschließend wird damit die Größe der API-Antwort ermittelt.

```js
async function* streamAsyncIterable(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

// Fetches data from URL and calculates response size using the async generator.
async function getResponseSize(url) {
  const response = await fetch(url);
  // Will hold the size of the response, in bytes.
  let responseSize = 0;
  // The for-await-of loop. Async iterates over each portion of the response.
  for await (const chunk of streamAsyncIterable(response.body)) {
    // Incrementing the total response length.
    responseSize += chunk.length;
  }

  console.log(`Response Size: ${responseSize} bytes`); // "Response Size: 1071472"
  return responseSize;
}
getResponseSize("https://jsonplaceholder.typicode.com/photos");
```

### Über synchron iterierbare Objekte und Generatoren iterieren

Die `for await...of`-Schleife kann auch synchron iterierbare Objekte und Generatoren verarbeiten. In diesem Fall wartet sie intern auf die ausgegebenen Werte, bevor sie diese der Schleifenvariablen zuweist.

```js
function* generator() {
  yield 0;
  yield 1;
  yield Promise.resolve(2);
  yield Promise.resolve(3);
  yield 4;
}

(async () => {
  for await (const num of generator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
// 3
// 4

// compare with for-of loop:

for (const numOrPromise of generator()) {
  console.log(numOrPromise);
}
// 0
// 1
// Promise { 2 }
// Promise { 3 }
// 4
```

Wenn ein synchroner Generator ein abgelehntes Promise liefert, ruft `for await...of` die Methode [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) des Generators auf, bevor der Ablehnungsgrund als Fehler ausgelöst wird. Dadurch können `finally`-Blöcke innerhalb des Generators ausgeführt werden.

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.reject(new Error("failed"));
    yield 4;
    throw new Error("throws");
  } finally {
    console.log("called finally");
  }
}

(async () => {
  try {
    for await (const num of generatorWithRejectedPromises()) {
      console.log(num);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// 0
// 1
// 2
// called finally
// caught Error: failed
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Symbol.asyncIterator")}}
- {{jsxref("Statements/for...of", "for...of")}}
