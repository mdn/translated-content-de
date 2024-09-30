---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`return()`** Methode von {{jsxref("Generator")}} Instanzen wirkt, als ob eine `return`-Anweisung an der aktuellen unterbrochenen Stelle im Körper des Generators eingefügt wird, was den Generator beendet und es dem Generator ermöglicht, alle Aufräumarbeiten durchzuführen, wenn sie mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) Block kombiniert wird.

## Syntax

<!-- Wir fügen normalerweise nicht das "generatorInstance" Subjekt für Methoden hinzu. In diesem Fall ist es jedoch notwendig, da "return" ein Schlüsselwort ist und sonst ein ungültiger Syntax wäre. -->

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
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn der Kontrollfluss der Generatorfunktion das Ende nicht erreicht hat und weitere Werte produzieren kann. Dies kann nur passieren, wenn die `return`-Anweisung in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) erfasst wird und es weitere `yield`-Ausdrücke im `finally` Block gibt.
- `value`
  - : Der Wert, der als Argument übergeben wird, oder, wenn der `yield`-Ausdruck in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) eingeschlossen ist, der Wert, der aus dem `finally` Block bereitgestellt/zurückgegeben wird.

## Beschreibung

Die `return()` Methode kann, wenn sie aufgerufen wird, als ob eine `return value;` Anweisung an der aktuellen unterbrochenen Stelle im Körper des Generators eingefügt wird betrachtet werden, wobei `value` der über die `return()` Methode übergebene Wert ist. Daher wird bei einem typischen Ablauf der Aufruf von `return(value)` `{ done: true, value: value }` zurückgeben. Wenn der `yield`-Ausdruck jedoch in einem `try...finally` Block eingeschlossen ist, verlässt der Kontrollfluss den Körper der Funktion nicht, sondern geht zum `finally` Block über. In diesem Fall kann der zurückgegebene Wert unterschiedlich sein, und `done` kann sogar `false` sein, wenn es weitere `yield`-Ausdrücke innerhalb des `finally` Blocks gibt.

## Beispiele

### Verwendung von return()

Das folgende Beispiel zeigt einen einfachen Generator und die `return` Methode.

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

Wenn `return(value)` auf einen Generator aufgerufen wird, der sich bereits im "abgeschlossenen" Zustand befindet, bleibt der Generator im "abgeschlossenen" Zustand.

Wenn kein Argument bereitgestellt wird, wird die `value`-Eigenschaft des zurückgegebenen Objekts `undefined` sein. Wenn ein Argument bereitgestellt wird, wird es zum Wert der `value`-Eigenschaft des zurückgegebenen Objekts, es sei denn, der `yield`-Ausdruck ist in einem `try...finally` eingeschlossen.

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

Die Tatsache, dass die `return` Methode aufgerufen wurde, kann dem Generator selbst nur bekannt gemacht werden, wenn der `yield`-Ausdruck in einem `try...finally` Block eingeschlossen ist.

Wenn die `return` Methode auf einen Generator aufgerufen wird, der innerhalb eines `try` Blocks unterbrochen ist, wird die Ausführung im Generator auf den `finally` Block fortgesetzt, da der `finally` Block von `try...finally` Anweisungen immer ausgeführt wird.

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

Der Rückgabewert des finally Blocks kann auch zum `value` des Ergebnisses werden, das vom `return` Aufruf zurückgegeben wird.

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
