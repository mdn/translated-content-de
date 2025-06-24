---
title: async function*
slug: Web/JavaScript/Reference/Statements/async_function*
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Statements")}}

Die **`async function*`** Deklaration erstellt eine {{Glossary("binding", "Binding")}} einer neuen asynchronen Generatorfunktion zu einem gegebenen Namen.

Sie können asynchrone Generatorfunktionen auch mithilfe des [`async function*` Ausdrucks](/de/docs/Web/JavaScript/Reference/Operators/async_function*) definieren.

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
    str += val;
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
> Asynchrone Generatorfunktionen haben keine Pendanten in Pfeilfunktionen.

> [!NOTE] > `function` und `*` sind separate Tokens, daher können sie durch [Leerraum oder Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) getrennt werden. Es darf jedoch keinen Zeilenumbruch zwischen `async` und `function` geben, da sonst ein Semikolon [automatisch eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) wird, wodurch `async` zu einem Bezeichner und der Rest zu einer `function*` Deklaration wird.

### Parameter

- `name`
  - : Der Funktionsname.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe den [Funktionen-Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Eine `async function*` Deklaration erstellt ein {{jsxref("AsyncGeneratorFunction")}} Objekt. Jedes Mal, wenn eine asynchrone Generatorfunktion aufgerufen wird, gibt sie ein neues {{jsxref("AsyncGenerator")}} Objekt zurück, das dem [asynchronen Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) entspricht. Jeder Aufruf von `next()` gibt ein {{jsxref("Promise")}} zurück, das sich in das Iteratorergebnisobjekt auflöst.

Eine asynchrone Generatorfunktion kombiniert die Merkmale von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*). Sie können die Schlüsselwörter [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) und [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) im Funktionskörper verwenden. Dies ermöglicht es Ihnen, asynchrone Aufgaben ergonomisch mit `await` zu handhaben, während Sie die träge Natur von Generatorfunktionen nutzen.

Wenn ein Promise aus einem asynchronen Generator yieldet wird, wird der erwartete Zustand des Iteratorresultat-Promises dem des yieldeten Promises entsprechen. Zum Beispiel:

```js
async function* foo() {
  yield Promise.reject(new Error("failed"));
}

foo()
  .next()
  .catch((e) => console.error(e));
```

`Error: failed` wird protokolliert, weil, wenn das yieldete Promise abgelehnt wird, das Iteratorresultat ebenfalls abgelehnt wird. Die `value`-Eigenschaft eines aufgelösten Results eines asynchronen Generators wird kein weiteres Promise sein.

`async function*` Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}} Deklarationen — sie werden {{Glossary("Hoisting", "gehostet")}} an die Spitze ihres Scopes und können überall in ihrem Scope aufgerufen werden und können nur in bestimmten Kontexten erneut deklariert werden.

## Beispiele

### Deklarieren einer asynchronen Generatorfunktion

Asynchrone Generatorfunktionen erzeugen immer Promises der Ergebnisse — auch dann, wenn jeder `yield`-Schritt synchron ist.

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

In diesem Beispiel lesen wir eine Serie von Dateien und greifen nur dann auf ihren Inhalt zu, wenn dies angefordert wird, mit dem Node-Modul [`fs/promises`](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html).

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
