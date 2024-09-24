---
title: break
slug: Web/JavaScript/Reference/Statements/break
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

Die **`break`**-Anweisung beendet die aktuelle Schleife oder die {{jsxref("Statements/switch", "switch")}}-Anweisung und überträgt die Programmausführung an die Anweisung, die der beendeten Anweisung folgt. Sie kann auch verwendet werden, um eine [markierte Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label) zu überspringen, wenn sie innerhalb dieser markierten Anweisung verwendet wird.

{{EmbedInteractiveExample("pages/js/statement-break.html")}}

## Syntax

```js-nolint
break;
break label;
```

- `label` {{optional_inline}}
  - : Bezeichner, der mit dem Label der Anweisung, zu der gesprungen werden soll, assoziiert ist. Wenn die `break`-Anweisung nicht innerhalb einer Schleife oder {{jsxref("Statements/switch", "switch")}} verschachtelt ist, ist der Bezeichner für das Label erforderlich.

## Beschreibung

Wenn `break;` aufgerufen wird, verlässt das Programm die innerste `switch`- oder [Schleifen](/de/docs/Web/JavaScript/Reference/Statements#iterations)-Anweisung und setzt die Ausführung mit der nächsten Anweisung fort.

Wenn `break label;` aufgerufen wird, verlässt das Programm die mit `label` markierte Anweisung und setzt die Ausführung mit der nächsten Anweisung fort. Die `break`-Anweisung muss innerhalb des referenzierten Labels verschachtelt sein. Die markierte Anweisung kann jede Anweisung sein (häufig eine {{jsxref("Statements/block", "Block", "", 1)}}-Anweisung); sie muss keine weitere Schleifenanweisung sein.

Eine `break`-Anweisung, ob mit oder ohne folgendes Label, kann nicht auf oberster Ebene eines Skripts, Moduls, Funktionskörpers oder [statischen Initialisierungsblocks](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) verwendet werden, selbst wenn die Funktion oder Klasse weiter innerhalb einer Schleife enthalten ist.

## Beispiele

### break in while-Schleife

Die folgende Funktion hat eine `break`-Anweisung, die die {{jsxref("Statements/while", "while")}}-Schleife beendet, wenn `i` 3 ist, und dann den Wert `3 * x` zurückgibt.

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

Der folgende Code hat eine `break`-Anweisung, die die {{jsxref("Statements/switch", "switch")}}-Anweisung beendet, wenn ein Fall zutrifft und der entsprechende Code ausgeführt wurde.

```js
const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi ist ursprünglich aus Japan.");
    break;
  case "pizza":
    console.log("Pizza ist ursprünglich aus Italien.");
    break;
  default:
    console.log("Ich habe noch nie von diesem Gericht gehört.");
    break;
}
```

### break in markierten Blöcken

Der folgende Code verwendet `break`-Anweisungen mit markierten Blöcken. Durch die Verwendung von `break outerBlock` wird die Kontrolle an das Ende des als `outerBlock` markierten Blockstatements übertragen.

```js
outerBlock: {
  innerBlock: {
    console.log("1");
    break outerBlock; // verlässt sowohl innerBlock als auch outerBlock
    console.log(":-("); // wird übersprungen
  }
  console.log("2"); // wird übersprungen
}
```

### Unsynaktische break-Anweisungen

Eine `break`-Anweisung muss innerhalb eines Labels verschachtelt sein, auf das sie sich bezieht. Der folgende Code verwendet ebenfalls `break`-Anweisungen mit markierten Blöcken, erzeugt jedoch einen Syntaxfehler, da die `break`-Anweisung sich auf `block2` bezieht, aber nicht in `block2` verschachtelt ist.

```js-nolint example-bad
block1: {
  console.log("1");
  break block2; // SyntaxError: label nicht gefunden
}

block2: {
  console.log("2");
}
```

Syntaxfehler werden auch in den folgenden Codebeispielen erzeugt, die `break`-Anweisungen innerhalb von Funktionen verwenden, die innerhalb einer Schleife oder eines markierten Blocks verschachtelt sind, aus dem die `break`-Anweisungen auszubrechen beabsichtigen.

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

testBreak(1); // SyntaxError: Ungültige break-Anweisung
```

```js-nolint example-bad
block1: {
  console.log("1");
  (() => {
    break block1; // SyntaxError: Undefiniertes Label 'block1'
  })();
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/label", "label", "", 1)}}
- {{jsxref("Statements/switch", "switch")}}
