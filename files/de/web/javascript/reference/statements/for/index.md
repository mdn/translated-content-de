---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`for`**-Anweisung erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen sind und durch Semikolons getrennt werden, gefolgt von einer Anweisung (in der Regel eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt werden soll.

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
  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder eine Variablendeklaration, die einmal ausgewertet wird, bevor die Schleife beginnt. Typischerweise verwendet, um eine Zählervariable zu initialisieren. Dieser Ausdruck kann optional neue Variablen mit den Schlüsseln `var` oder `let` deklarieren. Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Gültigkeitsbereich, in dem die `for`-Schleife ist. Mit `let` deklarierte Variablen sind lokal zur Anweisung.

    Das Ergebnis dieses Ausdrucks wird verworfen.

- `condition` {{optional_inline}}
  - : Ein Ausdruck, der vor jedem Schleifendurchlauf ausgewertet wird. Wenn dieser Ausdruck {{Glossary("Truthy", "wahr ergibt")}}, wird `statement` ausgeführt. Wenn der Ausdruck {{Glossary("Falsy", "falsch ergibt")}}, wird die Ausführung der Schleife beendet und es wird zur ersten Anweisung nach der `for`-Konstruktion übergegangen.

    Dieser Bedingungstest ist optional. Wenn weggelassen, ergibt die Bedingung immer wahr.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jedes Schleifendurchlaufs ausgewertet wird. Dies geschieht, bevor die nächste Auswertung der `condition` erfolgt. Wird im Allgemeinen verwendet, um die Zählervariable zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Ein Anweisung, die solange ausgeführt wird, wie die Bedingung wahr ergibt. Sie können eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um keine Anweisung innerhalb der Schleife auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie andere Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und springt zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und wertet `afterthought` und dann `condition` neu aus.

## Beispiele

### Verwendung von for

Die folgende `for`-Anweisung beginnt mit der Deklaration der Variablen `i` und ihrer Initialisierung auf `0`. Sie überprüft, ob `i` kleiner als neun ist, führt die zwei folgenden Anweisungen aus und inkrementiert `i` um 1 nach jedem Durchlauf der Schleife.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Initialisierungsblock-Syntax

Der Initialisierungsblock akzeptiert sowohl Ausdrücke als auch Variablendeklarationen. Ausdrücke können jedoch nicht den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator ohne Klammern verwenden, da dies mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife uneindeutig ist.

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

Wie der `initialization`-Block ist auch der `condition`-Teil optional. Wenn Sie diesen Ausdruck weglassen, müssen Sie sicherstellen, dass Sie die Schleife im Körper durchbrechen, um keine Endlosschleife zu erzeugen.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

Sie können auch alle drei Ausdrücke weglassen. Stellen Sie sicher, dass Sie eine {{jsxref("Statements/break", "break")}}-Anweisung verwenden, um die Schleife zu beenden und auch eine Variable zu ändern (zu erhöhen), so dass die Bedingung für die break-Anweisung irgendwann wahr ist.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

Wenn Sie jedoch nicht alle drei Ausdruckspositionen voll nutzen — insbesondere wenn Sie keine Variablen mit dem ersten Ausdruck deklarieren, sondern etwas im oberen Bereich ändern — sollten Sie stattdessen eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife verwenden, die die Absicht klarer macht.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikalische Deklarationen im Initialisierungsblock

Das Deklarieren einer Variablen im Initialisierungsblock hat wichtige Unterschiede zur Deklaration im oberen {{Glossary("Scope", "Gültigkeitsbereich")}}, insbesondere beim Erstellen eines [Closure](/de/docs/Web/JavaScript/Guide/Closures) innerhalb des Schleifenkörpers. Zum Beispiel für den folgenden Code:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es zeigt `0`, `1` und `2` an, wie erwartet. Wenn die Variable jedoch im oberen Bereich definiert ist:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es zeigt `3`, `3` und `3` an. Der Grund ist, dass jeder `setTimeout` ein neues Closure erstellt, das die `i`-Variable umschließt, aber wenn die `i`-Variable nicht auf den Schleifenkörper beschränkt ist, werden alle Closures auf dieselbe Variable verweisen, wenn sie schließlich aufgerufen werden — und aufgrund der asynchronen Natur von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) geschieht dies, nachdem die Schleife bereits beendet ist, wodurch der Wert von `i` in allen eingeplanten Rückrufe den Wert `3` hat.

