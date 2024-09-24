---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Die **`for...of`**-Anweisung führt eine Schleife aus, die auf einer Sequenz von Werten basiert, die von einem [iterierbaren Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) stammen. Iterierbare Objekte umfassen Instanzen von eingebauten Objekten wie {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{domxref("NodeList")}} (und andere DOM-Sammlungen), sowie das {{jsxref("Functions/arguments", "arguments")}}-Objekt, [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) erzeugt durch [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*), und benutzerdefinierte Iterables.

{{EmbedInteractiveExample("pages/js/statement-forof.html")}}

## Syntax

```js-nolint
for (variable of iterable)
  statement
```

- `variable`
  - : Empfängt einen Wert aus der Sequenz in jeder Iteration. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) oder ein [Zuweisungs-](/de/docs/Web/JavaScript/Reference/Operators/Assignment) Ziel sein (z. B. eine vorher deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungs-Zuweisungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)). Variablen, die mit `var` deklariert sind, sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Gültigkeitsbereich, in dem die `for...of`-Schleife ist.
- `iterable`
  - : Ein iterierbares Objekt. Die Quelle der Wertsequenz, auf die die Schleife zugreift.
- `statement`
  - : Eine Anweisung, die bei jedem Durchlauf ausgeführt wird. Kann `variable` referenzieren. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Eine `for...of`-Schleife arbeitet mit den Werten, die einer iterierbaren Quelle entstammen, der Reihe nach. Jede Ausführung der Schleife auf einem Wert wird als _Iteration_ bezeichnet, und die Schleife _durchläuft die Iterable_. Jede Iteration führt Anweisungen aus, die sich auf den aktuellen Sequenzwert beziehen können.

Wenn eine `for...of`-Schleife über ein iterierbares Objekt iteriert, ruft sie zuerst die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode des iterierbaren Objekts auf, die einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt, und ruft dann wiederholt die [`next()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des resultierenden Iterator-Objekts auf, um die Sequenz von Werten zu erzeugen, die `variable` zugewiesen werden.

Eine `for...of`-Schleife endet, wenn der Iterator abgeschlossen ist (das `next()` Ergebnis ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) in `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung der `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung der `statement` und geht zur nächsten Iteration der Schleife.

Wenn die `for...of`-Schleife vorzeitig beendet wurde (z.B. durch eine `break`-Anweisung oder einen Fehler), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des Iterators aufgerufen, um eventuelle Aufräumarbeiten durchzuführen.

Der Teil `variable` von `for...of` nimmt alles an, was vor dem `=`-Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie nicht innerhalb des Schleifenkörpers neu zugewiesen wird (sie kann zwischen den Iterationen geändert werden, da dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden.

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
> Jede Iteration erzeugt eine neue Variable. Die Wiederzuweisung der Variablen innerhalb des Schleifenkörpers beeinflusst den ursprünglichen Wert im iterierbaren Objekt nicht (in diesem Fall ein Array).

Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accessor wie `for (x.y of iterable)`, um den Wert einer Objekteigenschaft zuzuweisen.

Jedoch gibt es eine spezielle Regel, die die Verwendung von `async` als Variablennamen verbietet. Dies ist ungültige Syntax:

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

Dies soll Syntaxzweideutigkeiten mit dem gültigen Code `for (async of => {};;)` vermeiden, welcher eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife ist.

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

### Iterieren über das arguments Objekt

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

Im folgenden Beispiel wird eine `read`-Klasse zu Absätzen hinzugefügt, die direkte Nachkommen des [`<article>`](/de/docs/Web/HTML/Element/article)-Elements sind, indem über eine [`NodeList`](/de/docs/Web/API/NodeList)-DOM-Sammlung iteriert wird.

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

_Iterierbare Iteratoren_ (Iteratoren mit einer `[Symbol.iterator]()` Methode, die `this` zurückgibt) sind eine recht verbreitete Technik, um Iteratoren in Syntaxen verwendbar zu machen, die Iterables erwarten, wie `for...of`.

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

Die Ausführung der `break`-Anweisung in der ersten Schleife führt dazu, dass sie vorzeitig endet. Der Iterator ist noch nicht beendet, daher wird die zweite Schleife von dem Punkt an fortgesetzt, an dem die erste aufgehört hat.

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

// Eine weitere Schleife, die denselben Iterator verwendet,
// setzt von da an fort, wo die letzte Schleife aufgehört hat.
for (const value of iterator) {
  console.log(value);
}
// 2
// 3

// Der Iterator ist aufgebraucht.
// Diese Schleife wird keine Iterationen ausführen.
for (const value of iterator) {
  console.log(value);
}
// [Keine Ausgabe]
```

Generatoren implementieren die [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return)-Methode, die die Generatorfunktion veranlasst, frühzeitig zurückzukehren, wenn die Schleife endet. Dadurch sind Generatoren zwischen Schleifen nicht wiederverwendbar.

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

// Der Generator ist aufgebraucht.
// Diese Schleife wird keine Iterationen ausführen.
for (const value of generator) {
  console.log(value);
}
// [Keine Ausgabe]
```

### Unterschied zwischen for...of und for...in

Sowohl `for...in`- als auch `for...of`-Anweisungen iterieren über etwas. Der Hauptunterschied zwischen ihnen liegt darin, worüber sie iterieren.

Die {{jsxref("Statements/for...in", "for...in")}}-Anweisung iteriert über die [aufzählbaren Zeichenfolgen-Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) eines Objekts, während die `for...of`-Anweisung über Werte iteriert, die das [iterierbare Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) zum Iterieren definiert.

Das folgende Beispiel zeigt den Unterschied zwischen einer `for...of`-Schleife und einer `for...in`-Schleife, wenn sie mit einem {{jsxref("Array")}} verwendet wird.

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

Das Objekt `iterable` erbt die Eigenschaften `objCustom` und `arrCustom`, weil es sowohl `Object.prototype` als auch `Array.prototype` in seiner [Prototypen-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) enthält.

Die `for...in`-Schleife protokolliert nur die [aufzählbaren Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) des `iterable`-Objekts. Sie protokolliert keine Array-_Elemente_ `3`, `5`, `7` oder `"hello"`, da diese keine _Eigenschaften_ sind - sie sind _Werte_. Sie protokolliert Array-_Indizes_ sowie `arrCustom` und `objCustom`, die tatsächliche Eigenschaften sind. Wenn Sie sich nicht sicher sind, warum diese Eigenschaften durchlaufen werden, gibt es eine ausführlichere Erklärung, wie [Array-Iteration und `for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in) funktionieren.

Die zweite Schleife ähnelt der ersten, verwendet jedoch {{jsxref("Object.hasOwn()")}} um zu prüfen, ob die gefundene aufzählbare Eigenschaft die eigene des Objekts ist, d.h. nicht geerbt. Wenn ja, wird die Eigenschaft protokolliert. Die Eigenschaften `0`, `1`, `2` und `foo` werden protokolliert, weil sie eigene Eigenschaften sind. Die Eigenschaften `arrCustom` und `objCustom` werden nicht protokolliert, da sie geerbt sind.

Die `for...of`-Schleife iteriert und protokolliert die _Werte_, die `iterable`, als Array (welches [iterierbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) ist), zum Iterieren definiert. Die _Elemente_ des Objekts, `3`, `5`, `7`, werden angezeigt, aber keine der _Eigenschaften_ des Objekts.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
