---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{jsSidebar("Operators")}}

Der **`yield*`**-Operator wird verwendet, um an ein anderes [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) zu delegieren, wie z.B. an einen {{jsxref("Generator")}}.

{{EmbedInteractiveExample("pages/js/expressions-yieldasterisk.html")}}

## Syntax

```js-nolint
yield* expression
```

### Parameter

- `expression` {{optional_inline}}
  - : Ein iterierbares Objekt.

### Rückgabewert

Gibt den Wert zurück, der von diesem Iterator zurückgegeben wird, wenn er geschlossen wird (wenn `done` `true` ist).

## Beschreibung

Der `yield*`-Ausdruck iteriert über den Operanden und liefert jeden Wert, der von ihm zurückgegeben wird. Er delegiert die Iteration des aktuellen Generators an einen zugrunde liegenden Iterator - die wir als "Generator" bzw. "Iterator" bezeichnen werden. `yield*` ruft zuerst den Iterator vom Operanden ab, indem er die Methode [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) des Letzteren aufruft. Dann ruft `yield*` jedes Mal, wenn die `next()`-Methode des Generators aufgerufen wird, die `next()`-Methode des Iterators auf und übergibt das Argument, das von der `next()`-Methode des Generators empfangen wurde (immer `undefined` beim ersten Aufruf), und liefert dasselbe Ergebnisobjekt zurück, das von der `next()`-Methode des Iterators zurückgegeben wird. Wenn das Iterator-Ergebnis `done: true` hat, stoppt der `yield*`-Ausdruck die Ausführung und gibt den `value` dieses Ergebnisses zurück.

Der `yield*`-Operator leitet die Methoden {{jsxref("Generator/throw", "throw()")}} und {{jsxref("Generator/return", "return()")}} des aktuellen Generators ebenfalls an den zugrunde liegenden Iterator weiter. Wenn der aktuelle Generator vorzeitig durch eine dieser Methoden geschlossen wird, wird der zugrunde liegende Iterator benachrichtigt. Wenn die `throw()`/`return()`-Methode des Generators aufgerufen wird, wird die `throw()`/`return()`-Methode des zugrunde liegenden Iterators mit demselben Argument aufgerufen. Der Rückgabewert von `throw()`/`return()` wird genauso wie das Ergebnis der `next()`-Methode behandelt, und wenn die Methode eine Ausnahme auslöst, wird die Ausnahme vom `yield*`-Ausdruck propagiert.

Wenn der zugrunde liegende Iterator keine `return()`-Methode hat, wird der `yield*`-Ausdruck in eine {{jsxref("Statements/return", "return")}}-Anweisung umgewandelt, genauso wie wenn `return()` auf einem angehaltenen {{jsxref("Operators/yield", "yield")}}-Ausdruck aufgerufen wird.

Wenn der zugrunde liegende Iterator keine `throw()`-Methode hat, führt dies dazu, dass `yield*` einen {{jsxref("TypeError")}} auslöst – aber bevor der Fehler ausgelöst wird, wird die `return()`-Methode des zugrunde liegenden Iterators aufgerufen, falls eine existiert.

## Beispiele

### Delegieren an einen anderen Generator

Im folgenden Code werden die von `g1()` gelieferten Werte bei den `next()`-Aufrufen zurückgegeben, genau wie die, die von `g2()` geliefert werden.

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

Neben Generatorobjekten kann `yield*` auch andere Arten von iterierbaren Objekten `yield` (z. B. Arrays, Strings oder {{jsxref("Functions/arguments", "arguments")}}-Objekte).

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

### Der Wert des yield\*-Ausdrucks selbst

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
console.log(gen.next()); // {value: 3, done: false} done ist false, weil der g5-Generator nicht fertig ist, nur g4
console.log(gen.next()); // {value: 'foo', done: true}
```

### Weiterleiten von Methoden

Die `next()`, `throw()`, und `return()`-Methoden des aktuellen Generators werden alle an den zugrunde liegenden Iterator weitergeleitet.

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
// next called with undefined; das Argument des ersten next()-Aufrufs wird immer ignoriert
// { value: 1, done: false }
console.log(gen.next(20));
// next called with 20
// { value: 2, done: false }
console.log(gen.return(30));
// return called with 30
// { value: 'iterable return value', done: true }
console.log(gen.next(40));
// { value: undefined, done: true }; gen ist bereits geschlossen

const gen2 = gf();
console.log(gen2.next(10));
// next called with undefined
// { value: 1, done: false }
console.log(gen2.throw(50));
// throw called with 50
// { value: 'gf return value', done: true }
console.log(gen.next(60));
// { value: undefined, done: true }; gen ist bereits geschlossen
```

Wenn die `return()`/`throw()`-Methode des zugrunde liegenden Iterators `done: false` zurückgibt, wird der aktuelle Generator weiter ausgeführt und `yield*` delegiert weiterhin an den zugrunde liegenden Iterator.

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
// { value: 2, done: false }; gen ist nicht geschlossen
```

Wenn der zugrunde liegende Iterator keine `throw()`-Methode hat und die `throw()`-Methode des Generators aufgerufen wird, wirft `yield*` einen Fehler.

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
gen.next(); // Der erste next()-Aufruf startet den yield*-Ausdruck
gen.throw(20); // TypeError: Der Iterator stellt keine 'throw'-Methode bereit.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Iteration Protocols](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- [`function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield", "yield")}}
