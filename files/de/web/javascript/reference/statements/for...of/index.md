---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`for...of`**-Anweisung führt eine Schleife aus, die auf einer Sequenz von Werten basiert, die von einem [iterierbaren Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) stammen. Iterierbare Objekte sind Instanzen von eingebauten Klassen wie {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, [`NodeList`](/de/docs/Web/API/NodeList) (und andere DOM-Sammlungen) sowie das {{jsxref("Functions/arguments", "arguments")}}-Objekt, [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), die von [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) erzeugt werden, und benutzerdefinierte Iterables.

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
  - : Erhält bei jeder Iteration einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein, oder ein [Ziel für Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z.B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Gültigkeitsbereich wie die `for...of`-Schleife.
- `iterable`
  - : Ein iterierbares Objekt. Die Quelle der Wertsequenz, auf der die Schleife arbeitet.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann die `variable` referenzieren. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Eine `for...of`-Schleife arbeitet nacheinander mit den Werten, die von einem iterierbaren Objekt stammen. Jede Operation der Schleife auf einen Wert wird als _Iteration_ bezeichnet, und man sagt, die Schleife _iteriert über das Iterable_. Jede Iteration führt Anweisungen aus, die sich auf den aktuellen Sequenzwert beziehen können.

Wenn eine `for...of`-Schleife über ein iterierbares Objekt iteriert, ruft sie zuerst die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode des iterierbaren Objekts auf, was einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt, und ruft dann wiederholt die [`next()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des resultierenden Iterators auf, um die Sequenz von Werten zu erzeugen, die der `variable` zugewiesen werden.

Eine `for...of`-Schleife beendet ihre Ausführung, wenn der Iterator abgeschlossen ist (das `next()` Ergebnis ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Wenn die `for...of`-Schleife frühzeitig beendet wird (z.B. bei einem `break`-Befehl oder beim Auftreten eines Fehlers), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des Iterators aufgerufen, um alle Bereinigungsaktionen durchzuführen.

Der `variable`-Teil von `for...of` akzeptiert alles, was vor dem `=` Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie nicht innerhalb des Schleifenkörpers neu zugewiesen wird (sie kann zwischen den Iterationen verändert werden, da dies zwei separate Variablen sind). Ansonsten können Sie {{jsxref("Statements/let", "let")}} verwenden.

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
> Jede Iteration erzeugt eine neue Variable. Eine Neuzuweisung der Variablen im Schleifenkörper beeinflusst nicht den ursprünglichen Wert im iterierbaren Objekt (in diesem Fall ein Array).

Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accessor wie `for (x.y of iterable)`, um den Wert einer Objekteigenschaft zuzuweisen.

Es gibt jedoch eine spezielle Regel, die die Verwendung von `async` als Variablennamen verbietet. Dies ist ungültige Syntax:

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

Dies dient dazu, Syntaxzweideutigkeiten mit dem gültigen Code `for (async of => {};;)` zu vermeiden, der eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife ist.

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

Sie können über das {{jsxref("Functions/arguments", "arguments")}}-Objekt iterieren, um alle an eine Funktion übergebenen Parameter zu untersuchen.

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

Das folgende Beispiel fügt Absatz-Elementen, die direkte Nachfahren des [`<article>`](/de/docs/Web/HTML/Element/article)-Elements sind, eine `read`-Klasse hinzu, indem über eine [`NodeList`](/de/docs/Web/API/NodeList)-DOM-Sammlung iteriert wird.

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

Über ein Objekt mit einer `[Symbol.iterator]()`-Generatorfunktion iterieren:

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

_Iterable Iterators_ (Iteratoren mit einer `[Symbol.iterator]()`-Methode, die `this` zurückgibt) sind eine ziemlich gängige Technik, um Iteratoren in Syntaxen, die Iterables erwarten, wie `for...of`, nutzbar zu machen.

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

### Frühzeitiges Beenden

Die Ausführung der `break`-Anweisung in der ersten Schleife führt dazu, dass sie frühzeitig beendet wird. Der Iterator ist noch nicht abgeschlossen, daher wird die zweite Schleife dort fortgesetzt, wo die erste aufgehört hat.

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

Generatoren implementieren die [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return)-Methode, die dazu führt, dass die Generatorfunktion frühzeitig beendet wird, wenn die Schleife beendet wird. Dies macht Generatoren zwischen Schleifen nicht wiederverwendbar.

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

Sowohl `for...in`- als auch `for...of`-Anweisungen iterieren über etwas. Der Hauptunterschied zwischen ihnen besteht darin, worüber sie iterieren.

Die {{jsxref("Statements/for...in", "for...in")}}-Anweisung iteriert über die [zählbaren String-Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts, während die `for...of`-Anweisung über die Werte iteriert, die das [iterierbare Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) zum Iterieren definiert.

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

Die `for...in`-Schleife protokolliert nur [zählbare Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) des `iterable`-Objekts. Sie protokolliert keine Array-_Elemente_ `3`, `5`, `7` oder `"hello"`, weil diese keine _Eigenschaften_ sind — sie sind _Werte_. Sie protokolliert Array-_Indizes_ sowie `arrCustom` und `objCustom`, die tatsächliche Eigenschaften sind. Wenn Sie nicht sicher sind, warum diese Eigenschaften iteriert werden, gibt es eine detailliertere Erklärung, wie [Array-Iteration und `for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in) funktionieren.

Die zweite Schleife ähnelt der ersten, verwendet jedoch {{jsxref("Object.hasOwn()")}}, um zu überprüfen, ob die gefundene zählbare Eigenschaft die eigene des Objekts ist, d.h. nicht vererbt. Wenn sie es ist, wird die Eigenschaft protokolliert. Die Eigenschaften `0`, `1`, `2` und `foo` werden protokolliert, weil sie eigene Eigenschaften sind. Die Eigenschaften `arrCustom` und `objCustom` werden nicht protokolliert, weil sie vererbt sind.

Die `for...of`-Schleife iteriert und protokolliert _Werte_, die `iterable` als Array (das [iterierbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) ist) zum Iterieren definiert. Die _Elemente_ `3`, `5`, `7` des Objekts werden angezeigt, aber keine der _Eigenschaften_ des Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
