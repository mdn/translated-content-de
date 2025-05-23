---
title: break
slug: Web/JavaScript/Reference/Statements/break
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{jsSidebar("Statements")}}

Die **`break`**-Anweisung beendet die aktuelle Schleife oder {{jsxref("Statements/switch", "switch")}}-Anweisung und überträgt die Programmkontrolle auf die Anweisung, welche der beendeten Anweisung folgt. Sie kann auch genutzt werden, um eine [benannte Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label) zu überspringen, wenn sie innerhalb dieser benannten Anweisung verwendet wird.

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
  - : Bezeichner, der mit der Bezeichnung der Anweisung verknüpft ist, zu der gesprungen werden soll. Falls sich die `break`-Anweisung nicht innerhalb einer Schleife oder eines {{jsxref("Statements/switch", "switch")}}-Blocks befindet, ist der Bezeichner erforderlich.

## Beschreibung

Wenn `break;` auftritt, verlässt das Programm die innerste `switch`- oder [Schleifen](/de/docs/Web/JavaScript/Reference/Statements#iterations)-Anweisung und fährt mit der Ausführung der nächsten Anweisung fort.

Wenn `break label;` auftritt, verlässt das Programm die mit `label` markierte Anweisung und fährt mit der Ausführung der nächsten Anweisung fort. Die `break`-Anweisung muss innerhalb der angegebenen Bezeichnung geschachtelt sein. Die benannte Anweisung kann jede beliebige Anweisung sein (häufig eine {{jsxref("Statements/block", "block", "", 1)}}-Anweisung); sie muss keine weitere Schleifenanweisung sein.

Eine `break`-Anweisung, mit oder ohne folgendem Bezeichner, kann nicht auf der obersten Ebene eines Scripts, Moduls, Funktionskörpers oder [statischen Initialisierungsblocks](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) verwendet werden, selbst wenn die Funktion oder Klasse weiter innerhalb einer Schleife enthalten ist.

## Beispiele

### break in einer while-Schleife

Die folgende Funktion hat eine `break`-Anweisung, die die {{jsxref("Statements/while", "while")}}-Schleife beendet, wenn `i` den Wert 3 hat, und dann den Wert `3 * x` zurückgibt.

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

Der folgende Code hat eine `break`-Anweisung, die die {{jsxref("Statements/switch", "switch")}}-Anweisung beendet, wenn ein Fall abgeglichen ist und der entsprechende Code ausgeführt wurde.

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

### break in benannten Blöcken

Der folgende Code verwendet `break`-Anweisungen mit benannten Blöcken. Durch die Verwendung von `break outerBlock` wird die Kontrolle an das Ende des als `outerBlock` markierten Blockes übertragen.

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

### Unsyntaktische break-Anweisungen

Eine `break`-Anweisung muss innerhalb jeder Bezeichnung geschachtelt sein, auf die sie sich bezieht. Der folgende Code verwendet ebenfalls `break`-Anweisungen mit benannten Blöcken, erzeugt jedoch einen Syntaxfehler, da seine `break`-Anweisung auf `block2` verweist, ohne innerhalb von `block2` geschachtelt zu sein.

```js-nolint example-bad
block1: {
  console.log("1");
  break block2; // SyntaxError: label not found
}

block2: {
  console.log("2");
}
```

Syntaxfehler werden auch in den folgenden Codebeispielen erzeugt, die `break`-Anweisungen innerhalb von Funktionen verwenden, die innerhalb einer Schleife oder eines benannten Blocks geschachtelt sind, aus denen die `break`-Anweisungen austreten sollen.

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
