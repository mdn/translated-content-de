---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Die **`for await...of`**-Anweisung erstellt eine Schleife, die über [asynchrone iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) sowie über [synchrone Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) iteriert. Diese Anweisung kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, was den Rumpf einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) einschließt.

{{EmbedInteractiveExample("pages/js/statement-forawaitof.html", "taller")}}

## Syntax

```js-nolint
for await (variable of iterable)
  statement
```

- `variable`
  - : Empfängt bei jeder Iteration einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungs-](/de/docs/Web/JavaScript/Reference/Operators/Assignment)ziel (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungszuweisungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)). Variablen, die mit `var` deklariert werden, sind nicht lokal zur Schleife, d. h. sie befinden sich im gleichen Gültigkeitsbereich wie die `for await...of`-Schleife.
- `iterable`
  - : Ein asynchrones oder synchrones Iterable. Die Quelle der Wertesequenz, auf der die Schleife operiert.
- `statement`
  - : Ein auszuführender Ausdruck bei jeder Iteration. Kann auf `variable` verweisen. Sie können einen [Block-Statement](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wenn eine `for await...of`-Schleife über ein Iterable iteriert, erhält sie zuerst die [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)-Methode des Iterables und ruft diese auf, die einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) zurückgibt. Wenn die `@asyncIterator`-Methode nicht existiert, sucht sie nach einer [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode, die einen [synchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt. Der zurückgegebene synchrone Iterator wird dann in einen asynchronen Iterator umgewandelt, indem jedes aus den Methoden `next()`, `return()` und `throw()` zurückgegebene Objekt in ein aufgelöstes oder abgelehntes Promise verpackt wird, wobei die `value`-Eigenschaft aufgelöst wird, wenn sie ebenfalls ein Promise ist. Die Schleife ruft dann wiederholt die `next()`-Methode des finalen asynchronen Iterators auf und wartet auf das zurückgegebene Promise, wodurch die Wertesequenz erzeugt wird, die der `variable` zugewiesen wird.

Eine `for await...of`-Schleife endet, wenn der Iterator abgeschlossen ist (das erwartete `next()`-Ergebnis ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Wenn die `for await...of`-Schleife vorzeitig beendet wurde (z. B. wenn eine `break`-Anweisung auftaucht oder ein Fehler ausgelöst wird), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des Iterators aufgerufen, um alle Bereinigungen durchzuführen. Das zurückgegebene Promise wird erwartet, bevor die Schleife endet.

`for await...of` funktioniert im Allgemeinen genauso wie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife und teilt viele der gleichen Syntax und Semantik. Es gibt ein paar Unterschiede:

- `for await...of` funktioniert sowohl bei synchronen als auch bei asynchronen Iterables, während `for...of` nur bei synchronen Iterables funktioniert.
- `for await...of` kann nur in Kontexten verwendet werden, in denen [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden kann, was den Rumpf einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) einschließt. Auch wenn das Iterable synchron ist, erwartet die Schleife den Rückgabewert bei jeder Iteration, was zu einer langsameren Ausführung aufgrund wiederholter Promise-Auflösungen führt.
- Wenn das `iterable` ein synchrones Iterable ist, das Promises erzeugt, würde `for await...of` eine Sequenz von aufgelösten Werten erzeugen, während `for...of` eine Sequenz von Promises erzeugen würde. (Vorsicht bei der Fehlerbehandlung und -bereinigung — siehe [Iterieren über synchrone Iterables und Generatoren](#iterieren_über_synchrone_iterables_und_generatoren))
- Für `for await...of` kann `variable` der Bezeichner `async` sein (z. B. `for await (async of foo)`); bei `for...of` ist dies verboten.

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
        // Dies wird erreicht, wenn der Verbraucher 'break' oder 'return' vorzeitig in der Schleife aufgerufen hat.
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

// Daten von URL abrufen und Antwortgröße mit dem asynchronen Generator berechnen.
async function getResponseSize(url) {
  const response = await fetch(url);
  // Wird die Größe der Antwort in Bytes halten.
  let responseSize = 0;
  // Die for-await-of Schleife. Asynchron iteriert über jeden Teil der Antwort.
  for await (const chunk of streamAsyncIterable(response.body)) {
    // Erhöhen der Gesamtlänge der Antwort.
    responseSize += chunk.length;
  }

  console.log(`Response Size: ${responseSize} bytes`); // "Response Size: 1071472"
  return responseSize;
}
getResponseSize("https://jsonplaceholder.typicode.com/photos");
```

### Iterieren über synchrone Iterables und Generatoren

Die `for await...of`-Schleife verbraucht auch synchrone Iterables und Generatoren. In diesem Fall wartet sie intern auf ausgegebene Werte, bevor sie der Schleifensteuerungsvariablen zugewiesen werden.

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

// Vergleichen mit der for-of Schleife:

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
> Achten Sie darauf, abgelehnte Promises von einem synchronen Generator zurückzugeben. In einem solchen Fall löst `for await...of` beim Konsumieren des abgelehnten Promises einen Fehler aus und RUFT die `finally`-Blöcke innerhalb dieses Generators NICHT auf. Dies kann unerwünscht sein, wenn Sie einige zugewiesene Ressourcen mit `try/finally` freigeben müssen.

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
    console.log("finally aufgerufen");
  }
}

(async () => {
  try {
    for await (const num of generatorWithRejectedPromises()) {
      console.log(num);
    }
  } catch (e) {
    console.log("gefangen", e);
  }
})();
// 0
// 1
// 2
// gefangen 3

// Vergleichen mit der for-of Schleife:

try {
  for (const numOrPromise of generatorWithRejectedPromises()) {
    console.log(numOrPromise);
  }
} catch (e) {
  console.log("gefangen", e);
}
// 0
// 1
// Promise { 2 }
// Promise { <rejected> 3 }
// 4
// gefangen 5
// finally aufgerufen
```

Um sicherzustellen, dass die `finally`-Blöcke eines synchronen Generators immer ausgeführt werden, verwenden Sie die passende Form der Schleife — `for await...of` für den asynchronen Generator und `for...of` für den synchronen — und erwarten Sie explizit die zurückgegebenen Promises innerhalb der Schleife.

```js
(async () => {
  try {
    for (const numOrPromise of generatorWithRejectedPromises()) {
      console.log(await numOrPromise);
    }
  } catch (e) {
    console.log("gefangen", e);
  }
})();
// 0
// 1
// 2
// gefangen 3
// finally aufgerufen
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Symbol.asyncIterator")}}
- {{jsxref("Statements/for...of", "for...of")}}
