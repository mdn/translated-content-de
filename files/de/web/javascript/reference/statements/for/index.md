---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{jsSidebar("Statements")}}

Die **`for`**-Anweisung erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, eingeschlossen in Klammern und durch Semikolons getrennt, gefolgt von einer Anweisung (in der Regel eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt wird.

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

  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder eine Variablendeklaration, die einmal vor Beginn der Schleife ausgewertet wird. Typischerweise verwendet, um eine Zählvariable zu initialisieren. Dieser Ausdruck kann optional neue Variablen mit den Schlüsselwörtern `var` oder `let` deklarieren. Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Geltungsbereich (Scope) wie die `for`-Schleife. Mit `let` deklarierte Variablen sind lokal zur Anweisung.

    Das Ergebnis dieses Ausdrucks wird verworfen.

- `condition` {{optional_inline}}

  - : Ein Ausdruck, der vor jedem Schleifendurchlauf ausgewertet wird. Wenn dieser Ausdruck {{Glossary("Truthy", "als wahr ausgewertet")}} wird, wird die `statement` ausgeführt. Wenn der Ausdruck {{Glossary("Falsy", "als falsch ausgewertet")}} wird, wird die Ausführung der Schleife beendet und zur ersten Anweisung nach der `for`-Konstruktion gewechselt.

    Dieser bedingte Test ist optional. Wenn er weggelassen wird, wird die Bedingung immer als wahr ausgewertet.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jedes Schleifendurchlaufs ausgewertet wird. Dies geschieht vor der nächsten Auswertung der `condition`. Wird im Allgemeinen verwendet, um die Zählvariable zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung als wahr bewertet wird. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um keine Anweisung innerhalb der Schleife auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und wechselt zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und bewertet `afterthought` und dann `condition` neu.

## Beispiele

### Verwendung von for

Die folgende `for`-Anweisung beginnt mit der Deklaration der Variable `i` und der Initialisierung auf `0`. Sie prüft, ob `i` kleiner als neun ist, führt die beiden nachfolgenden Anweisungen aus und inkrementiert `i` um 1 nach jedem Durchlauf der Schleife.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Syntax des Initialisierungsblocks

Der Initialisierungsblock akzeptiert sowohl Ausdrücke als auch Variablendeklarationen. Ausdrücke können jedoch nicht den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator unverwendet verwenden, da dies mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife mehrdeutig ist.

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

Wie der `initialization`-Block ist auch der `condition`-Teil optional. Wenn Sie diesen Ausdruck weglassen, müssen Sie sicherstellen, die Schleife im Körper zu unterbrechen, um eine Endlosschleife zu vermeiden.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

Sie können auch alle drei Ausdrücke weglassen. Erneut müssen Sie sicherstellen, eine {{jsxref("Statements/break", "break")}}-Anweisung zu verwenden, um die Schleife zu beenden, und auch eine Variable zu ändern (erhöhen), sodass die Bedingung für die Break-Anweisung irgendwann wahr wird.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

Wenn Sie jedoch nicht alle drei Ausdruckspositionen vollständig nutzen – insbesondere, wenn Sie keine Variablen mit dem ersten Ausdruck deklarieren, sondern etwas im übergeordneten Gültigkeitsbereich ändern – sollten Sie stattdessen eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife verwenden, um die Absicht deutlicher zu machen.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikalische Deklarationen im Initialisierungsblock

Die Deklaration einer Variable innerhalb des Initialisierungsblocks unterscheidet sich wesentlich von der Deklaration im oberen {{Glossary("Scope", "Geltungsbereich (Scope)")}}, insbesondere beim Erstellen einer [Closure](/de/docs/Web/JavaScript/Guide/Closures) innerhalb des Schleifenkörpers. Zum Beispiel, für den untenstehenden Code:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es wird `0`, `1`, und `2` geloggt, wie erwartet. Wenn jedoch die Variable im oberen Gültigkeitsbereich definiert ist:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es wird `3`, `3`, und `3` geloggt. Der Grund ist, dass jedes `setTimeout` eine neue Closure erstellt, die über die `i`-Variable schließt, aber wenn `i` nicht auf den Schleifenkörper beschränkt ist, werden alle Closures dieselbe Variable referenzieren, wenn sie schließlich aufgerufen werden — und aufgrund der asynchronen Natur von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) wird dies passieren, nachdem die Schleife bereits beendet ist, was dazu führt, dass der Wert von `i` in allen gequeuten Callback-Körpern den Wert `3` hat.

