---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`for...of`**-Anweisung führt eine Schleife aus, die auf einer Sequenz von Werten basiert, die aus einem [iterierbaren Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) stammen. Iterierbare Objekte umfassen Instanzen von eingebauten Objekten wie {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, [`NodeList`](/de/docs/Web/API/NodeList) (und andere DOM-Sammlungen), sowie das {{jsxref("Functions/arguments", "arguments")}}-Objekt, [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), die von [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) erzeugt werden, und benutzerdefinierte Iterables.

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
  - : Empfängt bei jeder Iteration einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`using`](/de/docs/Web/JavaScript/Reference/Statements/using), [`await using`](/de/docs/Web/JavaScript/Reference/Statements/await_using) oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sein (z.B. eine vorher deklarierte Variable, eine Objekteigenschaft oder ein [Destructuring-Muster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Variablen, die mit `var` deklariert werden, sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Scope wie die `for...of`-Schleife.
- `iterable`
  - : Ein iterierbares Objekt. Die Quelle der Wertsequenz, auf der die Schleife operiert.
- `statement`
  - : Ein Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` verweisen. Sie können einen [Blockstatements](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Eine `for...of`-Schleife arbeitet nacheinander an den Werten aus einem iterierbaren Objekt. Jede Ausführung der Schleife an einem Wert wird als _Iteration_ bezeichnet, und die Schleife _iteriert über das Iterable_. Jede Iteration führt Anweisungen aus, die auf den aktuellen Sequenzwert verweisen können.

Wenn eine `for...of`-Schleife über ein iterierbares Objekt iteriert, ruft sie zuerst die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode des Iterables auf, die einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt, und dann wiederholt die `next()`-Methode des resultierenden Iterators, um die Sequenz von Werten zu erzeugen, die `variable` zugewiesen werden.

Eine `for...of`-Schleife endet, wenn der Iterator abgeschlossen ist (das `next()`-Ergebnis ist ein Objekt mit `done: true`). Wie andere Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Schleifeniteration.

Wenn die `for...of`-Schleife frühzeitig beendet wurde (z.B. wenn eine `break`-Anweisung auftritt oder ein Fehler auftritt), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des Iterators aufgerufen, um eventuelle Aufräumarbeiten durchzuführen.

Der `variable`-Teil von `for...of` akzeptiert alles, was vor dem `=`-Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie innerhalb des Schleifenkörpers nicht neu zugewiesen wird (sie kann zwischen den Iterationen geändert werden, da dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden.

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
> Jede Iteration erstellt eine neue Variable. Eine Neuzuweisung der Variablen innerhalb des Schleifenkörpers wirkt sich nicht auf den ursprünglichen Wert im Iterable (in diesem Fall ein Array) aus.

Variablen, die mit der {{jsxref("Statements/using", "using")}}- oder {{jsxref("Statements/await_using", "await using")}}-Deklaration deklariert werden, werden jedes Mal entfernt, wenn eine Schleifeniteration abgeschlossen ist (und `await using` verursacht ein implizites `await` am Ende der Iteration). Wenn die Schleife jedoch frühzeitig endet, werden alle Werte im Iterator, die noch nicht besucht wurden, nicht entfernt (obwohl der aktuelle Wert es tut).

```js
const resources = [dbConnection1, dbConnection2, dbConnection3];

for (using dbConnection of resources) {
  dbConnection.query("...");
  // dbConnection is disposed here
}
```

Sie können [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accessor wie `for (x.y of iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Es gibt jedoch eine spezielle Regel, die verbietet, `async` als Variablennamen zu verwenden. Dies ist ungültige Syntax:

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

Dies soll Syntaxambiguitäten mit dem gültigen Code `for (async of => {};;)` vermeiden, welcher eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife ist.

Ähnlich, wenn Sie die `using`-Deklaration verwenden, kann die Variable nicht `of` genannt werden:

```js-nolint example-bad
for (using of of []); // SyntaxError
```

Dies soll Syntaxambiguitäten mit dem gültigen Code `for (using of [])` vermeiden, bevor `using` eingeführt wurde.

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

Sie können über das {{jsxref("Functions/arguments", "arguments")}}-Objekt iterieren, um alle Parameter zu untersuchen, die in eine Funktion übergeben wurden.

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

### Iterieren über eine NodeList

Im folgenden Beispiel wird eine `read`-Klasse zu Absätzen hinzugefügt, die direkte Nachfahren des [`<article>`](/de/docs/Web/HTML/Reference/Elements/article)-Elements sind, indem über eine [`NodeList`](/de/docs/Web/API/NodeList) DOM-Sammlung iteriert wird.

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Iterieren über ein benutzerdefiniertes Iterable

Iterieren über ein Objekt mit einer `[Symbol.iterator]()`-Methode, die einen benutzerdefinierten Iterator zurückgibt:

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

Iterieren über ein Objekt mit einer `[Symbol.iterator]()`-Generatorfunktion:

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

_Iterable-Iteratoren_ (Iteratoren mit einer `[Symbol.iterator]()`-Methode, die `this` zurückgibt) sind eine ziemlich übliche Technik, um Iteratoren in Syntaxen zu verwenden, die Iterables erwarten, wie `for...of`.

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

### Frühes Beenden

Die Ausführung der `break`-Anweisung in der ersten Schleife führt dazu, dass diese frühzeitig endet. Der Iterator ist noch nicht fertig, daher wird die zweite Schleife von dort weitermachen, wo die erste aufgehört hat.

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

Generatoren implementieren die [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return)-Methode, die dazu führt, dass die Generatorfunktion früh zurückkehrt, wenn die Schleife beendet wird. Dadurch werden Generatoren zwischen den Schleifen nicht wiederverwendbar.

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

Sowohl `for...in`- als auch `for...of`-Anweisungen iterieren über etwas. Der Hauptunterschied zwischen ihnen liegt darin, worüber sie iterieren.

Die {{jsxref("Statements/for...in", "for...in")}}-Anweisung iteriert über die [enumerierbaren String-Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts, während die `for...of`-Anweisung über die Werte iteriert, die das [iterierbare Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) definiert, um über sie zu iterieren.

Das folgende Beispiel zeigt den Unterschied zwischen einer `for...of`-Schleife und einer `for...in`-Schleife, wenn sie mit einem {{jsxref("Array")}} verwendet werden.

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

Das Objekt `iterable` erbt die Eigenschaften `objCustom` und `arrCustom`, weil es sowohl `Object.prototype` als auch `Array.prototype` in seiner [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) enthält.

Die `for...in`-Schleife protokolliert nur [enumerierbare Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) des `iterable`-Objekts. Sie protokolliert nicht die Array-_Elemente_ `3`, `5`, `7` oder `"hello"`, da diese keine _Eigenschaften_ sind — sie sind _Werte_. Sie protokolliert Array-_Indizes_ sowie `arrCustom` und `objCustom`, die tatsächliche Eigenschaften sind. Wenn Sie sich nicht sicher sind, warum diese Eigenschaften iteriert werden, gibt es eine detailliertere Erklärung darüber, wie [Array-Iteration und `for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in) funktionieren.

Die zweite Schleife ähnelt der ersten, verwendet jedoch {{jsxref("Object.hasOwn()")}}, um zu überprüfen, ob die gefundene enumerierbare Eigenschaft die eigene des Objekts ist, d.h. nicht geerbt. Wenn sie das ist, wird die Eigenschaft protokolliert. Eigenschaften `0`, `1`, `2` und `foo` werden protokolliert, weil sie eigene Eigenschaften sind. Eigenschaften `arrCustom` und `objCustom` werden nicht protokolliert, weil sie geerbt sind.

Die `for...of`-Schleife iteriert und protokolliert _Werte_, die `iterable` als Array (das [iterierbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) ist) definiert, um über sie zu iterieren. Die _Elemente_ des Objekts `3`, `5`, `7` werden angezeigt, aber keine der _Eigenschaften_ des Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
