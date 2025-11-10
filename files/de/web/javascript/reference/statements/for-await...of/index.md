---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`for await...of`**-Anweisung erstellt eine Schleife, die über [asynchronen iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) sowie [synchronen Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) iteriert. Diese Anweisung kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, was den Körper einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) einschließt.

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
  - : Empfängt bei jeder Iteration einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Variablen, die mit `var` deklariert wurden, sind nicht lokal für die Schleife, d.h. sie befinden sich im gleichen Gültigkeitsbereich wie die `for await...of`-Schleife.
- `iterable`
  - : Ein asynchrones oder synchrones Iterable. Die Quelle der Wertsequenz, über die die Schleife operiert.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` verweisen. Sie können eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wenn eine `for await...of`-Schleife über ein Iterable iteriert, ruft sie zuerst die [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)-Methode des Iterables auf und ruft diese auf, die einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) zurückgibt. Wenn die `@asyncIterator`-Methode nicht existiert, sucht sie nach einer [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode, die einen [synchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt. Der zurückgegebene synchrone Iterator wird dann in einen asynchronen Iterator umgewandelt, indem jedes von den `next()`, `return()` und `throw()`-Methoden zurückgegebene Objekt in ein erfülltes oder abgelehntes Promise gewickelt wird, wobei die `value`-Eigenschaft aufgelöst wird, wenn sie ebenfalls ein Promise ist. Die Schleife ruft dann wiederholt die `next()`-Methode des endgültigen asynchronen Iterators auf und wartet das zurückgegebene Promise ab, um die Wertesequenz zu erzeugen, die `variable` zugewiesen wird.

Eine `for await...of`-Schleife wird beendet, wenn der Iterator abgeschlossen ist (das erwartete `next()`-Ergebnis ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb der `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und fährt mit der ersten Anweisung nach der Schleife fort.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und fährt mit der nächsten Iteration der Schleife fort.

Wenn die `for await...of`-Schleife vorzeitig beendet wurde (z. B. wenn eine `break`-Anweisung auftritt oder ein Fehler auftritt), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des Iterators aufgerufen, um Aufräumarbeiten durchzuführen. Das zurückgegebene Promise wird erwartet, bevor die Schleife beendet wird.

`for await...of` funktioniert im Allgemeinen wie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife und teilt viele der gleichen Syntax und Semantik. Es gibt ein paar Unterschiede:

- `for await...of` funktioniert bei sowohl synchronen als auch asynchronen Iterables, während `for...of` nur bei synchronen Iterables funktioniert.
- `for await...of` kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, was den Körper einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) einschließt. Auch wenn das Iterable synchron ist, wartet die Schleife trotzdem den Rückgabewert für jede Iteration, was aufgrund des wiederholten Entpackens von Promises zu einer langsameren Ausführung führt.
- Wenn das `iterable` ein synchrones Iterable ist, das Promises liefert, würde `for await...of` eine Sequenz von aufgelösten Werten generieren, während `for...of` eine Sequenz von Promises generieren würde. (Seien Sie jedoch vorsichtig bei der Fehlerbehandlung und Aufräumarbeiten — siehe [Iterieren über synchrone Iterables und Generatoren](#iterieren_über_synchrone_iterables_und_generatoren))
- Für `for await...of` kann die `variable` der Bezeichner `async` sein (z. B. `for await (async of foo)`); `for...of` verbietet diesen Fall.

Wie `for...of`, wenn Sie eine `using`-Deklaration verwenden, darf die Variable nicht `of` genannt werden:

```js-nolint example-bad
for await (using of of []); // SyntaxError
```

Dies ist, um Syntax-Mehrdeutigkeiten mit dem gültigen Code `for await (using of [])` zu vermeiden, bevor `using` eingeführt wurde.

## Beispiele

### Iterieren über asynchrone Iterables

Sie können auch über ein Objekt iterieren, das das asynchrone iterierbare Protokoll explizit implementiert:

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

Da die Rückgabewerte von asynchronen Generatorfunktionen dem asynchronen iterierbaren Protokoll entsprechen, können sie mit `for await...of` durchlaufen werden.

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

Für ein konkreteres Beispiel des Iterierens über einen asynchronen Generator mithilfe von `for await...of` betrachten Sie das Iterieren über Daten von einer API.

Dieses Beispiel erstellt zunächst ein asynchrones Iterable für einen Datenstrom und verwendet es dann, um die Größe der Antwort von der API zu ermitteln.

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

Die `for await...of`-Schleife konsumiert auch synchrone Iterables und Generatoren. In diesem Fall wartet sie intern die ausgegebenen Werte ab, bevor sie sie der Schleifensteuerungsvariablen zuweist.

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
> Beachten Sie, dass abgelehnte Promises von einem synchronen Generator erzeugt werden. In einem solchen Fall wirft `for await...of` einen Fehler beim Konsumieren des abgelehnten Promise und ruft NICHT die `finally`-Blöcke innerhalb dieses Generators auf. Dies kann unerwünscht sein, wenn Sie einige zugewiesene Ressourcen mit `try/finally` freigeben müssen.

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

Um sicherzustellen, dass die `finally`-Blöcke eines synchronen Generators immer aufgerufen werden, verwenden Sie die geeignete Form der Schleife — `for await...of` für den asynchronen Generator und `for...of` für den synchronen — und warten Sie explizit ab, dass Promises innerhalb der Schleife ausgegeben werden.

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
