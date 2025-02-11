---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`for`**-Anweisung erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer Anweisung (normalerweise eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt wird.

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

  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder eine Variablendeklaration, die einmal vor Beginn der Schleife ausgewertet wird. Wird typischerweise verwendet, um eine Zählervariable zu initialisieren. Dieser Ausdruck kann neue Variablen mit den Schlüsselwörtern `var` oder `let` deklarieren. Variablen, die mit `var` deklariert werden, sind nicht lokal zur Schleife, d. h. sie sind im gleichen Geltungsbereich wie die `for`-Schleife. Mit `let` deklarierte Variablen sind lokal zur Anweisung.

    Das Ergebnis dieses Ausdrucks wird verworfen.

- `condition` {{optional_inline}}

  - : Ein Ausdruck, der vor jeder Iteration der Schleife ausgewertet wird. Wenn dieser Ausdruck {{Glossary("Truthy", "als wahr ausgewertet wird")}}, wird `statement` ausgeführt. Wenn der Ausdruck {{Glossary("Falsy", "als falsch ausgewertet wird")}}, wird die Ausführung aus der Schleife heraus beendet und die erste Anweisung nach der `for`-Konstruktion aufgerufen.

    Dieser Bedingungstest ist optional. Wird er weggelassen, wird die Bedingung immer als wahr ausgewertet.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jeder Schleifeniteration ausgewertet wird. Dies geschieht vor der nächsten Auswertung von `condition`. Wird im Allgemeinen verwendet, um die Zählervariable zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung als wahr ausgewertet wird. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um keine Anweisung innerhalb der Schleife auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie bei anderen Schleifenanweisungen können Sie [Kontrollfluss-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und wertet danach `afterthought` und anschließend `condition` erneut aus.

## Beispiele

### Verwendung von for

Die folgende `for`-Anweisung beginnt mit der Deklaration der Variablen `i` und ihrer Initialisierung auf `0`. Es wird überprüft, ob `i` kleiner als neun ist, die zwei folgenden Anweisungen werden ausgeführt, und `i` wird nach jedem Durchlauf der Schleife um 1 inkrementiert.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Syntaxblock-Initialisierung

Der Initialisierungsblock akzeptiert sowohl Ausdrücke als auch Variablendeklarationen. Ausdrücke können jedoch den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator nicht unverklammert verwenden, da dies mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife verwechselt werden könnte.

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

Wie im `initialization`-Block ist auch der `condition`-Teil optional. Wenn Sie diesen Ausdruck weglassen, müssen Sie sicherstellen, dass die Schleife im Körper beendet wird, um eine Endlosschleife zu vermeiden.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

Sie können auch alle drei Ausdrücke weglassen. Stellen Sie jedoch sicher, dass Sie eine {{jsxref("Statements/break", "break")}}-Anweisung verwenden, um die Schleife zu beenden, und modifizieren (inkrementieren) Sie auch eine Variable, damit die Bedingung für die break-Anweisung irgendwann wahr wird.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

Wenn Sie jedoch keines der drei Ausdruckspositionen vollständig verwenden – insbesondere, wenn Sie keine Variablen mit dem ersten Ausdruck deklarieren, sondern etwas im äußeren Geltungsbereich ändern – sollten Sie stattdessen eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife verwenden, da dies die Absicht deutlicher macht.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikale Deklarationen im Initialisierungsblock

Das Deklarieren einer Variablen im Initialisierungsblock unterscheidet sich wesentlich davon, sie im oberen {{Glossary("Scope", "Geltungsbereich")}} zu deklarieren, insbesondere beim Erstellen einer [Closure](/de/docs/Web/JavaScript/Closures) im Schleifenkörper. Zum Beispiel bei folgendem Code:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es werden wie erwartet `0`, `1` und `2` ausgegeben. Wenn die Variable jedoch im oberen Geltungsbereich definiert wird:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Werden `3`, `3` und `3` ausgegeben. Der Grund ist, dass jedes `setTimeout` eine neue Closure erstellt, die über die Variable `i` geschlossen wird. Wenn jedoch `i` nicht auf den Schleifen-Block beschränkt ist, verweisen alle Closures auf dieselbe Variable, wenn sie schließlich aufgerufen werden – und aufgrund der asynchronen Natur von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) geschieht dies, nachdem die Schleife bereits beendet ist, wodurch der Wert von `i` in allen aufgerufenen Callback-Methoden den Wert `3` hat.

Dies geschieht auch, wenn Sie eine `var`-Anweisung als Initialisierung verwenden, da Variablen, die mit `var` deklariert werden, nur funktions-scope sind, aber nicht lexikalisch eingeschränkt (d. h. sie können nicht auf den Schleifen-Block eingeschränkt werden).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

Die Lexikalische Wirkung des Initialisierungsblocks kann so verstanden werden, als ob die Deklaration innerhalb des Schleifenblocks erfolgt, wobei sie jedoch innerhalb von `condition` und `afterthought` zugänglich ist. Präziser gesagt, `let`-Deklarationen werden von `for`-Schleifen speziell behandelt – wenn `initialization` eine `let`-Deklaration ist, dann geschieht nach jeder Schleifeniteration Folgendes:

1. Ein neuer lexikalischer Bereich wird mit neuen `let`-deklarierten Variablen erstellt.
2. Die Bindungswerte aus der letzten Iteration werden verwendet, um die neuen Variablen zu reinitialisieren.
3. `afterthought` wird im neuen Bereich ausgewertet.

Das erneute Zuweisen der neuen Variablen innerhalb von `afterthought` hat keine Auswirkungen auf die Bindungen der vorherigen Iteration.

Ein neuer lexikalischer Bereich wird auch nach `initialization` erstellt, direkt vor der ersten Auswertung von `condition`. Diese Details können durch das Erstellen von Closures beobachtet werden, die es erlauben, eine Bindung zu einem bestimmten Zeitpunkt zu erhalten. Zum Beispiel wird in diesem Code eine Closure, die in der `initialization`-Sektion erstellt wurde, nicht durch erneute Zuweisungen von `i` in `afterthought` aktualisiert:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

Dies gibt nicht "0, 1, 2" aus, wie es der Fall wäre, wenn `getI` im Schleifenblock deklariert würde. Das liegt daran, dass `getI` nicht bei jeder Iteration neu ausgewertet wird – vielmehr wird die Funktion einmal erstellt und schließt über die Variable `i`, die sich auf die Variable bezieht, die deklariert wurde, als die Schleife zuerst initialisiert wurde. Nachfolgende Updates am Wert von `i` erstellen tatsächlich neue Variablen namens `i`, die `getI` nicht sieht. Eine Möglichkeit dies zu korrigieren ist, `getI` jedes Mal neu zu berechnen, wenn `i` aktualisiert wird:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

Die `i`-Variable innerhalb der `initialization` ist von der Variablen `i` in jeder Iteration verschieden, einschließlich der ersten. In diesem Beispiel gibt `getI` 0 zurück, obwohl der Wert von `i` in der Iteration vorher inkrementiert wurde:

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

Sie können diese anfängliche Bindung der `i`-Variablen erfassen und später erneut zuweisen. Dieser aktualisierte Wert ist jedoch nicht für den Schleifen-Block sichtbar, sondern der Block sieht die nächste neue Bindung von `i`.

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

Dies gibt "0, 0, 0" aus, da die `i`-Variable bei jeder Schleifenbewertung tatsächlich eine separate Variable ist, aber `getI` und `incrementI` sowohl die _ursprüngliche_ Bindung von `i` lesen und schreiben, nicht die anschließend deklarierten.

### Verwendung von for ohne Körper

Die folgende `for`-Schleife berechnet die Offset-Position eines Knotens in der `afterthought`-Sektion und erfordert daher keine Verwendung der `statement`-Sektion; ein Semikolon wird verwendet.

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

Beachten Sie, dass das Semikolon nach der `for`-Anweisung obligatorisch ist, da es als [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) fungiert. Andernfalls übernimmt die `for`-Anweisung die folgende `console.log`-Zeile als ihren `statement`-Abschnitt, wodurch die `log`-Ausgabe mehrfach ausgeführt wird.

### Verwendung von for mit zwei iterierenden Variablen

Sie können zwei Zähler erstellen, die gleichzeitig in einer `for`-Schleife aktualisiert werden, indem Sie den [Kommaoperator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) verwenden. Mehrere `let`- und `var`-Deklarationen können ebenfalls mit Kommata verbunden werden.

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
