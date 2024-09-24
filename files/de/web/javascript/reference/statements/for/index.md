---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jsSidebar("Statements")}}

Die **`for`**-Anweisung erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern geschlossen und durch Semikolons getrennt sind, gefolgt von einer Anweisung (in der Regel eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt wird.

{{EmbedInteractiveExample("pages/js/statement-for.html")}}

## Syntax

```js-nolint
for (initialization; condition; afterthought)
  statement
```

- `initialization` {{optional_inline}}

  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder Variablendeklaration, die einmal ausgeführt wird, bevor die Schleife beginnt. Üblicherweise wird dies verwendet, um eine Zählervariable zu initialisieren. Dieser Ausdruck kann optional neue Variablen mit den Schlüsselwörtern `var` oder `let` deklarieren. Variablen, die mit `var` deklariert werden, sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Geltungsbereich wie die `for`-Schleife. Variablen, die mit `let` deklariert werden, sind lokal zur Anweisung.

    Das Ergebnis dieses Ausdrucks wird verworfen.

- `condition` {{optional_inline}}

  - : Ein Ausdruck, der vor jeder Schleifeniteration ausgewertet wird. Wenn dieser Ausdruck {{Glossary("Truthy", "als wahr ausgewertet wird")}}, wird `statement` ausgeführt. Wenn der Ausdruck {{Glossary("Falsy", "als falsch ausgewertet wird")}}, wird die Schleife beendet und zur ersten Anweisung nach der `for`-Konstruktion gegangen.

    Dieser bedingte Test ist optional. Wird er weggelassen, wird die Bedingung immer als wahr ausgewertet.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jeder Schleifeniteration ausgewertet wird. Dies geschieht vor der nächsten Auswertung von `condition`. Normalerweise wird dies verwendet, um die Zählervariable zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Eine Anweisung, die solange ausgeführt wird, wie die Bedingung als wahr ausgewertet wird. Sie können eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um innerhalb der Schleife keine Anweisung auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie andere Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und wertet `afterthought` und dann `condition` erneut aus.

## Beispiele

### Verwendung von for

Die folgende `for`-Anweisung beginnt mit der Deklaration der Variablen `i` und ihrer Initialisierung auf `0`. Sie überprüft, ob `i` kleiner als neun ist, führt die zwei folgenden Anweisungen aus und erhöht `i` nach jedem Durchlauf der Schleife um 1.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Syntax des Initialisierungsblocks

Der Initialisierungsblock akzeptiert sowohl Ausdrücke als auch Variablendeklarationen. Ausdrücke können jedoch nicht den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator ohne Klammern verwenden, da dies mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife mehrdeutig ist.

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

Wie der `initialization`-Block ist auch der `condition`-Teil optional. Wenn Sie diesen Ausdruck weglassen, müssen Sie sicherstellen, dass die Schleife im Hauptteil gebrochen wird, um keine Endlosschleife zu erzeugen.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

Sie können auch alle drei Ausdrücke weglassen. Stellen Sie wiederum sicher, dass Sie eine {{jsxref("Statements/break", "break")}}-Anweisung verwenden, um die Schleife zu beenden und auch eine Variable zu modifizieren (erhöhen), sodass die Bedingung für die break-Anweisung zu einem bestimmten Zeitpunkt wahr ist.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

Wenn Sie jedoch nicht alle drei Ausdruckspositionen vollständig nutzen - insbesondere, wenn Sie keine Variablen mit dem ersten Ausdruck deklarieren, sondern etwas im oberen Geltungsbereich verändern -, sollten Sie in Erwägung ziehen, stattdessen eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife zu verwenden, die die Absicht deutlicher macht.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikalische Deklarationen im Initialisierungsblock

Die Deklaration einer Variablen innerhalb des Initialisierungsblocks hat wichtige Unterschiede im Vergleich zur Deklaration im oberen {{Glossary("Scope", "Geltungsbereich")}}, insbesondere beim Erstellen eines [Closure](/de/docs/Web/JavaScript/Closures) innerhalb des Schleifenkörpers. Zum Beispiel für den folgenden Code:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Er protokolliert `0`, `1` und `2`, wie erwartet. Wenn jedoch die Variable im oberen Geltungsbereich definiert ist:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es protokolliert `3`, `3` und `3`. Der Grund dafür ist, dass jedes `setTimeout` ein neues Closure erstellt, das die Variable `i` umfasst. Wenn `i` jedoch nicht auf den Schleifenkörper beschränkt ist, werden alle Closures auf die gleiche Variable verweisen, wenn sie letztendlich aufgerufen werden - und aufgrund der asynchronen Natur von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) wird dies geschehen, nachdem die Schleife bereits beendet ist, was dazu führt, dass der Wert von `i` in allen aufgereihten Rückrufkörpern den Wert `3` hat.

