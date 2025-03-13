---
title: async function*
slug: Web/JavaScript/Reference/Statements/async_function*
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`async function*`** Deklaration erstellt eine {{Glossary("binding", "Binding")}} einer neuen asynchronen Generatorfunktion zu einem gegebenen Namen.

Sie können asynchrone Generatorfunktionen auch mit dem [`async function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*) definieren.

{{InteractiveExample("JavaScript Demo: async function* declaration", "taller")}}

```js interactive-example
async function* foo() {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
}

let str = "";

async function generate() {
  for await (const val of foo()) {
    str = str + val;
  }
  console.log(str);
}

generate();
// Expected output: "abc"
```

## Syntax

```js-nolint
async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> Asynchrone Generatorfunktionen haben keinen Gegenpart in Pfeilfunktionen.

> **Hinweis:** `function` und `*` sind separate Tokens, so dass sie durch [Leerzeichen oder Zeilentrenner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) getrennt werden können. Es darf sich jedoch kein Zeilentrenner zwischen `async` und `function` befinden, andernfalls wird ein Semikolon [automatisch eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), wodurch `async` zu einem Bezeichner wird und der Rest zu einer `function*` Deklaration wird.

### Parameter

- `name`
  - : Der Funktionsname.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Für die Syntax der Parameter siehe die [Funktionsreferenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Eine `async function*` Deklaration erstellt ein {{jsxref("AsyncGeneratorFunction")}} Objekt. Jedes Mal, wenn eine asynchrone Generatorfunktion aufgerufen wird, gibt sie ein neues {{jsxref("AsyncGenerator")}} Objekt zurück, das dem [asynchronen Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) entspricht. Jeder Aufruf von `next()` gibt ein {{jsxref("Promise")}} zurück, das sich auf das Iterator-Ergebnisobjekt auflöst.

Eine asynchrone Generatorfunktion vereint die Eigenschaften von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*). Sie können sowohl die Schlüsselwörter [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) als auch [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) innerhalb des Funktionskörpers verwenden. Dies ermöglicht es Ihnen, asynchrone Aufgaben ergonomisch mit `await` zu handhaben, während Sie die Lazy-Natur von Generatorfunktionen nutzen.

Wenn ein Promise von einem asynchronen Generator geliefert wird, wird der endgültige Zustand des Iteratorergebnis-Promises dem des gelieferten Promises entsprechen. Zum Beispiel:

```js
async function* foo() {
  yield Promise.reject(1);
}

foo()
  .next()
  .catch((e) => console.error(e));
```

`1` wird protokolliert, weil, wenn das gelieferte Promise abgelehnt wird, das Iteratorergebnis ebenfalls abgelehnt wird. Die `value`-Eigenschaft des aufgelösten Ergebnisses eines asynchronen Generators wird kein weiteres Promise sein.

`async function*` Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}} Deklarationen — sie werden {{Glossary("Hoisting", "gehoben")}} an den Beginn ihres Gültigkeitsbereichs und können überall in ihrem Gültigkeitsbereich aufgerufen werden, und sie können nur in bestimmten Kontexten neu deklariert werden.

## Beispiele

### Deklarieren einer asynchronen Generatorfunktion

Asynchrone Generatorfunktionen produzieren immer Promises von Ergebnissen — selbst wenn jeder `yield`-Schritt synchon ist.

```js
async function* myGenerator(step) {
  await new Promise((resolve) => setTimeout(resolve, 10));
  yield 0;
  yield step;
  yield step * 2;
}

const gen = myGenerator(2);
gen
  .next()
  .then((res) => {
    console.log(res); // { value: 0, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: 2, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: 4, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: undefined, done: true }
    return gen.next();
  });
```

### Verwenden einer asynchronen Generatorfunktion zum Lesen einer Reihe von Dateien

In diesem Beispiel lesen wir eine Reihe von Dateien und greifen nur dann auf deren Inhalt zu, wenn dies angefordert wird, unter Verwendung von Nodes [`fs/promises`](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html) Modul.

```js
async function* readFiles(directory) {
  const files = await fs.readdir(directory);
  for (const file of files) {
    const stats = await fs.stat(file);
    if (stats.isFile()) {
      yield {
        name: file,
        content: await fs.readFile(file, "utf8"),
      };
    }
  }
}

const files = readFiles(".");
console.log((await files.next()).value);
// Possible output: { name: 'file1.txt', content: '...' }
console.log((await files.next()).value);
// Possible output: { name: 'file2.txt', content: '...' }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncGeneratorFunction")}}
- [`async function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("AsyncGenerator")}}
