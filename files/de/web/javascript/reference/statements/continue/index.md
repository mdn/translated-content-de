---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`continue`**-Anweisung beendet die Ausführung der Anweisungen in der aktuellen Iteration der aktuellen oder markierten Schleife und setzt die Ausführung der Schleife mit der nächsten Iteration fort.

{{InteractiveExample("JavaScript Demo: Statement - Continue")}}

```js interactive-example
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// Expected output: "012456789"
```

## Syntax

```js-nolint
continue;
continue label;
```

- `label` {{optional_inline}}
  - : Bezeichner, der mit dem Label der Anweisung verknüpft ist.

## Beschreibung

Im Gegensatz zur {{jsxref("Statements/break", "break")}}-Anweisung beendet `continue` die Ausführung der Schleife nicht vollständig, sondern:

- In einer {{jsxref("Statements/while", "while")}}- oder {{jsxref("Statements/do...while", "do...while")}}-Schleife springt es zurück zur Bedingung.
- In einer {{jsxref("Statements/for", "for")}}-Schleife springt es zum Update-Ausdruck.
- In einer {{jsxref("Statements/for...in", "for...in")}}, {{jsxref("Statements/for...of", "for...of")}} oder {{jsxref("Statements/for-await...of", "for await...of")}}-Schleife springt es zur nächsten Iteration.

Die `continue`-Anweisung kann ein optionales Label enthalten, das es dem Programm ermöglicht, zur nächsten Iteration einer markierten Schleifenanweisung zu springen, anstatt zur innersten Schleife. In diesem Fall muss die `continue`-Anweisung innerhalb dieser markierten Anweisung verschachtelt sein.

Eine `continue`-Anweisung, mit oder ohne folgendes Label, kann nicht auf oberster Ebene eines Skripts, Moduls, Funktionskörpers oder [statischen Initialisierungsblocks](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) verwendet werden, selbst wenn die Funktion oder Klasse in einer Schleife enthalten ist.

## Beispiele

### Verwendung von continue mit while

Das folgende Beispiel zeigt eine {{jsxref("Statements/while", "while")}}-Schleife mit einer `continue`-Anweisung, die ausgeführt wird, wenn der Wert von `i` gleich 3 ist. Daher nimmt `n` die Werte 1, 3, 7 und 12 an.

```js
let i = 0;
let n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}
```

### Verwendung von continue mit einem Label

Im folgenden Beispiel enthält eine Anweisung mit dem Label `checkIAndJ` eine Anweisung mit dem Label `checkJ`. Wenn `continue` auftritt, fährt das Programm am Anfang der `checkJ`-Anweisung fort. Jedes Mal, wenn `continue` auftritt, wird `checkJ` erneut ausgeführt, bis seine Bedingung den Wert "false" zurückgibt. Wenn "false" zurückgegeben wird, wird der verbleibende Teil der `checkIAndJ`-Anweisung abgeschlossen.

Wenn `continue` ein Label von `checkIAndJ` hätte, würde das Programm am Anfang der `checkIAndJ`-Anweisung fortfahren.

```js
let i = 0;
let j = 8;

checkIAndJ: while (i < 4) {
  console.log(`i: ${i}`);
  i += 1;

  checkJ: while (j > 4) {
    console.log(`j: ${j}`);
    j -= 1;

    if (j % 2 === 0) continue checkJ;
    console.log(`${j} is odd.`);
  }
  console.log(`i = ${i}`);
  console.log(`j = ${j}`);
}
```

Ergebnis:

```plain
i: 0

// start checkJ
j: 8
7 is odd.
j: 7
j: 6
5 is odd.
j: 5
// end checkJ

i = 1
j = 4

i: 1
i = 2
j = 4

i: 2
i = 3
j = 4

i: 3
i = 4
j = 4
```

### Nicht syntaktische continue-Anweisungen

`continue` kann nicht innerhalb von Schleifen über Funktionsgrenzen hinweg verwendet werden.

```js-nolint example-bad
for (let i = 0; i < 10; i++) {
  (() => {
    continue; // SyntaxError: Illegal continue statement: no surrounding iteration statement
  })();
}
```

Wenn auf ein Label verwiesen wird, muss die markierte Anweisung die `continue`-Anweisung enthalten.

```js-nolint example-bad
label: for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  continue label; // SyntaxError: Undefined label 'label'
}
```

Die markierte Anweisung muss eine Schleife sein.

```js-nolint example-bad
label: {
  for (let i = 0; i < 10; i++) {
    continue label; // SyntaxError: Illegal continue statement: 'label' does not denote an iteration statement
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/label", "label", "", 1)}}
