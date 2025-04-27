---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{jsSidebar("Statements")}}

Die **`function*`** Deklaration erstellt eine {{Glossary("binding", "Binding")}} einer neuen Generatorfunktion mit einem gegebenen Namen. Eine Generatorfunktion kann beendet und später erneut betreten werden, wobei ihr Kontext (Variable-{{Glossary("binding", "Bindings")}}) über erneute Aufrufe hinweg gespeichert bleibt.

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
> Generatorfunktionen haben keine Gegenstücke bei Pfeilfunktionen.

> **Hinweis:** `function` und `*` sind separate Token, sodass sie durch [Leerzeichen oder Zeilenabschlüsse](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) getrennt werden können.

### Parameter

- `name`
  - : Der Funktionsname.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe die [Referenz für Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Eine `function*` Deklaration erstellt ein {{jsxref("GeneratorFunction")}} Objekt. Jedes Mal, wenn eine Generatorfunktion aufgerufen wird, gibt sie ein neues {{jsxref("Generator")}} Objekt zurück, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht. Wenn die `next()`-Methode des Iterators aufgerufen wird, wird der Körper der Generatorfunktion bis zum ersten {{jsxref("Operators/yield", "yield")}}-Ausdruck ausgeführt, der den Wert spezifiziert, der vom Iterator zurückgegeben wird, oder, mit {{jsxref("Operators/yield*", "yield*")}}, an eine andere Generatorfunktion delegiert. Die `next()`-Methode gibt ein Objekt mit einer `value`-Eigenschaft, die den erzeugten Wert enthält, und einer `done`-Eigenschaft zurück, die als Boolean angibt, ob der Generator seinen letzten Wert erzeugt hat. Der Aufruf der `next()`-Methode mit einem Argument führt zur Fortsetzung der Ausführung der Generatorfunktion, wobei der `yield`-Ausdruck, an dem die Ausführung pausiert wurde, durch das Argument von `next()` ersetzt wird.

Generatoren in JavaScript sind — insbesondere in Kombination mit Promises — ein sehr leistungsstarkes Werkzeug für die asynchrone Programmierung, da sie die Probleme von Callbacks, wie z. B. [Callback Hell](http://callbackhell.com/) und [Inversion of Control](https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/) abmildern — wenn nicht sogar ganz eliminieren. Eine noch einfachere Lösung für diese Probleme kann jedoch mit {{jsxref("Statements/async_function", "async Funktionen", "", 1)}} erreicht werden.

Eine `return`-Anweisung in einem Generator bewirkt, dass der Generator abgeschlossen wird (d.h. die `done`-Eigenschaft des Objekts, das von ihm zurückgegeben wird, wird auf `true` gesetzt). Wenn ein Wert zurückgegeben wird, wird er als `value`-Eigenschaft des Objekts, das vom Generator zurückgegeben wird, gesetzt. Ähnlich wie eine `return`-Anweisung wird ein innerhalb des Generators ausgelöster Fehler den Generator abschließen — es sei denn, er wird innerhalb des Körpers des Generators abgefangen. Wenn ein Generator abgeschlossen ist, werden nachfolgende `next()`-Aufrufe keinen Code dieses Generators ausführen, sondern einfach ein Objekt dieser Form zurückgeben: `{value: undefined, done: true}`.

`function*` Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}} Deklarationen — sie werden im Zusammenhang ihres Bereichs {{Glossary("Hoisting", "gehoisted")}} und können überall in ihrem Geltungsbereich aufgerufen werden, und sie können nur in bestimmten Kontexten neu deklariert werden.

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

### Generatoren sind nicht instanziierbar

```js
function* f() {}
const obj = new f(); // throws "TypeError: f is not a constructor
```

### Generator in einem Ausdruck definiert

```js
const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
console.log(bar.next()); // {value: 10, done: false}
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
- [Leitfaden über Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
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
- [Promises und Generatoren: Utopie der Ablaufsteuerung](https://youtu.be/qbKWsbJ76-s) Präsentation von Forbes Lindesay auf der JSConf (2013)
- [Task.js](https://github.com/mozilla/task.js) auf GitHub
- [You Don't Know JS: Async & Performance, Ch.4: Generators](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md) von Kyle Simpson
