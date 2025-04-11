---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{jsSidebar("Statements")}}

Die **`for...of`**-Anweisung führt eine Schleife aus, die mit einer Sequenz von Werten arbeitet, die von einem [iterierbaren Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) stammen. Iterierbare Objekte umfassen Instanzen von eingebauten Objekten wie {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, [`NodeList`](/de/docs/Web/API/NodeList) (und andere DOM-Sammlungen) sowie das {{jsxref("Functions/arguments", "arguments")}}-Objekt, [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), die von [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) erzeugt werden, und benutzerdefinierte Iterables.

{{InteractiveExample("JavaScript Demo: for...of statement")}}

```js interactive-example
const array1 = ["a", "b", "c"];

for (const element of array1) {
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
  - : Erhält bei jeder Iteration einen Wert aus der Sequenz. Dies kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein, oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z.B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Variablen, die mit `var` deklariert sind, sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Umfang wie die `for...of`-Schleife.
- `iterable`
  - : Ein iterierbares Objekt. Die Quelle der Wertesequenz, auf der die Schleife arbeitet.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` referenzieren. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Eine `for...of`-Schleife arbeitet der Reihe nach mit Werten aus einem iterierbaren Objekt. Jeder Durchlauf der Schleife mit einem Wert wird als _Iteration_ bezeichnet, und die Schleife _iteriert über das Iterable_. Jede Iteration führt Anweisungen aus, die auf den aktuellen Wert der Sequenz verweisen können.

Wenn eine `for...of`-Schleife über ein iterierbares Objekt iteriert, ruft sie zunächst die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode des Iterables auf, die einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt, und ruft dann wiederholt die [`next()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des resultierenden Iterators auf, um die Wertesequenz zu erzeugen, die der `variable` zugewiesen wird.

Eine `for...of`-Schleife wird unterbrochen, wenn der Iterator abgeschlossen ist (wenn das `next()`-Ergebnis ein Objekt mit `done: true` ist). Wie andere Schleifenanweisungen können Sie Kontrollflussanweisungen innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} beendet die `statement`-Ausführung und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} beendet die `statement`-Ausführung und geht zur nächsten Iteration der Schleife.

Wenn die `for...of`-Schleife vorzeitig beendet wird (z.B. wenn eine `break`-Anweisung aufgerufen wird oder ein Fehler auftritt), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des Iterators aufgerufen, um Aufräumarbeiten durchzuführen.

Der `variable`-Teil von `for...of` akzeptiert alles, was vor dem `=`-Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie nicht innerhalb des Schleifenkörpers neu zugewiesen wird (sie kann zwischen den Iterationen geändert werden, da es sich um zwei separate Variablen handelt). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden.

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
> Jede Iteration erstellt eine neue Variable. Eine Neuzuweisung der Variable innerhalb des Schleifenkörpers wirkt sich nicht auf den ursprünglichen Wert im Iterable (in diesem Fall ein Array) aus.

Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Property-Accessor wie `for (x.y of iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Es gibt jedoch eine spezielle Regel, die es verbietet, `async` als Variablennamen zu verwenden. Dies ist ein ungültiges Syntax:

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

Dies dient dazu, Syntaxunklarheiten mit dem gültigen Code `for (async of => {};;)` zu vermeiden, was eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Schleife ist.

## Beispiele

### Über ein Array iterieren

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### Über einen String iterieren

Strings werden [durch Unicode-Codepunkte iteriert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator).

```js
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### Über ein TypedArray iterieren

```js
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
```

### Über eine Map iterieren

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

### Über ein Set iterieren

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Über das arguments-Objekt iterieren

Sie können über das {{jsxref("Functions/arguments", "arguments")}}-Objekt iterieren, um alle Parameter zu prüfen, die an eine Funktion übergeben wurden.

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

### Über eine NodeList iterieren

Das folgende Beispiel fügt eine `read`-Klasse zu Absätzen hinzu, die direkte Nachkommen des [`<article>`](/de/docs/Web/HTML/Reference/Elements/article)-Elements sind, indem es über eine [`NodeList`](/de/docs/Web/API/NodeList)-DOM-Sammlung iteriert.

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Über ein benutzerdefiniertes Iterable iterieren

Über ein Objekt mit einer `[Symbol.iterator]()`-Methode iterieren, die einen benutzerdefinierten Iterator zurückgibt:

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

Über ein Objekt mit einer `[Symbol.iterator]()`-Generator-Methode iterieren:

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

_Iterable Iterators_ (Iteratoren mit einer `[Symbol.iterator]()`-Methode, die `this` zurückgibt) sind eine ziemlich häufige Technik, um Iteratoren in Syntaxen zu verwenden, die Iterables erwarten, wie `for...of`.

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

### Über einen Generator iterieren

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

Die Ausführung der `break`-Anweisung in der ersten Schleife führt dazu, dass diese frühzeitig beendet wird. Der Iterator ist noch nicht abgeschlossen, sodass die zweite Schleife von dem Punkt fortsetzt, an dem die erste gestoppt hat.

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

Generatoren implementieren die [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return)-Methode, die dazu führt, dass die Generator-Funktion frühzeitig zurückkehrt, wenn die Schleife beendet wird. Dadurch sind Generatoren nicht zwischen Schleifen wiederverwendbar.

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

Sowohl `for...in`- als auch `for...of`-Anweisungen iterieren über etwas. Der Hauptunterschied besteht darin, worüber sie iterieren.

Die {{jsxref("Statements/for...in", "for...in")}}-Anweisung iteriert über die [aufzählbaren String-Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts, während die `for...of`-Anweisung über Werte iteriert, die das [iterierbare Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) zur Iteration definiert.

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

Das Objekt `iterable` erbt die Eigenschaften `objCustom` und `arrCustom`, da es sowohl `Object.prototype` als auch `Array.prototype` in seiner [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) enthält.

Die `for...in`-Schleife protokolliert nur [aufzählbare Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) des `iterable`-Objekts. Sie protokolliert keine Array-_Elemente_ `3`, `5`, `7` oder `"hello"`, da diese keine _Eigenschaften_ sind — sie sind _Werte_. Sie protokolliert Array-_Indizes_ sowie `arrCustom` und `objCustom`, welche tatsächliche Eigenschaften sind. Wenn Ihnen nicht klar ist, warum diese Eigenschaften überiteriert werden, gibt es eine gründlichere Erklärung dazu, wie [Array-Iteration und `for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in) funktionieren.

Die zweite Schleife ist der ersten ähnlich, aber sie verwendet {{jsxref("Object.hasOwn()")}}, um zu überprüfen, ob die gefundene aufzählbare Eigenschaft die eigene des Objekts ist, d.h. nicht geerbt. Wenn dies der Fall ist, wird die Eigenschaft protokolliert. Eigenschaften `0`, `1`, `2` und `foo` werden protokolliert, weil sie eigene Eigenschaften sind. Eigenschaften `arrCustom` und `objCustom` werden nicht protokolliert, da sie geerbt sind.

Die `for...of`-Schleife iteriert und protokolliert _Werte_, die `iterable` als ein Array (das [iterierbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) ist) zur Iteration definiert. Die _Elemente_ des Objekts `3`, `5`, `7` werden angezeigt, aber keine der _Eigenschaften_ des Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
