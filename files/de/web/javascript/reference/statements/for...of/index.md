---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`for...of`** Anweisung führt eine Schleife aus, die auf einer Sequenz von Werten arbeitet, die von einem [iterierbaren Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) stammen. Iterierbare Objekte umfassen Instanzen von eingebauten Objekten wie {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, [`NodeList`](/de/docs/Web/API/NodeList) (und andere DOM-Sammlungen) sowie das {{jsxref("Functions/arguments", "arguments")}} Objekt, [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), die von [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) erstellt wurden, und benutzerdefinierte Iterierbare.

{{InteractiveExample("JavaScript Demo: for...of statement")}}

```js interactive-example
const array = ["a", "b", "c"];

for (const element of array) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## Syntax

```js-nolint
for (variable of iterable)
  statement
```

- `variable`
  - : Empfängt bei jeder Iteration einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein, oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z.B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Variablen, die mit `var` deklariert werden, sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Gültigkeitsbereich, in dem sich die `for...of` Schleife befindet.
- `iterable`
  - : Ein iterierbares Objekt. Die Quelle der Sequenz von Werten, auf denen die Schleife arbeitet.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann `variable` referenzieren. Sie können einen [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Eine `for...of` Schleife arbeitet nacheinander an den aus einem iterierbaren Objekt stammenden Werten. Jede Operation der Schleife auf einem Wert wird als _Iteration_ bezeichnet, und es wird gesagt, dass die Schleife über das Iterierbare _iteriert_. Jede Iteration führt Anweisungen aus, die sich auf den aktuellen Sequenzwert beziehen können.

Wenn eine `for...of` Schleife über ein iterierbares Objekt iteriert, ruft sie zunächst die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) Methode des iterierbaren Objekts auf, die einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt, und ruft dann wiederholt die [`next()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Methode des resultierenden Iterators auf, um die Sequenz von Werten zu erzeugen, die `variable` zugewiesen werden sollen.

Eine `for...of` Schleife beendet sich, wenn der Iterator abgeschlossen ist (das `next()` Ergebnis ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie [Steuerfluss-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und setzt mit der ersten Anweisung nach der Schleife fort.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife über.

Wenn die `for...of` Schleife vorzeitig beendet wird (z.B. ein `break` Befehl wird ausgeführt oder ein Fehler geworfen), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Methode des Iterators aufgerufen, um eine eventuelle Bereinigung durchzuführen.

Der `variable` Teil von `for...of` akzeptiert alles, was vor dem `=` Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie im Schleifenkörper nicht neu zugewiesen wird (sie kann zwischen Iterationen wechseln, da dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden.

```js
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

> [!NOTE]
> Jede Iteration erstellt eine neue Variable. Eine Neuzuweisung der Variable innerhalb des Schleifenkörpers beeinflusst nicht den ursprünglichen Wert im iterierbaren Objekt (in diesem Fall ein Array).

Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accessor wie `for (x.y of iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Jedoch verbietet eine spezielle Regel, `async` als Variablennamen zu verwenden. Dies wäre eine ungültige Syntax:

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

Dies soll Syntaxzweideutigkeiten mit dem gültigen Code `for (async of => {};;)` vermeiden, der eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Schleife ist.

## Beispiele

### Iterieren über ein Array

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### Iterieren über einen String

Strings werden [nach Unicode-Codepunkten iteriert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator).

```js
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### Iterieren über ein TypedArray

```js
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
```

### Iterieren über eine Map

```js
const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterieren über ein Set

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterieren über das arguments-Objekt

Sie können über das {{jsxref("Functions/arguments", "arguments")}} Objekt iterieren, um alle in eine Funktion übergebenen Parameter zu prüfen.

```js
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3);
// 1
// 2
// 3
```

### Iterieren über ein NodeList

Das folgende Beispiel fügt Klassen zu Absätzen hinzu, die direkte Nachfahren des [`<article>`](/de/docs/Web/HTML/Reference/Elements/article) Elements sind, indem es über eine [`NodeList`](/de/docs/Web/API/NodeList) DOM-Sammlung iteriert.

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Iterieren über ein benutzerdefiniertes iterierbares Objekt

Iterieren über ein Objekt mit einer `[Symbol.iterator]()` Methode, die einen benutzerdefinierten Iterator zurückgibt:

```js
const iterable = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        if (i <= 3) {
          return { value: i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

Iterieren über ein Objekt mit einer `[Symbol.iterator]()` Generator-Methode:

```js
const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

_Iterierbare Iteratoren_ (Iteratoren mit einer `[Symbol.iterator]()` Methode, die `this` zurückgibt) sind eine ziemlich verbreitete Technik, um Iteratoren in Syntaxen verwendbar zu machen, die iterierbare Objekte erwarten, wie `for...of`.

```js
let i = 1;

const iterator = {
  next() {
    if (i <= 3) {
      return { value: i++, done: false };
    }
    return { value: undefined, done: true };
  },
  [Symbol.iterator]() {
    return this;
  },
};

for (const value of iterator) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterieren über einen Generator

```js
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
}
// 1
// 2
// 3
```

### Vorzeitiges Beenden

Die Ausführung des `break` Befehls in der ersten Schleife führt dazu, dass sie vorzeitig beendet wird. Der Iterator ist noch nicht fertig, daher wird die zweite Schleife da weitermachen, wo die erste aufgehört hat.

```js
const source = [1, 2, 3];

const iterator = source[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("This string will not be logged.");
}
// 1

// Another loop using the same iterator
// picks up where the last loop left off.
for (const value of iterator) {
  console.log(value);
}
// 2
// 3

// The iterator is used up.
// This loop will execute no iterations.
for (const value of iterator) {
  console.log(value);
}
// [No output]
```

Generatoren implementieren die [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) Methode, die dazu führt, dass die Generatorfunktion vorzeitig zurückkehrt, wenn die Schleife endet. Das macht Generatoren zwischen Schleifen nicht wiederverwendbar.

```js example-bad
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("This string will not be logged.");
}
// 1

// The generator is used up.
// This loop will execute no iterations.
for (const value of generator) {
  console.log(value);
}
// [No output]
```

### Unterschied zwischen for...of und for...in

Sowohl `for...in` als auch `for...of` Anweisungen iterieren über etwas. Der Hauptunterschied zwischen ihnen liegt darin, über was sie iterieren.

Die {{jsxref("Statements/for...in", "for...in")}} Anweisung iteriert über die [enumerierbaren String-Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts, während die `for...of` Anweisung über Werte iteriert, die das [iterierbare Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) definiert hat, um darüber zu iterieren.

Das folgende Beispiel zeigt den Unterschied zwischen einer `for...of` Schleife und einer `for...in` Schleife, wenn sie mit einem {{jsxref("Array")}} verwendet werden.

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable.foo = "hello";

for (const i in iterable) {
  console.log(i);
}
// "0", "1", "2", "foo", "arrCustom", "objCustom"

for (const i in iterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
// "0" "1" "2" "foo"

for (const i of iterable) {
  console.log(i);
}
// 3 5 7
```

Das Objekt `iterable` erbt die Eigenschaften `objCustom` und `arrCustom`, weil es sowohl `Object.prototype` als auch `Array.prototype` in seiner [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) enthält.

Die `for...in` Schleife protokolliert nur [enumerierbare Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) des `iterable` Objekts. Sie protokolliert keine Array-_Elemente_ `3`, `5`, `7` oder `"hello"`, weil diese keine _Eigenschaften_, sondern _Werte_ sind. Sie protokolliert Array-_Indizes_ sowie `arrCustom` und `objCustom`, welche tatsächliche Eigenschaften sind. Wenn Sie nicht sicher sind, warum diese Eigenschaften überiteriert werden, gibt es eine gründlichere Erklärung darüber, wie [Array-Iteration und `for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in) funktionieren.

Die zweite Schleife ähnelt der ersten, verwendet jedoch {{jsxref("Object.hasOwn()")}}, um zu prüfen, ob die gefundene enumerierbare Eigenschaft die eigene des Objekts ist, d.h. nicht vererbt. Wenn ja, wird die Eigenschaft protokolliert. Eigenschaften `0`, `1`, `2` und `foo` werden protokolliert, weil sie eigene Eigenschaften sind. Eigenschaften `arrCustom` und `objCustom` werden nicht protokolliert, weil sie vererbt sind.

Die `for...of` Schleife iteriert und protokolliert _Werte_, die `iterable` als ein Array (welches [iterierbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) ist) definiert hat, um darüber zu iterieren. Die _Elemente_ des Objekts `3`, `5`, `7` werden gezeigt, aber keine der _Eigenschaften_ des Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
