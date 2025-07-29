---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`for await...of`**-Anweisung erzeugt eine Schleife, die über [asynchrone Iterable-Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) sowie [synchrone Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) iteriert. Diese Anweisung kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, was den Körper einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) einschließt.

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
  - : Empfängt bei jeder Iteration einen Wert aus der Sequenz. Kann eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Variablen, die mit `var` deklariert wurden, sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Geltungsbereich wie die `for await...of` Schleife.
- `iterable`
  - : Ein asynchrones oder synchrones Iterable. Die Quelle der Sequenz von Werten, auf denen die Schleife operiert.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` verweisen. Sie können einen [Block](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wenn eine `for await...of`-Schleife über ein Iterable iteriert, ruft sie zunächst die [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)-Methode des Iterables auf, die einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) zurückgibt. Wenn die `@asyncIterator`-Methode nicht existiert, wird nach einer [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode gesucht, die einen [synchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt. Der zurückgegebene synchrone Iterator wird dann in einen asynchronen Iterator umgewandelt, indem jedes von den `next()`, `return()` und `throw()`-Methoden zurückgegebene Objekt in ein aufgelöstes oder abgelehntes Promise eingeschlossen wird, wobei die `value`-Eigenschaft aufgelöst wird, wenn es sich ebenfalls um ein Promise handelt. Die Schleife ruft dann wiederholt die `next()`-Methode des endgültigen asynchronen Iterators auf und [erwartet](/de/docs/Web/JavaScript/Reference/Operators/await) das zurückgegebene Promise, was die Sequenz von Werten erzeugt, die der `variable` zugewiesen werden.

Eine `for await...of`-Schleife beendet sich, wenn der Iterator abgeschlossen ist (das erwartete `next()`-Ergebnis ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie innerhalb von `statement` [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} beendet die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} beendet die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Wenn die `for await...of`-Schleife vorzeitig beendet wurde (z. B. durch eine `break`-Anweisung oder wenn ein Fehler auftritt), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des Iterators aufgerufen, um eventuelle Aufräumarbeiten durchzuführen. Das zurückgegebene Promise wird erwartet, bevor die Schleife beendet wird.

`for await...of` funktioniert im Allgemeinen genauso wie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife und teilt viele der gleichen Syntaxen und Semantiken. Es gibt einige Unterschiede:

- `for await...of` funktioniert sowohl mit synchronen als auch asynchronen Iterables, während `for...of` nur mit synchronen Iterables funktioniert.
- `for await...of` kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, was den Körper einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) einschließt. Auch wenn das Iterable synchron ist, wartet die Schleife trotzdem den Rückgabewert für jede Iteration, was aufgrund des wiederholten Promise-Auseinandersetzens langsamer ist.
- Wenn das `iterable` ein synchrones Iterable ist, das Promises liefert, würde `for await...of` eine Sequenz von aufgelösten Werten erzeugen, während `for...of` eine Sequenz von Promises erzeugen würde. (Seien Sie jedoch vorsichtig bei der Fehlerbehandlung und Aufräumarbeit — siehe [Iterieren über synchrone Iterables und Generatoren](#iterieren_über_synchrone_iterables_und_generatoren))
- Für `for await...of` kann die `variable` der Bezeichner `async` sein (z. B. `for await (async of foo)`); `for...of` verbietet diesen Fall.

Wie `for...of`, wenn Sie eine `using`-Deklaration verwenden, dann darf die Variable nicht `of` genannt werden:

```js-nolint example-bad
for await (using of of []); // SyntaxError
```

Dies soll eine Syntaxzweideutigkeit mit dem gültigen Code `for await (using of [])` vermeiden, bevor `using` eingeführt wurde.

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

Da die Rückgabewerte asynchroner Generatorfunktionen dem asynchronen Iterable-Protokoll entsprechen,
können sie mit `for await...of` durchlaufen werden.

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

Für ein konkreteres Beispiel zur Iteration über einen asynchronen Generator mit `for await...of`, betrachten Sie die Iteration über Daten von einer API.

Dieses Beispiel erstellt zunächst ein asynchrones Iterable für einen Datenstrom und nutzt es dann, um die Größe der Antwort von der API zu finden.

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

Die `for await...of`-Schleife konsumiert auch synchrone Iterables und Generatoren. In diesem Fall erwartet sie intern ausgegebene Werte, bevor sie sie der Schleifensteuerungsvariable zuweist.

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
> Seien Sie sich bewusst, dass die Erzeugung von abgelehnten Promises aus einem synchronen Generator bei der Verwendung von `for await...of` einen Fehler werfen kann und NICHT die `finally`-Blöcke innerhalb dieses Generators aufruft. Dies kann unerwünscht sein, wenn Sie einige zugewiesene Ressourcen mit `try/finally` freigeben müssen.

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
// caught Error: failed

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
// Promise { <rejected> Error: failed }
// 4
// caught Error: throws
// called finally
```

Um sicherzustellen, dass `finally`-Blöcke eines synchronen Generators immer aufgerufen werden, verwenden Sie die entsprechende Form der Schleife — `for await...of` für den asynchronen Generator und `for...of` für den synchronen — und warten Sie die ausgegebenen Promises explizit innerhalb der Schleife.

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
// caught Error: failed
// called finally
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Symbol.asyncIterator")}}
- {{jsxref("Statements/for...of", "for...of")}}
