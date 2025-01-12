---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
l10n:
  sourceCommit: 9bc368288095cf57e071e4ec64162d4115aa3e1a
---

{{jsSidebar("Operators")}}

Der **`yield*`** Operator kann innerhalb von Generatorfunktionen (synchron oder asynchron) verwendet werden, um an ein anderes [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt, wie einen {{jsxref("Generator")}}, zu delegieren. Innerhalb asynchroner Generatorfunktionen kann er zusätzlich verwendet werden, um an ein weiteres asynchrones iterierbares Objekt, wie einen {{jsxref("AsyncGenerator")}}, zu delegieren.

{{EmbedInteractiveExample("pages/js/expressions-yieldasterisk.html")}}

## Syntax

```js-nolint
yield* expression
```

### Parameter

- `expression` {{optional_inline}}
  - : Ein iterierbares Objekt.

### Rückgabewert

Gibt den Wert zurück, den dieser Iterator zurückgibt, wenn er geschlossen wird (wenn `done` `true` ist).

## Beschreibung

Der `yield*` Ausdruck iteriert über den Operanden und liefert jeden von ihm zurückgegebenen Wert. Es delegiert die Iteration des aktuellen Generators an einen zugrunde liegenden Iterator – den wir als „Generator“ und „Iterator“ bezeichnen werden. `yield*` erhält zuerst den Iterator vom Operanden, indem es die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) Methode des Letzteren aufruft. Dann ruft `yield*` jedes Mal, wenn die `next()` Methode des Generators aufgerufen wird, die `next()` Methode des Iterators auf, übergibt das vom Generator empfangene Argument (bei dem ersten Aufruf immer `undefined`) und liefert dasselbe Ergebnisobjekt wie das, was von der `next()` Methode des Iterators zurückgegeben wird. Wenn das Iterator-Ergebnis `done: true` hat, stoppt der `yield*` Ausdruck die Ausführung und gibt den `value` dieses Ergebnisses zurück.

Der `yield*` Operator leitet die {{jsxref("Generator/throw", "throw()")}} und {{jsxref("Generator/return", "return()")}} Methoden des aktuellen Generators ebenfalls an den zugrunde liegenden Iterator weiter. Wenn der aktuelle Generator vorzeitig über eine dieser Methoden geschlossen wird, wird der zugrunde liegende Iterator benachrichtigt. Wenn die `throw()`/`return()` Methode des Generators aufgerufen wird, wird die `throw()`/`return()` Methode des zugrunde liegenden Iterators mit demselben Argument aufgerufen. Der Rückgabewert von `throw()`/`return()` wird wie das Ergebnis der `next()` Methode behandelt, und wenn die Methode auslöst, wird die Ausnahme vom `yield*` Ausdruck propagiert.

Wenn der zugrunde liegende Iterator keine `return()` Methode hat, verwandelt sich der `yield*` Ausdruck in eine {{jsxref("Statements/return", "return")}} Anweisung, ähnlich wie beim Aufruf von `return()` auf einem angehaltenen {{jsxref("Operators/yield", "yield")}} Ausdruck.

Wenn der zugrunde liegende Iterator keine `throw()` Methode hat, verursacht dies, dass `yield*` einen {{jsxref("TypeError")}} auslöst – aber bevor der Fehler ausgelöst wird, wird die `return()` Methode des zugrunde liegenden Iterators aufgerufen, falls vorhanden.

## Beispiele

### Delegieren an einen anderen Generator

Im folgenden Code werden die von `g1()` gelieferten Werte genauso aus `next()` Aufrufen zurückgegeben wie die von `g2()` gelieferten.

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

const gen = g2();

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: 4, done: false}
console.log(gen.next()); // {value: 5, done: false}
console.log(gen.next()); // {value: undefined, done: true}
```

### Andere iterierbare Objekte

Neben Generatorobjekten kann `yield*` auch andere Arten von Iterierbaren (z.B. Arrays, Zeichenfolgen oder {{jsxref("Functions/arguments", "arguments")}} Objekte) verwenden.

```js
function* g3(...args) {
  yield* [1, 2];
  yield* "34";
  yield* args;
}

