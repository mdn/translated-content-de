---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

Die **`for`** Anweisung erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, eingeschlossen in Klammern und durch Semikolons getrennt, gefolgt von einer Anweisung (in der Regel ein [Block Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt wird.

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
  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder eine Variablendeklaration, die einmalig vor Beginn der Schleife ausgewertet wird. Wird typischerweise verwendet, um eine Zählvariable zu initialisieren. Dieser Ausdruck kann optional neue Variablen mit den Schlüsselwörtern `var` oder `let` deklarieren. Variablen, die mit `var` deklariert werden, sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Gültigkeitsbereich, in dem die `for` Schleife steht. Variablen, die mit `let` deklariert werden, sind lokal zur Anweisung.

    Das Ergebnis dieses Ausdrucks wird verworfen.

- `condition` {{optional_inline}}
  - : Ein Ausdruck, der vor jeder Iteration der Schleife ausgewertet wird. Wenn dieser Ausdruck {{Glossary("Truthy", "wahrheitsgemäß ausgewertet wird")}}, wird `statement` ausgeführt. Wenn der Ausdruck {{Glossary("Falsy", "falsche Werte auswertet")}}, wird die Ausführung der Schleife beendet und zur ersten Anweisung nach dem `for` Konstrukt gesprungen.

    Dieser Bedingungstest ist optional. Wenn er weggelassen wird, wird die Bedingung immer als wahr bewertet.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jeder Schleifeniteration ausgewertet wird. Dies geschieht vor der nächsten Auswertung von `condition`. Wird im Allgemeinen verwendet, um die Zählvariable zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Eine Anweisung, die so lange ausgeführt wird, wie die Bedingung als wahr bewertet wird. Sie können eine [Block Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um keine Anweisung innerhalb der Schleife auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie andere Schleifenanweisungen können Sie [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und springt zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und wertet dann `afterthought` und `condition` neu aus.

## Beispiele

### Die Verwendung von for

Die folgende `for` Anweisung beginnt mit der Deklaration der Variablen `i` und initialisiert sie mit `0`. Sie überprüft, dass `i` kleiner als neun ist, führt die beiden nachfolgenden Anweisungen aus und inkrementiert `i` um 1 nach jedem Durchlauf der Schleife.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Syntax des Initialisierungsblocks

Der Initialisierungsblock akzeptiert sowohl Ausdrücke als auch Variablendeklarationen. Ausdrücke können jedoch den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator nicht unparenthesized verwenden, da dies mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife mehrdeutig ist.

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

### Optionale for Ausdrücke

Alle drei Ausdrücke im Kopf der `for` Schleife sind optional. Zum Beispiel ist es nicht erforderlich, den `initialization` Block zu verwenden, um Variablen zu initialisieren:

```js
let i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}
```

Wie der `initialization` Block ist auch der `condition` Teil optional. Wenn Sie diesen Ausdruck weglassen, müssen Sie sicherstellen, dass die Schleife im Körper beendet wird, um keine Endlosschleife zu erzeugen.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

Sie können auch alle drei Ausdrücke weglassen. Stellen Sie wiederum sicher, dass Sie eine {{jsxref("Statements/break", "break")}} Anweisung verwenden, um die Schleife zu beenden und auch eine Variable zu modifizieren (zu erhöhen), sodass die Bedingung für die break Anweisung zu einem bestimmten Zeitpunkt wahr ist.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

In dem Fall, dass Sie nicht alle drei Ausdruckspositionen vollständig nutzen – insbesondere wenn Sie keine Variablen mit dem ersten Ausdruck deklarieren, sondern etwas im oberen Gültigkeitsbereich ändern – überlegen Sie, stattdessen eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) Schleife zu verwenden, was die Absicht klarer macht.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikalische Deklarationen im Initialisierungsblock

Eine Variable innerhalb des Initialisierungsblocks zu deklarieren hat wichtige Unterschiede im Vergleich zur Deklaration im oberen {{Glossary("Scope", "Gültigkeitsbereich")}}, insbesondere bei der Erstellung einer [closure](/de/docs/Web/JavaScript/Guide/Closures) innerhalb des Schleifenrumpfes. Zum Beispiel, für den folgenden Code:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es protokolliert `0`, `1` und `2`, wie erwartet. Wird die Variable jedoch im oberen Gültigkeitsbereich definiert:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Es protokolliert `3`, `3` und `3`. Der Grund dafür ist, dass jede `setTimeout` ein neues closure erstellt, das die `i` Variable umschließt, aber wenn die `i` nicht auf den Schleifenrumpf beschränkt ist, werden alle closures auf die gleiche Variable verweisen, wenn sie schließlich aufgerufen werden – und aufgrund der asynchronen Natur von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) wird dies passieren, nachdem die Schleife bereits beendet wurde, wodurch der Wert von `i` in allen anstehenden Rückrufen den Wert `3` hat.

Dies passiert auch, wenn Sie eine `var` Anweisung als Initialisierung verwenden, da Variablen, die mit `var` deklariert sind, nur auf Funktionsebene gescoped, aber nicht lexikalisch gescoped sind (d.h. sie können nicht auf den Schleifenrumpf gescoped werden).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

Die Scopingwirkung des Initialisierungsblocks kann verstanden werden, als ob die Deklaration innerhalb des Schleifenrumpfes passiert, aber zufällig innerhalb der `condition` und `afterthought` Teile zugänglich ist. Genauer gesagt, `let` Deklarationen sind in `for` Schleifen speziell behandelt — wenn `initialization` eine `let` Deklaration ist, dann passiert jedes Mal nach Auswertung des Schleifenrumpfes folgendes:

1. Ein neuer lexikalischer Gültigkeitsbereich wird mit neuen `let`-deklarierten Variablen erstellt.
2. Die Bindungswerte aus der letzten Iteration werden verwendet, um die neuen Variablen neu zu initialisieren.
3. `afterthought` wird im neuen Gültigkeitsbereich ausgewertet.

Das Neuzuweisen der neuen Variablen innerhalb von `afterthought` betrifft nicht die Bindungen aus der vorherigen Iteration.

Ein neuer lexikalischer Gültigkeitsbereich wird auch nach `initialization` erstellt, bevor `condition` zum ersten Mal ausgewertet wird. Diese Details können durch die Erstellung von closures beobachtet werden, die es ermöglichen, eine Bindung zu einem bestimmten Punkt zu erhalten. Zum Beispiel in diesem Code, wird eine closure, die innerhalb des `initialization` Abschnitts erstellt wurde, nicht durch Neuzuweisungen von `i` in `afterthought` aktualisiert:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

Das protokolliert nicht "0, 1, 2", wie es der Fall wäre, wenn `getI` im Schleifenrumpf deklariert wäre. Das liegt daran, dass `getI` nicht bei jeder Iteration neu ausgewertet wird — vielmehr wird die Funktion einmal erstellt und umschließt die `i` Variable, die sich auf die Variable bezieht, die bei der ersten Initialisierung der Schleife deklariert wurde. Nachfolgende Aktualisierungen des Wertes von `i` erstellen tatsächlich neue Variablen namens `i`, die `getI` nicht sieht. Eine Möglichkeit, dies zu beheben, besteht darin, `getI` jedes Mal neu zu berechnen, wenn `i` aktualisiert wird:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

Die `i` Variable innerhalb des `initialization` ist von der `i` Variable innerhalb jeder Iteration, einschließlich der ersten, verschieden. In diesem Beispiel gibt `getI` 0 zurück, obwohl der Wert von `i` innerhalb der Iteration vorher inkrementiert wurde:

```js
for (let i = 0, getI = () => i; i < 3;) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

Tatsächlich können Sie diese anfängliche Bindung der `i` Variable einfangen und später neu zuweisen, und dieser aktualisierte Wert wird im Schleifenrumpf nicht sichtbar sein, der die nächste neue Bindung von `i` sieht.

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

Dies protokolliert "0, 0, 0", weil die `i` Variable in jeder Schleifenauswertung tatsächlich eine separate Variable ist, aber `getI` und `incrementI` lesen und schreiben beide die _anfängliche_ Bindung von `i`, nicht das, was anschließend deklariert wurde.

### Die Verwendung von for ohne Körper

Der folgende `for` Zyklus berechnet die Versatzposition eines Knotens im `afterthought` Abschnitt und benötigt daher nicht die Verwendung eines `statement` Abschnitts, ein Semikolon wird stattdessen benutzt.

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

Beachten Sie, dass das Semikolon nach der `for` Anweisung obligatorisch ist, da es als eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) steht. Andernfalls würde die `for` Anweisung die folgende `console.log` Zeile als ihren `statement` Abschnitt übernehmen, wodurch der `log` mehrmals ausgeführt wird.

### Die Verwendung von for mit zwei iterierenden Variablen

Sie können zwei Zähler erstellen, die in einer for Schleife gleichzeitig mit dem [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) aktualisiert werden. Mehrere `let` und `var` Deklarationen können auch mit Kommas verbunden werden.

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
