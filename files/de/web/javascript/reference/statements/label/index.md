---
title: Markierte Anweisung
slug: Web/JavaScript/Reference/Statements/label
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

Eine **markierte Anweisung** ist jede [Anweisung](/de/docs/Web/JavaScript/Reference/Statements), die mit einem Bezeichner versehen ist. Sie können zu diesem Label mithilfe einer innerhalb der markierten Anweisung verschachtelten {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisung springen.

{{InteractiveExample("JavaScript Demo: Labeled statement", "taller")}}

```js interactive-example
let i, j;

loop1: for (i = 0; i < 3; i++) {
  loop2: for (j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Expected output:
// "i = 0, j = 0"
// "i = 0, j = 1"
// "i = 0, j = 2"
// "i = 1, j = 0"
```

## Syntax

```js-nolint
label:
  statement
```

- `label`
  - : Jeder JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), der kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist.
- `statement`
  - : Eine JavaScript-Anweisung. `break` kann innerhalb jeder markierten Anweisung verwendet werden, und `continue` kann innerhalb markierter Schleifenanweisungen verwendet werden.

## Beschreibung

Sie können ein Label verwenden, um eine Anweisung zu identifizieren, und später mit einer `break`- oder `continue`-Anweisung darauf verweisen. Beachten Sie, dass JavaScript _keine_ `goto`-Anweisung hat; Sie können Labels nur mit `break` oder `continue` verwenden.

Jedes `break` oder `continue`, das auf `label` verweist, muss innerhalb der `statement` enthalten sein, die durch `label` gekennzeichnet ist. Denken Sie an `label` wie an eine Variable, die nur im Gültigkeitsbereich von `statement` verfügbar ist.

Wenn eine `break label;`-Anweisung während der Ausführung von `statement` auftritt, wird die Ausführung von `statement` beendet und die Ausführung wird bei der Anweisung direkt nach der markierten Anweisung fortgesetzt.

`continue label;` kann nur verwendet werden, wenn `statement` eine der [Schleifenanweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations) ist. Wenn eine `continue label;`-Anweisung während der Ausführung von `statement` auftritt, wird die Ausführung von `statement` bei der nächsten Iteration der Schleife fortgesetzt. `continue;` ohne Label kann nur die innerste Schleife fortsetzen, während `continue label;` es ermöglicht, eine beliebige Schleife fortzusetzen, selbst wenn die Anweisung in anderen Schleifen verschachtelt ist.

Eine Anweisung kann mehrere Labels haben. In diesem Fall sind die Labels alle funktional gleichwertig.

## Beispiele

### Verwendung eines markierten continue mit for-Schleifen

```js
// The first for statement is labeled "loop1"
loop1: for (let i = 0; i < 3; i++) {
  // The second for statement is labeled "loop2"
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Logs:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2
```

Beachten Sie, wie sowohl "i = 1, j = 1" als auch "i = 1, j = 2" übersprungen werden.

### Verwendung eines markierten break mit for-Schleifen

```js
let i, j;

// The first for statement is labeled "loop1"
loop1: for (i = 0; i < 3; i++) {
  // The second for statement is labeled "loop2"
  loop2: for (j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Logs:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
```

Beachten Sie den Unterschied zum vorherigen `continue`-Beispiel: Wenn `break loop1` auftritt, wird die Ausführung der äußeren Schleife beendet, sodass keine weiteren Protokolle über "i = 1, j = 0" hinaus bestehen; wenn `continue loop1` auftritt, wird die Ausführung der äußeren Schleife bei der nächsten Iteration fortgesetzt, sodass nur "i = 1, j = 1" und "i = 1, j = 2" übersprungen werden.

### Verwendung einer markierten continue-Anweisung

Gegeben ein Array von Elementen und ein Array von Tests, zählt dieses Beispiel die Anzahl der Elemente, die alle Tests bestehen.

```js
// Numbers from 1 to 100
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 },
  { pass: (item) => item % 3 === 0 },
  { pass: (item) => item % 5 === 0 },
];
let itemsPassed = 0;

itemIteration: for (const item of items) {
  for (const test of tests) {
    if (!test.pass(item)) {
      continue itemIteration;
    }
  }

  itemsPassed++;
}
```

Beachten Sie, wie die `continue itemIteration;`-Anweisung den Rest der Tests für das aktuelle Element sowie die Anweisung überspringt, die den `itemsPassed`-Zähler aktualisiert, und mit dem nächsten Element fortfährt. Wenn Sie kein Label verwenden, müssten Sie eine boolesche Flagge verwenden.

```js
// Numbers from 1 to 100
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 },
  { pass: (item) => item % 3 === 0 },
  { pass: (item) => item % 5 === 0 },
];
let itemsPassed = 0;

for (const item of items) {
  let passed = true;
  for (const test of tests) {
    if (!test.pass(item)) {
      passed = false;
      break;
    }
  }
  if (passed) {
    itemsPassed++;
  }
}
```

### Verwendung einer markierten break-Anweisung

Gegeben ein Array von Elementen und ein Array von Tests, bestimmt dieses Beispiel, ob alle Elemente alle Tests bestehen.

```js
// Numbers from 1 to 100
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 },
  { pass: (item) => item % 3 === 0 },
  { pass: (item) => item % 5 === 0 },
];
let allPass = true;

itemIteration: for (const item of items) {
  for (const test of tests) {
    if (!test.pass(item)) {
      allPass = false;
      break itemIteration;
    }
  }
}
```

Auch hier, wenn Sie kein Label verwenden, müssten Sie eine boolesche Flagge verwenden.

```js
// Numbers from 1 to 100
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 },
  { pass: (item) => item % 3 === 0 },
  { pass: (item) => item % 5 === 0 },
];
let allPass = true;

for (const item of items) {
  let passed = true;
  for (const test of tests) {
    if (!test.pass(item)) {
      passed = false;
      break;
    }
  }
  if (!passed) {
    allPass = false;
    break;
  }
}
```

### Verwendung eines markierten Blocks mit break

Sie können auch andere Anweisungen als Schleifen markieren, wie z.B. einfache Blöcke, aber nur `break`-Anweisungen können sich auf Nicht-Schleifen-Labels beziehen.

```js
foo: {
  console.log("face");
  break foo;
  console.log("this will not be executed");
}
console.log("swap");

// Logs:
// "face"
// "swap"
```

### Markierte Funktionsdeklarationen

Labels können nur auf [Anweisungen, nicht auf Deklarationen](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) angewendet werden. Es gibt eine veraltete Grammatik, die es erlaubt, Funktionsdeklarationen in nicht-striktem Code zu markieren:

```js
L: function F() {}
```

In [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) Code wird dies jedoch einen {{jsxref("SyntaxError")}} werfen:

<!-- cSpell:ignore labelled -->

```js-nolint example-bad
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

Nicht-einfache Funktionen, wie z.B. [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [asynchrone Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) können weder im strikten noch im nicht-strikten Code markiert werden:

```js-nolint example-bad
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

Die Syntax der markierten Funktionsdeklaration ist [veraltet](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und sollte nicht verwendet werden, selbst in nicht-striktem Code. Sie können tatsächlich nicht innerhalb des Funktionskörpers zu diesem Label springen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
