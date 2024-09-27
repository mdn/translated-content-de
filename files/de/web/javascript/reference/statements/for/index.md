---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: becca01d713f7f3c37f40ede7ee7c282312dfa4f
---

{{jsSidebar("Statements")}}

Die **`for`**-Anweisung erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer Anweisung (üblicherweise eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt wird.

{{EmbedInteractiveExample("pages/js/statement-for.html")}}

## Syntax

```js-nolint
for (initialization; condition; afterthought)
  statement
```

- `initialization` {{optional_inline}}

  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder Variablendeklaration, die einmalig vor dem Beginn der Schleife ausgewertet wird. Wird typischerweise verwendet, um eine Zählvariable zu initialisieren. Dieser Ausdruck kann optional neue Variablen mit den `var`- oder `let`-Schlüsselwörtern deklarieren. Variablen, die mit `var` deklariert wurden, sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Bereich, in dem sich die `for`-Schleife befindet. Variablen, die mit `let` deklariert wurden, sind lokal zur Anweisung.

    Das Ergebnis dieses Ausdrucks wird ignoriert.

- `condition` {{optional_inline}}

  - : Ein Ausdruck, der vor jeder Schleifeniteration ausgewertet wird. Wenn dieser Ausdruck [zu true ausgewertet wird](/de/docs/Glossary/Truthy), wird `statement` ausgeführt. Wenn der Ausdruck [zu false ausgewertet wird](/de/docs/Glossary/Falsy), wird die Ausführung der Schleife beendet und zur ersten Anweisung nach dem `for`-Konstrukt gesprungen.

    Dieser Bedingungstest ist optional. Wenn weggelassen, wird die Bedingung immer als wahr ausgewertet.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jeder Schleifeniteration ausgewertet wird. Dies geschieht vor der nächsten Auswertung von `condition`. Wird generell verwendet, um die Zählvariable zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung als wahr ausgewertet wird. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um keine Anweisung innerhalb der Schleife auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie bei anderen Schleifenanweisungen können Sie [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und bewertet dann `afterthought`, gefolgt von `condition` erneut.

## Beispiele

### Verwendung von for

Die folgende `for`-Schleife beginnt mit der Deklaration der Variablen `i` und initialisiert sie mit `0`. Sie überprüft, dass `i` kleiner als neun ist, führt die beiden folgenden Anweisungen aus und erhöht `i` nach jedem Durchlauf um 1.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Syntax des Initialisierungsblocks

Der Initialisierungsblock akzeptiert sowohl Ausdrücke als auch Variablendeklarationen. Ausdrücke können jedoch nicht den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator unverändert verwenden, da dies mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife mehrdeutig ist.

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

Alle drei Ausdrücke im Kopf der `for`-Schleife sind optional. Es ist zum Beispiel nicht erforderlich, den `initialization`-Block zu verwenden, um Variablen zu initialisieren:

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

Sie können auch alle drei Ausdrücke weglassen. Stellen Sie erneut sicher, dass Sie eine {{jsxref("Statements/break", "break")}}-Anweisung verwenden, um die Schleife zu beenden und auch eine Variable zu modifizieren (zu erhöhen), sodass die Bedingung für die break-Anweisung irgendwann wahr ist.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

Wenn Sie jedoch nicht alle drei Ausdruckspositionen vollständig nutzen — insbesondere, wenn Sie keine Variablen mit dem ersten Ausdruck deklarieren, sondern etwas im übergeordneten Bereich mutieren — ziehen Sie in Betracht, stattdessen eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife zu verwenden, die die Absicht klarer macht.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikale Deklarationen im Initialisierungsblock

Das Deklarieren einer Variablen im Initialisierungsblock hat wichtige Unterschiede zum Deklarieren im übergeordneten [Bereich](/de/docs/Glossary/Scope), insbesondere beim Erstellen einer [Closure](/de/docs/Web/JavaScript/Closures) im Schleifenkörper. Zum Beispiel, für den folgenden Code:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es werden `0`, `1` und `2` protokolliert, wie erwartet. Wenn die Variable jedoch im übergeordneten Bereich definiert wird:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es werden `3`, `3` und `3` protokolliert. Der Grund ist, dass jede `setTimeout` ein neues Closure erstellt, das über die `i`-Variable geschlossen wird. Ist `i` jedoch nicht auf den Schleifenkörper beschränkt, verweisen alle Closures auf dieselbe Variable, wenn sie letztendlich aufgerufen werden — und aufgrund der asynchronen Natur von [`setTimeout`](/de/docs/Web/API/setTimeout) geschieht dies, nachdem die Schleife bereits beendet ist. Dies führt dazu, dass der Wert von `i` in allen gequeueten Callback-Körpern den Wert `3` hat.

Dies passiert auch, wenn Sie eine `var`-Anweisung als Initialisierung verwenden, weil Variablen, die mit `var` deklariert wurden, nur funktionsscope sind, aber nicht lexikalisch gescoped (d.h. sie können nicht auf den Schleifenkörper beschränkt werden).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

Der Scopingeffect des Initialisierungsblocks kann verstanden werden, als ob die Deklaration innerhalb des Schleifenkörpers stattfindet, aber zufällig im `condition`- und `afterthought`-Teil zugänglich ist. Genauer gesagt sind `let`-Deklarationen spezielle Fälle in `for`-Schleifen — wenn `initialization` eine `let`-Deklaration ist, dann geschieht nach der Auswertung des Schleifenkörpers das Folgende:

1. Ein neuer lexikalischer Bereich wird erstellt mit neu `let`-deklarierten Variablen.
2. Die Bindungswerte aus der letzten Iteration werden verwendet, um die neuen Variablen neu zu initialisieren.
3. `afterthought` wird im neuen Bereich ausgewertet.

Das Neuzuordnen der neuen Variablen innerhalb von `afterthought` beeinträchtigt nicht die Bindungen der vorherigen Iteration.

Ein neuer lexikalischer Bereich wird auch nach `initialization` erstellt, direkt bevor `condition` zum ersten Mal ausgewertet wird. Diese Details können beobachtet werden, indem Closures erstellt werden, die es ermöglichen, eine Bindung zu einem bestimmten Punkt zu erhalten. Zum Beispiel wird in diesem Code ein Closure, das im `initialization`-Abschnitt erstellt wird, nicht durch Zuweisungen von `i` im `afterthought` aktualisiert:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

Dies protokolliert nicht „0, 1, 2“, wie es passieren würde, wenn `getI` im Schleifenkörper deklariert wird. Dies liegt daran, dass `getI` bei jeder Iteration nicht neu ausgewertet wird — vielmehr wird die Funktion einmal erstellt und schließt die `i`-Variable ein, die auf die bei der ersten Initialisierung der Schleife deklarierte Variable verweist. Nachfolgende Updates des Werts von `i` erstellen tatsächlich neue Variablen namens `i`, die `getI` nicht sieht. Eine Möglichkeit, dies zu beheben, besteht darin, `getI` jedes Mal neu zu berechnen, wenn `i` aktualisiert wird:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

Die `i`-Variable innerhalb der `initialization` ist von der `i`-Variable innerhalb jeder Iteration, einschließlich der ersten, unterscheidbar. In diesem Beispiel liefert `getI` also 0, obwohl der Wert von `i` innerhalb der Iteration vorher inkrementiert wird:

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

Tatsächlich können Sie diese anfängliche Bindung der `i`-Variable erfassen und später neu zuordnen, und dieser aktualisierte Wert wird für den Schleifenkörper nicht sichtbar sein, der die nächste neue Bindung von `i` sieht.

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

Dies protokolliert "0, 0, 0", weil die `i`-Variable in jeder Schleifenauswertung tatsächlich eine separate Variable ist, aber `getI` und `incrementI` beide die _anfängliche_ Bindung von `i` lesen und schreiben, nicht das, was anschließend deklariert wurde.

### Verwendung von for ohne Körper

Der folgende `for`-Zyklus berechnet die Offset-Position eines Knotens im `afterthought`-Abschnitt und benötigt daher keine Verwendung eines `statement`-Abschnitts, ein Semikolon wird stattdessen verwendet.

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

Beachten Sie, dass das Semikolon nach der `for`-Anweisung zwingend erforderlich ist, da es als [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) steht. Andernfalls übernimmt die `for`-Anweisung die folgende `console.log`-Zeile als ihren `statement`-Abschnitt, wodurch das Log mehrere Male ausgeführt wird.

### Verwendung von for mit zwei iterativen Variablen

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
