---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{jsSidebar("Statements")}}

Die **`for`**-Anweisung erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer Anweisung (üblicherweise eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt wird.

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

  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder Variablendeklaration, die einmal vor Beginn der Schleife ausgewertet wird. Wird typischerweise verwendet, um eine Zählvariable zu initialisieren. Dieser Ausdruck kann optional neue Variablen mit den Schlüsselwörtern `var` oder `let` deklarieren. Variablen, die mit `var` deklariert werden, sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Gültigkeitsbereich wie die `for`-Schleife. Variablen, die mit `let` deklariert werden, sind lokal zur Anweisung.

    Das Ergebnis dieses Ausdrucks wird verworfen.

- `condition` {{optional_inline}}

  - : Ein Ausdruck, der vor jeder Schleifeniteration ausgewertet wird. Wenn dieser Ausdruck {{Glossary("Truthy", "zu true ausgewertet wird")}}, wird `statement` ausgeführt. Wenn der Ausdruck {{Glossary("Falsy", "zu false ausgewertet wird")}}, wird die Ausführung der Schleife beendet und zur ersten Anweisung nach dem `for`-Konstrukt gewechselt.

    Dieser Bedingungstest ist optional. Wenn er weggelassen wird, wird die Bedingung immer zu true ausgewertet.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jeder Schleifeniteration ausgewertet wird. Dies geschieht vor der nächsten Auswertung der `condition`. Wird im Allgemeinen verwendet, um die Zählvariable zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Eine Anweisung, die so lange ausgeführt wird, wie die Bedingung zu true ausgewertet wird. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um keine Anweisung innerhalb der Schleife auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und bewertet dann `afterthought` erneut und anschließend `condition`.

## Beispiele

### Verwendung von for

Die folgende `for`-Anweisung beginnt mit der Deklaration der Variablen `i` und ihrer Initialisierung auf `0`. Sie überprüft, ob `i` kleiner als neun ist, führt die beiden folgenden Anweisungen aus und inkrementiert `i` nach jedem Durchlauf durch die Schleife um 1.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Syntax des Initialisierungsblocks

Der Initialisierungsblock akzeptiert sowohl Ausdrücke als auch Variablendeklarationen. Ausdrücke können den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator jedoch nicht ohne Klammern verwenden, da das mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife mehrdeutig ist.

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

Alle drei Ausdrücke im Kopf der `for`-Schleife sind optional. Zum Beispiel ist es nicht erforderlich, den `initialization`-Block zu verwenden, um Variablen zu initialisieren:

```js
let i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}
```

Wie der `initialization`-Block ist auch der `condition`-Teil optional. Wenn Sie diesen Ausdruck weglassen, müssen Sie sicherstellen, dass Sie die Schleife im Body beenden, um keine Endlosschleife zu erzeugen.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

Sie können auch alle drei Ausdrücke weglassen. Stellen Sie wiederum sicher, dass Sie eine {{jsxref("Statements/break", "break")}}-Anweisung verwenden, um die Schleife zu beenden, und auch eine Variable ändern (erhöhen), sodass die Bedingung für die break-Anweisung irgendwann wahr ist.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

In Fällen, in denen Sie nicht alle drei Ausdruckspositionen vollständig nutzen — insbesondere wenn Sie keine Variablen mit dem ersten Ausdruck deklarieren, sondern etwas im oberen Gültigkeitsbereich ändern — sollten Sie stattdessen eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife verwenden, die die Absicht klarer macht.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikalische Deklarationen im Initialisierungsblock

Das Deklarieren einer Variablen innerhalb des Initialisierungsblocks unterscheidet sich erheblich von der Deklaration im oberen {{Glossary("Scope", "Gültigkeitsbereich")}}, insbesondere wenn innerhalb des Schleifenbody ein [Closure](/de/docs/Web/JavaScript/Guide/Closures) erstellt wird. Zum Beispiel, bei dem folgenden Code:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Protokolliert es `0`, `1` und `2`, wie erwartet. Wenn jedoch die Variable im oberen Gültigkeitsbereich definiert ist:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Protokolliert es `3`, `3` und `3`. Der Grund dafür ist, dass jede `setTimeout` ein neues Closure erstellt, das die `i`-Variable einschließt. Aber wenn `i` nicht im Schleifenbody gescoped ist, werden alle Closures auf dieselbe Variable verweisen, wenn sie schließlich aufgerufen werden — und aufgrund der asynchronen Natur von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) passiert dies, nachdem die Schleife bereits beendet wurde, was dazu führt, dass der Wert von `i` in allen in der Warteschlange stehenden Rückrufkörpern den Wert `3` hat.

