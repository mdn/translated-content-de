---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Die **`for...of`**-Anweisung führt eine Schleife aus, die auf einer Sequenz von Werten arbeitet, die aus einem [iterierbaren Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) stammen. Iterierbare Objekte umfassen Instanzen von integrierten Objekten wie {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, [`NodeList`](/de/docs/Web/API/NodeList) (und anderen DOM-Sammlungen) sowie das {{jsxref("Functions/arguments", "arguments")}}-Objekt, [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), die durch [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) erzeugt werden, und benutzerdefinierte Iterables.

{{EmbedInteractiveExample("pages/js/statement-forof.html")}}

## Syntax

```js-nolint
for (variable of iterable)
  statement
```

- `variable`
  - : Erhält bei jeder Iteration einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z.B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungszuweisungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)). Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Gültigkeitsbereich wie die `for...of`-Schleife.
- `iterable`
  - : Ein iterierbares Objekt. Die Quelle der Wertesequenz, auf die die Schleife operiert.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` verweisen. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Eine `for...of`-Schleife arbeitet der Reihe nach auf den Werten eines Iterables. Jede Verarbeitung eines Wertes durch die Schleife wird als eine _Iteration_ bezeichnet, und die Schleife _iteriert über das Iterable_. Jede Iteration führt Anweisungen aus, die auf den aktuellen Wert der Sequenz verweisen können.

Wenn eine `for...of`-Schleife über ein Iterable iteriert, wird zuerst die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode des Iterables aufgerufen, die einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt. Anschließend wird wiederholt die `next()`-Methode des resultierenden Iterators aufgerufen, um die zu `variable` zuzuweisende Wertesequenz zu erzeugen.

Eine `for...of`-Schleife endet, wenn der Iterator abgeschlossen ist (das `next()`-Ergebnis ist ein Objekt mit `done: true`). Wie bei anderen Schleifenbefehlen können Sie [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife über.

Wenn die `for...of`-Schleife vorzeitig beendet wird (z.B. wird eine `break`-Anweisung getroffen oder ein Fehler wird ausgelöst), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des Iterators aufgerufen, um eine Bereinigung durchzuführen.

Der `variable`-Teil von `for...of` akzeptiert alles, was vor dem `=`-Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie nicht im Schleifenkörper neu zugewiesen wird (sie kann sich zwischen den Iterationen ändern, da dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden.

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
> Jede Iteration erstellt eine neue Variable. Eine Neuzuordnung der Variable innerhalb des Schleifenkörpers hat keine Auswirkungen auf den ursprünglichen Wert im Iterable (in diesem Fall ein Array).

Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Property-Accessor wie `for (x.y of iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Eine spezielle Regel verbietet jedoch die Verwendung von `async` als Variablennamen. Das ist ungültige Syntax:

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

Dies soll Syntaxzweideutigkeiten mit dem gültigen Code `for (async of => {};;)` vermeiden, was eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife ist.

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

### Iterieren über das `arguments`-Objekt

Sie können über das {{jsxref("Functions/arguments", "arguments")}}-Objekt iterieren, um alle in eine Funktion übergebenen Parameter zu untersuchen.

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

Das folgende Beispiel fügt Absätzen, die direkte Nachkommen des [`<article>`](/de/docs/Web/HTML/Element/article)-Elements sind, durch Iteration über eine [`NodeList`](/de/docs/Web/API/NodeList) DOM-Sammlung eine `read`-Klasse hinzu.

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

_Iterierbare Iteratoren_ (Iteratoren mit einer `[Symbol.iterator]()`-Methode, die `this` zurückgibt) sind eine ziemlich gebräuchliche Technik, um Iteratoren in Syntaxen nutzbar zu machen, die Iterable erwarten, wie `for...of`.

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

Die Ausführung der `break`-Anweisung in der ersten Schleife führt dazu, dass sie vorzeitig beendet wird. Der Iterator ist noch nicht fertig, daher wird die zweite Schleife von dort fortgesetzt, wo die erste aufgehört hat.

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

Generatoren implementieren die [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return)-Methode, die dafür sorgt, dass die Generatorfunktion vorzeitig zurückkehrt, wenn die Schleife beendet wird. Dadurch sind Generatoren nicht zwischen Schleifen wiederverwendbar.

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

Sowohl `for...in` als auch `for...of`-Anweisungen iterieren über etwas. Der Hauptunterschied zwischen ihnen besteht darin, worüber sie iterieren.

Die {{jsxref("Statements/for...in", "for...in")}}-Anweisung iteriert über die [enumerierbaren String-Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) eines Objekts, während die `for...of`-Anweisung über Werte iteriert, die das [iterierbare Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) zum Iterieren definiert hat.

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

Das Objekt `iterable` erbt die Eigenschaften `objCustom` und `arrCustom`, weil es sowohl `Object.prototype` als auch `Array.prototype` in seiner [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) hat.

Die `for...in`-Schleife protokolliert nur die [enumerierbaren Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) des Objekts `iterable`. Sie protokolliert keine Array-_Elemente_ `3`, `5`, `7` oder `"hello"`, weil diese keine _Eigenschaften_ sind - sie sind _Werte_. Sie protokolliert Array-_Indizes_ sowie `arrCustom` und `objCustom`, die tatsächliche Eigenschaften sind. Wenn Sie nicht sicher sind, warum diese Eigenschaften iteriert werden, gibt es eine detailliertere Erklärung dazu, wie [Array-Iteration und `for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in) funktionieren.

Die zweite Schleife ist der ersten ähnlich, verwendet jedoch {{jsxref("Object.hasOwn()")}}, um zu überprüfen, ob die gefundene enumerierbare Eigenschaft die eigene des Objekts ist, also nicht geerbt. Wenn dies der Fall ist, wird die Eigenschaft protokolliert. Die Eigenschaften `0`, `1`, `2` und `foo` werden protokolliert, weil sie eigene Eigenschaften sind. Die Eigenschaften `arrCustom` und `objCustom` werden nicht protokolliert, weil sie geerbt sind.

Die `for...of`-Schleife iteriert über und protokolliert _Werte_, die `iterable` als Array (das [iterierbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) ist) zum Iterieren definiert hat. Die _Elemente_ `3`, `5`, `7` des Objekts werden angezeigt, aber keine der _Eigenschaften_ des Objekts werden protokolliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
