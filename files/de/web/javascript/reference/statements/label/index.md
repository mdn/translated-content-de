---
title: Bezeichnete Anweisung
slug: Web/JavaScript/Reference/Statements/label
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Eine **bezeichnete Anweisung** ist jede [Anweisung](/de/docs/Web/JavaScript/Reference/Statements), die mit einem Bezeichner versehen ist. Sie können mit einer innerhalb der bezeichneten Anweisung verschachtelten {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisung zu diesem Bezeichner springen.

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
  - : Ein beliebiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), der kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist.
- `statement`
  - : Eine JavaScript-Anweisung. `break` kann innerhalb jeder bezeichneten Anweisung verwendet werden, und `continue` kann innerhalb von bezeichneten Schleifenanweisungen verwendet werden.

## Beschreibung

Sie können ein Label verwenden, um eine Anweisung zu identifizieren, und später mit einer `break`- oder `continue`-Anweisung darauf verweisen. Beachten Sie, dass JavaScript _keine_ `goto`-Anweisung hat; Sie können Labels nur mit `break` oder `continue` verwenden.

Jede `break`- oder `continue`-Anweisung, die auf `label` verweist, muss innerhalb der Anweisung enthalten sein, die durch `label` bezeichnet wird. Betrachten Sie `label` als eine Variable, die nur im Bereich von `statement` verfügbar ist.

Wenn eine `break label;`-Anweisung beim Ausführen von `statement` auftritt, endet die Ausführung von `statement`, und die Ausführung wird mit der Anweisung unmittelbar nach der bezeichneten Anweisung fortgesetzt.

`continue label;` kann nur verwendet werden, wenn `statement` eine der [Schleifenanweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations) ist. Wenn eine `continue label;`-Anweisung während der Ausführung von `statement` auftritt, wird die Ausführung von `statement` in der nächsten Iteration der Schleife fortgesetzt. `continue;` ohne Bezeichner kann nur die innerste Schleife fortsetzen, während `continue label;` es ermöglicht, jede gegebene Schleife fortzusetzen, selbst wenn die Anweisung innerhalb anderer Schleifen verschachtelt ist.

Eine Anweisung kann mehrere Bezeichner haben. In diesem Fall sind die Bezeichner alle funktional gleichwertig.

## Beispiele

### Verwenden von bezeichnetem Continue mit For-Schleifen

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

Beachten Sie, wie es sowohl "i = 1, j = 1" als auch "i = 1, j = 2" überspringt.

### Verwenden von bezeichnetem Break mit For-Schleifen

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

Beachten Sie den Unterschied zum vorherigen `continue`-Beispiel: wenn `break loop1` ausgeführt wird, wird die Ausführung der äußeren Schleife beendet, sodass keine weiteren Ausgaben nach "i = 1, j = 0" erfolgen; wenn `continue loop1` auftritt, wird die Ausführung der äußeren Schleife in der nächsten Iteration fortgesetzt, sodass nur "i = 1, j = 1" und "i = 1, j = 2" übersprungen werden.

### Verwenden einer bezeichneten Continue-Anweisung

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

Beachten Sie, wie die Anweisung `continue itemIteration;` den Rest der Tests für das aktuelle Element sowie die Anweisung, die den `itemsPassed`-Zähler aktualisiert, überspringt und mit dem nächsten Element fortfährt. Ohne den Einsatz eines Bezeichners müsste man stattdessen einen booleschen Indikator verwenden.

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

### Verwenden einer bezeichneten Break-Anweisung

Angesichts eines Arrays von Elementen und eines Arrays von Tests bestimmt dieses Beispiel, ob alle Elemente alle Tests bestehen.

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

Auch hier müsste man ohne den Einsatz eines Bezeichners stattdessen einen booleschen Indikator verwenden.

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

### Verwenden eines bezeichneten Blocks mit Break

Sie können andere Anweisungen als Schleifen, wie einfache Blöcke, bezeichnen, aber nur `break`-Anweisungen können nicht-schleifenlabels referenzieren.

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

### Bezeichnete Funktionsdeklarationen

Bezeichner können nur auf [Anweisungen, nicht auf Deklarationen](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) angewendet werden. Es gibt eine veraltete Grammatik, die es erlaubt, Funktionsdeklarationen in nicht-striktem Code zu bezeichnen:

```js
L: function F() {}
```

Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) Code wird dies jedoch einen {{jsxref("SyntaxError")}} auslösen:

```js-nolint example-bad
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

Nicht-einfache Funktionen, wie [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [asynchrone Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) können weder im strikten Code noch im nicht-strikten Code gekennzeichnet werden:

```js-nolint example-bad
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

Der Syntax der bezeichneten Funktionsdeklaration ist [veraltet](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und sollte nicht verwendet werden, selbst in nicht-striktem Code. Sie können tatsächlich innerhalb des Funktionskörpers nicht zu diesem Bezeichner springen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
