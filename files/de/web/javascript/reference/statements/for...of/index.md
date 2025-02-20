---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`for...of`**-Anweisung führt eine Schleife aus, die auf einer Sequenz von Werten basiert, die von einem [iterierbaren Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) stammen. Iterierbare Objekte umfassen Instanzen von eingebauten Konstruktoren wie {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, [`NodeList`](/de/docs/Web/API/NodeList) (und andere DOM-Sammlungen) sowie das {{jsxref("Functions/arguments", "arguments")}}-Objekt, [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator), die von [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) erzeugt werden, und benutzerdefinierte Iterierbare.

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
  - : Nimmt bei jeder Iteration einen Wert aus der Sequenz entgegen. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein, oder ein [Ziel einer Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungszuweisungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)). Variablen, die mit `var` deklariert wurden, sind nicht lokal für die Schleife, d. h., sie befinden sich im selben Geltungsbereich wie die `for...of`-Schleife.
- `iterable`
  - : Ein iterierbares Objekt. Die Quelle der Werte, auf denen die Schleife arbeitet.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` verweisen. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Eine `for...of`-Schleife arbeitet nacheinander auf den Werten eines iterierbaren Objekts. Jeder Durchlauf der Schleife auf einem Wert wird als _Iteration_ bezeichnet, und die Schleife _durchläuft_ das iterierbare Objekt. Jede Iteration führt Anweisungen aus, die sich möglicherweise auf den aktuellen Wert der Sequenz beziehen.

Wenn eine `for...of`-Schleife über ein iterierbares Objekt iteriert, ruft sie zunächst die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode des Iterierbaren auf, die einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) zurückgibt, und ruft dann wiederholt die `next()`-Methode des zurückgegebenen Iterators auf, um die Sequenz von Werten zu erzeugen, die `variable` zugewiesen werden.

Eine `for...of`-Schleife wird beendet, wenn der Iterator abgeschlossen ist (das Ergebnis von `next()` ist ein Objekt mit `done: true`). Wie bei anderen Schleifenanweisungen können Sie [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Wenn die `for...of`-Schleife vorzeitig beendet wird (z. B. durch eine `break`-Anweisung oder wenn ein Fehler auftritt), wird die [`return()`](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)-Methode des Iterators aufgerufen, um eine Bereinigung durchzuführen.

Der Teil `variable` von `for...of` akzeptiert alles, was vor dem `=`-Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie nicht innerhalb des Schleifenkörpers neu zugewiesen wird (sie kann sich zwischen Iterationen ändern, da es sich um getrennte Variablen handelt). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden.

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
> Jede Iteration erzeugt eine neue Variable. Das erneute Zuweisen der Variable im Schleifenkörper hat keine Auswirkung auf den ursprünglichen Wert im iterierbaren Objekt (in diesem Fall ein Array).

Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschaftszugriff wie `for (x.y of iterable)`, um den Wert einer Objekteigenschaft zuzuweisen.

Jedoch gibt es eine spezielle Regel, die es verbietet, `async` als Variablennamen zu verwenden. Dies wäre eine ungültige Syntax:

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

Dies soll Syntaxkonflikte mit gültigem Code wie `for (async of => {};;)` vermeiden, der eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife ist.

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

Strings werden [durch Unicode-Codepunkte](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) iteriert.

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

Es ist möglich, über das {{jsxref("Functions/arguments", "arguments")}}-Objekt zu iterieren, um alle an eine Funktion übergebenen Parameter zu prüfen.

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

Im folgenden Beispiel wird einer Klasse `read` zu `<p>`-Elementen hinzugefügt, die direkte Nachkommen des [`<article>`](/de/docs/Web/HTML/Element/article)-Elements sind, indem über eine [`NodeList`](/de/docs/Web/API/NodeList) DOM-Sammlung iteriert wird.

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Iterieren über ein benutzerdefiniertes iterierbares Objekt

Iteration über ein Objekt mit einer `[Symbol.iterator]()`-Methode, die einen benutzerdefinierten Iterator zurückgibt:

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

Iteration über ein Objekt mit einer `[Symbol.iterator]()`-Generator-Methode:

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

_Iterierbare Iteratoren_ (Iteratoren mit einer `[Symbol.iterator]()`-Methode, die `this` zurückgibt) sind eine weit verbreitete Technik, um Iteratoren in Syntaxen, die Iterierbare erwarten, wie `for...of`, nutzbar zu machen.

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

### Vorzeitiger Abbruch

Die Ausführung der `break`-Anweisung in der ersten Schleife führt dazu, dass sie vorzeitig beendet wird. Der Iterator ist noch nicht abgeschlossen, daher wird die zweite Schleife genau dort fortgesetzt, wo die erste unterbrochen wurde.

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

Generatoren implementieren die [`return()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator/return)-Methode, die dazu führt, dass die Generatorfunktion vorzeitig zurückgegeben wird, wenn die Schleife beendet wird. Dadurch sind Generatoren zwischen Schleifen nicht wiederverwendbar.

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

Die {{jsxref("Statements/for...in", "for...in")}}-Anweisung iteriert über die [aufzählbaren String-Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) eines Objekts, während die `for...of`-Anweisung über Werte iteriert, die das [iterierbare Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) definiert.

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

Das Objekt `iterable` erbt die Eigenschaften `objCustom` und `arrCustom`, da es sowohl `Object.prototype` als auch `Array.prototype` in seiner [Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) enthält.

Die `for...in`-Schleife protokolliert nur [aufzählbare Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) des `iterable`-Objekts. Sie protokolliert keine Array-_Elemente_ `3`, `5`, `7` oder `"hello"`, da diese keine _Eigenschaften_, sondern _Werte_ sind. Sie protokolliert Array-_Indizes_ sowie `arrCustom` und `objCustom`, die tatsächliche Eigenschaften sind. Wenn Sie sich nicht sicher sind, warum diese Eigenschaften iteriert werden, gibt es eine detailliertere Erklärung, wie [Array-Iteration und `for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in) funktionieren.

In der zweiten Schleife werden nur die eigenen Eigenschaften (nicht die geerbten) des Objekts `iterable` protokolliert, da {{jsxref("Object.hasOwn()")}} verwendet wird, um zu überprüfen, ob eine gefundene aufzählbare Eigenschaft dem Objekt gehört. Eigenschaften wie `0`, `1`, `2` und `foo` werden protokolliert, da sie eigene Eigenschaften sind. Eigenschaften wie `arrCustom` und `objCustom` werden nicht protokolliert, da sie geerbt sind.

Die `for...of`-Schleife iteriert und protokolliert _Werte_, die durch `iterable` als Array (welches [iterierbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) ist) definiert werden. Die _Elemente_ `3`, `5`, `7` des Objekts werden angezeigt, aber keine der _Eigenschaften_ des Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
