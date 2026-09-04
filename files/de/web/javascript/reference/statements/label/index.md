---
title: Labeled statement
slug: Web/JavaScript/Reference/Statements/label
l10n:
  sourceCommit: 5c8d0ac21db572edebbd4ad428efca0af3ec1734
---

Ein **labeled statement** ist eine beliebige [Anweisung](/de/docs/Web/JavaScript/Reference/Statements), die mit einem Bezeichner vorangestellt ist. Sie können zu diesem Label mit einer {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisung springen, die innerhalb der bezeichneten Anweisung verschachtelt ist.

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
  - : Eine JavaScript-Anweisung. `break` kann innerhalb jeder bezeichneten Anweisung verwendet werden und `continue` kann innerhalb bezeichneten Schleifenanweisungen verwendet werden.

## Beschreibung

Sie können ein Label verwenden, um eine Anweisung zu identifizieren, und später mit einer `break`- oder `continue`-Anweisung darauf verweisen. Beachten Sie, dass JavaScript keine _goto_-Anweisung hat; Sie können Labels nur mit `break` oder `continue` verwenden.

Jedes `break` oder `continue`, das auf `label` verweist, muss in dem `statement` enthalten sein, das mit `label` bezeichnet ist. Betrachten Sie `label` als eine Variable, die nur im Geltungsbereich von `statement` verfügbar ist.

Wenn während der Ausführung von `statement` auf ein `break label;` gestoßen wird, wird die Ausführung von `statement` beendet, und die Ausführung wird bei der Anweisung unmittelbar nach der bezeichneten Anweisung fortgesetzt.

`continue label;` kann nur verwendet werden, wenn `statement` eine der [Schleifenanweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations) ist. Wenn während der Ausführung von `statement` auf ein `continue label;` gestoßen wird, wird die Ausführung von `statement` bei der nächsten Iteration der Schleife fortgesetzt. `continue;` ohne Label kann nur die innerste Schleife fortsetzen, während `continue label;` es ermöglicht, jede gegebene Schleife fortzusetzen, selbst wenn die Anweisung innerhalb anderer Schleifen verschachtelt ist.

Eine Anweisung kann mehrere Labels haben. In diesem Fall sind die Labels funktional gleichwertig.

## Beispiele

### Verwendung eines bezeichneten continue bei for-Schleifen

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

### Verwendung eines bezeichneten break bei for-Schleifen

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

Beachten Sie den Unterschied zum vorherigen `continue`-Beispiel: wenn `break loop1` aufgerufen wird, wird die äußere Schleife beendet, sodass es keine weiteren Ausgaben über "i = 1, j = 0" hinaus gibt; wenn `continue loop1` aufgerufen wird, wird die äußere Schleife bei der nächsten Iteration fortgesetzt, sodass nur "i = 1, j = 1" und "i = 1, j = 2" übersprungen werden.

### Verwendung einer bezeichneten continue-Anweisung

Angenommen, es gibt ein Array von Elementen und ein Array von Tests: dieses Beispiel zählt die Anzahl der Elemente, die alle Tests bestehen.

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

Beachten Sie, wie die `continue itemIteration;`-Anweisung den Rest der Tests für das aktuelle Element sowie die Anweisung, die den `itemsPassed`-Zähler aktualisiert, überspringt und mit dem nächsten Element fortfährt. Wenn Sie kein Label verwenden, müssten Sie stattdessen eine boolesche Flagge verwenden.

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

Angenommen, es gibt ein Array von Elementen und ein Array von Tests: dieses Beispiel bestimmt, ob alle Elemente alle Tests bestehen.

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

Auch hier müssten Sie, wenn Sie kein Label verwenden, stattdessen eine boolesche Flagge verwenden.

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

Sie können auch andere Anweisungen als Schleifen bezeichnen, wie z. B. einfache Blöcke, aber nur `break`-Anweisungen können sich auf nicht-Schleifen-Labels beziehen.

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

Labels können nur auf [Anweisungen, nicht auf Deklarationen](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) angewendet werden. Es gibt eine veraltete Grammatik, die es ermöglicht, Funktionsdeklarationen in nicht-striktem Code zu markieren:

```js
L: function F() {}
```

In [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Code wird dies jedoch einen {{jsxref("SyntaxError")}} auslösen:

<!-- cSpell:ignore labelled -->

```js-nolint example-bad
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

Nicht-gewöhnliche Funktionen, wie [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [asynchrone Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function), können weder in strikt noch in nicht-strikt kodiertem Code markiert werden:

```js-nolint example-bad
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

Der Syntax für die deklarierte Funktion mit Label ist [veraltet](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und sollte nicht verwendet werden, selbst in nicht-striktem Code. Sie können tatsächlich nicht innerhalb des Funktionskörpers zu diesem Label springen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
