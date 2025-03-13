---
title: break
slug: Web/JavaScript/Reference/Statements/break
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`break`**-Anweisung beendet die aktuelle Schleife oder {{jsxref("Statements/switch", "switch")}}-Anweisung und überträgt die Programmausführung auf die Anweisung, die der beendeten Anweisung folgt. Sie kann auch verwendet werden, um eine [markierte Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label) zu überspringen, wenn sie innerhalb dieser markierten Anweisung verwendet wird.

{{InteractiveExample("JavaScript Demo: break statement")}}

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
  - : Kennzeichen, das mit dem Label der Anweisung verbunden ist, zu der abgebrochen werden soll. Wenn die `break`-Anweisung nicht innerhalb einer Schleife oder {{jsxref("Statements/switch", "switch")}} geschachtelt ist, ist der Label-Identifikator erforderlich.

## Beschreibung

Wenn `break;` gefunden wird, bricht das Programm aus der innersten `switch`- oder [Schleifen-](/de/docs/Web/JavaScript/Reference/Statements#iterations) Anweisung aus und setzt die Ausführung mit der nächsten Anweisung fort.

Wenn `break label;` gefunden wird, bricht das Programm aus der mit `label` gekennzeichneten Anweisung aus und setzt die Ausführung mit der nächsten Anweisung fort. Die `break`-Anweisung muss innerhalb des referenzierten Labels geschachtelt sein. Die gekennzeichnete Anweisung kann beliebige Anweisungen sein (häufig eine {{jsxref("Statements/block", "block", "", 1)}}-Anweisung); sie muss keine andere Schleifenanweisung sein.

Eine `break`-Anweisung, mit oder ohne folgendes Label, kann nicht auf der obersten Ebene eines Skripts, Moduls, Funktionskörpers oder [statischen Initialisierungsblocks](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) verwendet werden, selbst wenn die Funktion oder Klasse weiter innerhalb einer Schleife enthalten ist.

## Beispiele

### break in einer while-Schleife

Die folgende Funktion enthält eine `break`-Anweisung, die die {{jsxref("Statements/while", "while")}}-Schleife beendet, wenn `i` 3 ist, und dann den Wert `3 * x` zurückgibt.

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

Der folgende Code enthält eine `break`-Anweisung, die die {{jsxref("Statements/switch", "switch")}}-Anweisung beendet, wenn ein Fall zutrifft und der entsprechende Code ausgeführt wurde.

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

Der folgende Code verwendet `break`-Anweisungen mit markierten Blöcken. Durch die Verwendung von `break outerBlock` wird die Steuerung zum Ende des als `outerBlock` markierten Blockes weitergeleitet.

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

### Nicht-syntaktische break-Anweisungen

Eine `break`-Anweisung muss innerhalb eines beliebigen Labels geschachtelt sein, das sie referenziert. Der folgende Code verwendet ebenfalls `break`-Anweisungen mit markierten Blöcken, erzeugt jedoch einen Syntaxfehler, da seine `break`-Anweisung `block2` referenziert, aber nicht innerhalb von `block2` geschachtelt ist.

```js-nolint example-bad
block1: {
  console.log("1");
  break block2; // SyntaxError: label not found
}

block2: {
  console.log("2");
}
```

Syntaxfehler werden auch in den folgenden Codebeispielen erzeugt, die `break`-Anweisungen innerhalb von Funktionen verwenden, die in einer Schleife geschachtelt sind, oder markierten Blöcken, aus denen die `break`-Anweisungen ausbrechen sollen.

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
