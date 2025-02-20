---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`function*`**-Deklaration erstellt eine {{Glossary("binding", "Binding")}} einer neuen Generatorfunktion mit einem angegebenen Namen. Eine Generatorfunktion kann beendet und später erneut aufgerufen werden, wobei ihr Kontext (variable {{Glossary("binding", "Bindings")}}) über die erneuten Aufrufe hinweg gespeichert bleibt.

Sie können Generatorfunktionen auch mit dem [`function*` expression](/de/docs/Web/JavaScript/Reference/Operators/function*) definieren.

{{InteractiveExample("JavaScript Demo: Statement - Function*")}}

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
> Generatorfunktionen haben keine Gegenstücke in der Form von Pfeilfunktionen.

> **Hinweis:** `function` und `*` sind separate Token, sodass sie durch [Leerzeichen oder Zeilenumbrüche](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) getrennt werden können.

### Parameter

- `name`
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Für die Syntax der Parameter siehe die [Functions reference](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Funktionskörper bilden.

## Beschreibung

Eine `function*`-Deklaration erstellt ein {{jsxref("GeneratorFunction")}}-Objekt. Jedes Mal, wenn eine Generatorfunktion aufgerufen wird, gibt sie ein neues {{jsxref("Generator")}}-Objekt zurück, das dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) entspricht. Wenn die `next()`-Methode des Iterators aufgerufen wird, wird der Funktionskörper der Generatorfunktion bis zur ersten {{jsxref("Operators/yield", "yield")}}-Anweisung ausgeführt, die den zurückzugebenden Wert aus dem Iterator angibt oder mit {{jsxref("Operators/yield*", "yield*")}} an eine andere Generatorfunktion delegiert. Die `next()`-Methode gibt ein Objekt zurück, das eine `value`-Eigenschaft mit dem gelieferten Wert und eine `done`-Eigenschaft enthält, die als boolean angibt, ob der Generator seinen letzten Wert geliefert hat. Das Aufrufen der `next()`-Methode mit einem Argument wird die Generatorfunktionsausführung wieder aufnehmen und dabei die `yield`-Anweisung mit dem Argument von `next()` ersetzen.

Generatoren in JavaScript — insbesondere in Kombination mit Promises — sind ein sehr leistungsstarkes Werkzeug für die asynchrone Programmierung, da sie die Probleme mit Rückrufen (Callbacks) verringern — wenn nicht sogar vollständig eliminieren — wie [Callback Hell](http://callbackhell.com/) und [Inversion of Control](https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/). Ein noch einfacherer Lösungsansatz für diese Probleme kann jedoch mit {{jsxref("Statements/async_function", "async functions", "", 1)}} erreicht werden.

Eine `return`-Anweisung in einem Generator bewirkt, dass der Generator endet (d.h. die `done`-Eigenschaft des zurückgegebenen Objekts wird auf `true` gesetzt). Wenn ein Wert zurückgegeben wird, wird dieser als `value`-Eigenschaft des vom Generator zurückgegebenen Objekts gesetzt. Ähnlich wie eine `return`-Anweisung führt ein im Generator ausgelöster Fehler dazu, dass der Generator beendet wird — es sei denn, der Fehler wird im Körper des Generators abgefangen. Wenn ein Generator beendet ist, führen nachfolgende Aufrufe von `next()` keinen Code des Generators mehr aus; sie geben einfach ein Objekt dieser Form zurück: `{value: undefined, done: true}`.

`function*`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen — sie werden an den Anfang ihres Gültigkeitsbereichs {{Glossary("Hoisting", "hoisted")}} und können überall in ihrem Gültigkeitsbereich aufgerufen werden. Sie können nur in bestimmten Kontexten erneut deklariert werden.

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

### Verwendung von return in einem Generator

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

### Generator, definiert in einer Ausdrucksweise

```js
const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
console.log(bar.next()); // {value: 10, done: false}
```

### Beispiel für einen Generator

```js
function* powers(n) {
  //endless loop to generate
  for (let current = n; ; current *= n) {
    yield current;
  }
}

for (const power of powers(2)) {
  // controlling generator
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
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("GeneratorFunction")}}
- [`function*` expression](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Generator")}}
- [Regenerator](https://github.com/facebook/regenerator) auf GitHub
- [Promises und Generatoren: Flusssteuerung Utopia](https://youtu.be/qbKWsbJ76-s), Vortrag von Forbes Lindesay bei JSConf (2013)
- [Task.js](https://github.com/mozilla/task.js) auf GitHub
- [You Don't Know JS: Async & Performance, Ch.4: Generators](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md) von Kyle Simpson
