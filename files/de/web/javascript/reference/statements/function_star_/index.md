---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die **`function*`**-Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen Generatorfunktion an einen angegebenen Namen. Eine Generatorfunktion kann verlassen und später wieder aufgenommen werden. Dabei bleibt ihr Kontext (die {{Glossary("binding", "Bindungen")}} ihrer Variablen) zwischen den Aufrufen erhalten.

Sie können Generatorfunktionen auch mit dem [`function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*) definieren.

{{InteractiveExample("JavaScript Demo: function* declaration")}}

```js interactive-example
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
// Expected output: 20
```

## Syntax

```js-nolint
function* name(param0) {
  statements
}
function* name(param0, param1) {
  statements
}
function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> Für Generatorfunktionen gibt es keine Entsprechung als Arrow Function.

> [!NOTE]
> `function` und `*` sind separate Tokens und können daher durch [Leerzeichen oder Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) getrennt werden.

### Parameter

- `name`
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Informationen zur Syntax von Parametern finden Sie in der [Referenz zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, aus denen der Funktionskörper besteht.

## Beschreibung

Eine `function*`-Deklaration erstellt ein {{jsxref("GeneratorFunction")}}-Objekt. Bei jedem Aufruf einer Generatorfunktion gibt sie ein neues {{jsxref("Generator")}}-Objekt zurück, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht. Die Ausführung der Generatorfunktion ist an einer bestimmten Stelle _angehalten_, zunächst ganz am Anfang des Funktionskörpers. Die Generatorfunktion kann mehrfach aufgerufen werden, um mehrere Generatoren gleichzeitig zu erstellen. Jeder Generator verwaltet seinen eigenen [Ausführungskontext](/de/docs/Web/JavaScript/Reference/Execution_model#stack_and_execution_contexts) der Generatorfunktion und kann unabhängig von den anderen fortgesetzt werden.

Der Generator ermöglicht einen bidirektionalen Kontrollfluss: Die Kontrolle kann beliebig oft zwischen der Generatorfunktion (dem Aufgerufenen) und ihrem Aufrufer wechseln. Vom Aufrufer zur Generatorfunktion wechselt sie durch Aufrufe der Generatormethoden [`next()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/next), [`throw()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw) und [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return). Von der Generatorfunktion zum Aufrufer wechselt sie, wenn die Funktion durch `return` oder `throw` beendet wird, alle Anweisungen ausgeführt wurden oder `yield`- und `yield*`-Ausdrücke verwendet werden.

Wenn die Methode [`next()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/next) des Generators aufgerufen wird, wird der Körper der Generatorfunktion bis zu einem der folgenden Punkte ausgeführt:

- Ein {{jsxref("Operators/yield", "yield")}}-Ausdruck. In diesem Fall gibt die Methode `next()` ein Objekt zurück, dessen Eigenschaft `value` den mit `yield` gelieferten Wert enthält und dessen Eigenschaft `done` immer `false` ist. Beim nächsten Aufruf von `next()` wird der `yield`-Ausdruck zu dem an `next()` übergebenen Wert ausgewertet.
- Ein {{jsxref("Operators/yield*", "yield*")}}-Ausdruck, der an einen anderen Iterator delegiert. In diesem Fall entspricht dieser Aufruf – ebenso wie alle weiteren Aufrufe von `next()` am Generator – einem Aufruf von `next()` am Iterator, an den delegiert wurde, bis dieser beendet ist.
- Eine {{jsxref("Statements/return", "return")}}-Anweisung (die nicht durch {{jsxref("Statements/try...catch", "try...catch...finally")}} abgefangen wird) oder das Ende des Kontrollflusses, das implizit `return undefined` bedeutet. In diesem Fall ist der Generator beendet, und die Methode `next()` gibt ein Objekt zurück, dessen Eigenschaft `value` den Rückgabewert enthält und dessen Eigenschaft `done` immer `true` ist. Weitere Aufrufe von `next()` haben keine Wirkung und geben immer `{ value: undefined, done: true }` zurück.
- Ein Fehler, der innerhalb der Funktion ausgelöst wird, entweder durch eine {{jsxref("Statements/throw", "throw")}}-Anweisung oder durch eine nicht behandelte Ausnahme. Die Methode `next()` löst diesen Fehler aus, und der Generator ist beendet. Weitere Aufrufe von `next()` haben keine Wirkung und geben immer `{ value: undefined, done: true }` zurück.

Wenn die Methode [`throw()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw) des Generators aufgerufen wird, verhält sich dies so, als würde an der aktuellen Unterbrechungsstelle eine `throw`-Anweisung in den Generatorkörper eingefügt. Entsprechend verhält sich ein Aufruf der Methode [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) so, als würde dort eine `return`-Anweisung eingefügt. Beide Methoden beenden den Generator normalerweise, sofern die Generatorfunktion den Abschluss nicht durch {{jsxref("Statements/try...catch", "try...catch...finally")}} abfängt.

Generatoren waren früher ein Paradigma für die asynchrone Programmierung: Durch [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) ließ sich [Callback Hell](https://medium.com/@raihan_tazdid/callback-hell-in-javascript-all-you-need-to-know-296f7f5d3c1) vermeiden. Heute wird dieser Anwendungsfall durch das einfachere Modell der [async-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und das {{jsxref("Promise")}}-Objekt abgedeckt. Generatoren sind jedoch weiterhin für viele andere Aufgaben nützlich, etwa um [Iteratoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) auf einfache Weise zu definieren.

`function*`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen: Sie werden an den Anfang ihres Gültigkeitsbereichs {{Glossary("Hoisting", "verschoben")}} und können überall innerhalb dieses Gültigkeitsbereichs aufgerufen werden. Außerdem können sie nur in bestimmten Kontexten erneut deklariert werden.

## Beispiele

### Einfaches Beispiel

```js
function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// …
```

### Beispiel mit yield\*

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

### Argumente an Generatoren übergeben

```js
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next(); // 0
gen.next("pretzel"); // 1 pretzel
gen.next("california"); // 2 california
gen.next("mayonnaise"); // 3 mayonnaise
```

### Return-Anweisung in einem Generator

```js
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

const gen = yieldAndReturn();
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

### Generator als Objekteigenschaft

```js
const someObj = {
  *generator() {
    yield "a";
    yield "b";
  },
};

const gen = someObj.generator();

console.log(gen.next()); // { value: 'a', done: false }
console.log(gen.next()); // { value: 'b', done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Generator als Objektmethode

```js
class Foo {
  *generator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const f = new Foo();
const gen = f.generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Generator als berechnete Eigenschaft

```js
class Foo {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  }
}

const SomeObj = {
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
  },
};

console.log(Array.from(new Foo())); // [ 1, 2 ]
console.log(Array.from(SomeObj)); // [ 'a', 'b' ]
```

### Generatoren können nicht mit `new` aufgerufen werden

```js
function* f() {}
const obj = new f(); // throws TypeError: f is not a constructor
```

### Generatorbeispiel

```js
function* powers(n) {
  // Endless loop to generate
  for (let current = n; ; current *= n) {
    yield current;
  }
}

for (const power of powers(2)) {
  // Controlling generator
  if (power > 32) {
    break;
  }
  console.log(power);
  // 2
  // 4
  // 8
  // 16
  // 32
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) – Leitfaden
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) – Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("GeneratorFunction")}}
- [`function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Generator")}}
- [Promises and Generators: control flow utopia](https://youtu.be/qbKWsbJ76-s) – Vortrag von Forbes Lindesay auf der JSConf (2013)
- [Task.js](https://github.com/mozilla/task.js) auf GitHub
- [You Don't Know JS: Async & Performance, Ch.4: Generators](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md) von Kyle Simpson
