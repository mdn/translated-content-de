---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Die **`for await...of`**-Anweisung erstellt eine Schleife, die über [asynchrone iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) sowie [synchrone Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) iteriert. Diese Anweisung kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, einschließlich innerhalb eines [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Körpers und in einem [Modul](/de/docs/Web/JavaScript/Guide/Modules).

{{EmbedInteractiveExample("pages/js/statement-forawaitof.html", "taller")}}

## Syntax

```js-nolint
for await (variable of iterable)
  statement
```

- `variable`
  - : Empfängt bei jeder Iteration einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungszuweisungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)). Mit `var` deklarierte Variablen sind nicht lokal für die Schleife, d. h., sie befinden sich im selben Gültigkeitsbereich wie die `for await...of`-Schleife.
- `iterable`
  - : Ein asynchrones oder synchrones Iterable. Die Quelle der Wertsequenz, auf der die Schleife arbeitet.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` verweisen. Sie können eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wenn eine `for await...of`-Schleife über ein Iterable iteriert, erhält sie zunächst die [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)-Methode des Iterables und ruft sie auf, was einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) zurückgibt. Wenn die `@asyncIterator`-Methode nicht existiert, wird nach einer [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode gesucht, die einen [synchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt. Der zurückgegebene synchrone Iterator wird dann in einen asynchronen Iterator gewrappt, indem jedes von den `next()`, `return()` und `throw()`-Methoden zurückgegebene Objekt in ein aufgelöstes oder abgelehntes Versprechen gewrappt wird, wobei die `value`-Eigenschaft aufgelöst wird, wenn es auch ein Versprechen ist. Die Schleife ruft dann wiederholt die `next()`-Methode des finalen asynchronen Iterators auf und wartet auf das zurückgegebene Versprechen, wodurch die Wertsequenz erzeugt wird, die `variable` zugewiesen wird.

Eine `for await...of`-Schleife endet, wenn der Iterator abgeschlossen ist (das erwartete `next()`-Ergebnis ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Wenn die `for await...of`-Schleife vorzeitig beendet wird (z. B. wird eine `break`-Anweisung getroffen oder ein Fehler tritt auf), wird die `return()`-Methode des Iterators aufgerufen, um eine Reinigung durchzuführen. Das zurückgegebene Versprechen wird abgewartet, bevor die Schleife endet.

`for await...of` funktioniert im Allgemeinen genauso wie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife und teilt viele der gleichen Syntax und Semantik. Es gibt einige Unterschiede:

- `for await...of` funktioniert sowohl bei synchronen als auch asynchronen Iterables, während `for...of` nur bei synchronen Iterables funktioniert.
- `for await...of` kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, einschließlich innerhalb eines [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Körpers und in einem [Modul](/de/docs/Web/JavaScript/Guide/Modules). Selbst wenn das Iterable synchron ist, wartet die Schleife dennoch den Rückgabewert für jede Iteration ab, was zu einer langsameren Ausführung aufgrund wiederholten Versprechen-Entpackerlei führt.
- Wenn das `iterable` ein synchrones Iterable ist, das Versprechen liefert, würde `for await...of` eine Sequenz von aufgelösten Werten produzieren, während `for...of` eine Sequenz von Versprechen produzieren würde. (Achtung bei der Fehlerbehandlung und Reinigung – siehe [Iterieren über synchrone Iterables und Generatoren](#iterieren_über_synchrone_iterables_und_generatoren))
- Bei `for await...of` kann `variable` der Bezeichner `async` sein (z. B. `for await (async of foo)`); `for...of` verbietet diesen Fall.

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

Da die Rückgabewerte von asynchronen Generatorfunktionen dem asynchronen Iterable-Protokoll entsprechen,
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

Für ein konkreteres Beispiel zum Iterieren über einen asynchronen Generator mit `for await...of` betrachten Sie das Iterieren über Daten von einer API.

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

Die `for await...of`-Schleife verbraucht auch synchrone Iterables und Generatoren. In diesem Fall wartet sie intern auf emittierte Werte, bevor sie ihnen der Schleifenkontrollvariablen zuweist.

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
> Seien Sie achtsam beim Yielden von abgelehnten Versprechen aus einem synchronen Generator. In einem solchen Fall wirft `for await...of` beim Konsumieren des abgelehnten Versprechens einen Fehler und RUFT KEINE `finally`-Blöcke innerhalb dieses Generators AUF. Dies kann unerwünscht sein, wenn Sie einige zugewiesene Ressourcen mit `try/finally` freigeben müssen.

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

Um sicherzustellen, dass die `finally`-Blöcke eines synchronen Generators immer aufgerufen werden, verwenden Sie die entsprechende Form der Schleife — `for await...of` für den asynchronen Generator und `for...of` für den synchronen — und warten Sie explizit auf die gelieferten Versprechen innerhalb der Schleife.

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
