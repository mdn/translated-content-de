---
title: break
slug: Web/JavaScript/Reference/Statements/break
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

Die **`break`**-Anweisung beendet die aktuelle Schleife oder die {{jsxref("Statements/switch", "switch")}}-Anweisung und überträgt die Programmausführung auf die Anweisung nach der beendeten Anweisung. Sie kann auch verwendet werden, um eine [markierte Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label) zu überspringen, wenn sie innerhalb dieser markierten Anweisung verwendet wird.

{{EmbedInteractiveExample("pages/js/statement-break.html")}}

## Syntax

```js-nolint
break;
break label;
```

- `label` {{optional_inline}}
  - : Bezeichner, der mit dem Label der Anweisung verbunden ist, zu der gebrochen wird. Wenn die `break`-Anweisung nicht innerhalb einer Schleife oder eines {{jsxref("Statements/switch", "switch")}} verschachtelt ist, ist der Label-Bezeichner erforderlich.

## Beschreibung

Wenn `break;` auftritt, bricht das Programm aus der innersten `switch`- oder [Schleifen-](/de/docs/Web/JavaScript/Reference/Statements#iterations) Anweisung aus und setzt die Ausführung der nächsten Anweisung danach fort.

Wenn `break label;` auftritt, bricht das Programm aus der mit `label` gekennzeichneten Anweisung aus und setzt die Ausführung der nächsten Anweisung danach fort. Die `break`-Anweisung muss innerhalb des referenzierten Labels verschachtelt sein. Die markierte Anweisung kann jede Anweisung sein (häufig eine {{jsxref("Statements/block", "Block", "", 1)}}-Anweisung); sie muss keine weitere Schleifenanweisung sein.

Eine `break`-Anweisung, mit oder ohne folgendes Label, kann nicht auf der obersten Ebene eines Skripts, Moduls, Funktionskörpers oder eines [statischen Initialisierungsblocks](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) verwendet werden, selbst wenn die Funktion oder Klasse weiter in einer Schleife enthalten ist.

## Beispiele

### `break` in einer while-Schleife

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

### `break` in switch-Anweisungen

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

### `break` in markierten Blöcken

Der folgende Code verwendet `break`-Anweisungen mit markierten Blöcken. Durch die Verwendung von `break outerBlock` wird die Kontrolle an das Ende der als `outerBlock` markierten Blockanweisung übertragen.

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

### Unsynaktische `break`-Anweisungen

Eine `break`-Anweisung muss innerhalb eines referenzierten Labels verschachtelt sein. Der folgende Code verwendet auch `break`-Anweisungen mit markierten Blöcken, erzeugt jedoch einen Syntaxfehler, da seine `break`-Anweisung auf `block2` verweist, aber nicht innerhalb von `block2` verschachtelt ist.

```js-nolint example-bad
block1: {
  console.log("1");
  break block2; // SyntaxError: label not found
}

block2: {
  console.log("2");
}
```

Syntaxfehler werden auch in den folgenden Codebeispielen erzeugt, die `break`-Anweisungen innerhalb von Funktionen verwenden, die in einer Schleife verschachtelt sind oder markierte Blöcke, aus denen die `break`-Anweisungen auszubrechen versuchen.

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
