---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
l10n:
  sourceCommit: af8c003be438157fb59397347ca766bf997c7934
---

{{JSRef}}

Die Methode **`return()`** von {{jsxref("Generator")}}-Instanzen wirkt so, als ob eine `return`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird. Dadurch wird der Generator beendet und ermöglicht es dem Generator, Aufräumarbeiten durchzuführen, wenn sie mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block)-Block kombiniert wird.

## Syntax

<!-- Wir fügen normalerweise kein "generatorInstance"-Subjekt für Methoden hinzu. Hier ist es jedoch notwendig, da "return" ein Schlüsselwort ist, andernfalls wäre es ungültige Syntax. -->

```js-nolint
generatorInstance.return()
generatorInstance.return(value)
```

### Parameter

- `value` {{optional_inline}}
  - : Der Wert, der zurückgegeben werden soll.

### Rückgabewert

Ein {{jsxref("Object")}} mit zwei Eigenschaften:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn der Kontrollfluss der Generatorfunktion das Ende noch nicht erreicht hat und noch weitere Werte erzeugen kann. Dies kann nur geschehen, wenn das `return` in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) erfasst wird und im `finally`-Block weitere `yield`-Ausdrücke vorhanden sind.
- `value`
  - : Der als Argument angegebene Wert oder, wenn der `yield`-Ausdruck in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) eingeschlossen ist, der im `finally`-Block zurückgegebene oder erzeugte Wert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Generator bereits läuft.

## Beschreibung

Wenn die `return()`-Methode aufgerufen wird, kann man sich vorstellen, dass eine `return value;`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, wobei `value` der Wert ist, der an die `return()`-Methode übergeben wird. Daher führt das Aufrufen von `return(value)` in einem typischen Ablauf zu `{ done: true, value: value }`. Wenn jedoch der `yield`-Ausdruck in einem `try...finally`-Block eingeschlossen ist, verlässt der Kontrollfluss nicht den Funktionskörper, sondern fährt mit dem `finally`-Block fort. In diesem Fall kann der zurückgegebene Wert unterschiedlich sein und `done` kann sogar `false` sein, wenn im `finally`-Block weitere `yield`-Ausdrücke vorhanden sind.

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

Wenn `return(value)` für einen Generator aufgerufen wird, der sich bereits im "abgeschlossen"-Zustand befindet, bleibt der Generator im "abgeschlossen"-Zustand.

Wenn kein Argument bereitgestellt wird, ist die `value`-Eigenschaft des zurückgegebenen Objekts `undefined`. Wenn ein Argument bereitgestellt wird, wird es zum Wert der `value`-Eigenschaft des zurückgegebenen Objekts, es sei denn, der `yield`-Ausdruck ist in einem `try...finally` eingeschlossen.

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

Die Tatsache, dass die `return`-Methode aufgerufen wurde, kann dem Generator selbst nur bekannt gemacht werden, wenn der `yield`-Ausdruck in einem `try...finally`-Block eingeschlossen ist.

Wenn die `return`-Methode auf einen Generator aufgerufen wird, der innerhalb eines `try`-Blocks angehalten ist, wird die Ausführung im Generator im `finally`-Block fortgesetzt — da der `finally`-Block von `try...finally`-Anweisungen immer ausgeführt wird.

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

Der Rückgabewert des `finally`-Blocks kann auch zum `value` des Ergebnisses werden, das vom `return`-Aufruf zurückgegeben wird.

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
