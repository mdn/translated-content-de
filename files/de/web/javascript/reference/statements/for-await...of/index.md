---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`for await...of`**-Anweisung erstellt eine Schleife, die über [asynchrone iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) sowie [synchrone Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) iteriert. Diese Anweisung kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) zulässig ist, einschließlich innerhalb des Körpers einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder in einem [Modul](/de/docs/Web/JavaScript/Guide/Modules).

{{InteractiveExample("JavaScript Demo: Statement - For Await...Of", "taller")}}

```js interactive-example
async function* foo() {
  yield 1;
  yield 2;
}

(async function () {
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
  - : Erhält bei jeder Iteration einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)). Variablen, die mit `var` deklariert wurden, sind nicht lokal für die Schleife, d.h., sie befinden sich im selben Gültigkeitsbereich wie die `for await...of`-Schleife.
- `iterable`
  - : Ein asynchrones oder synchrones Iterable. Die Quelle der Sequenz von Werten, über die die Schleife arbeitet.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann `variable` referenzieren. Sie können eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wenn eine `for await...of`-Schleife über ein Iterable iteriert, ruft sie zuerst die Methode [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) des Iterables auf, was einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) zurückgibt. Falls die `@asyncIterator`-Methode nicht existiert, sucht sie nach einer [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode, die einen [synchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt. Der zurückgegebene synchrone Iterator wird dann in einen asynchronen Iterator umgewandelt, indem jedes Objekt, das von den Methoden `next()`, `return()` und `throw()` zurückgegeben wird, in ein aufgelöstes oder abgelehntes Promise gewrappt wird, wobei die `value`-Eigenschaft aufgelöst wird, falls auch sie ein Promise ist. Die Schleife ruft dann wiederholt die Methode [`next()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) des endgültigen asynchronen Iterators auf und _awaitet_ das zurückgegebene Promise, um die Sequenz von Werten zu erzeugen, die der `variable` zugewiesen werden.

Eine `for await...of`-Schleife endet, wenn der Iterator abgeschlossen ist (das _awaitete_ Ergebnis von `next()` ist ein Objekt mit `done: true`). Wie bei anderen Schleifen-Anweisungen können innerhalb von `statement` [Steuerfluss-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwendet werden:

- {{jsxref("Statements/break", "break")}} beendet die Ausführung von `statement` und springt zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} beendet die Ausführung von `statement` und springt zur nächsten Iteration der Schleife.

Falls die `for await...of`-Schleife vorzeitig beendet wird (z. B. durch eine `break`-Anweisung oder einen geworfenen Fehler), wird die Methode [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) des Iterators aufgerufen, um Bereinigungsoperationen durchzuführen. Das zurückgegebene Promise wird _awaitet_, bevor die Schleife endet.

`for await...of` funktioniert im Allgemeinen genauso wie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife und teilt viele der gleichen Syntax- und Semantikregeln. Es gibt jedoch einige Unterschiede:

- `for await...of` funktioniert sowohl für synchrone als auch für asynchrone Iterables, während `for...of` nur für synchrone Iterables funktioniert.
- `for await...of` kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) zulässig ist, z. B. innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules). Auch wenn das Iterable synchron ist, wartet die Schleife den Rückgabewert jeder Iteration ab, was zu einer langsameren Ausführung durch wiederholtes Entpacken von Promises führt.
- Wenn das `iterable` ein synchrones Iterable ist, das Promises liefert, würde `for await...of` eine Sequenz von aufgelösten Werten erzeugen, während `for...of` eine Sequenz von Promises erzeugen würde. (Beachten Sie jedoch Fehlerbehandlung und Bereinigung – siehe [Iterieren über synchrone Iterables und Generatoren](#iterieren_über_synchrone_iterables_und_generatoren))
- Bei `for await...of` kann `variable` der Bezeichner `async` sein (z. B. `for await (async of foo)`); bei `for...of` ist dieser Fall nicht erlaubt.

## Beispiele

### Iterieren über asynchrone Iterables

Sie können auch über ein Objekt iterieren, das explizit das asynchrone Iterable-Protokoll implementiert:

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

### Iterieren über asynchrone Generatoren

Da die Rückgabewerte asynchroner Generatorfunktionen mit dem asynchronen Iterable-Protokoll übereinstimmen, können diese mit `for await...of` durchlaufen werden.

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

Ein konkreteres Beispiel für das Iterieren über einen asynchronen Generator mit `for await...of` ist das Durchlaufen von Daten aus einer API.

In diesem Beispiel wird zunächst ein asynchrones Iterable für einen Datenstrom erstellt und anschließend verwendet, um die Größe der Antwort von der API zu ermitteln.

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

### Iterieren über synchrone Iterables und Generatoren

Die `for await...of`-Schleife verarbeitet auch synchrone Iterables und Generatoren. In solchen Fällen wartet sie intern auf die ausgegebenen Werte, bevor sie diese der Schleifensteuerungsvariablen zuweist.

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

> [!NOTE]
> Seien Sie vorsichtig bei der Ausgabe abgelehnter Promises aus einem synchronen Generator. In solchen Fällen wirft `for await...of` beim Verarbeiten des abgelehnten Promises einen Fehler und RUFT NICHT die `finally`-Blöcke innerhalb dieses Generators auf. Dies kann unerwünscht sein, wenn Sie einige zugewiesene Ressourcen mit `try/finally` freigeben müssen.

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.reject(3);
    yield 4;
    throw 5;
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
// caught 3

// compare with for-of loop:

try {
  for (const numOrPromise of generatorWithRejectedPromises()) {
    console.log(numOrPromise);
  }
} catch (e) {
  console.log("caught", e);
}
// 0
// 1
// Promise { 2 }
// Promise { <rejected> 3 }
// 4
// caught 5
// called finally
```

Um sicherzustellen, dass die `finally`-Blöcke eines synchronen Generators immer aufgerufen werden, verwenden Sie die geeignete Form der Schleife — `for await...of` für den asynchronen Generator und `for...of` für den synchronen — und warten Sie im Schleifen-Block explizit auf die ausgegebenen Promises.

```js
(async () => {
  try {
    for (const numOrPromise of generatorWithRejectedPromises()) {
      console.log(await numOrPromise);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// 0
// 1
// 2
// caught 3
// called finally
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Symbol.asyncIterator")}}
- {{jsxref("Statements/for...of", "for...of")}}
