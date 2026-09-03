---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
l10n:
  sourceCommit: f34bebcf0fec2d69b96bb313c37f7e67b0355830
---

Der **`for await...of`**-Ausdruck erstellt eine Schleife, die über [asynchrone iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) sowie über [synchrone Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) iteriert. Dieser Ausdruck kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) eingesetzt werden kann, was den Körper einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) einschließt.

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
  - : Empfängt bei jeder Iteration einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z.B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Gültigkeitsbereich, in dem die `for await...of`-Schleife ist.
- `iterable`
  - : Ein asynchrones oder synchrones iterables Objekt. Quelle der Wertsequenz, auf der die Schleife operiert.
- `statement`
  - : Ein Befehl, der bei jeder Iteration ausgeführt wird. Kann `variable` referenzieren. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wenn eine `for await...of`-Schleife über ein Iterable iteriert, erhält sie zunächst die [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)-Methode des Iterables und ruft sie auf, was einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) zurückgibt. Falls die `@asyncIterator`-Methode nicht existiert, sucht sie nach einer [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode, die einen [synchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt. Der zurückgegebene synchrone Iterator wird dann in einen asynchronen Iterator umgewandelt, indem jedes von den Methoden `next()`, `return()` und `throw()` zurückgegebene Objekt in ein erfülltes oder abgelehntes Promise umgewandelt wird, wobei die `value`-Eigenschaft aufgelöst wird, wenn sie ebenfalls ein Promise ist. Die Schleife ruft dann wiederholt die `next()`-Methode des endgültigen asynchronen Iterators auf und [wartet](/de/docs/Web/JavaScript/Reference/Operators/await) auf das zurückgegebene Promise, um die Wertsequenz zu erzeugen, die der `variable` zugewiesen wird.

Eine `for await...of`-Schleife wird beendet, wenn der Iterator abgeschlossen ist (das erwartete `next()`-Ergebnis ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb des `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und fährt mit der nächsten Iteration der Schleife fort.

Wenn die `for await...of`-Schleife vorzeitig beendet wurde (z.B. wenn eine `break`-Anweisung auftritt oder ein Fehler ausgelöst wird), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des Iterators aufgerufen, um eine Bereinigung durchzuführen. Das zurückgegebene Promise wird erwartet, bevor die Schleife beendet wird.

`for await...of` funktioniert im Allgemeinen ähnlich wie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife und teilt viele der gleichen Syntax und Semantik. Es gibt jedoch einige Unterschiede:

- `for await...of` funktioniert sowohl mit synchronen als auch mit asynchronen Iterables, während `for...of` nur mit synchronen Iterables funktioniert.
- `for await...of` kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, was den Körper einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) einschließt. Selbst wenn das Iterable synchron ist, wartet die Schleife dennoch auf den Rückgabewert für jede Iteration, was aufgrund des wiederholten Promise-Abrufens zu einer langsameren Ausführung führt.
- Wenn das `iterable` ein synchrones Iterable ist, das Promises erzeugt, würde `for await...of` eine Sequenz von aufgelösten Werten erzeugen, während `for...of` eine Sequenz von Promises erzeugen würde.
- Bei `for await...of` kann die `variable` der Bezeichner `async` sein (z.B. `for await (async of foo)`); `for...of` verbietet diesen Fall.

Wie bei `for...of`, wenn Sie eine `using`-Deklaration verwenden, darf die Variable nicht `of` genannt werden:

```js-nolint example-bad
for await (using of of []); // SyntaxError
```

Dies ist, um Syntaxambiguität mit dem gültigen Code `for await (using of [])` zu vermeiden, bevor `using` eingeführt wurde.

## Beispiele

### Iteration über asynchrone Iterables

Sie können auch über ein Objekt iterieren, das das asynchrone Iterierbare-Protokoll explizit implementiert:

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

### Iteration über asynchrone Generatoren

Da die Rückgabewerte von asynchronen Generatorfunktionen dem asynchronen Iterierbaren-Protokoll entsprechen, können sie mit `for await...of` durchlaufen werden.

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

Für ein konkreteres Beispiel der Iteration über einen asynchronen Generator mit `for await...of`, betrachten Sie die Iteration über Daten einer API.

Dieses Beispiel erstellt zuerst ein asynchrones Iterable für einen Datenstrom und verwendet es dann, um die Größe der Antwort von der API zu bestimmen.

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

### Iteration über synchrone Iterables und Generatoren

`for await...of`-Schleife verbraucht auch synchrone Iterables und Generatoren. In diesem Fall wartet sie intern auf die ausgegebenen Werte, bevor sie der Schleifensteuerungsvariable zugewiesen werden.

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

Wenn ein synchroner Generator ein abgelehntes Promise liefert, ruft `for await...of` die [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return)-Methode des Generators auf, bevor der Ablehnungsgrund ausgelöst wird, was es den `finally`-Blöcken innerhalb dieses Generators ermöglicht, zu laufen.

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
