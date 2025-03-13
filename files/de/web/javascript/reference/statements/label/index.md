---
title: Bezeichnete Anweisung
slug: Web/JavaScript/Reference/Statements/label
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Eine **bezeichnete Anweisung** ist jede [Anweisung](/de/docs/Web/JavaScript/Reference/Statements), die mit einem Bezeichner versehen ist. Sie können zu dieser Bezeichnung mit einer {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisung springen, die in der bezeichneten Anweisung verschachtelt ist.

{{InteractiveExample("JavaScript Demo: Labeled statement")}}

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
  - : Jeder JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), der kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist.
- `statement`
  - : Eine JavaScript-Anweisung. `break` kann innerhalb jeder bezeichneten Anweisung verwendet werden und `continue` kann innerhalb von bezeichneten Schleifenanweisungen verwendet werden.

## Beschreibung

Sie können eine Bezeichnung verwenden, um eine Anweisung zu identifizieren und später mit einer `break`- oder `continue`-Anweisung darauf zu verweisen. Beachten Sie, dass JavaScript _keine_ `goto`-Anweisung hat; Sie können Bezeichnungen nur mit `break` oder `continue` verwenden.

Jede `break` oder `continue`, die sich auf `label` bezieht, muss innerhalb der `statement` sein, die durch `label` bezeichnet wird. Betrachten Sie `label` als eine Variable, die nur im Geltungsbereich von `statement` verfügbar ist.

Wenn eine `break label;`-Anweisung bei der Ausführung von `statement` erreicht wird, wird die Ausführung von `statement` beendet und die Ausführung wird bei der Anweisung direkt nach der bezeichneten Anweisung fortgesetzt.

`continue label;` kann nur verwendet werden, wenn `statement` eine der [Schleifenanweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations) ist. Wenn eine `continue label;`-Anweisung bei der Ausführung von `statement` erreicht wird, wird die Ausführung von `statement` bei der nächsten Iteration der Schleife fortgesetzt. `continue;` ohne Bezeichnung kann nur die innerste Schleife fortsetzen, während `continue label;` das Fortsetzen einer beliebigen Schleife ermöglicht, selbst wenn die Anweisung in anderen Schleifen verschachtelt ist.

Eine Anweisung kann mehrere Bezeichnungen haben. In diesem Fall sind die Bezeichnungen funktional gleichwertig.

## Beispiele

### Verwendung eines bezeichneten continue mit for-Schleifen

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

### Verwendung eines bezeichneten break mit for-Schleifen

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

Beachten Sie den Unterschied zum vorherigen `continue`-Beispiel: Wenn `break loop1` erreicht wird, wird die Ausführung der äußeren Schleife beendet, sodass es keine weiteren Ausgaben über "i = 1, j = 0" hinaus gibt; wenn `continue loop1` erreicht wird, wird die Ausführung der äußeren Schleife bei der nächsten Iteration fortgesetzt, sodass nur "i = 1, j = 1" und "i = 1, j = 2" übersprungen werden.

### Verwendung einer bezeichneten continue-Anweisung

Angenommen, es gibt ein Array von Elementen und ein Array von Tests, zählt dieses Beispiel die Anzahl der Elemente, die alle Tests bestehen.

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

Beachten Sie, wie die `continue itemIteration;`-Anweisung den Rest der Tests für das aktuelle Element sowie die Anweisung, die den `itemsPassed`-Zähler aktualisiert, überspringt und mit dem nächsten Element fortfährt. Wenn Sie keine Bezeichnung verwenden, müssten Sie stattdessen eine boolesche Variable verwenden.

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

### Verwendung einer bezeichneten break-Anweisung

Angenommen, es gibt ein Array von Elementen und ein Array von Tests, bestimmt dieses Beispiel, ob alle Elemente alle Tests bestehen.

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

Erneut, wenn Sie keine Bezeichnung verwenden, müssten Sie stattdessen eine boolesche Variable verwenden.

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

### Verwendung eines bezeichneten Blocks mit break

Sie können auch andere Anweisungen als Schleifen kennzeichnen, wie einfache Blöcke, aber nur `break`-Anweisungen können sich auf nicht-Schleifen-Bezeichnungen beziehen.

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

Bezeichnungen können nur auf [Anweisungen, nicht auf Deklarationen](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) angewendet werden. Es gibt eine veraltete Grammatik, die es erlaubt, Funktionsdeklarationen in nicht-striktem Code zu kennzeichnen:

```js
L: function F() {}
```

In [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-Code führt dies jedoch zu einem {{jsxref("SyntaxError")}}:

```js-nolint example-bad
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

Nicht-einfache Funktionen, wie [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [asynchrone Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) können weder in strikt noch in nicht-striktem Code gekennzeichnet werden:

```js-nolint example-bad
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

Die Syntax der bezeichneten Funktionsdeklaration ist [veraltet](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und sollte nicht verwendet werden, selbst in nicht-striktem Code. Sie können tatsächlich nicht innerhalb des Funktionskörpers zu dieser Bezeichnung springen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
