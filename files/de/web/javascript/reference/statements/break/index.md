---
title: break
slug: Web/JavaScript/Reference/Statements/break
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

Die **`break`**-Anweisung beendet die aktuelle Schleife oder die {{jsxref("Statements/switch", "switch")}}-Anweisung und überträgt die Programmausführung auf die Anweisung, die der beendeten Anweisung folgt. Sie kann auch verwendet werden, um eine [labeled statement](/de/docs/Web/JavaScript/Reference/Statements/label) zu überspringen, wenn sie innerhalb dieser bezeichneten Anweisung verwendet wird.

{{EmbedInteractiveExample("pages/js/statement-break.html")}}

## Syntax

```js-nolint
break;
break label;
```

- `label` {{optional_inline}}
  - : Kennzeichnung, die mit dem Label der Anweisung verbunden ist, zu der gebrochen werden soll. Wenn die `break`-Anweisung nicht innerhalb einer Schleife oder {{jsxref("Statements/switch", "switch")}} verschachtelt ist, ist die Kennzeichnung erforderlich.

## Beschreibung

Wenn `break;` aufgerufen wird, verlässt das Programm die innerste `switch`- oder [Schleifen-](/de/docs/Web/JavaScript/Reference/Statements#iterations) Anweisung und setzt die Ausführung mit der nächsten Anweisung fort.

Wenn `break label;` aufgerufen wird, verlässt das Programm die Anweisung, die mit `label` gekennzeichnet ist, und setzt die Ausführung mit der nächsten Anweisung fort. Die `break`-Anweisung muss innerhalb des referenzierten Labels verschachtelt sein. Die gekennzeichnete Anweisung kann jede Anweisung sein (häufig eine {{jsxref("Statements/block", "block", "", 1)}}-Anweisung); es muss sich nicht um eine weitere Schleifenanweisung handeln.

Eine `break`-Anweisung, mit oder ohne folgendes Label, kann nicht auf oberster Ebene eines Skripts, Moduls, Funktionskörpers oder [statischen Initialisierungsblockes](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) verwendet werden, selbst wenn die Funktion oder Klasse weiter innerhalb einer Schleife enthalten ist.

## Beispiele

### break in while-Schleife

Die folgende Funktion enthält eine `break`-Anweisung, die die {{jsxref("Statements/while", "while")}}-Schleife beendet, wenn `i` gleich 3 ist, und dann den Wert `3 * x` zurückgibt.

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

### break in gekennzeichneten Blöcken

Der folgende Code verwendet `break`-Anweisungen mit gekennzeichneten Blöcken. Durch die Verwendung von `break outerBlock` wird die Kontrolle an das Ende des als `outerBlock` markierten Blockes übertragen.

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

### Unsinnige break-Anweisungen

Eine `break`-Anweisung muss in jedem Label verschachtelt sein, auf das sie sich bezieht. Der folgende Code verwendet ebenfalls `break`-Anweisungen mit gekennzeichneten Blöcken, erzeugt jedoch einen Syntaxfehler, da seine `break`-Anweisung `block2` referenziert, aber nicht innerhalb von `block2` verschachtelt ist.

```js-nolint example-bad
block1: {
  console.log("1");
  break block2; // SyntaxError: label not found
}

block2: {
  console.log("2");
}
```

Syntaxfehler werden auch in den folgenden Codebeispielen erzeugt, bei denen `break`-Anweisungen innerhalb von Funktionen verwendet werden, die innerhalb einer Schleife oder eines gekennzeichneten Blocks verschachtelt sind, aus denen die `break`-Anweisungen herausbrechen sollen.

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
