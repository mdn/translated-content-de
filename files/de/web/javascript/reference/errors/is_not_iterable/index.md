---
title: "TypeError: 'x' ist nicht iterierbar"
slug: Web/JavaScript/Reference/Errors/is_not_iterable
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "is not iterable" tritt auf, wenn der Wert, der in ein Array oder Funktionsaufruf [gespreadet](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird, als rechte Seite von [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement), als Argument einer Funktion wie {{jsxref("Promise.all")}} oder {{jsxref("Set/Set", "Set()")}}, oder als rechte Seite einer Array-[Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) angegeben wird und kein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols) ist. Dieser Fehler tritt auch auf, wenn {{jsxref("Array.fromAsync()")}} oder {{jsxref("Statements/for-await...of", "for await...of")}} mit einem [nicht-asynchronen iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) verwendet wird.

## Nachricht

```plain
TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function (V8-based & Safari)
TypeError: %Array%.from requires that the property of the first argument, items[Symbol.iterator], when exists, be a function (V8-based & Safari)
TypeError: Array.fromAsync requires that the property of the first argument, items[Symbol.asyncIterator], when exists, be a function (V8-based & Safari)
TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator)) (V8-based)
TypeError: x is not async iterable (V8-based)
TypeError: x is not iterable (V8-based & Firefox)
TypeError: undefined is not a function (near '...y of x...') (Safari)
TypeError: Array.from: no function (Safari)
TypeError: Type error (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Der Wert, der in ein Array oder Funktionsaufruf [gespreadet](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird, als rechte Seite von [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement), oder als Argument einer Funktion wie {{jsxref("Promise.all")}} oder {{jsxref("Set/Set", "Set()")}}, oder als rechte Seite einer Array-[Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) angegeben wird, ist kein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols). Ein iterierbares Objekt kann ein eingebauter iterierbarer Typ sein wie {{jsxref("Array")}}, {{jsxref("String")}} oder {{jsxref("Map")}}, ein Ergebnis eines Generators oder ein Objekt, das das [iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) implementiert.

```js
const nonIterable1 = {};
const nonIterable2 = { [Symbol.iterator]: 1 };

[...nonIterable1];
Math.max(...nonIterable1);
for (const x of nonIterable1);
new Set(nonIterable1);
Array.from(nonIterable2);
new Int8Array(nonIterable2);
const [] = nonIterable1;
```

## Beispiele

### Array-Destrukturierung eines nicht-iterierbaren Objekts

```js example-bad
const myobj = { arrayOrObjProp1: {}, arrayOrObjProp2: [42] };

const {
  arrayOrObjProp1: [value1],
  arrayOrObjProp2: [value2],
} = myobj; // TypeError: object is not iterable

console.log(value1, value2);
```

Das nicht-iterierbare Objekt könnte in einigen Laufzeitumgebungen `undefined` werden.

### Iterieren über Objekt-Eigenschaften

In JavaScript sind {{jsxref("Object")}}e nicht iterierbar, es sei denn, sie implementieren das [iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). Daher können Sie nicht [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) verwenden, um über die Eigenschaften eines Objekts zu iterieren.

```js example-bad
const obj = { France: "Paris", England: "London" };
for (const p of obj) {
  // …
} // TypeError: obj is not iterable
```

Stattdessen müssen Sie {{jsxref("Object.keys")}} oder {{jsxref("Object.entries")}} verwenden, um über die Eigenschaften oder Einträge eines Objekts zu iterieren.

```js example-good
const obj = { France: "Paris", England: "London" };
// Über die Eigenschaftsnamen iterieren:
for (const country of Object.keys(obj)) {
  const capital = obj[country];
  console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj)) {
  console.log(country, capital);
}
```

Eine weitere Option für diesen Anwendungsfall könnte die Verwendung einer {{jsxref("Map")}} sein:

```js example-good
const map = new Map();
map.set("France", "Paris");
map.set("England", "London");
// Über die Eigenschaftsnamen iterieren:
for (const country of map.keys()) {
  const capital = map.get(country);
  console.log(country, capital);
}

for (const capital of map.values()) {
  console.log(capital);
}

for (const [country, capital] of map.entries()) {
  console.log(country, capital);
}
```

### Iterieren über einen Generator

[Generatorfunktionen](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) sind Funktionen, die Sie aufrufen, um ein iterierbares Objekt zu erzeugen.

```js example-bad
function* generate(a, b) {
  yield a;
  yield b;
}

for (const x of generate) {
  console.log(x);
} // TypeError: generate is not iterable
```

Wenn sie nicht aufgerufen werden, ist das {{jsxref("Function")}}-Objekt, das dem Generator entspricht, aufrufbar, aber nicht iterierbar. Das Aufrufen eines Generators erzeugt ein iterierbares Objekt, das über die während der Ausführung des Generators erzeugten Werte iteriert.

```js example-good
function* generate(a, b) {
  yield a;
  yield b;
}

for (const x of generate(1, 2)) {
  console.log(x);
}
```

### Iterieren über ein benutzerdefiniertes iterierbares Objekt

Benutzerdefinierte iterierbare Objekte können erstellt werden, indem die Methode {{jsxref("Symbol.iterator")}} implementiert wird. Sie müssen sicherstellen, dass Ihre Iterator-Methode ein Objekt zurückgibt, das ein Iterator ist, das heißt, es muss eine next-Methode haben.

```js example-bad
const myEmptyIterable = {
  [Symbol.iterator]() {
    return []; // [] ist iterierbar, aber es ist kein Iterator — es hat keine next-Methode.
  },
};

Array.from(myEmptyIterable); // TypeError: myEmptyIterable is not iterable
```

Hier ist eine korrekte Implementierung:

```js example-good
const myEmptyIterable = {
  [Symbol.iterator]() {
    return [][Symbol.iterator]();
  },
};

Array.from(myEmptyIterable); // []
```

## Siehe auch

- [Iterierbares Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)
- {{jsxref("Object.keys")}}
- {{jsxref("Object.entries")}}
- {{jsxref("Map")}}
- [Generatorfunktionen](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions)
- [for...of](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)
