---
title: Generator.prototype.return()
short-title: return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`return()`**-Methode von {{jsxref("Generator")}}-Instanzen wirkt, als ob ein `return`-Statement an der aktuellen unterbrochenen Position im Körper des Generators eingefügt wird. Dies beendet den Generator und erlaubt ihm, Aufräumarbeiten durchzuführen, wenn es mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block)-Block kombiniert wird.

## Syntax

<!-- Normalerweise fügen wir das "generatorInstance"-Subjekt für Methoden nicht hinzu. Hier ist es jedoch notwendig, weil "return" ein Schlüsselwort ist und sonst eine ungültige Syntax wäre. -->

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
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn der Kontrollfluss der Generatorfunktion das Ende nicht erreicht hat und mehr Werte erzeugen kann. Dies kann nur passieren, wenn das `return` in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) eingefangen wird und es mehr `yield`-Ausdrücke im `finally`-Block gibt.
- `value`
  - : Der als Argument gegebene Wert, oder, wenn der `yield`-Ausdruck in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) eingeschlossen ist, der im `finally`-Block gegebene/zurückgegebene Wert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Generator bereits läuft.

## Beschreibung

Die `return()`-Methode kann, wenn sie aufgerufen wird, betrachtet werden, als ob ein `return value;`-Statement an der aktuellen unterbrochenen Position im Körper des Generators eingefügt wird, wobei `value` der an die `return()`-Methode übergebene Wert ist. Daher wird in einem typischen Ablauf `return(value)` `{ done: true, value: value }` zurückgeben. Wenn jedoch der `yield`-Ausdruck in einem `try...finally`-Block eingeschlossen ist, verlässt der Kontrollfluss nicht den Funktionskörper, sondern geht stattdessen zum `finally`-Block über. In diesem Fall kann der zurückgegebene Wert unterschiedlich sein und `done` kann sogar `false` sein, wenn es mehr `yield`-Ausdrücke innerhalb des `finally`-Blocks gibt.

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

Wenn `return(value)` auf einen Generator, der sich bereits im "completed"-Zustand befindet, aufgerufen wird, bleibt der Generator im "completed"-Zustand.

Wenn kein Argument bereitgestellt wird, ist die `value`-Eigenschaft des zurückgegebenen Objekts `undefined`. Wenn ein Argument bereitgestellt wird, wird es zum Wert der `value`-Eigenschaft des zurückgegebenen Objekts, es sei denn, der `yield`-Ausdruck ist in ein `try...finally` eingeschlossen.

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

Die Tatsache, dass die `return`-Methode aufgerufen wurde, kann nur dem Generator selbst bekannt gemacht werden, wenn der `yield`-Ausdruck in einem `try...finally`-Block eingeschlossen ist.

Wenn die `return`-Methode auf einem Generator aufgerufen wird, der innerhalb eines `try`-Blocks unterbrochen ist, wird die Ausführung im Generator zum `finally`-Block fortgesetzt — da der `finally`-Block von `try...finally`-Statements immer ausgeführt wird.

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

Der Rückgabewert des `finally`-Blocks kann auch zum `value` des Ergebnisses werden, das von dem `return`-Aufruf zurückgegeben wird.

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
