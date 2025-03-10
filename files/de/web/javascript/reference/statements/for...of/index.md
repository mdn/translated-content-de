---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Statements")}}

Die **`for...of`**-Anweisung führt eine Schleife aus, die auf einer Sequenz von Werten basiert, die aus einem [iterierbaren Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) stammen. Iterierbare Objekte umfassen Instanzen von eingebauten Objekten wie {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, [`NodeList`](/de/docs/Web/API/NodeList) (und andere DOM-Sammlungen) sowie das {{jsxref("Functions/arguments", "arguments")}}-Objekt, [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), die durch [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) erzeugt werden, und benutzerdefinierte Iterables.

{{InteractiveExample("JavaScript Demo: Statement - For...Of")}}

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
  - : Empfängt bei jedem Durchlauf einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) oder ein [Zuweisungs-](/de/docs/Web/JavaScript/Reference/Operators/Assignment) Ziel sein (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Variablen, die mit `var` deklariert sind, sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Gültigkeitsbereich, in dem sich die `for...of`-Schleife befindet.
- `iterable`
  - : Ein iterierbares Objekt. Die Quelle der Wertesequenz, auf der die Schleife arbeitet.
- `statement`
  - : Eine Anweisung, die bei jedem Durchlauf ausgeführt wird. Kann sich auf `variable` beziehen. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Eine `for...of`-Schleife arbeitet nacheinander auf den aus einem iterierbaren Objekt stammenden Werten. Jede Ausführung der Schleife über einen Wert wird als _Iteration_ bezeichnet, und es wird gesagt, dass die Schleife _über das Iterable iteriert_. Bei jeder Iteration werden Anweisungen ausgeführt, die sich auf den aktuellen Sequenzwert beziehen können.

Wenn eine `for...of`-Schleife über ein Iterable iteriert, ruft sie zunächst die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode des Iterables auf, die einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt, und ruft dann wiederholt die [`next()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des resultierenden Iterators auf, um die Sequenz von Werten zu erzeugen, die `variable` zugewiesen werden sollen.

Eine `for...of`-Schleife wird beendet, wenn der Iterator abgeschlossen ist (das `next()`-Ergebnis ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb der `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Wenn die `for...of`-Schleife frühzeitig beendet wird (z.B. ein `break`-Statement wird erreicht oder ein Fehler wird erzeugt), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des Iterators aufgerufen, um Aufräumarbeiten durchzuführen.

Der `variable`-Teil von `for...of` akzeptiert alles, was vor dem `=`-Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie innerhalb des Schleifenrumpfs nicht neu zugewiesen wird (sie kann zwischen Iterationen geändert werden, da dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden.

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
> Jede Iteration erstellt eine neue Variable. Das Neuzuweisen der Variable innerhalb des Schleifenrumpfs hat keine Auswirkungen auf den ursprünglichen Wert im iterierbaren Objekt (in diesem Fall ein Array).

Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschaften-Accessor wie `for (x.y of iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Es gibt jedoch eine spezielle Regel, die die Verwendung von `async` als Variablennamen verbietet. Dies ist eine ungültige Syntax:

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

Dies dient dazu, Syntaxkonflikte mit dem gültigen Code `for (async of => {};;)` zu vermeiden, welcher eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife ist.

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

Im folgenden Beispiel wird eine `read`-Klasse zu Absätzen hinzugefügt, die direkte Nachkommen des [`<article>`](/de/docs/Web/HTML/Element/article)-Elements sind, indem über eine [`NodeList`](/de/docs/Web/API/NodeList)-DOM-Sammlung iteriert wird.

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Iterieren über ein benutzerdefiniertes iterierbares Objekt

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

Iterieren über ein Objekt mit einer `[Symbol.iterator]()`-Generator-Methode:

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

_Iterable Iteratoren_ (Iteratoren mit einer `[Symbol.iterator]()`-Methode, die `this` zurückgibt) sind eine ziemlich gängige Technik, um Iteratoren in Syntaxen, die Iterables erwarten, wie `for...of`, verwendbar zu machen.

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

### Frühzeitiges Beenden

Die Ausführung der `break`-Anweisung in der ersten Schleife führt dazu, dass sie vorzeitig beendet wird. Der Iterator ist noch nicht abgeschlossen, daher wird die zweite Schleife an dem Punkt fortgesetzt, an dem die erste aufgehört hat.

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

Generatoren implementieren die [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return)-Methode, die dazu führt, dass die Generatorfunktion vorzeitig zurückkehrt, wenn die Schleife endet. Dadurch sind Generatoren nicht wiederverwendbar zwischen Schleifen.

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

Die {{jsxref("Statements/for...in", "for...in")}}-Anweisung iteriert über [zähleigene Zeichenfolgeneigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts, während die `for...of`-Anweisung über Werte iteriert, die das [iterierbare Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) zum Iterieren definiert.

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

Die `for...in`-Schleife protokolliert nur [zählbare Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) des `iterable`-Objekts. Sie protokolliert keine Array-Elemente `3`, `5`, `7` oder `"hello"`, da diese keine Eigenschaften sind – sie sind Werte. Sie protokolliert Array-Indizes sowie `arrCustom` und `objCustom`, die tatsächliche Eigenschaften sind. Wenn Sie sich nicht sicher sind, warum diese Eigenschaften iteriert werden, gibt es eine ausführlichere Erklärung, wie [Array-Iteration und `for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in) funktionieren.

Die zweite Schleife ist der ersten ähnlich, verwendet jedoch {{jsxref("Object.hasOwn()")}} um zu prüfen, ob die gefundene zählbare Eigenschaft die eigene des Objekts ist, d.h. nicht geerbt. Wenn ja, wird die Eigenschaft protokolliert. Die Eigenschaften `0`, `1`, `2` und `foo` werden protokolliert, da es sich um eigene Eigenschaften handelt. Die Eigenschaften `arrCustom` und `objCustom` werden nicht protokolliert, da sie geerbt sind.

Die `for...of`-Schleife iteriert und protokolliert _Werte_, die `iterable`, als Array (das [iterierbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) ist), zum Iterieren definiert. Die _Elemente_ `3`, `5`, `7` des Objekts werden angezeigt, aber keine der _Eigenschaften_ des Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