Dies passiert auch, wenn Sie eine `var`-Anweisung als Initialisierung verwenden, da Variablen, die mit `var` deklariert werden, nur funktionsgescoped sind, aber nicht lexikalisch gescoped (d.h. sie können nicht zum Schleifenbody gescopet werden).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

Die Scoping-Wirkung des Initialisierungsblocks kann verstanden werden, als ob die Deklaration innerhalb des Schleifenbodys erfolgt, jedoch zufällig innerhalb der `condition`- und `afterthought`-Teile zugänglich ist. Genauer gesagt, `let`-Deklarationen werden von `for`-Schleifen speziell behandelt — wenn `initialization` eine `let`-Deklaration ist, dann geschieht nach jeder Auswertung des Schleifenbodys Folgendes:

1. Ein neuer lexikalischer Gültigkeitsbereich wird mit neu `let`-deklarierten Variablen erstellt.
2. Die Bindungswerte der letzten Iteration werden verwendet, um die neuen Variablen neu zu initialisieren.
3. `afterthought` wird im neuen Gültigkeitsbereich ausgewertet.

Ein neuer lexikalischer Gültigkeitsbereich wird auch nach `initialization` erstellt, direkt bevor `condition` zum ersten Mal ausgewertet wird. Diese Details können durch das Erstellen von Closures beobachtet werden, die es ermöglichen, eine Bindung zu einem bestimmten Zeitpunkt zu erfassen. Zum Beispiel erfasst ein Closure, das innerhalb des `initialization`-Abschnitts erstellt wurde, keine Aktualisierungen von `i` im `afterthought`:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

Dies protokolliert nicht "0, 1, 2", wie es der Fall wäre, wenn `getI` im Schleifenbody deklariert ist. Dies liegt daran, dass `getI` nicht bei jeder Iteration neu ausgewertet wird — stattdessen wird die Funktion einmal erstellt und schließt die `i`-Variable ein, die sich auf die Variable bezieht, die bei der ersten Initialisierung der Schleife deklariert wurde. Nachfolgende Aktualisierungen des `i`-Wertes erzeugen tatsächlich neue Variablen namens `i`, die `getI` nicht sieht. Eine Möglichkeit, dies zu beheben, ist das Neuberechnen von `getI` jedes Mal, wenn `i` aktualisiert wird:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

Die `i`-Variable innerhalb der `initialization` ist von der `i`-Variable innerhalb jeder Iteration unterschiedlich, einschließlich der ersten. In diesem Beispiel gibt `getI` 0 zurück, auch wenn der Wert von `i` innerhalb der Iteration zuvor erhöht wurde:

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

Tatsächlich können Sie diese anfängliche Bindung der `i`-Variable erfassen und später neu zuweisen, und dieser aktualisierte Wert wird nicht im Schleifenbody sichtbar, der die nächste neue Bindung von `i` sieht.

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

Dies protokolliert "0, 0, 0", weil die `i`-Variable in jeder Schleifenbewertung tatsächlich eine separate Variable ist, aber `getI` und `incrementI` lesen und schreiben beide die _anfängliche_ Bindung von `i`, nicht das, was anschließend deklariert wurde.

### Verwendung von for ohne Body

Der folgende `for`-Zyklus berechnet die Offset-Position eines Knotens im `afterthought`-Abschnitt und erfordert daher nicht die Verwendung eines `statement`-Abschnitts, stattdessen wird ein Semikolon verwendet.

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

Beachten Sie, dass das Semikolon nach der `for`-Anweisung obligatorisch ist, da es als [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) steht. Andernfalls übernimmt die `for`-Anweisung die folgende `console.log`-Zeile als ihren `statement`-Abschnitt, was dazu führt, dass das `log` mehrmals ausgeführt wird.

### Verwendung von for mit zwei iterierenden Variablen

Sie können zwei Zähler erstellen, die in einer for-Schleife mit dem [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) gleichzeitig aktualisiert werden. Mehrere `let`- und `var`-Deklarationen können auch mit Kommas verbunden werden.

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
