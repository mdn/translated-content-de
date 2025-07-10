---
title: Generator.prototype.return()
short-title: return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`return()`** Methode von {{jsxref("Generator")}} Instanzen wirkt, als ob ein `return`-Statement an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, wodurch der Generator beendet wird und der Generator bei Kombination mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) Block alle Aufräumarbeiten durchführen kann.

## Syntax

<!-- Normalerweise fügen wir das "generatorInstance" Subjekt für Methoden nicht hinzu. Hier ist es jedoch notwendig, da "return" ein Schlüsselwort ist und es sonst eine ungültige Syntax wäre. -->

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
    - `true` wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false` wenn der Kontrollfluss der Generatorfunktion das Ende noch nicht erreicht hat und weitere Werte generieren kann. Dies kann nur geschehen, wenn das `return` in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) eingefangen wird und es mehr `yield` Ausdrücke im `finally` Block gibt.
- `value`
  - : Der als Argument angegebene Wert oder, wenn der `yield`-Ausdruck in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) eingeschlossen ist, der im `finally` Block erzeugte/zurückgegebene Wert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Generator bereits läuft.

## Beschreibung

Die `return()` Methode, wenn sie aufgerufen wird, kann als ob ein `return value;` Statement an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird gesehen werden, wobei `value` der an die `return()` Methode übergebene Wert ist. Daher wird im typischen Ablauf durch den Aufruf von `return(value)` `{ done: true, value: value }` zurückgegeben. Befindet sich der `yield`-Ausdruck jedoch in einem `try...finally` Block, verlässt der Kontrollfluss den Funktionskörper nicht, sondern setzt sich im `finally` Block fort. In diesem Fall kann der zurückgegebene Wert unterschiedlich sein, und `done` kann sogar `false` sein, wenn es mehr `yield` Ausdrücke innerhalb des `finally` Blocks gibt.

## Beispiele

### Verwendung von return()

Das folgende Beispiel zeigt einen Generator und die `return` Methode.

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

Wenn `return(value)` für einen Generator aufgerufen wird, der sich bereits im "abgeschlossenen" Zustand befindet, verbleibt der Generator im "abgeschlossenen" Zustand.

Wird kein Argument angegeben, ist die `value` Eigenschaft des zurückgegebenen Objektes `undefined`. Wenn ein Argument angegeben wird, wird es zum Wert der `value` Eigenschaft des zurückgegebenen Objekts, es sei denn, der `yield`-Ausdruck ist in einem `try...finally` eingeschlossen.

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

Die Tatsache, dass die `return` Methode aufgerufen wurde, kann dem Generator selbst nur bekannt gemacht werden, wenn der `yield`-Ausdruck in einem `try...finally` Block enthalten ist.

Wenn die `return` Methode auf einen Generator angewendet wird, der innerhalb eines `try` Blocks angehalten ist, setzt die Ausführung im Generator im `finally` Block fort — da der `finally` Block von `try...finally` Anweisungen immer ausgeführt wird.

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

Der Rückgabewert des finally Blocks kann auch zum `value` des Ergebnisses werden, das vom `return`-Aufruf zurückgegeben wird.

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
