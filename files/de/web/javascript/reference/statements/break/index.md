---
title: break
slug: Web/JavaScript/Reference/Statements/break
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`break`**-Anweisung beendet die aktuelle Schleife oder die {{jsxref("Statements/switch", "switch")}}-Anweisung und überträgt die Programmausführung auf die Anweisung, die der beendeten Anweisung folgt. Sie kann auch verwendet werden, um eine [markierte Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label) zu überspringen, wenn sie innerhalb dieser markierten Anweisung verwendet wird.

{{InteractiveExample("JavaScript Demo: break statement")}}

```js interactive-example
let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i += 1;
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
  - : Bezeichner, der mit dem Label der Anweisung verbunden ist, zu der unterbrochen werden soll. Wenn die `break`-Anweisung nicht innerhalb einer Schleife oder einer {{jsxref("Statements/switch", "switch")}}-Anweisung verschachtelt ist, ist der Label-Bezeichner erforderlich.

## Beschreibung

Wenn `break;` auftritt, verlässt das Programm die innerste `switch`- oder [Schleifen-](/de/docs/Web/JavaScript/Reference/Statements#iterations) Anweisung und fährt mit der nächsten Anweisung danach fort.

Wenn `break label;` auftritt, verlässt das Programm die mit `label` markierte Anweisung und fährt mit der nächsten Anweisung danach fort. Die `break`-Anweisung muss innerhalb des referenzierten Labels verschachtelt sein. Die markierte Anweisung kann jede beliebige Anweisung sein (üblicherweise eine {{jsxref("Statements/block", "block", "", 1)}}-Anweisung); sie muss keine weitere Schleifenanweisung sein.

Eine `break`-Anweisung, mit oder ohne folgendem Label, kann nicht auf der obersten Ebene eines Skripts, Moduls, Funktionskörpers oder im [statischen Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) verwendet werden, selbst wenn die Funktion oder Klasse weiter innerhalb einer Schleife enthalten ist.

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

Der folgende Code enthält eine `break`-Anweisung, die die {{jsxref("Statements/switch", "switch")}}-Anweisung beendet, wenn ein Fall abgeglichen wurde und der entsprechende Code ausgeführt wurde.

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

### break in markierten Blöcken

Der folgende Code verwendet `break`-Anweisungen mit markierten Blöcken. Durch die Verwendung von `break outerBlock` wird die Ausführung ans Ende des als `outerBlock` markierten Blockstatements übertragen.

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

### Unsynaktische break-Anweisungen

Eine `break`-Anweisung muss innerhalb einer markierten Anweisung verschachtelt sein, auf die sie sich bezieht. Der folgende Code verwendet ebenfalls `break`-Anweisungen mit markierten Blöcken, erzeugt jedoch einen Syntaxfehler, da seine `break`-Anweisung sich auf `block2` bezieht, jedoch nicht innerhalb von `block2` verschachtelt ist.

```js-nolint example-bad
block1: {
  console.log("1");
  break block2; // SyntaxError: label not found
}

block2: {
  console.log("2");
}
```

Syntaxfehler werden auch in den folgenden Codebeispielen erzeugt, die `break`-Anweisungen innerhalb von Funktionen verwenden, die innerhalb einer Schleife oder eines markierten Blocks verschachtelt sind, aus denen die `break`-Anweisungen ausbrechen sollen.

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
