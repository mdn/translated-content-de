---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: becca01d713f7f3c37f40ede7ee7c282312dfa4f
---

{{jsSidebar("Statements")}}

Die **`for`**-Anweisung erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer Anweisung (normalerweise ein [Blocksatz](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt wird.

{{EmbedInteractiveExample("pages/js/statement-for.html")}}

## Syntax

```js-nolint
for (initialization; condition; afterthought)
  statement
```

- `initialization` {{optional_inline}}

  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder eine Variablendeklaration, die einmal vor Beginn der Schleife ausgewertet wird. Typischerweise verwendet, um eine Zählervariable zu initialisieren. Dieser Ausdruck kann optional neue Variablen mit den Schlüsselwörtern `var` oder `let` deklarieren. Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Gültigkeitsbereich, wie die `for`-Schleife. Mit `let` deklarierte Variablen sind lokal zur Anweisung.

    Das Ergebnis dieses Ausdrucks wird verworfen.

- `condition` {{optional_inline}}

  - : Ein Ausdruck, der vor jedem Schleifendurchlauf ausgewertet wird. Wenn dieser Ausdruck [als wahr ausgewertet](/de/docs/Glossary/Truthy) wird, wird `statement` ausgeführt. Wenn der Ausdruck [als falsch ausgewertet](/de/docs/Glossary/Falsy) wird, verlässt die Ausführung die Schleife und geht zur ersten Anweisung nach dem `for`-Konstrukt.

    Dieser konditionale Test ist optional. Wenn er weggelassen wird, wird die Bedingung immer als wahr ausgewertet.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jedes Schleifendurchlaufs ausgewertet wird. Dies geschieht vor der nächsten Auswertung der `condition`. Wird im Allgemeinen verwendet, um die Zählervariable zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Eine Anweisung, die so lange ausgeführt wird, wie die Bedingung als wahr ausgewertet wird. Sie können einen [Blocksatz](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um keine Anweisung innerhalb der Schleife auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie andere Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und bewertet `afterthought` dann `condition` neu.

## Beispiele

### Verwendung von for

Die folgende `for`-Anweisung beginnt mit der Deklaration der Variablen `i` und ihrer Initialisierung auf `0`. Sie überprüft, ob `i` kleiner als neun ist, führt die beiden nachfolgenden Anweisungen aus und erhöht `i` nach jedem Durchlauf der Schleife um 1.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Initialisierungsblock-Syntax

Der Initialisierungsblock akzeptiert sowohl Ausdrücke als auch Variablendeklarationen. Ausdrücke können den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator jedoch nicht unparenthesized verwenden, da dies mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife mehrdeutig ist.

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

Ähnlich wie beim `initialization`-Block ist auch der `condition`-Teil optional. Wenn Sie diesen Ausdruck weglassen, müssen Sie sicherstellen, dass Sie die Schleife im Körper unterbrechen, um keine Endlosschleife zu erstellen.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

Sie können auch alle drei Ausdrücke weglassen. Auch hier müssen Sie sicherstellen, dass Sie eine {{jsxref("Statements/break", "break")}}-Anweisung verwenden, um die Schleife zu beenden, und auch eine Variable ändern (erhöhen), sodass die Bedingung für die break-Anweisung irgendwann wahr wird.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

Wenn Sie jedoch nicht alle drei Ausdruckspositionen vollständig nutzen — insbesondere wenn Sie mit dem ersten Ausdruck keine Variablen deklarieren, sondern etwas im übergeordneten Gültigkeitsbereich ändern — ziehen Sie in Betracht, stattdessen eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife zu verwenden, die die Absicht deutlicher macht.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikalische Deklarationen im Initialisierungsblock

Das Deklarieren einer Variablen im Initialisierungsblock hat wichtige Unterschiede zum Deklarieren im übergeordneten [Gültigkeitsbereich](/de/docs/Glossary/Scope), insbesondere wenn innerhalb des Schleifenkörpers eine [Schließung](/de/docs/Web/JavaScript/Closures) erstellt wird. Beispielhaft sei dieser Code:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es wird `0`, `1` und `2` geloggt, wie erwartet. Wenn die Variable jedoch im übergeordneten Gültigkeitsbereich definiert ist:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es wird `3`, `3` und `3` geloggt. Der Grund ist, dass jede `setTimeout` ein neues Closure erstellt, das über die `i`-Variable schließt, aber wenn die `i`-Variable nicht auf den Schleifenkörper beschränkt ist, werden alle Closures auf die gleiche Variable referenzieren, wenn sie letztendlich aufgerufen werden — und aufgrund der asynchronen Natur von [`setTimeout`](/de/docs/Web/API/setTimeout) geschieht dies, nachdem die Schleife bereits beendet wurde, was verursacht, dass der Wert von `i` in allen gequeuedten Rückrufen den Wert `3` annimmt.

Dies passiert auch, wenn Sie eine `var`-Anweisung als Initialisierung verwenden, da mit `var` deklarierte Variablen nur funktionsübergreifend, aber nicht lexikalisch begrenzt sind (d.h. sie können nicht auf den Schleifenkörper beschränkt werden).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

Der Scoping-Effekt des Initialisierungsblocks kann so verstanden werden, als ob die Deklaration innerhalb des Schleifenkörpers stattfindet, aber zufällig im `condition` und `afterthought` zugänglich ist. Genauer gesagt, `let`-Deklarationen sind sich durch `for`-Schleifen speziell behandelt: wenn `initialisierung` eine `let`-Deklaration ist, dann geschieht jedes Mal nach der Bewertung des Schleifenkörpers Folgendes:

1. Ein neuer lexikalischer Gültigkeitsbereich wird mit neuen `let`-deklarierten Variablen erstellt.
2. Die Bindungswerte der letzten Iteration werden verwendet, um die neuen Variablen neu zu initialisieren.
3. `afterthought` wird im neuen Gültigkeitsbereich ausgewertet.

Das erneute Zuweisen der neuen Variablen innerhalb von `afterthought` beeinflusst also nicht die Bindungen der vorherigen Iteration.

Ein neuer lexikalischer Gültigkeitsbereich wird auch nach der `initialisierung` erstellt, direkt bevor `bedingung` zum ersten Mal ausgewertet wird. Diese Details können durch das Erstellen von Closures beobachtet werden, die es ermöglichen, eine Bindung zu einem bestimmten Zeitpunkt zu erfassen. Beispiel für diesen Code: ein Closure, das im `initialisierungs`-Abschnitt erstellt wird, wird nicht durch Neuzuweisungen von `i` im `afterthought` aktualisiert:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

Dies loggt nicht "0, 1, 2", wie es passieren würde, wenn `getI` im Schleifenkörper deklariert wird. Das liegt daran, dass `getI` nicht bei jeder Iteration neu ausgewertet wird — stattdessen wird die Funktion einmal erstellt und schließt über die `i`-Variable, welche auf die Variable verweist, die beim ersten Initialisieren der Schleife deklariert wurde. Nachfolgende Aktualisierungen des Werts von `i` erstellen tatsächlich neue Variablen namens `i`, die `getI` nicht sieht. Eine Möglichkeit, dies zu beheben, besteht darin, `getI` jedes Mal neu zu berechnen, wenn `i` aktualisiert wird:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

Die `i`-Variable innerhalb der `initialisierung` ist von der `i`-Variable innerhalb jeder Iteration, einschließlich der ersten, zu unterscheiden. Also, in diesem Beispiel, gibt `getI` 0 zurück, auch wenn der Wert von `i` innerhalb der Iteration vorher inkrementiert wird:

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

In der Tat können Sie dieses ursprüngliche Binding der `i`-Variable erfassen und später neu zuweisen, und dieser aktualisierte Wert wird für den Schleifenkörper nicht sichtbar sein, der das nächste neue Binding von `i` sieht.

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

Dies loggt "0, 0, 0", weil die `i`-Variable in jeder Schleifenauswertung tatsächlich eine separate Variable ist, aber `getI` und `incrementI` lesen und schreiben beide auf das _ursprüngliche_ Binding von `i`, nicht das, was anschließend deklariert wurde.

### Verwendung von for ohne Körper

Der folgende `for`-Zyklus berechnet die Offset-Position eines Knotens im `afterthought`-Abschnitt, und daher ist kein Gebrauch von einem `statement`-Abschnitt erforderlich, stattdessen wird ein Semikolon verwendet.

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

Beachten Sie, dass das Semikolon nach der `for`-Anweisung zwingend ist, da es als [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) steht. Andernfalls übernimmt die `for`-Anweisung die folgende `console.log`-Zeile als ihren `statement`-Abschnitt, was dazu führt, dass das `log` mehrfach ausgeführt wird.

### Verwendung von for mit zwei iterierenden Variablen

Sie können zwei Zähler erstellen, die gleichzeitig in einer for-Schleife mithilfe des [Kommaoperators](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) aktualisiert werden. Mehrere `let`- und `var`-Deklarationen können ebenfalls mit Kommas verbunden werden.

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