Dies passiert auch, wenn Sie eine `var`-Anweisung als Initialisierung verwenden, da mit `var` deklarierte Variablen nur auf Funktionsebene gültig sind, jedoch nicht lexikalisch auf den Schleifenkörper beschränkt (d.h. sie können nicht auf den Schleifenkörper beschränkt werden).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

Der Scoping-Effekt des Initialisierungsblocks kann so verstanden werden, als ob die Deklaration innerhalb des Schleifenkörpers erfolgt, aber zufälligerweise innerhalb der `condition` und `afterthought`-Teile zugänglich ist. Genauer gesagt sind `let`-Deklarationen in `for`-Schleifen ein Sonderfall — wenn `initialization` eine `let`-Deklaration ist, dann passiert jedes Mal, nachdem der Schleifenkörper ausgewertet wurde, Folgendes:

1. Ein neuer lexikalischer Geltungsbereich wird mit neu `let`-deklarierten Variablen erstellt.
2. Die Bindungswerte aus der letzten Iteration werden verwendet, um die neuen Variablen neu zu initialisieren.
3. `afterthought` wird im neuen Gültigkeitsbereich ausgewertet.

Das erneute Zuweisen der neuen Variablen innerhalb von `afterthought` beeinflusst nicht die Bindungen aus der vorherigen Iteration.

Ein neuer lexikalischer Geltungsbereich wird auch nach `initialization` erstellt, direkt bevor `condition` zum ersten Mal ausgewertet wird. Diese Details können durch das Erstellen von Closures beobachtet werden, die es erlauben, eine Bindung zu einem bestimmten Zeitpunkt zu erfassen. Zum Beispiel, in diesem Code eine Closure, die innerhalb des `initialization`-Teils erstellt wird, wird nicht durch Neuzuweisungen von `i` in dem `afterthought`-Teil aktualisiert:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

Dies loggt nicht "0, 1, 2", wie es passieren würde, wenn `getI` im Schleifenkörper deklariert wäre. Dies liegt daran, dass `getI` nicht in jeder Iteration neu ausgewertet wird — vielmehr wird die Funktion einmal erstellt und schließt über die `i`-Variable, die sich auf die Variable bezieht, die deklariert wurde, als die Schleife erstmals initialisiert wurde. Nachfolgende Aktualisierungen des Wertes von `i` erstellen tatsächlich neue Variablen mit dem Namen `i`, die `getI` nicht sieht. Ein Weg, dies zu beheben, ist, `getI` jedes Mal neu zu berechnen, wenn `i` aktualisiert wird:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

Die `i`-Variable innerhalb des `initialization` ist von der `i`-Variable innerhalb jeder Iteration, einschließlich der ersten, unterschieden. In diesem Beispiel gibt `getI` 0 zurück, obwohl der Wert von `i` innerhalb der Iteration vorher inkrementiert wurde:

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

Tatsächlich können Sie diese initiale Bindung der `i`-Variable erfassen und später neu zuweisen, und dieser aktualisierte Wert wird nicht im Schleifenkörper sichtbar sein, der die nächste neue Bindung von `i` sieht.

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

Dies loggt "0, 0, 0", da die `i`-Variable in jeder Schleifenauswertung tatsächlich eine separate Variable ist, aber `getI` und `incrementI` lesen und schreiben die _initiale_ Bindung von `i`, nicht was anschließend deklariert wurde.

### Verwendung von for ohne Körper

Der folgende `for`-Zyklus berechnet die Offsetposition eines Knotens im `afterthought`-Teil und benötigt daher keine Verwendung eines `statement`-Teils, stattdessen wird ein Semikolon verwendet.

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

Beachten Sie, dass das Semikolon nach der `for`-Anweisung obligatorisch ist, da es als [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) steht. Andernfalls übernimmt die `for`-Anweisung die folgende `console.log`-Zeile als ihren `statement`-Teil, wodurch das `log` mehrfach ausgeführt wird.

### Verwendung von for mit zwei iterierenden Variablen

Sie können zwei Zähler erstellen, die in einer for-Schleife gleichzeitig aktualisiert werden, indem Sie den [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) verwenden. Mehrere `let`- und `var`-Deklarationen können ebenfalls mit Kommas verbunden werden.

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
