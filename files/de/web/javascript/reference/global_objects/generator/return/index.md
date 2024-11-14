---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

Die **`return()`**-Methode von {{jsxref("Generator")}}-Instanzen wirkt so, als ob an der aktuellen angehaltenen Position im Körper des Generators eine `return`-Anweisung eingefügt wird, was den Generator beendet und dem Generator ermöglicht, alle Aufräumarbeiten durchzuführen, wenn er zusammen mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block)-Block verwendet wird.

## Syntax

<!-- Wir fügen normalerweise das "generatorInstance"-Subjekt für Methoden nicht hinzu. Hier ist es jedoch notwendig, weil "return" ein Schlüsselwort ist, deshalb wäre es sonst ungültige Syntax. -->

```js-nolint
generatorInstance.return()
generatorInstance.return(value)
```

### Parameter

- `value` {{optional_inline}}
  - : Der zurückzugebende Wert.

### Rückgabewert

Ein {{jsxref("Object")}} mit zwei Eigenschaften:

- `done`
  - : Ein boolean-Wert:
    - `true`, wenn der Kontrollfluss der Generator-Funktion das Ende erreicht hat.
    - `false`, wenn der Kontrollfluss der Generator-Funktion das Ende nicht erreicht hat und noch mehr Werte erzeugen kann. Dies kann nur passieren, wenn das `return` in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) erfasst wird und es weitere `yield`-Ausdrücke im `finally`-Block gibt.
- `value`
  - : Der Wert, der als Argument angegeben wird, oder, wenn der `yield`-Ausdruck in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) eingeschlossen ist, der im `finally`-Block erzeugte/zurückgegebene Wert.

## Beschreibung

Die `return()`-Methode kann beim Aufruf so gesehen werden, als ob eine `return value;`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, wobei `value` der an die `return()`-Methode übergebene Wert ist. Daher wird bei einem typischen Ablauf durch den Aufruf von `return(value)` `{ done: true, value: value }` zurückgegeben. Wenn jedoch der `yield`-Ausdruck in einem `try...finally`-Block enthalten ist, verlässt der Kontrollfluss den Funktionskörper nicht, sondern setzt sich stattdessen im `finally`-Block fort. In diesem Fall kann der zurückgegebene Wert unterschiedlich sein, und `done` kann sogar `false` sein, wenn es weitere `yield`-Ausdrücke innerhalb des `finally`-Blocks gibt.

## Beispiele

### Verwendung von return()

Das folgende Beispiel zeigt einen Generator und die `return`-Methode.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next(); // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next(); // { value: undefined, done: true }
```

Wenn `return(value)` auf einen Generator aufgerufen wird, der sich bereits im Zustand "abgeschlossen" befindet, bleibt der Generator im "abgeschlossenen" Zustand.

Wenn kein Argument angegeben wird, ist die `value`-Eigenschaft des zurückgegebenen Objekts `undefined`. Wenn ein Argument angegeben wird, wird es der Wert der `value`-Eigenschaft des zurückgegebenen Objekts, es sei denn, der `yield`-Ausdruck ist in einem `try...finally` eingeschlossen.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.return(); // { value: undefined, done: true }
g.return(1); // { value: 1, done: true }
```

### Verwendung von return() mit try...finally

Die Tatsache, dass die `return`-Methode aufgerufen wurde, kann dem Generator selbst nur bekannt gemacht werden, wenn der `yield`-Ausdruck in einem `try...finally`-Block enthalten ist.

Wenn die `return`-Methode auf einem Generator aufgerufen wird, der innerhalb eines `try`-Blocks angehalten ist, setzt die Ausführung im Generator im `finally`-Block fort — da der `finally`-Block von `try...finally`-Anweisungen immer ausgeführt wird.

```js
function* gen() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield "cleanup";
  }
}

const g1 = gen();
g1.next(); // { value: 1, done: false }

// Execution is suspended before the try...finally.
g1.return("early return"); // { value: 'early return', done: true }

const g2 = gen();
g2.next(); // { value: 1, done: false }
g2.next(); // { value: 2, done: false }

// Execution is suspended within the try...finally.
g2.return("early return"); // { value: 'cleanup', done: false }

// The completion value is preserved
g2.next(); // { value: 'early return', done: true }

// Generator is in the completed state
g2.return("not so early return"); // { value: 'not so early return', done: true }
```

Der Rückgabewert des finally-Blocks kann auch zum `value` des Ergebnisses werden, das von dem `return`-Aufruf zurückgegeben wird.

```js
function* gen() {
  try {
    yield 1;
  } finally {
    return "cleanup";
  }
}

const g1 = gen();
g1.next(); // { value: 1, done: false }
g1.return("early return"); // { value: 'cleanup', done: true }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/function*", "function*")}}
