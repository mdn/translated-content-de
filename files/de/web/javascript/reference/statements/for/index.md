---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Statements")}}

Die **`for`**-Anweisung erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, in Klammern eingeschlossen und durch Semikolons getrennt, gefolgt von einer Anweisung (normalerweise ein [Block Statement](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt werden soll.

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

  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder Variablendeklaration, die einmal vor Beginn der Schleife ausgewertet wird. Typischerweise verwendet, um eine Zählervariable zu initialisieren. Dieser Ausdruck kann optional neue Variablen mit den Keywords `var` oder `let` deklarieren. Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Gültigkeitsbereich, in dem die `for`-Schleife sich befindet. Mit `let` deklarierte Variablen sind lokal zur Anweisung.

    Das Ergebnis dieses Ausdrucks wird verworfen.

- `condition` {{optional_inline}}

  - : Ein Ausdruck, der vor jeder Schleifeniteration ausgewertet wird. Wenn dieser Ausdruck {{Glossary("Truthy", "zu true ausgewertet wird")}}, wird `statement` ausgeführt. Wenn der Ausdruck {{Glossary("Falsy", "zu false ausgewertet wird")}}, beendet die Ausführung die Schleife und geht zur ersten Anweisung nach dem `for`-Konstrukt.

    Dieser bedingte Test ist optional. Wenn weggelassen, wird die Bedingung immer zu true ausgewertet.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jeder Schleifeniteration ausgewertet wird. Dies geschieht vor der nächsten Auswertung von `condition`. Wird im Allgemeinen verwendet, um die Zählervariable zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung zu true ausgewertet wird. Sie können ein [Block Statement](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um keine Anweisung innerhalb der Schleife auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie bei anderen Schleifenanweisungen können Sie in `statement` [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und wertet dann `afterthought` und `condition` erneut aus.

## Beispiele

### Verwendung von for

Die folgende `for`-Anweisung beginnt mit der Deklaration der Variablen `i` und ihrer Initialisierung auf `0`. Sie prüft, ob `i` kleiner als neun ist, führt die beiden folgenden Anweisungen aus und inkrementiert `i` nach jedem Durchlauf der Schleife um 1.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Syntax des Initialisierungsblocks

Der Initialisierungsblock akzeptiert sowohl Ausdrücke als auch Variablendeklarationen. Allerdings können Ausdrücke den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator nicht unparenthesisiert verwenden, da dies mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife mehrdeutig ist.

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

Alle drei Ausdrücke im Kopf der `for`-Schleife sind optional. Beispielsweise ist es nicht erforderlich, den `initialization`-Block zu verwenden, um Variablen zu initialisieren:

```js
let i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}
```

Wie der `initialization`-Block ist auch der `condition`-Teil optional. Wenn Sie diesen Ausdruck weglassen, müssen Sie sicherstellen, die Schleife im Körper zu unterbrechen, um keine Endlosschleife zu erzeugen.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

Sie können auch alle drei Ausdrücke weglassen. Achten Sie erneut darauf, eine {{jsxref("Statements/break", "break")}}-Anweisung zu verwenden, um die Schleife zu beenden, und eine Variable zu ändern (erhöhen), sodass die Bedingung für die Break-Anweisung irgendwann true ist.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

Wenn Sie jedoch alle drei Ausdruckspositionen nicht vollständig nutzen — insbesondere wenn Sie keine Variablen mit dem ersten Ausdruck deklarieren, sondern etwas im übergeordneten Gültigkeitsbereich ändern — sollten Sie stattdessen eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife verwenden, die die Absicht klarer macht.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikalische Deklarationen im Initialisierungsblock

Das Deklarieren einer Variablen innerhalb des Initialisierungsblocks unterscheidet sich wesentlich von der Deklaration im oberen {{Glossary("Scope", "Scope")}}, insbesondere wenn innerhalb des Schleifenkörpers eine [Closure](/de/docs/Web/JavaScript/Guide/Closures) erstellt wird. Zum Beispiel, für den folgenden Code:

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

Es protokolliert `3`, `3` und `3`. Der Grund ist, dass jedes `setTimeout` eine neue Closure erstellt, die über die Variable `i` geschlossen wird. Wenn `i` jedoch nicht auf den Schleifenrumpf beschränkt ist, werden alle Closures auf dieselbe Variable verweisen, wenn sie schließlich aufgerufen werden — und aufgrund der asynchronen Natur von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) wird dies geschehen, nachdem die Schleife bereits beendet ist, was dazu führt, dass der Wert von `i` in allen verketteten Rückrufen den Wert `3` hat.

Dies geschieht auch, wenn Sie eine `var`-Anweisung als Initialisierung verwenden, da mit `var` deklarierte Variablen nur funktions-, aber nicht lexikalisch gebunden sind (d.h. sie können nicht auf den Schleifenrumpf beschränkt werden).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

Der Scoping-Effekt des Initialisierungsblocks kann so verstanden werden, dass die Deklaration innerhalb des Schleifenrumpfs geschieht, aber zufällig innerhalb der Teile `condition` und `afterthought` zugänglich ist. Genauer gesagt, `let`-Deklarationen sind in `for`-Schleifen speziell behandelt – wenn `initialization` eine `let`-Deklaration ist, dann passiert jedes Mal, nachdem der Schleifenkörper ausgewertet wurde, Folgendes:

1. Ein neuer lexikalischer Gültigkeitsbereich wird mit neuen `let`-deklarierten Variablen erstellt.
2. Die Bindungswerte aus der letzten Iteration werden verwendet, um die neuen Variablen erneut zu initialisieren.
3. `afterthought` wird im neuen Gültigkeitsbereich ausgewertet.

Das erneute Zuweisen der neuen Variablen innerhalb von `afterthought` beeinflusst nicht die Bindungen aus der vorherigen Iteration.

Ein neuer lexikalischer Gültigkeitsbereich wird auch nach `initialization` erstellt, kurz bevor `condition` zum ersten Mal ausgewertet wird. Diese Details können durch die Erstellung von Closures beobachtet werden, die es erlauben, eine Bindung zu einem bestimmten Zeitpunkt zu erfassen. Zum Beispiel, in diesem Code wird eine Closure, die innerhalb des `initialization`-Abschnitts erstellt wird, nicht durch Neuzuweisungen von `i` im `afterthought`-Abschnitt aktualisiert:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

Dies protokolliert nicht "0, 1, 2", wie es der Fall wäre, wenn `getI` im Schleifenrumpf deklariert wird. Dies liegt daran, dass `getI` nicht bei jedem Durchlauf erneut ausgewertet wird — vielmehr wird die Funktion einmal erstellt und schließt über die Variable `i`, die sich auf die zum Zeitpunkt der Initialisierung der Schleife deklarierte Variable bezieht. Nachfolgende Aktualisierungen des Wertes von `i` erstellen tatsächlich neue Variablen mit dem Namen `i`, die `getI` nicht sieht. Eine Möglichkeit, dies zu beheben, besteht darin, `getI` jedes Mal neu zu berechnen, wenn `i` aktualisiert wird:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

Die Variable `i` innerhalb des `initialization`-Abschnitts ist von der Variable `i` innerhalb jeder Iteration, einschließlich der ersten, verschieden. In diesem Beispiel gibt `getI` also 0 zurück, obwohl der Wert von `i` innerhalb der Iteration vorher erhöht wird:

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

Tatsächlich können Sie diese initiale Bindung der Variable `i` erfassen und später neu zuweisen, und dieser aktualisierte Wert wird nicht für den Schleifenrumpf sichtbar sein, der die nächste neue Bindung von `i` sieht.

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

Dies protokolliert "0, 0, 0", da die `i`-Variable in jeder Schleifenauswertung tatsächlich eine separate Variable ist, während `getI` und `incrementI` beide die _initiale_ Bindung von `i` lesen und schreiben, nicht das, was anschließend deklariert wurde.

### Verwendung von for ohne Körper

Der folgende `for`-Zyklus berechnet die Offsetposition eines Knotens im `afterthought`-Abschnitt und erfordert daher nicht die Verwendung eines `statement`-Abschnitts, stattdessen wird ein Semikolon verwendet.

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

Sie können zwei Zähler erstellen, die in einer `for`-Schleife mit dem [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) gleichzeitig aktualisiert werden. Mehrere `let`- und `var`-Deklarationen können ebenfalls mit Kommas verbunden werden.

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
