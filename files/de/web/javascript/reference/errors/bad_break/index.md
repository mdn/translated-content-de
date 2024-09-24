---
title: "SyntaxError: Unbeschriftetes break muss innerhalb von Schleifen oder switch stehen"
slug: Web/JavaScript/Reference/Errors/Bad_break
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "unlabeled break must be inside loop or switch" tritt auf, wenn eine {{jsxref("Statements/break", "break")}}-Anweisung nicht innerhalb einer Schleife oder einer {{jsxref("Statements/switch", "switch")}}-Anweisung steht.

## Nachricht

```plain
SyntaxError: Illegal break statement (V8-based)
SyntaxError: unlabeled break must be inside loop or switch (Firefox)
SyntaxError: 'break' is only valid inside a switch or loop statement. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schief gelaufen?

{{jsxref("Statements/break", "break")}}-Anweisungen können verwendet werden, um eine Schleife oder eine `switch`-Anweisung zu verlassen. Wird sie anderswo eingesetzt, ist dies ein Syntaxfehler. Alternativ können Sie der `break`-Anweisung ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) zuweisen, um aus einer beliebigen Anweisung mit diesem Label auszubrechen — wenn das Label jedoch auf keine umgebende Anweisung verweist, wird ein anderer Fehler [SyntaxError: label not found](/de/docs/Web/JavaScript/Reference/Errors/Label_not_found) ausgelöst.

## Beispiele

### Unsynktaktisches break

`break` kann nicht außerhalb von `switch`-Anweisungen oder Schleifen verwendet werden.

```js-nolint example-bad
let score = 0;

function increment() {
  if (score === 100)
    break; // SyntaxError: unlabeled break must be inside loop or switch
  }
  score++;
}
```

Vielleicht wollten Sie stattdessen {{jsxref("Statements/return", "return")}} verwenden, um eine Funktion frühzeitig zu beenden.

```js example-good
let score = 0;

function increment() {
  if (score === 100) {
    return;
  }
  score++;
}
```

### Break in Callbacks verwenden

`break` kann nicht in Callbacks verwendet werden, selbst wenn der Callback von einer Schleife aufgerufen wird.

```js-nolint example-bad
let containingIndex = 0;
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

while (containingIndex < matrix.length) {
  matrix[containingIndex].forEach((value) => {
    if (value === 5) {
      break; // SyntaxError: unlabeled break must be inside loop or switch
    }
  });
  containingIndex++;
}
```

Stattdessen überarbeiten Sie den Code so, dass das `break` außerhalb des Callbacks verwendet wird.

```js example-good
let containingIndex = 0;
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

outer: while (containingIndex < matrix.length) {
  for (const value of matrix[containingIndex]) {
    if (value === 5) {
      break outer;
    }
  }
  containingIndex++;
}
```

```js example-good
let containingIndex = 0;
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

while (containingIndex < matrix.length) {
  if (matrix[containingIndex].includes(5)) {
    break;
  }
  containingIndex++;
}
```

Es gibt keine Möglichkeit, eine {{jsxref("Array/forEach", "forEach()")}}-Schleife frühzeitig zu beenden. Sie können stattdessen {{jsxref("Array/some", "some()")}} verwenden oder es in eine {{jsxref("Statements/for...of", "for...of")}}-Schleife umwandeln.

```js-nolint example-bad
array.forEach((value) => {
  if (value === 5) {
    break; // SyntaxError: unlabeled break must be inside loop or switch
  }
  // do something with value
});
```

```js example-good
array.some((value) => {
  if (value === 5) {
    return true;
  }
  // do something with value
  return false;
});
```

```js example-good
for (const value of array) {
  if (value === 5) {
    break;
  }
  // do something with value
}
```

## Siehe auch

- {{jsxref("Statements/break", "break")}}
