---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

{{jsSidebar("Statements")}}

Die **`function*`**-Deklaration erstellt eine {{Glossary("binding", "Binding")}} einer neuen Generatorfunktion mit einem gegebenen Namen. Eine Generatorfunktion kann beendet und später erneut aufgerufen werden, wobei ihr Kontext (variable {{Glossary("binding", "Bindings")}}) über verschiedene Aufrufe hinweg erhalten bleibt.

Generatorfunktionen können Sie auch mit dem [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*) definieren.

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
> Generatorfunktionen haben keine Gegenstücke als Pfeilfunktionen.

> [!NOTE] > `function` und `*` sind separate Tokens, sodass sie durch [Leerzeichen oder Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) getrennt werden können.

### Parameter

- `name`
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Siehe die [Funktionen-Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters) für die Syntax der Parameter.
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Eine `function*`-Deklaration erstellt ein {{jsxref("GeneratorFunction")}}-Objekt. Jedes Mal, wenn eine Generatorfunktion aufgerufen wird, gibt sie ein neues {{jsxref("Generator")}}-Objekt zurück, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht. Wenn die `next()`-Methode des Iterators aufgerufen wird, wird der Körper der Generatorfunktion bis zum ersten {{jsxref("Operators/yield", "yield")}}-Ausdruck ausgeführt, der den zurückzugebenden Wert des Iterators angibt oder, bei Verwendung von {{jsxref("Operators/yield*", "yield*")}}, an eine andere Generatorfunktion delegiert. Die `next()`-Methode gibt ein Objekt mit einer `value`-Eigenschaft, die den ausgegebenen Wert enthält, und einer `done`-Eigenschaft zurück, die als boolescher Wert angibt, ob der Generator seinen letzten Wert ausgegeben hat. Wenn die `next()`-Methode mit einem Argument aufgerufen wird, wird die Ausführung der Generatorfunktion fortgesetzt, wobei der `yield`-Ausdruck, an dem die Ausführung angehalten wurde, durch das Argument von `next()` ersetzt wird.

Generatoren in JavaScript — besonders in Kombination mit Promises — sind ein sehr mächtiges Werkzeug für asynchrone Programmierung, da sie die Probleme mit Callbacks, wie zum Beispiel [Callback Hell](http://callbackhell.com/) und [Inversion of Control](https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/), abschwächen — wenn nicht sogar vollständig beseitigen. Eine noch einfachere Lösung für diese Probleme kann jedoch mit {{jsxref("Statements/async_function", "async functions", "", 1)}} erreicht werden.

Eine `return`-Anweisung in einem Generator beendet diesen, wenn sie ausgeführt wird (d.h. die `done`-Eigenschaft des von ihm zurückgegebenen Objekts wird auf `true` gesetzt). Wenn ein Wert zurückgegeben wird, wird er als `value`-Eigenschaft des von dem Generator zurückgegebenen Objekts festgelegt. Ähnlich wie eine `return`-Anweisung bewirkt ein innerhalb des Generators ausgelöster Fehler, dass der Generator beendet wird — es sei denn, er wird innerhalb des Generator-Körpers abgefangen. Wenn ein Generator beendet ist, führen nachfolgende `next()`-Aufrufe keinen Code dieses Generators mehr aus; sie geben einfach ein Objekt dieser Form zurück: `{value: undefined, done: true}`.

`function*`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen — sie werden {{Glossary("Hoisting", "gehoisted")}} an den Anfang ihres Scopes und können überall in ihrem Scope aufgerufen werden, und sie können nur in gewissen Kontexten neu deklariert werden.

## Beispiele

### Grundlegendes Beispiel

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

### Generator als ein Objekt-Eigenschaft

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

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
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
- [Promises and Generators: control flow utopia](https://youtu.be/qbKWsbJ76-s) Präsentation von Forbes Lindesay auf der JSConf (2013)
- [Task.js](https://github.com/mozilla/task.js) auf GitHub
- [You Don't Know JS: Async & Performance, Ch.4: Generators](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md) von Kyle Simpson
