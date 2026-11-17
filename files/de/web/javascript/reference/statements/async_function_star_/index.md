---
title: async function*
slug: Web/JavaScript/Reference/Statements/async_function*
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die **`async function*`**-Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen asynchronen Generatorfunktion an einen bestimmten Namen.

Sie können asynchrone Generatorfunktionen auch mit einem [`async function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*) definieren.

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
> Für asynchrone Generatorfunktionen gibt es keine entsprechenden Arrow Functions.

> [!NOTE]
> `function` und `*` sind getrennte Tokens und können daher durch [Leerraum oder Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) voneinander getrennt sein. Zwischen `async` und `function` darf jedoch kein Zeilenumbruch stehen. Andernfalls wird [automatisch ein Semikolon eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), sodass `async` zu einem Bezeichner und der Rest zu einer `function*`-Deklaration wird.

### Parameter

- `name`
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Informationen zur Syntax der Parameter finden Sie in der [Referenz zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, aus denen der Funktionskörper besteht.

## Beschreibung

Eine `async function*`-Deklaration erstellt ein {{jsxref("AsyncGeneratorFunction")}}-Objekt. Bei jedem Aufruf einer asynchronen Generatorfunktion gibt sie ein neues {{jsxref("AsyncGenerator")}}-Objekt zurück, das dem [Protokoll für asynchrone Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) entspricht. Jeder Aufruf von `next()` gibt ein {{jsxref("Promise")}} zurück, das mit einem Iterator-Ergebnisobjekt erfüllt wird.

Eine asynchrone Generatorfunktion vereint die Eigenschaften von [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*). Im Funktionskörper können Sie sowohl das Schlüsselwort [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) als auch [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) verwenden. Dadurch können Sie asynchrone Aufgaben bequem mit `await` verarbeiten und zugleich die verzögerte Ausführung von Generatorfunktionen nutzen.

Wenn ein Promise von einem asynchronen Generator mit `yield` zurückgegeben wird, entspricht der endgültige Zustand des Iterator-Ergebnis-Promise dem Zustand dieses Promise. Zum Beispiel:

```js
async function* foo() {
  yield Promise.reject(new Error("failed"));
}

foo()
  .next()
  .catch((e) => console.error(e));
```

`Error: failed` wird protokolliert, weil auch das Iterator-Ergebnis-Promise abgelehnt wird, wenn das mit `yield` zurückgegebene Promise abgelehnt wird. Die Eigenschaft `value` des erfüllten Ergebnisses eines asynchronen Generators enthält kein weiteres Promise.

`async function*`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen: Sie werden an den Anfang ihres Gültigkeitsbereichs {{Glossary("Hoisting", "vorgezogen")}} und können überall darin aufgerufen werden. Eine erneute Deklaration ist nur in bestimmten Kontexten möglich.

## Beispiele

### Eine asynchrone Generatorfunktion deklarieren

Asynchrone Generatorfunktionen liefern immer Promises für ihre Ergebnisse – selbst wenn jeder `yield`-Schritt synchron ist.

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

### Mit einer asynchronen Generatorfunktion eine Reihe von Dateien lesen

In diesem Beispiel lesen wir mithilfe des Node-Moduls [`fs/promises`](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html) eine Reihe von Dateien und greifen erst bei Bedarf auf deren Inhalt zu.

```js
import fs from "node:fs/promises";
import path from "node:path";

async function* readFiles(directory) {
  const files = await fs.readdir(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stats = await fs.stat(fullPath);
    if (stats.isFile()) {
      yield {
        name: file,
        content: await fs.readFile(fullPath, "utf8"),
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

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) – Leitfaden
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) – Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncGeneratorFunction")}}
- [`async function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("AsyncGenerator")}}
