---
title: Beschriftete Anweisung
slug: Web/JavaScript/Reference/Statements/label
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Statements")}}

Eine **beschriftete Anweisung** ist jede [Anweisung](/de/docs/Web/JavaScript/Reference/Statements), die mit einem Bezeichner versehen ist. Sie können mit einer {{jsxref("Statements/break", "break")}} oder {{jsxref("Statements/continue", "continue")}} Anweisung, die innerhalb der beschrifteten Anweisung geschachtelt ist, zu diesem Label springen.

{{EmbedInteractiveExample("pages/js/statement-label.html")}}

## Syntax

```js-nolint
label:
  statement
```

- `label`
  - : Ein beliebiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), der kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist.
- `statement`
  - : Eine JavaScript-Anweisung. `break` kann innerhalb einer beschrifteten Anweisung verwendet werden, und `continue` kann innerhalb beschrifteter Schleifenanweisungen verwendet werden.

## Beschreibung

Sie können ein Label verwenden, um eine Anweisung zu identifizieren und sich später mit einer `break` oder `continue` Anweisung darauf zu beziehen. Beachten Sie, dass JavaScript _keine_ `goto` Anweisung hat; Sie können Labels nur mit `break` oder `continue` verwenden.

Jedes `break` oder `continue`, das sich auf `label` bezieht, muss innerhalb der `statement` enthalten sein, die mit `label` versehen ist. Denken Sie an `label` als eine Variable, die nur im Geltungsbereich der `statement` verfügbar ist.

Wenn eine `break label;` Anweisung beim Ausführen von `statement` auftritt, endet die Ausführung von `statement`, und die Ausführung wird bei der Anweisung unmittelbar nach der beschrifteten Anweisung fortgesetzt.

`continue label;` kann nur verwendet werden, wenn `statement` eine der [Schleifenanweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations) ist. Wenn eine `continue label;` Anweisung bei der Ausführung von `statement` auftritt, wird die Ausführung von `statement` bei der nächsten Iteration der Schleife fortgesetzt. `continue;` ohne Label kann nur die innerste Schleife fortsetzen, während `continue label;` das Fortsetzen jeder gegebenen Schleife erlaubt, selbst wenn die Anweisung in anderen Schleifen geschachtelt ist.

Eine Anweisung kann mehrere Labels haben. In diesem Fall sind die Labels alle funktional gleichwertig.

## Beispiele

### Verwenden eines beschrifteten continue mit for-Schleifen

```js
// Die erste for-Anweisung ist mit "loop1" beschriftet
loop1: for (let i = 0; i < 3; i++) {
  // Die zweite for-Anweisung ist mit "loop2" beschriftet
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Ausgabe:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2
```

Beachten Sie, wie sowohl "i = 1, j = 1" als auch "i = 1, j = 2" übersprungen werden.

### Verwenden eines beschrifteten break mit for-Schleifen

```js
let i, j;

// Die erste for-Anweisung ist mit "loop1" beschriftet
loop1: for (i = 0; i < 3; i++) {
  // Die zweite for-Anweisung ist mit "loop2" beschriftet
  loop2: for (j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Ausgabe:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
```

Beachten Sie den Unterschied zum vorherigen `continue`-Beispiel: wenn `break loop1` auftritt, wird die Ausführung der äußeren Schleife beendet, sodass keine weiteren Ausgaben über "i = 1, j = 0" hinaus erfolgen; wenn `continue loop1` auftritt, wird die Ausführung der äußeren Schleife bei der nächsten Iteration fortgesetzt, sodass nur "i = 1, j = 1" und "i = 1, j = 2" übersprungen werden.

### Verwenden einer beschrifteten continue-Anweisung

Gegeben ein Array von Elementen und ein Array von Tests, zählt dieses Beispiel die Anzahl der Elemente, die alle Tests bestehen.

```js
// Zahlen von 1 bis 100
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

Beachten Sie, wie die `continue itemIteration;` Anweisung sowohl den Rest der Tests für das aktuelle Element als auch die Anweisung, die den `itemsPassed` Zähler aktualisiert, überspringt, und mit dem nächsten Element fortfährt. Wenn Sie kein Label verwenden, müssten Sie stattdessen ein boolesches Flag verwenden.

```js
// Zahlen von 1 bis 100
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

### Verwenden einer beschrifteten break-Anweisung

Gegeben ein Array von Elementen und ein Array von Tests, bestimmt dieses Beispiel, ob alle Elemente alle Tests bestehen.

```js
// Zahlen von 1 bis 100
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

Auch hier, wenn Sie kein Label verwenden, müssten Sie stattdessen ein boolesches Flag verwenden.

```js
// Zahlen von 1 bis 100
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

### Verwenden eines beschrifteten Blocks mit break

Sie können auch andere Anweisungen als Schleifen kennzeichnen, wie z.B. einfache Blöcke, aber nur `break` Anweisungen können sich auf nicht-Schleifen-Labels beziehen.

```js
foo: {
  console.log("face");
  break foo;
  console.log("this will not be executed");
}
console.log("swap");

// Ausgabe:
// "face"
// "swap"
```

### Beschriftete Funktionsdeklarationen

Labels können nur auf [Anweisungen, nicht auf Deklarationen](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) angewendet werden. Es gibt eine veraltete Grammatik, die es erlaubt, Funktionsdeklarationen in nicht-striktem Code zu kennzeichnen:

```js
L: function F() {}
```

In [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-Code wirft dies jedoch einen {{jsxref("SyntaxError")}}:

```js-nolint example-bad
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

Nicht-Standardfunktionen, wie [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) und [asynchrone Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function), können weder in striktem noch in nicht-striktem Code beschriftet werden:

```js-nolint example-bad
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

Die beschriftete Funktionsdeklarationssyntax ist [veraltet](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und sollte nicht verwendet werden, selbst in nicht-striktem Code. Sie können innerhalb des Funktionskörpers nicht tatsächlich zu diesem Label springen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
