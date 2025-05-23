---
title: Labeled statement
slug: Web/JavaScript/Reference/Statements/label
l10n:
  sourceCommit: 3d53de838dbcb25b210ccd708c681771cdeb14e4
---

{{jsSidebar("Statements")}}

Eine **labeled statement** ist jede [Anweisung](/de/docs/Web/JavaScript/Reference/Statements), die mit einem Bezeichner versehen ist. Sie können mit einer im markierten Statement verschachtelten {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisung zu diesem Label springen.

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
  - : Eine JavaScript-Anweisung. `break` kann innerhalb jeder mit einem Label versehenen Anweisung verwendet werden, und `continue` kann innerhalb von mit einem Label versehenen Schleifenanweisungen verwendet werden.

## Beschreibung

Sie können ein Label verwenden, um eine Anweisung zu identifizieren und später darauf mit einer `break`- oder `continue`-Anweisung verweisen. Beachten Sie, dass JavaScript keine `goto`-Anweisung hat; Labels können nur mit `break` oder `continue` verwendet werden.

Jede `break` oder `continue`, die auf `label` verweist, muss sich innerhalb der `statement` befinden, die durch `label` markiert ist. Denken Sie an `label` als eine Variable, die nur im Geltungsbereich von `statement` verfügbar ist.

Wenn beim Ausführen von `statement` eine `break label;`-Anweisung auftritt, wird die Ausführung von `statement` beendet, und die Ausführung wird mit der Anweisung unmittelbar nach dem markierten Statement fortgesetzt.

`continue label;` kann nur verwendet werden, wenn `statement` eine der [Schleifenanweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations) ist. Wenn beim Ausführen von `statement` eine `continue label;`-Anweisung auftritt, wird die Ausführung von `statement` bei der nächsten Iteration der Schleife fortgesetzt. `continue;` ohne ein Label kann nur die innerste Schleife fortsetzen, während `continue label;` das Fortsetzen einer beliebigen Schleife ermöglicht, auch wenn die Anweisung in andere Schleifen geschachtelt ist.

Eine Anweisung kann mehrere Labels haben. In diesem Fall sind die Labels alle funktional gleichwertig.

## Beispiele

### Verwendung eines mit Label versehenen continue mit for-Schleifen

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

Beachten Sie, dass sowohl "i = 1, j = 1" als auch "i = 1, j = 2" übersprungen werden.

### Verwendung eines mit Label versehenen break mit for-Schleifen

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

Beachten Sie den Unterschied zum vorherigen `continue`-Beispiel: Wenn `break loop1` auftritt, wird die Ausführung der äußeren Schleife beendet, sodass keine weiteren Logs über "i = 1, j = 0" hinaus vorhanden sind; wenn `continue loop1` auftritt, wird die Ausführung der äußeren Schleife bei der nächsten Iteration fortgesetzt, sodass nur "i = 1, j = 1" und "i = 1, j = 2" übersprungen werden.

### Verwendung einer mit Label versehenen continue-Anweisung

Angesichts eines Arrays von Elementen und eines Arrays von Tests zählt dieses Beispiel die Anzahl der Elemente, die alle Tests bestehen.

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

Beachten Sie, wie die `continue itemIteration;`-Anweisung den Rest der Tests für das aktuelle Element sowie die Anweisung, die den `itemsPassed` Zähler aktualisiert, überspringt und mit dem nächsten Element fortfährt. Wenn Sie kein Label verwenden, müssten Sie stattdessen eine boolesche Variable verwenden.

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

### Verwendung einer mit Label versehenen break-Anweisung

Angesichts eines Arrays von Elementen und eines Arrays von Tests ermittelt dieses Beispiel, ob alle Elemente alle Tests bestehen.

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

Auch hier, wenn Sie kein Label verwenden, müssten Sie statt dessen eine boolesche Variable verwenden.

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

### Verwendung eines mit Label versehenen Blocks mit break

Sie können auch Anweisungen, die keine Schleifen sind, wie einfache Blöcke, mit einem Label versehen, aber nur `break`-Anweisungen können nicht-Schleifen-Labels referenzieren.

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

### Mit Label versehene Funktionsdeklarationen

Labels können nur auf [Anweisungen, nicht auf Deklarationen](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) angewendet werden. Es gibt eine alte Grammatik, die die Kennzeichnung von Funktionsdeklarationen in nicht-striktem Code zulässt:

```js
L: function F() {}
```

In [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) Code löst dies jedoch einen {{jsxref("SyntaxError")}} aus:

```js-nolint example-bad
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

Nicht-einfache Funktionen, wie [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [asynchrone Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function), können weder in strikt noch in nicht-strikt gekennzeichnet werden:

```js-nolint example-bad
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

Die Syntax für mit Label versehene Funktionsdeklarationen ist [veraltet](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und Sie sollten sie nicht verwenden, auch nicht in nicht-striktem Code. Sie können tatsächlich nicht innerhalb des Funktionskörpers zu diesem Label springen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
