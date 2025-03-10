---
title: "TypeError: 'x' ist nicht iterierbar"
slug: Web/JavaScript/Reference/Errors/is_not_iterable
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "ist nicht iterierbar" tritt auf, wenn der Wert, der mit dem [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in ein Array oder einen Funktionsaufruf übergeben wird, der als rechte Seite von [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) verwendet wird, als Argument einer Funktion wie {{jsxref("Promise.all")}} oder {{jsxref("Set/Set", "Set()")}}, oder als rechte Seite einer Array-[Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) angegeben ist, kein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols) ist. Dieser Fehler tritt auch auf, wenn {{jsxref("Array.fromAsync()")}} oder {{jsxref("Statements/for-await...of", "for await...of")}} mit einem [nicht-asynchronen iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) verwendet wird.

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

Der Wert, der mit dem [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in ein Array oder einen Funktionsaufruf übergeben wird, der als rechte Seite von [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) verwendet wird, oder als Argument einer Funktion wie {{jsxref("Promise.all")}} oder {{jsxref("Set/Set", "Set()")}}, oder als Quelle eines Array-[Destrukturierungsmusters](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) angegeben ist, ist kein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols). Ein iterierbares Objekt kann ein eingebauter iterierbarer Typ wie {{jsxref("Array")}}, {{jsxref("String")}} oder {{jsxref("Map")}}, ein Generator-Ergebnis oder ein Objekt sein, das das [iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) implementiert.

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

### Array-Destrukturierung eines nicht-iterierbaren Elements

```js example-bad
const myObj = { arrayOrObjProp1: {}, arrayOrObjProp2: [42] };

const {
  arrayOrObjProp1: [value1],
  arrayOrObjProp2: [value2],
} = myObj; // TypeError: object is not iterable

console.log(value1, value2);
```

Das nicht-iterierbare Element kann in einigen Laufzeitumgebungen `undefined` sein.

### Iterieren über Objekteigenschaften

In JavaScript sind {{jsxref("Object")}}e nicht iterierbar, es sei denn, sie implementieren das [iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). Daher können Sie [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) nicht verwenden, um über die Eigenschaften eines Objekts zu iterieren.

```js example-bad
const obj = { France: "Paris", England: "London" };
for (const p of obj) {
  // …
} // TypeError: obj is not iterable
```

Stattdessen müssen Sie {{jsxref("Object.keys")}} oder {{jsxref("Object.entries")}} verwenden, um über die Eigenschaften oder Einträge eines Objekts zu iterieren.

```js example-good
const obj = { France: "Paris", England: "London" };
// Iterate over the property names:
for (const country of Object.keys(obj)) {
  const capital = obj[country];
  console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj)) {
  console.log(country, capital);
}
```

Eine weitere Möglichkeit für diesen Anwendungsfall wäre die Verwendung eines {{jsxref("Map")}}:

```js example-good
const map = new Map();
map.set("France", "Paris");
map.set("England", "London");
// Iterate over the property names:
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

[Generator-Funktionen](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) sind Funktionen, die Sie aufrufen, um ein iterierbares Objekt zu erzeugen.

```js example-bad
function* generate(a, b) {
  yield a;
  yield b;
}

for (const x of generate) {
  console.log(x);
} // TypeError: generate is not iterable
```

Wenn sie nicht aufgerufen werden, ist das mit dem Generator korrespondierende {{jsxref("Function")}}-Objekt aufrufbar, aber nicht iterierbar. Das Aufrufen eines Generators erzeugt ein iterierbares Objekt, das über die während der Ausführung des Generators erzeugten Werte iteriert.

```js example-good
function* generate(a, b) {
  yield a;
  yield b;
}

for (const x of generate(1, 2)) {
  console.log(x);
}
```

### Iterieren über ein benutzerdefiniertes Iterierbares

Benutzerdefinierte Iterierbare können erstellt werden, indem die {{jsxref("Symbol.iterator")}}-Methode implementiert wird. Sie müssen sicherstellen, dass Ihre Iterator-Methode ein Objekt zurückgibt, das ein Iterator ist, was bedeutet, dass es eine next-Methode haben muss.

```js example-bad
const myEmptyIterable = {
  [Symbol.iterator]() {
    return []; // [] is iterable, but it is not an iterator — it has no next method.
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
- [Generator-Funktionen](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions)
- [for...of](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)
