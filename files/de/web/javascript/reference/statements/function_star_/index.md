---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
l10n:
  sourceCommit: 042b7d8ab67ddb6416da7772a789fd452441b6f6
---

Die **`function*`** Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen Generatorfunktion zu einem gegebenen Namen. Eine Generatorfunktion kann beendet und später wieder betreten werden, wobei ihr Kontext (Variablen{{Glossary("binding", "bindungen")}}) zwischen den Aufrufen gespeichert wird.

Sie können Generatorfunktionen auch mit dem [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*) definieren.

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
> Generatorfunktionen haben keine Entsprechungen als Pfeilfunktionen.

> [!NOTE]
> `function` und `*` sind getrennte Tokens, sodass sie durch [Leerraum oder Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) getrennt werden können.

### Parameter

- `name`
  - : Der Funktionsname.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter, siehe die [Funktionen-Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Eine `function*` Deklaration erstellt ein {{jsxref("GeneratorFunction")}} Objekt. Jedes Mal, wenn eine Generatorfunktion aufgerufen wird, gibt sie ein neues {{jsxref("Generator")}} Objekt zurück, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht. Die Ausführung der Generatorfunktion wird an einem Punkt unterbrochen, der anfänglich ganz am Anfang des Funktionskörpers liegt. Die Generatorfunktion kann mehrfach aufgerufen werden, um mehrere Generatoren gleichzeitig zu erstellen; jeder Generator behält seinen eigenen [Ausführungskontext](/de/docs/Web/JavaScript/Reference/Execution_model#stack_and_execution_contexts) der Generatorfunktion und kann unabhängig durchlaufen werden.

Der Generator ermöglicht einen bidirektionalen Kontrollfluss: Der Kontrollfluss kann beliebig oft zwischen der Generatorfunktion (callee) und ihrem Aufrufer hin- und herwechseln, solange beide Parteien dies wünschen. Der Kontrollfluss kann vom Aufrufer zum Callee durch das Aufrufen der Methoden des Generators übertragen werden: [`next()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/next), [`throw()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw) und [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return). Der Kontrollfluss kann vom Callee zum Aufrufer durch normales Verlassen der Funktion mittels `return` oder `throw` oder durch Ausführung aller Anweisungen wechseln oder durch die Verwendung der `yield` und `yield*` Ausdrücke.

Wenn die Methode [`next()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/next) des Generators aufgerufen wird, wird der Körper der Generatorfunktion bis zu einem der folgenden Punkte ausgeführt:

- Ein {{jsxref("Operators/yield", "yield")}} Ausdruck. In diesem Fall gibt die `next()` Methode ein Objekt mit einer `value` Eigenschaft zurück, die den ausgegebenen Wert enthält, und einer `done` Eigenschaft, die immer `false` ist. Das nächste Mal, wenn `next()` aufgerufen wird, wird der `yield` Ausdruck zu dem Wert, der `next()` übergeben wird.
- Ein {{jsxref("Operators/yield*", "yield*")}}, das zu einem anderen Iterator delegiert. In diesem Fall entspricht dieser Aufruf und alle zukünftigen `next()` Aufrufe auf dem Generator dem Aufruf von `next()` auf dem delegierten Iterator, bis der delegierte Iterator abgeschlossen ist.
- Eine {{jsxref("Statements/return", "return")}} Anweisung (die nicht von einem {{jsxref("Statements/try...catch", "try...catch...finally")}} abgefangen wird), oder das Ende des Kontrollflusses, was implizit `return undefined` bedeutet. In diesem Fall ist der Generator abgeschlossen, und die `next()` Methode gibt ein Objekt mit einer `value` Eigenschaft zurück, die den Rückgabewert enthält, und einer `done` Eigenschaft, die immer `true` ist. Weitere `next()` Aufrufe haben keine Wirkung und geben immer `{ value: undefined, done: true }` zurück.
- Ein Fehler, der innerhalb der Funktion geworfen wird, entweder durch eine {{jsxref("Statements/throw", "throw")}} Anweisung oder eine nicht behandelte Ausnahme. Die Methode `next()` wirft diesen Fehler, und der Generator ist abgeschlossen. Weitere `next()` Aufrufe haben keine Wirkung und geben immer `{ value: undefined, done: true }` zurück.

Wenn die Methode [`throw()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw) des Generators aufgerufen wird, wirkt dies, als ob eine `throw` Anweisung an der aktuellen unterbrochenen Position im Körper des Generators eingefügt wird. Ebenso wenn die Methode [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) des Generators aufgerufen wird, wirkt dies, als ob eine `return` Anweisung an der aktuellen unterbrochenen Position im Körper des Generators eingefügt wird. Beide Methoden beenden normalerweise den Generator, es sei denn, die Generatorfunktion fängt die Beendigung durch {{jsxref("Statements/try...catch", "try...catch...finally")}} ab.

Generatoren wurden früher als Paradigma für asynchrones Programmieren verwendet, um [Callback Hell](https://medium.com/@raihan_tazdid/callback-hell-in-javascript-all-you-need-to-know-296f7f5d3c1) durch das Erreichen der [Umkehrung der Kontrolle](https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/) zu vermeiden. Heutzutage wird dieser Anwendungsfall mit dem einfacheren Modell der [Async-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und dem {{jsxref("Promise")}} Objekt gelöst. Dennoch sind Generatoren weiterhin nützlich für viele andere Aufgaben, wie zum Beispiel das Definieren von [Iteratoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) auf einfache Weise.

`function*` Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}} Deklarationen — sie werden {{Glossary("Hoisting", "gehoben")}} an die Spitze ihres Gültigkeitsbereichs und können überall in ihrem Gültigkeitsbereich aufgerufen werden, und sie können nur in bestimmten Kontexten neu deklariert werden.

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

### Übergabe von Argumenten an Generatoren

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

### Rückgabeanweisung in einem Generator

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

### Generatoren sind nicht konstruierbar

```js
function* f() {}
const obj = new f(); // throws "TypeError: f is not a constructor
```

### Generator-Beispiel

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

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Leitfaden zu Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("GeneratorFunction")}}
- [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Generator")}}
- [Regenerator](https://github.com/facebook/regenerator) auf GitHub
- [Promises and Generators: control flow utopia](https://youtu.be/qbKWsbJ76-s) Präsentation von Forbes Lindesay bei JSConf (2013)
- [Task.js](https://github.com/mozilla/task.js) auf GitHub
- [You Don't Know JS: Async & Performance, Ch.4: Generators](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md) von Kyle Simpson
