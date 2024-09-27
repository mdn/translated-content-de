---
title: "SyntaxError: unlabeled break muss sich in einer Schleife oder einem Switch befinden"
slug: Web/JavaScript/Reference/Errors/Bad_break
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "unlabeled break muss sich in einer Schleife oder einem Switch befinden" tritt auf, wenn eine {{jsxref("Statements/break", "break")}}-Anweisung nicht innerhalb einer Schleife oder einer {{jsxref("Statements/switch", "switch")}}-Anweisung steht.

## Nachricht

```plain
SyntaxError: Illegal break statement (V8-based)
SyntaxError: unlabeled break must be inside loop or switch (Firefox)
SyntaxError: 'break' is only valid inside a switch or loop statement. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

{{jsxref("Statements/break", "break")}}-Anweisungen können verwendet werden, um eine Schleife oder eine `switch`-Anweisung zu verlassen, und ihre Verwendung außerhalb davon ist ein Syntaxfehler. Alternativ können Sie der `break`-Anweisung ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) geben, um aus jeder mit diesem Label versehenen Anweisung auszubrechen — wenn das Label jedoch keine umgebende Anweisung referenziert, wird ein anderer Fehler [SyntaxError: label not found](/de/docs/Web/JavaScript/Reference/Errors/Label_not_found) ausgelöst.

## Beispiele

### Unsynktaktisches break

`break` kann nicht außerhalb von `switch` oder Schleifen verwendet werden.

```js-nolint example-bad
let score = 0;

function increment() {
  if (score === 100)
    break; // SyntaxError: unlabeled break must be inside loop or switch
  }
  score++;
}
```

Vielleicht möchten Sie stattdessen {{jsxref("Statements/return", "return")}} verwenden, um eine Funktion vorzeitig zu beenden.

```js example-good
let score = 0;

function increment() {
  if (score === 100) {
    return;
  }
  score++;
}
```

### Verwendung von break in Callbacks

`break` kann nicht in Callbacks verwendet werden, selbst wenn der Callback aus einer Schleife aufgerufen wird.

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

Stattdessen sollten Sie den Code umstrukturieren, damit das `break` außerhalb des Callbacks verwendet wird.

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

Es gibt keine Möglichkeit, eine {{jsxref("Array/forEach", "forEach()")}}-Schleife vorzeitig zu beenden. Sie können stattdessen {{jsxref("Array/some", "some()")}} verwenden oder sie in eine {{jsxref("Statements/for...of", "for...of")}}-Schleife umwandeln.

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
