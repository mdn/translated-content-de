---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: becca01d713f7f3c37f40ede7ee7c282312dfa4f
---

{{jsSidebar("Statements")}}

Die **`for`**-Anweisung erzeugt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer Anweisung (in der Regel eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block)), die in der Schleife ausgeführt wird.

{{EmbedInteractiveExample("pages/js/statement-for.html")}}

## Syntax

```js-nolint
for (initialization; condition; afterthought)
  statement
```

- `initialization` {{optional_inline}}

  - : Ein Ausdruck (einschließlich [Zuweisungsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/Assignment)) oder Variablendeklaration, die einmal ausgewertet wird, bevor die Schleife beginnt. Typischerweise zur Initialisierung einer Zählervariablen verwendet. Dieser Ausdruck kann optional neue Variablen mit den Schlüsselwörtern `var` oder `let` deklarieren. Mit `var` deklarierte Variablen sind nicht lokal zu der Schleife, d.h. sie sind im gleichen Gültigkeitsbereich wie die `for`-Schleife. Mit `let` deklarierte Variablen sind lokal zur Anweisung.

    Das Ergebnis dieses Ausdrucks wird verworfen.

- `condition` {{optional_inline}}

  - : Ein Ausdruck, der vor jeder Schleifeniteration ausgewertet wird. Wenn dieser Ausdruck [zu true ausgewertet wird](/de/docs/Glossary/Truthy), wird `statement` ausgeführt. Wenn der Ausdruck [zu false ausgewertet wird](/de/docs/Glossary/Falsy), wird die Ausführung der Schleife beendet und es wird zu der ersten Anweisung nach dem `for`-Konstrukt gesprungen.

    Dieser Bedingungstest ist optional. Wenn er weggelassen wird, wird die Bedingung immer zu true ausgewertet.

- `afterthought` {{optional_inline}}
  - : Ein Ausdruck, der am Ende jeder Schleifeniteration ausgewertet wird. Dies geschieht vor der nächsten Auswertung von `condition`. Wird im Allgemeinen verwendet, um die Zählervariable zu aktualisieren oder zu inkrementieren.
- `statement`
  - : Eine Anweisung, die solange ausgeführt wird, bis die Bedingung zu true ausgewertet wird. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen. Um keine Anweisung innerhalb der Schleife auszuführen, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Beschreibung

Wie andere Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} beendet die Ausführung von `statement` und springt zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} beendet die Ausführung von `statement` und wertet `afterthought` dann `condition` erneut aus.

## Beispiele

### Verwendung von for

Die folgende `for`-Anweisung beginnt mit der Deklaration der Variablen `i` und initialisiert sie mit `0`. Sie prüft, ob `i` kleiner als neun ist, führt die beiden folgenden Anweisungen aus und inkrementiert `i` um 1 nach jedem Durchgang der Schleife.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // weitere Anweisungen
}
```

### Syntax des Initialisierungsblocks

Der Initialisierungsblock akzeptiert sowohl Ausdrücke als auch Variablendeklarationen. Allerdings können Ausdrücke nicht unparenthesisiert den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator verwenden, da dies mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife mehrdeutig ist.

```js-nolint example-bad
for (let i = "start" in window ? window.start : 0; i < 9; i++) {
  console.log(i);
}
// SyntaxError: 'for-in' loop variable declaration may not have an initializer.
```

```js-nolint example-good
// Klammern um den gesamten Initialisierer setzen
for (let i = ("start" in window ? window.start : 0); i < 9; i++) {
  console.log(i);
}

// Klammern um den `in`-Ausdruck setzen
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
  // weitere Anweisungen
}
```

Wie der `initialization`-Block ist auch der `condition`-Teil optional. Wenn Sie diesen Ausdruck weglassen, müssen Sie sicherstellen, dass die Schleife im Körper unterbrochen wird, um keine Endlosschleife zu erstellen.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // weitere Anweisungen
}
```

Sie können auch alle drei Ausdrücke weglassen. Stellen Sie dabei sicher, dass Sie eine {{jsxref("Statements/break", "break")}}-Anweisung verwenden, um die Schleife zu beenden und auch eine Variable zu erhöhen, damit die Bedingung für das Abbrechen zu einem bestimmten Zeitpunkt wahr wird.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

