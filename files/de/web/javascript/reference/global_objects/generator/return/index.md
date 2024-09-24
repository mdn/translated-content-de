---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`return()`**-Methode von {{jsxref("Generator")}}-Instanzen wirkt so, als ob eine `return`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, was den Generator beendet und ihm ermöglicht, Aufräumarbeiten durchzuführen, wenn er mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block)-Block kombiniert wird.

## Syntax

<!-- Wir fügen normalerweise nicht das Subjekt "generatorInstance" für Methoden hinzu. Hier ist es jedoch notwendig, weil "return" ein Schlüsselwort ist und ansonsten eine ungültige Syntax wäre. -->

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
    - `false`, wenn der Kontrollfluss der Generatorfunktion das Ende noch nicht erreicht hat und mehr Werte erzeugen kann. Dies kann nur passieren, wenn `return` in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) eingefangen wird und es weitere `yield`-Ausdrücke im `finally`-Block gibt.
- `value`
  - : Der als Argument angegebene Wert oder, wenn der `yield`-Ausdruck in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) eingeschlossen ist, der im `finally`-Block zurückgegebene/wiedergegebene Wert.

## Beschreibung

Wenn die `return()`-Methode aufgerufen wird, kann man sich vorstellen, dass eine `return value;`-Anweisung im Körper des Generators an der aktuellen angehaltenen Position eingefügt wird, wobei `value` der an die `return()`-Methode übergebene Wert ist. Daher wird im typischen Ablauf beim Aufruf von `return(value)` das Ergebnis `{ done: true, value: value }` zurückgegeben. Wenn jedoch der `yield`-Ausdruck in einem `try...finally`-Block umschlossen ist, verlässt der Kontrollfluss den Funktionskörper nicht, sondern fährt mit dem `finally`-Block fort. In diesem Fall kann der zurückgegebene Wert unterschiedlich sein, und `done` kann sogar `false` sein, wenn es weitere `yield`-Ausdrücke innerhalb des `finally`-Blocks gibt.

## Beispiele

### Verwendung von return()

Das folgende Beispiel zeigt einen einfachen Generator und die `return`-Methode.

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

Wenn `return(value)` auf einen Generator aufgerufen wird, der sich bereits im "abgeschlossen"-Zustand befindet, bleibt der Generator im "abgeschlossen"-Zustand.

Wird kein Argument bereitgestellt, ist die `value`-Eigenschaft des zurückgegebenen Objekts `undefined`. Wenn ein Argument bereitgestellt wird, wird es zum Wert der `value`-Eigenschaft des zurückgegebenen Objekts, es sei denn, der `yield`-Ausdruck ist in einem `try...finally` eingeschlossen.

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

Wenn die `return`-Methode auf einen Generator aufgerufen wird, der innerhalb eines `try`-Blocks angehalten ist, geht die Ausführung im Generator in den `finally`-Block über — da der `finally`-Block von `try...finally`-Anweisungen immer ausgeführt wird.

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

// Die Ausführung ist vor dem try...finally angehalten.
g1.return("early return"); // { value: 'early return', done: true }

const g2 = gen();
g2.next(); // { value: 1, done: false }
g2.next(); // { value: 2, done: false }

// Die Ausführung ist innerhalb des try...finally angehalten.
g2.return("early return"); // { value: 'cleanup', done: false }

// Der Abschlusswert bleibt erhalten
g2.next(); // { value: 'early return', done: true }

// Der Generator ist im abgeschlossenen Zustand
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
