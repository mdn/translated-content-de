---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`for...of`**-Anweisung führt eine Schleife aus, die mit einer Sequenz von Werten arbeitet, die von einem [iterierbaren Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) stammen. Zu iterierbaren Objekten gehören Instanzen von eingebauten Objekten wie {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, [`NodeList`](/de/docs/Web/API/NodeList) (und andere DOM-Sammlungen) sowie das {{jsxref("Functions/arguments", "arguments")}} Objekt, [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), die von [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) erzeugt wurden, und benutzerdefinierte Iterables.

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
  - : Empfängt bei jeder Iteration einen Wert aus der Sequenz. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`using`](/de/docs/Web/JavaScript/Reference/Statements/using), [`await using`](/de/docs/Web/JavaScript/Reference/Statements/await_using) oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)) sein. Variablen, die mit `var` deklariert werden, sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Gültigkeitsbereich, in dem die `for...of` Schleife steht.
- `iterable`
  - : Ein iterierbares Objekt. Die Quelle der Wertsequenz, auf der die Schleife operiert.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` referieren. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Eine `for...of`-Schleife arbeitet mit den Werten, die aus einem iterierbaren Objekt nacheinander in sequenzieller Reihenfolge stammen. Jede Operation der Schleife mit einem Wert wird als _Iteration_ bezeichnet, und die Schleife wird als _Iterieren über das Iterable_ bezeichnet. Jede Iteration führt Anweisungen aus, die auf den aktuellen Sequenzwert verweisen können.

Wenn eine `for...of`-Schleife über ein iterierbares Objekt iteriert, ruft sie zuerst die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) Methode des iterierbaren Objekts auf, welche einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt und ruft dann wiederholt die [`next()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Methode des resultierenden Iterators auf, um die Sequenz von Werten zu erzeugen, die der `variable` zugewiesen werden.

Eine `for...of`-Schleife wird beendet, wenn der Iterator abgeschlossen ist (das `next()`-Resultat ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie innerhalb der `statement` Anweisung [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} unterbricht die Ausführung der `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} unterbricht die Ausführung der `statement` und geht zur nächsten Iteration der Schleife über.

Wenn die `for...of`-Schleife frühzeitig beendet wurde (z. B. wird eine `break`-Anweisung getroffen oder ein Fehler ausgelöst), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) Methode des Iterators aufgerufen, um jegliche Aufräumarbeiten durchzuführen.

Der `variable` Teil von `for...of` akzeptiert alles, was vor dem `=` Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie nicht innerhalb des Schleifenkörpers neu zugewiesen wird (sie kann zwischen Iterationen geändert werden, da es sich um zwei separate Variablen handelt). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden.

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
> Jede Iteration erzeugt eine neue Variable. Die Neu-Zuweisung der Variable im Schleifenkörper beeinflusst nicht den ursprünglichen Wert im iterierbaren Objekt (z. B. in einem Array).

Variablen, die mit der {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} Deklaration deklariert werden, werden jedes Mal entsorgt, wenn eine Schleifeniteration abgeschlossen ist (und `await using` führt zu einem impliziten `await` am Ende der Iteration). Wenn jedoch die Schleife vorzeitig beendet wird, werden alle Werte im Iterator, die noch nicht besucht wurden, nicht entsorgt (obwohl der aktuelle Wert entsorgt wird).

```js
const resources = [dbConnection1, dbConnection2, dbConnection3];

for (using dbConnection of resources) {
  dbConnection.query("...");
  // dbConnection is disposed here
}
```

Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accessor wie `for (x.y of iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Jedoch gibt es eine spezielle Regel, die verbietet, `async` als Variablennamen zu verwenden. Dies ist ungültige Syntax:

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

Dies dient dazu, Syntaxambiguität mit dem gültigen Code `for (async of => {};;)` zu vermeiden, welches eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Schleife ist.

Ähnlich, wenn Sie die `using` Deklaration verwenden, dann kann die Variable nicht `of` genannt werden:

```js-nolint example-bad
for (using of of []); // SyntaxError
```

Dies dient dazu, Syntaxambiguität mit dem gültigen Code `for (using of [])` zu vermeiden, bevor `using` eingeführt wurde.

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

Sie können über das {{jsxref("Functions/arguments", "arguments")}}-Objekt iterieren, um alle Parameter zu überprüfen, die in eine Funktion übergeben wurden.

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

Das folgende Beispiel fügt Klassen `read` zu Absätzen hinzu, die direkte Nachkommen des [`<article>`](/de/docs/Web/HTML/Reference/Elements/article) Elements sind, indem über eine DOM-Sammlung von [`NodeList`](/de/docs/Web/API/NodeList) iteriert wird.

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Über ein benutzerdefiniertes iterierbares Objekt iterieren

Über ein Objekt mit einer `[Symbol.iterator]()` Methode iterieren, welche einen benutzerdefinierten Iterator zurückgibt:

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

Über ein Objekt mit einer `[Symbol.iterator]()` Generator-Methode iterieren:

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

_Iterable Iteratoren_ (Iteratoren mit einer `[Symbol.iterator]()` Methode, die `this` zurückgeben) sind eine recht häufige Technik, um Iteratoren in Syntaxen, die Iterables erwarten, wie `for...of`, nutzbar zu machen.

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

### Frühes Beenden

Ausführung der `break`-Anweisung in der ersten Schleife verursacht, dass diese frühzeitig beendet wird. Der Iterator ist noch nicht fertig, sodass die zweite Schleife dort fortfährt, wo die erste unterbrochen wurde.

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

Generatoren implementieren die [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) Methode, die dazu führt, dass die Generatorfunktion früh zurückkehrt, wenn die Schleife beendet wird. Dies macht Generatoren nicht zwischen Schleifen wiederverwendbar.

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

Die {{jsxref("Statements/for...in", "for...in")}}-Anweisung iteriert über die [enumerierten String-Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts, während die `for...of`-Anweisung über die Werte iteriert, die das [iterierbare Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) definiert, um darüber iteriert zu werden.

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

Die `for...in`-Schleife protokolliert nur [enumerierbare Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) des `iterable` Objekts. Sie protokolliert nicht die Array-_Elemente_ `3`, `5`, `7` oder `"hello"`, da diese keine _Eigenschaften_ sind – sie sind _Werte_. Sie protokolliert Array-_Indizes_ sowie `arrCustom` und `objCustom`, die tatsächliche Eigenschaften sind. Wenn Sie sich nicht sicher sind, warum diese Eigenschaften iteriert werden, gibt es eine ausführlichere Erklärung, wie [Array-Iteration und `for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in) funktioniert.

Die zweite Schleife ähnelt der ersten, verwendet jedoch {{jsxref("Object.hasOwn()")}}, um zu überprüfen, ob die gefundene enumerierbare Eigenschaft eigene des Objekts ist, d.h. nicht geerbt. Wenn dies der Fall ist, wird die Eigenschaft protokolliert. Die Eigenschaften `0`, `1`, `2` und `foo` werden protokolliert, da sie eigene Eigenschaften sind. Die Eigenschaften `arrCustom` und `objCustom` werden nicht protokolliert, da sie geerbt sind.

Die `for...of`-Schleife iteriert und protokolliert _Werte_, die `iterable`, als ein Array (das [iterierbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) ist), definiert, um darüber zu iterieren. Die _Elemente_ `3`, `5`, `7` des Objekts werden angezeigt, aber keine der _Eigenschaften_ des Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