const gen = g3(5, 6);

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: "3", done: false}
console.log(gen.next()); // {value: "4", done: false}
console.log(gen.next()); // {value: 5, done: false}
console.log(gen.next()); // {value: 6, done: false}
console.log(gen.next()); // {value: undefined, done: true}
```

### Der Wert des `yield*` Ausdrucks selbst

`yield*` ist ein Ausdruck, keine Anweisung, daher wird er zu einem Wert ausgewertet.

```js
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

function* g5() {
  const g4ReturnValue = yield* g4();
  console.log(g4ReturnValue); // 'foo'
  return g4ReturnValue;
}

const gen = g5();

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false} done is false because g5 generator isn't finished, only g4
console.log(gen.next()); // {value: 'foo', done: true}
```

### Verwendung mit asynchronen Generatoren

```js
async function* g1() {
  await Promise.resolve(0);
  yield "foo";
}

function* g2() {
  yield "bar";
}

async function* g3() {
  // Can use yield* on both async and sync iterators
  yield* g1();
  yield* g2();
}

const gen = g3();

console.log(await gen.next()); // {value: "foo", done: false}
console.log(await gen.next()); // {value: "bar", done: false}
console.log(await gen.next()); // {done: true}
```

### Methodenvorbereitung

Die `next()`, `throw()`, und `return()` Methoden des aktuellen Generators werden alle an den zugrunde liegenden Iterator weitergeleitet.

```js
const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next(v) {
        console.log("next called with", v);
        count++;
        return { value: count, done: false };
      },
      return(v) {
        console.log("return called with", v);
        return { value: "iterable return value", done: true };
      },
      throw(v) {
        console.log("throw called with", v);
        return { value: "iterable thrown value", done: true };
      },
    };
  },
};

function* gf() {
  yield* iterable;
  return "gf return value";
}

const gen = gf();
console.log(gen.next(10));
// next called with undefined; the argument of the first next() call is always ignored
// { value: 1, done: false }
console.log(gen.next(20));
// next called with 20
// { value: 2, done: false }
console.log(gen.return(30));
// return called with 30
// { value: 'iterable return value', done: true }
console.log(gen.next(40));
// { value: undefined, done: true }; gen is already closed

const gen2 = gf();
console.log(gen2.next(10));
// next called with undefined
// { value: 1, done: false }
console.log(gen2.throw(50));
// throw called with 50
// { value: 'gf return value', done: true }
console.log(gen.next(60));
// { value: undefined, done: true }; gen is already closed
```

Wenn die `return()`/`throw()` Methode des zugrunde liegenden Iterators `done: false` zurückgibt, setzt der aktuelle Generator die Ausführung fort und `yield*` delegiert weiterhin an den zugrunde liegenden Iterator.

```js
const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next(v) {
        console.log("next called with", v);
        count++;
        return { value: count, done: false };
      },
      return(v) {
        console.log("return called with", v);
        return { value: "iterable return value", done: false };
      },
    };
  },
};

function* gf() {
  yield* iterable;
  return "gf return value";
}

const gen = gf();
console.log(gen.next(10));
// next called with undefined
// { value: 1, done: false }
console.log(gen.return(20));
// return called with 20
// { value: 'iterable return value', done: false }
console.log(gen.next(30));
// { value: 2, done: false }; gen is not closed
```

Wenn der zugrunde liegende Iterator keine `throw()` Methode hat und `throw()` des Generators aufgerufen wird, löst `yield*` einen Fehler aus.

```js
const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next(v) {
        count++;
        return { value: count, done: false };
      },
    };
  },
};

function* gf() {
  yield* iterable;
  return "gf return value";
}

const gen = gf();
gen.next(); // First next() starts the yield* expression
gen.throw(20); // TypeError: The iterator does not provide a 'throw' method.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Iteration Protocolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield", "yield")}}
