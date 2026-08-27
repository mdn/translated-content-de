---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Die **`for`**-Anweisung erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht. Diese sind in Klammern eingeschlossen und durch Semikolons getrennt, gefolgt von einer Anweisung (in der Regel eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt wird.

{{InteractiveExample("JavaScript Demo: for statement")}}

```js interactive-example
let str = "";

for (let i = 0; i < 9; i++) {
  str += i;
}

console.log(str);
// Expected output: "012345678"
```

## Syntax

```js-nolint
for (initialization; condition; afterthought)
  statement
```

- `initialization` {{optional_inline}}
  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder eine Variablendeklaration, die einmal ausgewertet wird, bevor die Schleife beginnt. Typischerweise zum Initialisieren einer Zählervariablen verwendet. Dieser Ausdruck kann optional neue Variablen mit den Schlüsselwörtern `var` oder `let` deklarieren. Variablen, die mit `var` deklariert wurden, sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Gültigkeitsbereich wie die `for`-Schleife. Variablen, die mit `let` deklariert wurden, sind lokal zur Anweisung.

    Das Ergebnis dieses Ausdrucks wird verworfen.

- `condition` {{optional_inline}}
  - : Ein Ausdruck, der vor jeder Schleifeniteration ausgewertet wird. Wenn dieser Ausdruck {{Glossary("Truthy", "zu true ausgewertet wird")}}, wird `statement` ausgeführt. Wenn der Ausdruck {{Glossary("Falsy", "zu false ausgewertet wird")}}, wird die Schleife verlassen und die Ausführung geht zur ersten Anweisung nach dem `for`-Konstrukt.

    Dieser Konditionaltest ist optional. Wenn weggelassen, wird die Bedingung immer zu true ausgewertet.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jeder Schleifeniteration ausgewertet wird. Dies geschieht vor der nächsten Auswertung von `condition`. Allgemein verwendet, um die Zählervariable zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung zu true ausgewertet wird. Sie können eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um keine Anweisung innerhalb der Schleife auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie andere Schleifen-Anweisungen können in `statement` [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwendet werden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und wertet `afterthought` und dann `condition` neu aus.

## Beispiele

### Verwendung von for

Die folgende `for`-Anweisung beginnt mit der Deklaration der Variablen `i` und deren Initialisierung auf `0`. Sie überprüft, ob `i` kleiner als neun ist, führt die beiden nachfolgenden Anweisungen aus und erhöht `i` nach jedem Durchlauf der Schleife um 1.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Initialisierungsblock-Syntax

Der Initialisierungsblock akzeptiert sowohl Ausdrücke als auch Variablendeklarationen. Allerdings können Ausdrücke den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator nicht unverklammert verwenden, da dies mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife verwechselt werden könnte.

```js-nolint example-bad
for (let i = "start" in window ? window.start : 0; i < 9; i++) {
  console.log(i);
}
// SyntaxError: 'for-in' loop variable declaration may not have an initializer.
```

```js-nolint example-good
// Parenthesize the whole initializer
for (let i = ("start" in window ? window.start : 0); i < 9; i++) {
  console.log(i);
}

// Parenthesize the `in` expression
for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
  console.log(i);
}
```

### Optionale for-Ausdrücke

Alle drei Ausdrücke im Kopf der `for`-Schleife sind optional. Zum Beispiel ist es nicht erforderlich, den `initialization`-Block zur Initialisierung von Variablen zu verwenden:

```js
let i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}
```

Wie der `initialization`-Block ist auch der `condition`-Teil optional. Wenn Sie diesen Ausdruck weglassen, müssen Sie sicherstellen, dass Sie die Schleife im Körper unterbrechen, um keine Endlosschleife zu erstellen.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

Sie können auch alle drei Ausdrücke weglassen. Stellen Sie wiederum sicher, dass Sie eine {{jsxref("Statements/break", "break")}}-Anweisung verwenden, um die Schleife zu beenden und eine Variable zu ändern (erhöhen), sodass die Bedingung für die break-Anweisung irgendwann wahr wird.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

Wenn Sie jedoch nicht alle drei Ausdrücke vollständig verwenden — insbesondere, wenn Sie keine Variablen mit dem ersten Ausdruck deklarieren, sondern etwas im oberen Gültigkeitsbereich ändern — sollten Sie stattdessen eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife verwenden, die die Absicht klarer macht.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikalische Deklarationen im Initialisierungsblock

Eine Variable im Initialisierungsblock zu deklarieren, weist wichtige Unterschiede zu einer Deklaration im oberen {{Glossary("Scope", "Gültigkeitsbereich")}} auf, insbesondere wenn innerhalb des Schleifenkörpers eine [Closure](/de/docs/Web/JavaScript/Guide/Closures) erstellt wird. Zum Beispiel für den folgenden Code:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es protokolliert `0`, `1` und `2`, wie erwartet. Wenn die Variable jedoch im oberen Gültigkeitsbereich definiert ist:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es protokolliert `3`, `3` und `3`. Der Grund ist, dass jede `setTimeout`-Funktion eine neue Closure erstellt, die über die `i`-Variable geschlossen wird, aber wenn `i` nicht auf den Schleifenkörper beschränkt ist, verweisen alle Closures auf die gleiche Variable, wenn sie schließlich aufgerufen werden — und aufgrund der asynchronen Natur von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) geschieht dies, nachdem die Schleife bereits beendet ist, was dazu führt, dass der Wert von `i` in den Körpern aller in die Warteschlange gestellten Rückrufe den Wert `3` hat.

Dies passiert auch, wenn Sie eine `var`-Anweisung als Initialisierung verwenden, weil Variablen, die mit `var` deklariert wurden, nur funktionsgebunden, aber nicht lexikalisch gebunden sind (d.h. sie können nicht auf den Schleifenkörper beschränkt werden).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

Die Wirkung der Bereichseinschränkung des Initialisierungsblocks kann so verstanden werden, als ob die Deklaration innerhalb des Schleifenkörpers passiert, aber zufällig innerhalb der `condition`- und `afterthought`-Teile zugänglich ist. Genauer gesagt sind `let`-Deklarationen bei `for`-Schleifen besonders behandelt — wenn `initialization` eine `let`-Deklaration ist, dann passiert folgendes jedes Mal, nachdem der Schleifenkörper ausgewertet wurde:

1. Ein neuer lexikalischer Gültigkeitsbereich wird mit neuen `let`-deklarierte Variablen erstellt.
2. Die Bindungswerte aus der letzten Iteration werden verwendet, um die neuen Variablen neu zu initialisieren.
3. `afterthought` wird im neuen Bereich ausgewertet.

Das erneute Zuweisen der neuen Variablen innerhalb von `afterthought` beeinflusst also nicht die Bindungen aus der vorherigen Iteration.

Ein neuer lexikalischer Bereich wird auch nach `initialization` erstellt, unmittelbar bevor `condition` zum ersten Mal ausgewertet wird. Diese Details können durch die Erstellung von Closures beobachtet werden, die es Ihnen ermöglichen, eine Bindung zu einem bestimmten Zeitpunkt zu erfassen. Zum Beispiel in diesem Code wird eine innerhalb des `initialization`-Abschnitts erstellte Closure nicht durch Neuzuordnungen von `i` im `afterthought`-Abschnitt aktualisiert:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

Das protokolliert nicht "0, 1, 2", wie es der Fall wäre, wenn `getI` im Schleifenkörper deklariert wäre. Dies liegt daran, dass `getI` nicht bei jeder Iteration neu ausgewertet wird — vielmehr wird die Funktion einmal erstellt und schließt über die `i`-Variable, die die bei der erstmaligen Initialisierung der Schleife deklarierte Variable referenziert. Nachfolgende Updates des Wertes von `i` erstellen tatsächlich neue Variablen namens `i`, die `getI` nicht sieht. Eine Möglichkeit, dies zu beheben, besteht darin, `getI` jedes Mal neu zu berechnen, wenn `i` aktualisiert wird:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

Die `i`-Variable innerhalb der `initialization` ist von der `i`-Variable innerhalb jeder Iteration, einschließlich der ersten, unterschiedlich. In diesem Beispiel gibt `getI` 0 zurück, obwohl der Wert von `i` innerhalb der Iteration vorher inkrementiert wird:

```js
for (let i = 0, getI = () => i; i < 3;) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

Tatsächlich können Sie diese anfängliche Bindung der `i`-Variable erfassen und später neu zuweisen, und dieser aktualisierte Wert wird für den Schleifenkörper nicht sichtbar sein, der die nächste neue Bindung von `i` sieht.

```js
for (
  let i = 0, getI = () => i, incrementI = () => i++;
  getI() < 3;
  incrementI()
) {
  console.log(i);
}
// Logs 0, 0, 0
```

Das protokolliert "0, 0, 0", weil die `i`-Variable in jeder Schleifenauswertung tatsächlich eine separate Variable ist, aber `getI` und `incrementI` lesen und schreiben beide die _initiale_ Bindung von `i`, nicht das, was anschließend deklariert wurde.

### Verwendung von for ohne Körper

Der folgende `for`-Zyklus berechnet die Offset-Position eines Knotens im `afterthought`-Abschnitt, und daher ist es nicht erforderlich, den `statement`-Abschnitt zu verwenden. Ein Semikolon wird stattdessen verwendet.

```js
function showOffsetPos(id) {
  let left = 0;
  let top = 0;
  for (
    let itNode = document.getElementById(id); // initialization
    itNode; // condition
    left += itNode.offsetLeft,
      top += itNode.offsetTop,
      itNode = itNode.offsetParent // afterthought
  ); // semicolon

  console.log(
    `Offset position of "${id}" element:
left: ${left}px;
top: ${top}px;`,
  );
}

showOffsetPos("content");

// Logs:
// Offset position of "content" element:
// left: 0px;
// top: 153px;
```

Beachten Sie, dass das Semikolon nach der `for`-Anweisung obligatorisch ist, da es als [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) fungiert. Andernfalls übernimmt die `for`-Anweisung die folgende `console.log`-Zeile als ihren `statement`-Abschnitt, was dazu führt, dass das `log` mehrmals ausgeführt wird.

### Verwendung von for mit zwei iterierenden Variablen

Sie können zwei Zähler erstellen, die mit einem [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) innerhalb einer for-Schleife gleichzeitig aktualisiert werden. Mehrere `let`- und `var`-Deklarationen können auch mit Kommas verbunden werden.

```js
const arr = [1, 2, 3, 4, 5, 6];
for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
  console.log(arr[l], arr[r]);
}
// 1 6
// 2 5
// 3 4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty)
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
