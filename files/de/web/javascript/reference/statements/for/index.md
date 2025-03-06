---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Statements")}}

Die **`for`**-Anweisung erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer Anweisung (meistens einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt wird.

{{InteractiveExample("JavaScript Demo: Statement - For")}}

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

  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder Variablendeklaration, die einmal vor Beginn der Schleife ausgewertet wird. Typischerweise verwendet, um eine Zählvariabel zu initialisieren. Dieser Ausdruck kann optional neue Variablen mit den Schlüsselwörtern `var` oder `let` deklarieren. Variablen, die mit `var` deklariert werden, sind nicht lokal für die Schleife, das heißt, sie befinden sich im selben Gültigkeitsbereich, in dem sich die `for`-Schleife befindet. Variablen, die mit `let` deklariert werden, sind lokal für die Anweisung.

    Das Ergebnis dieses Ausdrucks wird verworfen.

- `condition` {{optional_inline}}

  - : Ein Ausdruck, der vor jeder Iteration der Schleife ausgewertet wird. Wenn dieser Ausdruck {{Glossary("Truthy", "wahr ergibt")}}, wird `statement` ausgeführt. Wenn der Ausdruck {{Glossary("Falsy", "falsch ergibt")}}, wird die Ausführung beendet und geht zur ersten Anweisung nach dem `for`-Konstrukt.

    Dieser bedingte Test ist optional. Wenn weggelassen, ergibt die Bedingung immer wahr.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jeder Schleifeniteration ausgewertet wird. Dies geschieht vor der nächsten Bewertung von `condition`. In der Regel verwendet, um die Zählvariabel zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Eine Anweisung, die solange ausgeführt wird, wie die Bedingung als wahr ausgewertet wird. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um keine Anweisung innerhalb der Schleife auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie bei anderen Schleifenanweisungen können Sie innerhalb von `statement` [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und bewertet `afterthought`, dann `condition` neu.

## Beispiele

### Verwendung von for

Die folgende `for`-Anweisung beginnt mit der Deklaration der Variablen `i` und deren Initialisierung auf `0`. Sie überprüft, ob `i` kleiner als neun ist, führt die beiden nachfolgenden Anweisungen aus und inkrementiert `i` um 1 nach jedem Durchlauf durch die Schleife.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Initialisierungsblock-Syntax

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

Wie der `initialization`-Block ist auch der `condition`-Teil optional. Wenn Sie diesen Ausdruck weglassen, müssen Sie sicherstellen, dass Sie die Schleife im Körper abbrechen, um keine Endlosschleife zu erstellen.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

Sie können auch alle drei Ausdrücke weglassen. Stellen Sie sicher, dass Sie eine {{jsxref("Statements/break", "break")}}-Anweisung verwenden, um die Schleife zu beenden, und auch eine Variable modifizieren (erhöhen), sodass die Bedingung für die break-Anweisung zu einem bestimmten Zeitpunkt wahr ist.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

Wenn Sie jedoch nicht alle drei Ausdruckspositionen vollständig nutzen — insbesondere, wenn Sie keine Variablen mit dem ersten Ausdruck deklarieren, sondern etwas im oberen Bereich mutieren — sollten Sie stattdessen eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife verwenden, die die Absicht klarer macht.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikalische Deklarationen im Initialisierungsblock

Die Deklaration einer Variablen innerhalb des Initialisierungsblocks weist wichtige Unterschiede zur Deklaration im oberen {{Glossary("Scope", "Gültigkeitsbereich")}} auf, insbesondere bei der Erstellung eines [Closures](/de/docs/Web/JavaScript/Guide/Closures) im Schleifenrumpf. Beispielsweise für den folgenden Code:

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

Es protokolliert `3`, `3` und `3`. Der Grund dafür ist, dass jede `setTimeout` ein neues Closure erstellt, das über die `i`-Variable geschlossen wird. Aber wenn `i` nicht in den Schleifenrumpf eingebunden ist, verweisen alle Closures auf dieselbe Variable, wenn sie schließlich aufgerufen werden — und aufgrund der asynchronen Natur von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) geschieht dies, nachdem die Schleife bereits beendet ist, was dazu führt, dass der Wert von `i` in den Körpern aller in die Warteschlange gestellten Rückrufe den Wert `3` hat.

Dies geschieht auch, wenn Sie eine `var`-Anweisung für die Initialisierung verwenden, da Variablen, die mit `var` deklariert werden, nur funktionsübergreifend, aber nicht lexikalisch im Bereich sind (d.h. sie können nicht auf den Schleifenrumpf beschränkt werden).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

Der Bereichseffekt des Initialisierungsblocks kann so verstanden werden, als ob die Deklaration innerhalb des Schleifenrumpfs erfolgt, aber zufällig innerhalb der `condition`- und `afterthought`-Teile zugänglich ist. Genauer gesagt, `let`-Deklarationen werden von `for`-Schleifen speziell behandelt — wenn `initialization` eine `let`-Deklaration ist, dann passiert jedes Mal, nachdem der Schleifenrumpf ausgewertet wurde, Folgendes:

1. Ein neuer lexikalischer Bereich wird mit neuen `let`-deklarierten Variablen erstellt.
2. Die Bindungswerte aus der letzten Iteration werden verwendet, um die neuen Variablen neu zu initialisieren.
3. `afterthought` wird im neuen Bereich ausgewertet.

Das erneute Zuweisen der neuen Variablen innerhalb von `afterthought` beeinflusst nicht die Bindungen aus der vorherigen Iteration.

Ein neuer lexikalischer Bereich wird auch nach `initialization` erstellt, bevor `condition` zum ersten Mal ausgewertet wird. Diese Details können durch die Erstellung von Closures beobachtet werden, die es ermöglichen, eine Bindung zu einem bestimmten Zeitpunkt zu erfassen. Zum Beispiel in diesem Code wird ein Closure, das im `initialization`-Abschnitt erstellt wurde, nicht durch Neu-Zuweisungen von `i` im `afterthought` aktualisiert:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

Dies protokolliert nicht "0, 1, 2", wie es der Fall wäre, wenn `getI` im Schleifenrumpf deklariert wird. Dies liegt daran, dass `getI` nicht bei jeder Iteration neu ausgewertet wird — vielmehr wird die Funktion einmal erstellt und schließt über die `i`-Variable, die sich auf die Variable bezieht, die deklariert wurde, als die Schleife zuerst initialisiert wurde. Nachfolgende Aktualisierungen des Werts von `i` erstellen tatsächlich neue Variablen namens `i`, die `getI` nicht sieht. Eine Möglichkeit, dies zu beheben, besteht darin, `getI` jedes Mal neu zu berechnen, wenn `i` aktualisiert wird:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

Die `i`-Variable innerhalb der `initialization` ist von der `i`-Variable innerhalb jeder Iteration, einschließlich der ersten, verschieden. Also gibt in diesem Beispiel `getI` 0 zurück, obwohl der Wert von `i` innerhalb der Iteration vorher erhöht wird:

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

Tatsächlich können Sie diese anfängliche Bindung der `i`-Variable erfassen und später neu zuweisen, und dieser aktualisierte Wert wird nicht für den Schleifenrumpf sichtbar, der die nächste neue Bindung von `i` sieht.

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

Dies protokolliert "0, 0, 0", weil die `i`-Variable bei jeder Schleifenbewertung tatsächlich eine separate Variable ist, aber `getI` und `incrementI` lesen und schreiben die _anfängliche_ Bindung von `i`, nicht das, was anschließend deklariert wurde.

### Verwendung von for ohne Körper

Die folgende `for`-Schleife berechnet die Offset-Position eines Knotens im `afterthought`-Abschnitt, und daher ist die Verwendung eines `statement`-Abschnitts nicht erforderlich, es wird stattdessen ein Semikolon verwendet.

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

Beachten Sie, dass das Semikolon nach der `for`-Anweisung obligatorisch ist, da es als [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) steht. Andernfalls übernimmt die `for`-Anweisung die folgende `console.log`-Zeile als ihren `statement`-Abschnitt, wodurch das `log` mehrfach ausgeführt wird.

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
