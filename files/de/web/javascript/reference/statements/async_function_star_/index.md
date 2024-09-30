---
title: async function*
slug: Web/JavaScript/Reference/Statements/async_function*
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Die Deklaration **`async function*`** erstellt eine [Bindung](/de/docs/Glossary/binding) einer neuen asynchronen Generatorfunktion für einen gegebenen Namen.

Sie können auch asynchrone Generatorfunktionen mit dem [`async function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*) definieren.

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

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
> Asynchrone Generatorfunktionen haben keine Gegenstücke in Pfeilfunktionen.

> **Hinweis:** `function` und `*` sind separate Tokens, sodass sie durch [Leerzeichen oder Zeilenabschlüsse](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) getrennt werden können. Es darf jedoch kein Zeilenabschluss zwischen `async` und `function` stehen, da sonst ein Semikolon [automatisch eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) wird, wodurch `async` zu einem Bezeichner und der Rest zur `function*`-Deklaration wird.

### Parameter

- `name`
  - : Der Funktionsname.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe die [Referenz zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Eine `async function*` Deklaration erstellt ein {{jsxref("AsyncGeneratorFunction")}} Objekt. Jedes Mal, wenn eine asynchrone Generatorfunktion aufgerufen wird, gibt sie ein neues {{jsxref("AsyncGenerator")}} Objekt zurück, das dem [asynchronen Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) entspricht. Jeder Aufruf von `next()` gibt ein {{jsxref("Promise")}} zurück, das sich zum Iterator-Ergebnisobjekt auflöst.

Eine asynchrone Generatorfunktion kombiniert die Eigenschaften von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*). Sie können sowohl die Schlüsselwörter [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) als auch [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) innerhalb des Funktionskörpers verwenden. Dies ermöglicht es Ihnen, asynchrone Aufgaben ergonomisch mit `await` zu bearbeiten, während Sie die träge Natur von Generatorfunktionen nutzen.

Wenn ein Promise von einem asynchronen Generator geliefert wird, wird der letztendliche Zustand des Iterator-Ergebnis-Promises dem des gelieferten Promises entsprechen. Zum Beispiel:

```js
async function* foo() {
  yield Promise.reject(1);
}

foo()
  .next()
  .catch((e) => console.error(e));
```

`1` wird protokolliert, da, wenn das gelieferte Promise abgelehnt wird, auch das Iterator-Ergebnis abgelehnt wird. Die `value`-Eigenschaft des aufgelösten Ergebnisses eines asynchronen Generators wird kein weiteres Promise sein.

`async function*` Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}} Deklarationen — sie werden [gehoben](/de/docs/Glossary/Hoisting) an den Anfang ihres Geltungsbereichs und können überall in ihrem Geltungsbereich aufgerufen werden. Sie können nur in bestimmten Kontexten neu deklariert werden.

## Beispiele

### Deklarieren einer asynchronen Generatorfunktion

Asynchrone Generatorfunktionen liefern immer Versprechen von Ergebnissen — selbst wenn jeder `yield`-Schritt synchron ist.

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

### Verwenden einer asynchronen Generatorfunktion zum Lesen einer Serie von Dateien

In diesem Beispiel lesen wir eine Serie von Dateien und greifen nur dann auf den Inhalt zu, wenn er angefordert wird, unter Verwendung des [`fs/promises`](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html) Moduls von Node.

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

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Leitfaden zu Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
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
