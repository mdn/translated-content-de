---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
l10n:
  sourceCommit: bdb19290fc91b32b03d5e117e7e12df71c2a85ad
---

Die **`function*`**-Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen Generatorfunktion an einen gegebenen Namen. Eine Generatorfunktion kann beendet und später wieder betreten werden, wobei ihr Kontext (variable {{Glossary("binding", "Bindungen")}}) über die Wiedereintrittspunkte hinweg gespeichert wird.

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
> Generatorfunktionen haben keine Pfeilfunktions-Gegenstücke.

> [!NOTE]
> `function` und `*` sind separate Token, daher können sie durch [Leerzeichen oder Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) getrennt werden.

### Parameter

- `name`
  - : Der Funktionsname.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Für die Syntax der Parameter siehe die [Funktionen Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Eine `function*`-Deklaration erstellt ein {{jsxref("GeneratorFunction")}}-Objekt. Jedes Mal, wenn eine Generatorfunktion aufgerufen wird, gibt sie ein neues {{jsxref("Generator")}}-Objekt zurück, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht. Die Ausführung der Generatorfunktion wird bei einem bestimmten Punkt _suspendiert_, der anfangs am Beginn des Funktionskörpers liegt. Die Generatorfunktion kann mehrfach aufgerufen werden, um mehrere Generatoren gleichzeitig zu erzeugen; jeder Generator behält seinen eigenen [Ausführungskontext](/de/docs/Web/JavaScript/Reference/Execution_model#stack_and_execution_contexts) der Generatorfunktion und kann unabhängig betreten werden.

Der Generator erlaubt eine bidirektionale Steuerung des Programmflusses: Der Steuerfluss kann beliebig oft zwischen der Generatorfunktion (Callee) und ihrem Aufrufer übertragen werden, solange beide Parteien dies wünschen. Der Steuerfluss kann vom Aufrufer zum Callee über die Methoden des Generators übertragen werden: [`next()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/next), [`throw()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw) und [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return). Der Steuerfluss kann vom Callee zum Aufrufer übertragen werden, indem die Funktion normal beendet wird, entweder durch `return`, `throw`, durch Abarbeitung aller Anweisungen, oder durch Nutzung der Ausdrücke `yield` und `yield*`.

Wenn die Methode [`next()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/next) des Generators aufgerufen wird, wird der Körper der Generatorfunktion ausgeführt bis zu einem der folgenden Fälle:

- Ein {{jsxref("Operators/yield", "yield")}}-Ausdruck. In diesem Fall gibt die `next()`-Methode ein Objekt mit einer `value`-Eigenschaft, die den ausgegebenen Wert enthält, und einer `done`-Eigenschaft, die immer `false` ist, zurück. Beim nächsten Aufruf von `next()` ergibt der `yield`-Ausdruck den Wert, der an `next()` übergeben wurde.
- Ein {{jsxref("Operators/yield*", "yield*")}}, der die Kontrolle an einen anderen Iterator delegiert. In diesem Fall ist dieser Aufruf sowie alle zukünftigen `next()`-Aufrufe auf den Generator identisch mit Aufrufen von `next()` auf den delegierten Iterator, bis der delegierte Iterator fertig ist.
- Eine {{jsxref("Statements/return", "return")}}-Anweisung (die nicht von einem {{jsxref("Statements/try...catch", "try...catch...finally")}} abgefangen wird), oder das Ende des Steuerflusses, was implizit `return undefined` bedeutet. In diesem Fall ist der Generator abgeschlossen, und die `next()`-Methode gibt ein Objekt mit einer `value`-Eigenschaft, die den zurückgegebenen Wert enthält, und einer `done`-Eigenschaft, die immer `true` ist, zurück. Weitere `next()`-Aufrufe haben keinen Effekt und geben stets `{ value: undefined, done: true }` zurück.
- Ein Fehler, der innerhalb der Funktion geworfen wird, entweder durch eine {{jsxref("Statements/throw", "throw")}}-Anweisung oder eine unbehandelte Ausnahme. Die `next()`-Methode wirft diesen Fehler und der Generator ist abgeschlossen. Weitere `next()`-Aufrufe haben keinen Effekt und geben immer `{ value: undefined, done: true }` zurück.

Wenn die Methode [`throw()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw) des Generators aufgerufen wird, wirkt es so, als ob eine `throw`-Anweisung an der aktuellen suspendierten Position in den Körper des Generators eingefügt wird. Similarly, when the generator's [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) method is called, it acts as if a `return` statement is inserted in the generator's body at the current suspended position. Beide Methoden beenden in der Regel den Generator, es sei denn, die Generatorfunktion fängt den Abschluss über {{jsxref("Statements/try...catch", "try...catch...finally")}} ab.

Generatoren wurden früher als Paradigma für asynchrone Programmierung verwendet, um [Callback Hell](https://medium.com/@raihan_tazdid/callback-hell-in-javascript-all-you-need-to-know-296f7f5d3c1) zu vermeiden, indem [Inversion of Control](https://de.wikipedia.org/wiki/Inversion_of_control) erreicht wurde. Heute wird dieser Anwendungsfall durch das einfachere [async functions](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Modell und das {{jsxref("Promise")}}-Objekt gelöst. Dennoch sind Generatoren weiterhin für viele andere Aufgaben nützlich, wie etwa das Definieren von [Iteratoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) auf eine unkomplizierte Weise.

`function*`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen — sie werden {{Glossary("Hoisting", "gehoistet")}} an den Anfang ihres Geltungsbereichs und können überall in ihrem Geltungsbereich aufgerufen werden, und sie können nur in bestimmten Kontexten neu deklariert werden.

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

### Generator als Objekt-Eigenschaft

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

### Generator als Objekt-Methode

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
- [Promises and Generators: control flow utopia](https://youtu.be/qbKWsbJ76-s) Vortrag von Forbes Lindesay bei JSConf (2013)
- [Task.js](https://github.com/mozilla/task.js) auf GitHub
- [You Don't Know JS: Async & Performance, Ch.4: Generators](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md) von Kyle Simpson
