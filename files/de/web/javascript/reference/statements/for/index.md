---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`for`**-Anweisung erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer Anweisung (normalerweise eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt wird.

{{InteractiveExample("JavaScript Demo: for statement")}}

```js interactive-example
let str = "";

for (let i = 0; i < 9; i++) {
  str = str + i;
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

  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder Variablendeklaration, die einmalig ausgewertet wird, bevor die Schleife beginnt. Wird typischerweise verwendet, um eine Zählvariable zu initialisieren. Dieser Ausdruck kann optional neue Variablen mit den Schlüsseln `var` oder `let` deklarieren. Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Gültigkeitsbereich wie die `for`-Schleife. Mit `let` deklarierte Variablen sind lokal zur Anweisung.

    Das Ergebnis dieses Ausdrucks wird verworfen.

- `condition` {{optional_inline}}

  - : Ein Ausdruck, der vor jeder Schleifeniteration ausgewertet wird. Wenn dieser Ausdruck {{Glossary("Truthy", "zu true ausgewertet wird")}}, wird `statement` ausgeführt. Wenn der Ausdruck {{Glossary("Falsy", "zu false ausgewertet wird")}}, wird die Ausführung der Schleife beendet und es wird zur ersten Anweisung nach dem `for`-Konstrukt gewechselt.

    Diese Bedingungsprüfung ist optional. Wenn sie weggelassen wird, wird die Bedingung immer zu true ausgewertet.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jeder Schleifeniteration ausgewertet wird. Dies geschieht vor der nächsten Auswertung der `condition`. Wird in der Regel verwendet, um die Zählvariable zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung zu true ausgewertet wird. Sie können eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um innerhalb der Schleife keine Anweisung auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie andere Schleifenanweisungen können Sie [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und wechselt zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und wertet anschließend `afterthought` und dann `condition` neu aus.

## Beispiele

### Verwendung von for

Die folgende `for`-Anweisung beginnt mit der Deklaration der Variablen `i` und deren Initialisierung auf `0`. Sie überprüft, ob `i` kleiner als neun ist, führt die zwei nachfolgenden Anweisungen aus und inkrementiert `i` nach jedem Durchlauf der Schleife um 1.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Syntax des Initialisierungsblocks

Der Initialisierungsblock akzeptiert sowohl Ausdrücke als auch Variablendeklarationen. Ausdrücke können den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator jedoch nicht unklammert verwenden, da dies mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife mehrdeutig ist.

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

Wie der `initialization`-Block ist auch der `condition`-Teil optional. Wenn Sie diesen Ausdruck weglassen, müssen Sie sicherstellen, dass die Schleife im Körper beendet wird, um keine Endlosschleife zu erzeugen.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

Sie können auch alle drei Ausdrücke weglassen. Auch hier sollten Sie sicherstellen, dass Sie eine {{jsxref("Statements/break", "break")}}-Anweisung verwenden, um die Schleife zu beenden und auch eine Variable (erhöhen) zu ändern, damit die Bedingung für die break-Anweisung zu einem bestimmten Zeitpunkt wahr wird.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

Allerdings sollten Sie, wenn Sie nicht alle drei Ausdruckspositionen vollständig nutzen – insbesondere, wenn Sie keine Variablen mit dem ersten Ausdruck deklarieren, sondern etwas im oberen Gültigkeitsbereich ändern – in Betracht ziehen, stattdessen eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife zu verwenden, die die Absicht klarer macht.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikalische Deklarationen im Initialisierungsblock

Die Deklaration einer Variablen innerhalb des Initialisierungsblocks unterscheidet sich erheblich von deren Deklaration im oberen {{Glossary("Scope", "Gültigkeitsbereich")}}, insbesondere wenn eine [Schließung](/de/docs/Web/JavaScript/Guide/Closures) innerhalb des Schleifenkörpers erstellt wird. Zum Beispiel für den unten stehenden Code:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es protokolliert `0`, `1` und `2` wie erwartet. Wenn die Variable jedoch im oberen Gültigkeitsbereich definiert ist:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es protokolliert `3`, `3` und `3`. Der Grund dafür ist, dass jeder `setTimeout` eine neue Schließung erstellt, die die Variable `i` umschließt. Wenn `i` jedoch nicht auf den Schleifenkörper beschränkt ist, beziehen sich alle Schließungen auf dieselbe Variable, wenn sie schließlich aufgerufen werden – und aufgrund der asynchronen Natur von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) wird dies passieren, nachdem die Schleife bereits beendet wurde, wodurch der Wert von `i` in allen verketteten Rückrufkörpern den Wert von `3` hat.

Dies geschieht auch, wenn Sie eine `var`-Anweisung als Initialisierung verwenden, da mit `var` deklarierte Variablen nur funktions-gebunden, aber nicht lexikalisch gebunden sind (d.h. sie können nicht auf den Schleifenkörper beschränkt werden).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

Der Gültigkeitsbereichseffekt des Initialisierungsblocks kann verstanden werden, als ob die Deklaration innerhalb des Schleifenkörpers erfolgt, jedoch zufällig innerhalb der `condition`- und `afterthought`-Teile zugänglich ist. Genauer gesagt werden `let`-Deklarationen von `for`-Schleifen speziell behandelt – wenn `initialization` eine `let`-Deklaration ist, dann passiert nach der Auswertung des Schleifenkörpers folgendes:

1. Ein neuer lexikalischer Gültigkeitsbereich wird mit neu `let`-deklarierten Variablen erstellt.
2. Die Bindungswerte aus der letzten Iteration werden verwendet, um die neuen Variablen neu zu initialisieren.
3. `afterthought` wird im neuen Gültigkeitsbereich ausgewertet.

Das erneute Zuweisen der neuen Variablen innerhalb von `afterthought` hat also keine Auswirkungen auf die Bindungen aus der vorherigen Iteration.

Ein neuer lexikalischer Gültigkeitsbereich wird auch nach `initialization` erstellt, direkt bevor `condition` zum ersten Mal ausgewertet wird. Diese Details können durch das Erstellen von Schließungen beobachtet werden, die es ermöglichen, eine Bindung zu einem bestimmten Zeitpunkt zu erfassen. Beispielsweise wird in diesem Code eine Schließung, die im `initialization`-Abschnitt erstellt wird, nicht durch Umzuweisungen von `i` in `afterthought` aktualisiert:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

Dies protokolliert nicht "0, 1, 2", wie es passieren würde, wenn `getI` im Schleifenkörper deklariert wäre. Das liegt daran, dass `getI` nicht bei jeder Iteration neu ausgewertet wird – stattdessen wird die Funktion einmal erstellt und schließt die Variable `i` ein, die sich auf die Variable bezieht, die beim ersten Initialisieren der Schleife deklariert wurde. Nachfolgende Aktualisierungen des Werts von `i` erstellen tatsächlich neue Variablen namens `i`, die `getI` nicht sieht. Eine Möglichkeit, dies zu beheben, besteht darin, `getI` jedes Mal neu zu berechnen, wenn `i` aktualisiert wird:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

Die `i`-Variable innerhalb der `initialization` ist von der `i`-Variable innerhalb jeder Iteration, einschließlich der ersten, verschieden. In diesem Beispiel gibt `getI` daher 0 zurück, auch wenn der Wert von `i` innerhalb der Iteration zuvor erhöht wird:

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

Tatsächlich können Sie diese anfängliche Bindung der `i`-Variable erfassen und später neu zuweisen, und dieser aktualisierte Wert wird dem Schleifenkörper nicht sichtbar, der die nächste neue Bindung von `i` sieht.

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

Dies protokolliert "0, 0, 0", da die `i`-Variable in jeder Schleifenauswertung tatsächlich eine separate Variable ist, aber `getI` und `incrementI` sowohl die _anfängliche_ Bindung von `i` lesen und schreiben, nicht das, was später deklariert wurde.

### Verwendung von for ohne Körper

Der folgende `for`-Zyklus berechnet die Offset-Position eines Knotens im `afterthought`-Abschnitt und benötigt daher nicht die Verwendung eines `statement`-Abschnitts, stattdessen wird ein Semikolon verwendet.

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

Beachten Sie, dass das Semikolon nach der `for`-Anweisung obligatorisch ist, da es als [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) steht. Andernfalls würde die `for`-Anweisung die folgende `console.log`-Zeile als ihren `statement`-Abschnitt übernehmen, was dazu führt, dass das `log` mehrfach ausgeführt wird.

### Verwendung von for mit zwei iterierenden Variablen

Sie können zwei Zähler erstellen, die in einer for-Schleife mit dem [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) gleichzeitig aktualisiert werden. Mehrere `let`- und `var`-Deklarationen können ebenfalls mit Kommas verbunden werden.

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
