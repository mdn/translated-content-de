---
title: break
slug: Web/JavaScript/Reference/Statements/break
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`break`**-Anweisung beendet die aktuelle Schleife oder die {{jsxref("Statements/switch", "switch")}}-Anweisung und überträgt die Programmausführung an die Anweisung, die der beendeten Anweisung folgt. Sie kann auch verwendet werden, um eine [gelabelte Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label) zu überspringen, wenn sie innerhalb dieser gelabelten Anweisung verwendet wird.

{{InteractiveExample("JavaScript Demo: Statement - Break")}}

```js interactive-example
let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);
// Expected output: 3
```

## Syntax

```js-nolint
break;
break label;
```

- `label` {{optional_inline}}
  - : Kennung, die mit dem Label der Anweisung verbunden ist, zu der gesprungen wird. Wenn die `break`-Anweisung nicht in einer Schleife oder {{jsxref("Statements/switch", "switch")}} verschachtelt ist, ist die Label-Kennung erforderlich.

## Beschreibung

Wenn `break;` erreicht wird, wird das Programm aus der innersten `switch`- oder [Schleifen](/de/docs/Web/JavaScript/Reference/Statements#iterations)-Anweisung ausgebrochen und fährt mit der nächsten Anweisung danach fort.

Wenn `break label;` erreicht wird, wird aus der mit `label` gelabelten Anweisung ausgebrochen, und das Programm führt die nächste Anweisung danach aus. Die `break`-Anweisung muss innerhalb des referenzierten Labels verschachtelt sein. Die gelabelte Anweisung kann jede beliebige Anweisung sein (oft eine {{jsxref("Statements/block", "Block", "", 1)}}-Anweisung); sie muss keine weitere Schleifenanweisung sein.

Eine `break`-Anweisung, mit oder ohne folgendes Label, kann nicht auf der obersten Ebene eines Skripts, Moduls, Funktionskörpers oder [statischen Initialisierungsblocks](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) verwendet werden, selbst wenn die Funktion oder Klasse weiter innerhalb einer Schleife enthalten ist.

## Beispiele

### break in while-Schleife

Die folgende Funktion enthält eine `break`-Anweisung, die die {{jsxref("Statements/while", "while")}}-Schleife beendet, wenn `i` den Wert 3 hat, und dann den Wert `3 * x` zurückgibt.

```js
function testBreak(x) {
  let i = 0;

  while (i < 6) {
    if (i === 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}
```

### break in switch-Anweisungen

Der folgende Code enthält eine `break`-Anweisung, die die {{jsxref("Statements/switch", "switch")}}-Anweisung beendet, wenn ein Fall (case) übereinstimmt und der entsprechende Code ausgeführt wurde.

```js
const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}
```

### break in gelabelten Blöcken

Der folgende Code verwendet `break`-Anweisungen mit gelabelten Blöcken. Durch die Verwendung von `break outerBlock` wird die Kontrolle an das Ende des Blockstatements übertragen, das als `outerBlock` gekennzeichnet ist.

```js
outerBlock: {
  innerBlock: {
    console.log("1");
    break outerBlock; // breaks out of both innerBlock and outerBlock
    console.log(":-("); // skipped
  }
  console.log("2"); // skipped
}
```

### Nicht syntaktische break-Anweisungen

Eine `break`-Anweisung muss innerhalb des Labels verschachtelt sein, auf das sie verweist. Der folgende Code verwendet ebenfalls `break`-Anweisungen mit gelabelten Blöcken, erzeugt jedoch einen Syntaxfehler, da die `break`-Anweisung auf `block2` verweist, aber nicht innerhalb von `block2` verschachtelt ist.

```js-nolint example-bad
block1: {
  console.log("1");
  break block2; // SyntaxError: label not found
}

block2: {
  console.log("2");
}
```

Syntaxfehler werden auch durch die folgenden Codebeispiele erzeugt, die `break`-Anweisungen innerhalb von Funktionen verwenden, die in einer Schleife oder einem gelabelten Block verschachtelt sind, aus denen die `break`-Anweisungen ausbrechen sollen.

```js-nolint example-bad
function testBreak(x) {
  let i = 0;

  while (i < 6) {
    if (i === 3) {
      (() => {
        break;
      })();
    }
    i += 1;
  }

  return i * x;
}

testBreak(1); // SyntaxError: Illegal break statement
```

```js-nolint example-bad
block1: {
  console.log("1");
  (() => {
    break block1; // SyntaxError: Undefined label 'block1'
  })();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/label", "label", "", 1)}}
- {{jsxref("Statements/switch", "switch")}}
