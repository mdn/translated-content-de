---
title: Markierte Anweisung
slug: Web/JavaScript/Reference/Statements/label
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Eine **markierte Anweisung** ist eine beliebige [Anweisung](/de/docs/Web/JavaScript/Reference/Statements), die mit einem Bezeichner versehen ist. Sie können mithilfe einer {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisung, die innerhalb der markierten Anweisung verschachtelt ist, zu dieser Markierung springen.

{{InteractiveExample("JavaScript Demo: Statement - Label")}}

```js interactive-example
let str = "";

loop1: for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);
// Expected output: "0234"
```

## Syntax

```js-nolint
label:
  statement
```

- `label`
  - : Ein beliebiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) in JavaScript, der kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist.
- `statement`
  - : Eine JavaScript-Anweisung. `break` kann innerhalb jeder markierten Anweisung verwendet werden, und `continue` kann innerhalb markierter Schleifenanweisungen verwendet werden.

## Beschreibung

Sie können eine Markierung verwenden, um eine Anweisung zu identifizieren und später mithilfe einer `break`- oder `continue`-Anweisung darauf zu verweisen. Beachten Sie, dass JavaScript _keine_ `goto`-Anweisung hat; Markierungen können nur mit `break` oder `continue` verwendet werden.

Jede `break`- oder `continue`-Anweisung, die auf `label` verweist, muss sich innerhalb der `statement` befinden, die durch `label` markiert ist. Betrachten Sie `label` als eine Variable, die nur im Gültigkeitsbereich der `statement` verfügbar ist.

Wenn eine `break label;`-Anweisung beim Ausführen von `statement` auftritt, wird die Ausführung von `statement` beendet und die Ausführung wird mit der Anweisung unmittelbar nach der markierten Anweisung fortgesetzt.

`continue label;` kann nur verwendet werden, wenn `statement` eine der [Schleifenanweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations) ist. Wenn eine `continue label;`-Anweisung beim Ausführen von `statement` auftritt, wird die Ausführung von `statement` mit der nächsten Iteration der Schleife fortgesetzt. `continue;` ohne Markierung kann nur die innerste Schleife fortsetzen, während `continue label;` erlaubt, eine beliebige Schleife fortzusetzen, selbst wenn die Anweisung innerhalb anderer Schleifen verschachtelt ist.

Eine Anweisung kann mehrere Markierungen haben. In diesem Fall sind die Markierungen funktional gleichwertig.

## Beispiele

### Verwendung von markierten Continue-Anweisungen mit for-Schleifen

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

### Verwendung von markierten Break-Anweisungen mit for-Schleifen

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

Beachten Sie den Unterschied zum vorherigen `continue`-Beispiel: Wenn `break loop1` auftritt, wird die Ausführung der äußeren Schleife beendet, sodass keine weiteren Protokolleinträge über "i = 1, j = 0" hinaus zu sehen sind. Wenn `continue loop1` auftritt, wird die Ausführung der äußeren Schleife mit der nächsten Iteration fortgesetzt, sodass nur "i = 1, j = 1" und "i = 1, j = 2" übersprungen werden.

### Verwendung von markierten Continue-Anweisungen

Angenommen, es gibt ein Array von Elementen und ein Array von Tests. Dieses Beispiel zählt die Anzahl der Elemente, die alle Tests bestehen.

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

Beachten Sie, wie die `continue itemIteration;`-Anweisung den Rest der Tests für das aktuelle Element sowie die Anweisung, die den `itemsPassed`-Zähler aktualisiert, überspringt und mit dem nächsten Element fortfährt. Wenn Sie keine Markierung verwenden, müssten Sie stattdessen eine boolesche Variable verwenden.

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

### Verwendung von markierten Break-Anweisungen

Angenommen, es gibt ein Array von Elementen und ein Array von Tests. Dieses Beispiel prüft, ob alle Elemente alle Tests bestehen.

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

Auch hier müssten Sie, wenn Sie keine Markierung verwenden, stattdessen eine boolesche Variable verwenden.

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

### Verwendung eines markierten Blocks mit Break

Sie können andere Anweisungen als Schleifen, wie einfache Blöcke, markieren. Allerdings können nur `break`-Anweisungen auf nicht-Schleifen-Markierungen verweisen.

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

Markierungen können nur auf [Anweisungen und nicht auf Deklarationen](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) angewendet werden. Es gibt eine veraltete Grammatik, die es erlaubt, Funktionsdeklarationen in nicht-striktem Code zu markieren:

```js
L: function F() {}
```

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Code führt dies jedoch zu einem {{jsxref("SyntaxError")}}:

```js-nolint example-bad
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

Nicht-standardmäßige Funktionen, wie [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [Async-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function), können weder im strikt noch im nicht-strikt Modus markiert werden:

```js-nolint example-bad
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

Die Syntax für markierte Funktionsdeklarationen ist [veraltet](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und sollte auch im nicht-strikten Code nicht verwendet werden. Sie können innerhalb des Funktionskörpers tatsächlich nicht zu dieser Markierung springen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