Dies geschieht auch, wenn Sie eine `var`-Anweisung als Initialisierung verwenden, da Variablen, die mit `var` deklariert werden, nur funktionsweise sind, aber nicht lexikalisch (d.h. sie können nicht auf den Schleifenkörper beschränkt sein).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

Der Scope-Effekt des Initialisierungsblocks kann so verstanden werden, als ob die Deklaration innerhalb des Schleifenkörpers erfolgt, aber nur zufällig innerhalb der `condition`- und `afterthought`-Teile zugänglich ist. Genauer gesagt sind `let`-Deklarationen speziell durch `for`-Schleifen gekennzeichnet - wenn `initialization` eine `let`-Deklaration ist, dann passiert jedes Mal, nachdem der Schleifenkörper ausgewertet wurde, Folgendes:

1. Ein neuer lexikalischer Scope wird mit neuen `let`-deklarierten Variablen erstellt.
2. Die Bindungswerte aus der letzten Iteration werden verwendet, um die neuen Variablen neu zu initialisieren.
3. `afterthought` wird im neuen Scope ausgewertet.

Das erneute Zuweisungen der neuen Variablen innerhalb von `afterthought` wirkt sich also nicht auf die Bindungen aus der vorherigen Iteration aus.

Ein neuer lexikalischer Scope wird auch nach `initialization` erstellt, kurz bevor `condition` zum ersten Mal ausgewertet wird. Diese Details können durch das Erstellen von Closures beobachtet werden, die es ermöglichen, eine bestimmte Bindung zu einem bestimmten Zeitpunkt festzuhalten. Zum Beispiel wird in diesem Code ein Closure, das innerhalb des `initialization`-Abschnitts erstellt wird, nicht durch Neuzuweisungen von `i` in `afterthought` aktualisiert:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

Dies protokolliert nicht "0, 1, 2", wie es passieren würde, wenn `getI` im Schleifenkörper deklariert wäre. Dies liegt daran, dass `getI` bei jedem Durchlauf nicht erneut ausgewertet wird - vielmehr wird die Funktion einmal erstellt und umfasst die `i`-Variable, die sich auf die bei der ersten Initialisierung der Schleife deklarierte Variable bezieht. Nachfolgende Aktualisierungen des Werts von `i` erstellen tatsächlich neue Variablen namens `i`, die `getI` nicht sieht. Eine Möglichkeit, dies zu beheben, besteht darin, `getI` jedes Mal zu rekonstruieren, wenn `i` aktualisiert wird:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

Die `i`-Variable innerhalb der `initialization` ist von der `i`-Variable innerhalb jeder Iteration, einschließlich der ersten, unterschiedlich. In diesem Beispiel gibt `getI` 0 zurück, obwohl der Wert von `i` innerhalb der Iteration vorher erhöht wird:

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

Tatsächlich können Sie diese anfängliche Bindung der `i`-Variablen erfassen und später erneut zuweisen, und dieser aktualisierte Wert wird für den Schleifenkörper nicht sichtbar sein, der die nächste neue Bindung von `i` sieht.

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

Dies protokolliert "0, 0, 0", weil die `i`-Variable bei jeder Schleifenbewertung eigentlich eine separate Variable ist, aber `getI` und `incrementI` lesen und schreiben die _anfängliche_ Bindung von `i`, nicht das, was anschließend deklariert wurde.

### Verwendung von for ohne Körper

Der folgende `for`-Zyklus berechnet die Offset-Position eines Knotens im `afterthought`-Abschnitt und erfordert daher nicht die Verwendung eines `statement`-Abschnitts; stattdessen wird ein Semikolon verwendet.

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

Beachten Sie, dass das Semikolon nach der `for`-Anweisung zwingend erforderlich ist, da es als [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) steht. Andernfalls übernimmt die `for`-Anweisung die folgende `console.log`-Zeile als ihren `statement`-Abschnitt, was dazu führt, dass das `log` mehrfach ausgeführt wird.

### Verwendung von for mit zwei iterierenden Variablen

Sie können zwei Zähler erstellen, die gleichzeitig in einer for-Schleife mit dem [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) aktualisiert werden. Mehrere `let`- und `var`-Deklarationen können auch mit Kommas verbunden werden.

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