Wenn Sie jedoch nicht alle drei Ausdruckspositionen vollständig nutzen – insbesondere wenn Sie keine Variablen mit dem ersten Ausdruck deklarieren, sondern etwas im übergeordneten Gültigkeitsbereich verändern – ziehen Sie eine [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife in Betracht, die die Absicht klarer macht.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexikalische Deklarationen im Initialisierungsblock

Die Deklaration einer Variablen im Initialisierungsblock weist wichtige Unterschiede zur Deklaration im übergeordneten [Gültigkeitsbereich](/de/docs/Glossary/Scope) auf, insbesondere, wenn innerhalb des Schleifenkörpers eine [Closure](/de/docs/Web/JavaScript/Closures) erstellt wird. Zum Beispiel für den folgenden Code:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Er gibt `0`, `1` und `2` aus, wie erwartet. Wenn die Variable jedoch im übergeordneten Gültigkeitsbereich definiert ist:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Er gibt `3`, `3` und `3` aus. Der Grund dafür ist, dass jedes `setTimeout` eine neue Closure erstellt, die über die `i`-Variable geschlossen wird, aber wenn die `i` nicht auf den Schleifenkörper beschränkt ist, verweisen alle Closures auf dieselbe Variable, wenn sie schließlich aufgerufen werden – und aufgrund der asynchronen Natur von [`setTimeout`](/de/docs/Web/API/setTimeout) passiert dies, nachdem die Schleife bereits beendet ist, was dazu führt, dass der Wert von `i` in den Körpern aller aufgereihten Rückrufe den Wert `3` hat.

Dies tritt auch auf, wenn Sie eine `var`-Anweisung als Initialisierung verwenden, da mit `var` deklarierte Variablen nur funktional begrenzt, jedoch nicht lexikalisch begrenzt sind (d.h. sie können nicht auf den Schleifenkörper beschränkt werden).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Gibt 3, 3, 3 aus
```

Der Scope-Effekt des Initialisierungsblocks kann so verstanden werden, als ob die Deklaration innerhalb des Schleifenkörpers passiert, aber zufällig innerhalb der `condition`- und `afterthought`-Teile zugänglich ist. Genauer gesagt, werden `let`-Deklarationen von `for`-Schleifen speziell behandelt – wenn `initialization` eine `let`-Deklaration ist, dann geschieht jedes Mal, nachdem der Schleifenkörper ausgewertet wurde, Folgendes:

1. Ein neuer lexikalischer Gültigkeitsbereich wird mit neu `let`-deklarierten Variablen erstellt.
2. Die Bindungswerte der letzten Iteration werden verwendet, um die neuen Variablen neu zu initialisieren.
3. `afterthought` wird im neuen Gültigkeitsbereich ausgewertet.

Die Neuzuordnung der neuen Variablen innerhalb von `afterthought` wirkt sich also nicht auf die Bindungen aus der vorherigen Iteration aus.

Ein neuer lexikalischer Gültigkeitsbereich wird auch nach `initialization` erstellt, kurz bevor `condition` zum ersten Mal ausgewertet wird. Diese Details können durch die Erstellung von Closures beobachtet werden, die es ermöglichen, zu einem bestimmten Zeitpunkt eine Bindung zu erfassen. Zum Beispiel in diesem Code:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Gibt 0, 0, 0 aus
```

Dies gibt nicht "0, 1, 2" aus, wie es der Fall wäre, wenn `getI` im Schleifenkörper deklariert wird. Dies liegt daran, dass `getI` nicht bei jeder Iteration neu ausgewertet wird – vielmehr wird die Funktion einmal erstellt und schließt über die `i`-Variable, die sich auf die Variable bezieht, die beim ersten Initialisieren der Schleife deklariert wurde. Die nachfolgenden Updates des Werts von `i` erstellen tatsächlich neue Variablen namens `i`, die `getI` nicht sieht. Eine Möglichkeit, dies zu beheben, besteht darin, `getI` bei jeder Aktualisierung von `i` neu zu berechnen:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Gibt 0, 1, 2 aus
```

Die `i`-Variable innerhalb der `initialization` ist von der `i`-Variable innerhalb jeder Iteration (einschließlich der ersten) getrennt. In diesem Beispiel gibt `getI` 0 zurück, obwohl der Wert von `i` innerhalb der Iteration vorher erhöht wird:

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// Gibt 0, 0, 0 aus
```

Tatsächlich können Sie diese anfängliche Bindung der `i`-Variable erfassen und später neu zuweisen, und dieser aktualisierte Wert wird nicht für den Schleifenkörper sichtbar, der jeweils die nächste neue Bindung von `i` sieht.

```js
for (
  let i = 0, getI = () => i, incrementI = () => i++;
  getI() < 3;
  incrementI()
) {
  console.log(i);
}
// Gibt 0, 0, 0 aus
```

Dies gibt "0, 0, 0" aus, weil die `i`-Variable bei jeder Schleifenauswertung tatsächlich eine separate Variable ist, aber `getI` und `incrementI` lesen und schreiben beide die _anfängliche_ Bindung von `i`, nicht das, was anschließend deklariert wurde.

### Verwendung von for ohne Körper

Der folgende `for`-Zyklus berechnet die Offset-Position eines Knotens im `afterthought`-Bereich und erfordert daher nicht die Verwendung eines `statement`-Bereichs, stattdessen wird ein Semikolon verwendet.

```js
function showOffsetPos(id) {
  let left = 0;
  let top = 0;
  for (
    let itNode = document.getElementById(id); // Initialisierung
    itNode; // Bedingung
    left += itNode.offsetLeft,
      top += itNode.offsetTop,
      itNode = itNode.offsetParent // Nachgedanke
  ); // Semikolon

  console.log(
    `Offset-Position des "${id}" Elements:
left: ${left}px;
top: ${top}px;`,
  );
}

showOffsetPos("content");

// Ausgabe:
// Offset-Position des "content"-Elements:
// left: 0px;
// top: 153px;
```

Beachten Sie, dass das Semikolon nach der `for`-Anweisung obligatorisch ist, da es als [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) steht. Andernfalls würde die `for`-Anweisung die folgende `console.log`-Zeile als ihre `statement`-Sektion übernehmen, wodurch die `log`-Anweisung mehrfach ausgeführt wird.

### Verwendung von for mit zwei iterierenden Variablen

Sie können zwei Zähler erstellen, die gleichzeitig in einer `for`-Schleife mit dem [Kommaoperator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) aktualisiert werden. Mehrere `let`- und `var`-Deklarationen können auch mit Kommas verbunden werden.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty)
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
