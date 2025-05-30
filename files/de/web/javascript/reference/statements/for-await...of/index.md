---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{jsSidebar("Statements")}}

Die **`for await...of`**-Anweisung erstellt eine Schleife, die über [asynchrone iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) sowie [synchron iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) iteriert. Diese Anweisung kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, was den Körper einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) einschließt.

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
  - : Empfängt bei jeder Iteration einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine vorher deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Variablen, die mit `var` deklariert werden, sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Gültigkeitsbereich, wie die `for await...of`-Schleife.
- `iterable`
  - : Ein asynchrones oder synchrones iterierbares Objekt. Die Quelle der Wertesequenz, auf die die Schleife zugreift.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann `variable` referenzieren. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wenn eine `for await...of`-Schleife über ein iterierbares Objekt iteriert, ruft sie zunächst die [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)-Methode des iterierbaren Objekts auf und erhält einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols). Falls die `@asyncIterator`-Methode nicht existiert, sucht sie nach einer [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode, die einen [synchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt. Der zurückgegebene synchrone Iterator wird dann in einen asynchronen Iterator umgewandelt, indem jedes Objekt, das von den Methoden `next()`, `return()` und `throw()` zurückgegeben wird, in ein aufgelöstes oder abgelehntes Promise umgewandelt wird, wobei die `value`-Eigenschaft aufgelöst wird, wenn sie ebenfalls ein Promise ist. Die Schleife ruft dann wiederholt die [`next()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des endgültigen asynchronen Iterators auf und wartet das zurückgegebene Promise ab, wodurch die Sequenz von Werten erzeugt wird, die `variable` zugewiesen werden.

Eine `for await...of`-Schleife wird beendet, wenn der Iterator abgeschlossen ist (das erwartete `next()`-Ergebnis ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} beendet die Ausführung von `statement` und springt zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} beendet die Ausführung von `statement` und setzt die nächste Iteration der Schleife fort.

Wenn die `for await...of`-Schleife vorzeitig beendet wurde (z. B. ein `break`-Statement auftritt oder ein Fehler geworfen wird), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des Iterators aufgerufen, um eine Bereinigung durchzuführen. Das zurückgegebene Promise wird erwartet, bevor die Schleife verlassen wird.

`for await...of` funktioniert im Allgemeinen genauso wie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife und teilt viele der gleichen Syntax und Semantik. Es gibt einige Unterschiede:

- `for await...of` funktioniert sowohl bei synchronen als auch asynchronen Iterables, während `for...of` nur bei synchronen Iterables funktioniert.
- `for await...of` kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, was den Körper einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) einschließt. Selbst wenn das Iterable synchron ist, wartet die Schleife bei jeder Iteration den Rückgabewert, was zu einer langsameren Ausführung aufgrund des wiederholten Entpackens von Promises führt.
- Wenn das `iterable` ein synchrones Iterable ist, das Promises ergibt, würde `for await...of` eine Sequenz von aufgelösten Werten erzeugen, während `for...of` eine Sequenz von Promises erzeugen würde. (Aber Vorsicht bei Fehlerbehandlung und Bereinigung — siehe [Iterieren über synchrone Iterables und Generatoren](#iterieren_über_synchrone_iterables_und_generatoren))
- Bei `for await...of` kann die `variable` der Bezeichner `async` sein (z. B. `for await (async of foo)`); `for...of` verbietet diesen Fall.

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

Da die Rückgabewerte von asynchronen Generatorfunktionen dem asynchronen Iterable-Protokoll entsprechen, können sie mit `for await...of` durchlaufen werden.

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

Für ein konkreteres Beispiel zum Iterieren über einen asynchronen Generator mit `for await...of`, betrachten Sie das Iterieren über Daten einer API.

Dieses Beispiel erstellt zuerst ein asynchrones Iterable für einen Datenstrom und verwendet es dann, um die Größe der Antwort von der API zu ermitteln.

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

Die `for await...of`-Schleife konsumiert auch synchrone Iterables und Generatoren. In diesem Fall wartet sie intern auf die ausgegebenen Werte, bevor sie der Schleifenkontrollvariablen zugewiesen werden.

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
> Beachten Sie das Ausgeben abgelehnter Promises aus einem synchronen Generator. In einem solchen Fall wirft `for await...of` beim Konsumieren des abgelehnten Promises einen Fehler und ruft NICHT die `finally`-Blöcke in diesem Generator auf. Dies kann unerwünscht sein, wenn Sie einige zugewiesene Ressourcen mit `try/finally` freigeben müssen.

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

Um sicherzustellen, dass `finally`-Blöcke eines synchronen Generators immer aufgerufen werden, verwenden Sie die jeweilige Form der Schleife — `for await...of` für den asynchronen Generator und `for...of` für den synchronen — und erwarten Sie ausdrücklich ausgegebene Promises innerhalb der Schleife.

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
