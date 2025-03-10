---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Statements")}}

Die **`for await...of`** Anweisung erstellt eine Schleife, die über [asynchrone Iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) sowie [synchrone Iterierbare](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) iteriert. Diese Anweisung kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, was den Körper einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) einschließt.

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
  - : Empfängt einen Wert aus der Sequenz bei jeder Iteration. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Gültigkeitsbereich wie die `for await...of` Schleife.
- `iterable`
  - : Ein asynchrones oder synchrones iterierbares Objekt. Die Quelle der Wertsequenz, über die die Schleife betrieben wird.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` verweisen. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wenn eine `for await...of` Schleife über ein iterierbares Objekt iteriert, wird zunächst die [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) Methode des iterierbaren Objekts abgerufen und aufgerufen, was einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) zurückgibt. Wenn die `@asyncIterator` Methode nicht existiert, wird nach einer [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) Methode gesucht, die einen [synchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt. Der zurückgegebene synchrone Iterator wird dann in einen asynchronen Iterator umgewandelt, indem jedes Objekt, das von den `next()`, `return()` und `throw()` Methoden zurückgegeben wird, in ein erfülltes oder abgelehntes Versprechen umgewandelt wird, wobei die `value`-Eigenschaft aufgelöst wird, wenn sie ebenfalls ein Versprechen ist. Die Schleife ruft dann wiederholt die [`next()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Methode des endgültigen asynchronen Iterators auf und wartet das zurückgegebene Versprechen ab, um die Wertsequenz zu erhalten, die `variable` zugewiesen werden soll.

Eine `for await...of` Schleife beendet sich, wenn der Iterator abgeschlossen ist (das gewartete `next()` Ergebnis ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie innerhalb von `statement` [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Wenn die `for await...of` Schleife vorzeitig beendet wurde (z. B. wenn eine `break` Anweisung auftritt oder ein Fehler auftritt), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Methode des Iterators aufgerufen, um eine Bereinigung durchzuführen. Das zurückgegebene Versprechen wird abgewartet, bevor die Schleife beendet wird.

`for await...of` funktioniert im Allgemeinen genauso wie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife und teilt viele der gleichen Syntax und Semantik. Es gibt einige Unterschiede:

- `for await...of` funktioniert sowohl mit synchronen als auch asynchronen iterierbaren Objekten, während `for...of` nur mit synchronen iterierbaren Objekten funktioniert.
- `for await...of` kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, was den Körper einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) einschließt. Selbst wenn das iterierbare Objekt synchron ist, wartet die Schleife auf den Rückgabewert für jede Iteration, was zu einer langsameren Ausführung aufgrund der wiederholten Entpackung von Versprechen führt.
- Wenn das `iterable` ein synchrones iterierbares Objekt ist, das Versprechen ausgibt, würde `for await...of` eine Sequenz von aufgelösten Werten erzeugen, während `for...of` eine Sequenz von Versprechen erzeugen würde. (Beachten Sie jedoch die Fehlerbehandlung und -bereinigung – siehe [Iterieren über synchrone iterierbare Objekte und Generatoren](#iterieren_über_synchrone_iterierbare_und_generatoren))
- Bei `for await...of` kann `variable` der Bezeichner `async` sein (z. B. `for await (async of foo)`); `for...of` verbietet diesen Fall.

## Beispiele

### Iterieren über asynchrone Iterierbare

Sie können auch über ein Objekt iterieren, das explizit das asynchrone iterierbare Protokoll implementiert:

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

Für ein konkreteres Beispiel zum Iterieren über einen asynchronen Generator mit `for await...of`, ziehen Sie das Iterieren über Daten aus einer API in Betracht.

Dieses Beispiel erstellt zuerst ein asynchrones iterierbares Objekt für einen Datenstrom und verwendet es dann, um die Größe der Antwort von der API zu ermitteln.

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

### Iterieren über synchrone Iterierbare und Generatoren

Eine `for await...of` Schleife konsumiert auch synchrone Iterierbare und Generatoren. In diesem Fall wartet sie intern auf die ausgegebenen Werte, bevor sie sie der Schleifensteuerungsvariablen zuweist.

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
> Seien Sie sich bewusst, dass abgelehnte Versprechen aus einem synchronen Generator ausgegeben werden. In diesem Fall wirft `for await...of` beim Konsumieren des abgelehnten Versprechens eine Ausnahme und ruft KEINE `finally` Blöcke in diesem Generator auf. Dies kann unerwünscht sein, wenn Sie Ressourcen mit `try/finally` freigeben müssen.

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

Um sicherzustellen, dass `finally` Blöcke eines synchronen Generators immer aufgerufen werden, verwenden Sie die geeignete Form der Schleife — `for await...of` für den asynchronen Generator und `for...of` für den synchronen — und warten Sie die ausgegebenen Versprechen explizit innerhalb der Schleife ab.

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
