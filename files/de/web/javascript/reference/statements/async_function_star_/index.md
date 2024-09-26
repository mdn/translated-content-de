---
title: async function*
slug: Web/JavaScript/Reference/Statements/async_function*
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Die **`async function*`**-Deklaration erstellt eine {{Glossary("binding")}} einer neuen asynchronen Generatorfunktion mit einem gegebenen Namen.

Sie können asynchrone Generatorfunktionen auch mit dem [`async function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*) definieren.

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
> Asynchrone Generatorfunktionen haben keine Entsprechungen in Pfeilfunktionen.

> **Hinweis:** `function` und `*` sind separate Tokens, daher können sie durch [Leerzeichen oder Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) getrennt werden. Es darf jedoch kein Zeilenumbruch zwischen `async` und `function` sein, da sonst ein Semikolon [automatisch eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) wird, was dazu führt, dass `async` zu einem Bezeichner wird und der Rest zu einer `function*`-Deklaration.

### Parameter

- `name`
  - : Der Funktionsname.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe das [Functions Reference](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Eine `async function*`-Deklaration erstellt ein {{jsxref("AsyncGeneratorFunction")}}-Objekt. Jedes Mal, wenn eine asynchrone Generatorfunktion aufgerufen wird, gibt sie ein neues {{jsxref("AsyncGenerator")}}-Objekt zurück, das dem [asynchronen Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) entspricht. Jeder Aufruf von `next()` gibt ein {{jsxref("Promise")}} zurück, das sich in das Iterator-Ergebnisobjekt auflöst.

Eine asynchrone Generatorfunktion kombiniert die Merkmale von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*). Sie können sowohl das [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)- als auch das [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Schlüsselwort im Funktionskörper verwenden. Dies ermöglicht es Ihnen, asynchrone Aufgaben ergonomisch mit `await` zu bearbeiten, während Sie die träge Natur von Generatorfunktionen nutzen.

Wenn ein Promise von einem asynchronen Generator zurückgegeben wird, stimmt der endgültige Zustand des Iterator-Ergebnis-Promises mit dem des zurückgegebenen Promises überein. Zum Beispiel:

```js
async function* foo() {
  yield Promise.reject(1);
}

foo()
  .next()
  .catch((e) => console.error(e));
```

`1` wird protokolliert, da, wenn das zurückgegebene Promise abgelehnt wird, auch das Iterator-Ergebnis abgelehnt wird. Die `value`-Eigenschaft des aufgelösten Ergebnisses eines asynchronen Generators wird kein weiteres Promise sein.

`async function*`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen — sie werden [gehoistet](/de/docs/Glossary/Hoisting) an die Spitze ihres Bereichs und können überall in ihrem Bereich aufgerufen werden, und sie können nur in bestimmten Kontexten erneut deklariert werden.

## Beispiele

### Deklarieren einer asynchronen Generatorfunktion

Asynchrone Generatorfunktionen erzeugen immer Promises von Ergebnissen — selbst wenn jeder `yield`-Schritt synchron ist.

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

In diesem Beispiel lesen wir eine Serie von Dateien und greifen nur auf deren Inhalt zu, wenn es angefordert wird, unter Verwendung des Node-Moduls [`fs/promises`](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html).

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
// Mögliche Ausgabe: { name: 'file1.txt', content: '...' }
console.log((await files.next()).value);
// Mögliche Ausgabe: { name: 'file2.txt', content: '...' }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Anleitung
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Anleitung
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