Dies passiert auch, wenn Sie eine `var`-Anweisung als Initialisierung verwenden, da mit `var` deklarierte Variablen nur funktionsweit, aber nicht lexikalisch definiert sind (d.h. sie können nicht auf den Schleifenkörper beschränkt werden).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

Der Scoping-Effekt des Initialisierungsblocks kann verstanden werden, als ob die Deklaration innerhalb des Schleifenkörpers erfolgt, jedoch zufällig im `condition`- und `afterthought`-Teil zugänglich ist. Genauer gesagt sind `let`-Deklarationen speziell für `for`-Schleifen behandelt — wenn `initialization` eine `let`-Deklaration ist, dann passiert jedes Mal nach der Auswertung des Schleifenkörpers Folgendes:

1. Ein neuer lexikalischer Bereich wird mit neuen `let`-deklarierten Variablen erstellt.
2. Die Bindungswerte aus der letzten Iteration werden verwendet, um die neuen Variablen neu zu initialisieren.
3. `afterthought` wird im neuen Bereich ausgewertet.

Das erneute Zuweisen der neuen Variablen innerhalb von `afterthought` beeinflusst nicht die Bindungen aus der vorherigen Iteration.

Ein neuer lexikalischer Bereich wird auch nach `initialization` erstellt, gerade bevor `condition` zum ersten Mal ausgewertet wird. Diese Details können beobachtet werden, indem man Closures erstellt, die es ermöglichen, eine Bindung zu einem bestimmten Zeitpunkt zu halten. In diesem Code wird z. B. ein Closure, das im `initialization`-Abschnitt erstellt wurde, nicht durch Neubindungen von `i` im `afterthought`-Abschnitt aktualisiert:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

Dies gibt nicht "0, 1, 2" aus, wie es passieren würde, wenn `getI` im Schleifenkörper deklariert wäre. Das liegt daran, dass `getI` nicht bei jeder Iteration neu ausgewertet wird — vielmehr wird die Funktion einmal erstellt und umschließt die `i`-Variable, die auf die Variable verweist, die bei der ersten Initialisierung der Schleife deklariert wurde. Nachfolgende Aktualisierungen des Wertes von `i` erstellen tatsächlich neue Variablen namens `i`, die `getI` nicht sieht. Eine Möglichkeit, das zu beheben, besteht darin, `getI` jedes Mal neu zu berechnen, wenn `i` aktualisiert wird:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

Die `i`-Variable innerhalb der `initialization` ist von der `i`-Variable innerhalb jeder Iteration, einschließlich der ersten, getrennt. In diesem Beispiel gibt `getI` 0 zurück, obwohl der Wert von `i` innerhalb der Iteration vorher erhöht wird:

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

Tatsächlich können Sie diese anfängliche Bindung der `i`-Variable erfassen und später neu zuweisen, und dieser aktualisierte Wert wird nicht im Schleifenkörper sichtbar sein, der die nächste neue Bindung von `i` sieht.

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

Dies gibt "0, 0, 0" aus, weil die `i`-Variable in jeder Schleifenbewertung tatsächlich eine separate Variable ist, aber `getI` und `incrementI` lesen und schreiben die _anfängliche_ Bindung von `i`, nicht das, was anschließend deklariert wurde.

### Verwendung von for ohne Körper

Der folgende `for`-Zyklus berechnet die Offset-Position eines Knotens im `afterthought`-Bereich und erfordert daher keinen `statement`-Bereich, stattdessen wird ein Semikolon verwendet.

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

Beachten Sie, dass das Semikolon nach der `for`-Anweisung obligatorisch ist, da es als [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) steht. Andernfalls übernimmt die `for`-Anweisung die folgende `console.log`-Zeile als ihren `statement`-Bereich, wodurch das `log` mehrmals ausgeführt wird.

### Verwendung von for mit zwei iterierenden Variablen

Sie können zwei Zähler erstellen, die in einer for-Schleife mit dem [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) gleichzeitig aktualisiert werden. Mehrere `let`- und `var`-Deklarationen können ebenfalls mit Kommata verbunden werden.

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
