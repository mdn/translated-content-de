---
title: while
slug: Web/JavaScript/Reference/Statements/while
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`while`**-Anweisung erstellt eine Schleife, die eine spezifizierte Anweisung ausführt, solange die Testbedingung als wahr ausgewertet wird. Die Bedingung wird vor der Ausführung der Anweisung ausgewertet.

{{InteractiveExample("JavaScript Demo: Statement - While")}}

```js interactive-example
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// Expected output: 3
```

## Syntax

```js-nolint
while (condition)
  statement
```

- `condition`
  - : Ein Ausdruck, der vor jedem Durchlauf der Schleife ausgewertet wird. Wenn diese Bedingung {{Glossary("Truthy", "als wahr ausgewertet wird")}}, wird `statement` ausgeführt. Wenn die Bedingung {{Glossary("Falsy", "als falsch ausgewertet wird")}}, wird die Ausführung mit der Anweisung nach der `while`-Schleife fortgesetzt.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung als wahr ausgewertet wird. Sie können eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} beendet die Ausführung von `statement` und führt die erste Anweisung nach der Schleife aus.
- {{jsxref("Statements/continue", "continue")}} beendet die Ausführung von `statement` und wertet `condition` erneut aus.

## Beispiele

### Verwendung von while

Die folgende `while`-Schleife wird wiederholt ausgeführt, solange `n` kleiner als drei ist.

```js
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

Bei jeder Iteration erhöht die Schleife `n` und addiert es zu `x`. Somit nehmen `x` und `n` die folgenden Werte an:

- Nach dem ersten Durchgang: `n` = 1 und `x` = 1
- Nach dem zweiten Durchgang: `n` = 2 und `x` = 3
- Nach dem dritten Durchgang: `n` = 3 und `x` = 6

Nachdem der dritte Durchgang abgeschlossen ist, ist die Bedingung `n` < 3 nicht mehr erfüllt, und die Schleife endet.

### Verwendung einer Zuweisung als Bedingung

In einigen Fällen kann es sinnvoll sein, eine Zuweisung als Bedingung zu verwenden. Dies geht jedoch zulasten der Lesbarkeit, sodass es bestimmte stilistische Empfehlungen gibt, um das Muster für alle offensichtlicher zu machen.

Betrachten Sie das folgende Beispiel, das über die Kommentare eines Dokuments iteriert und sie im Konsolenprotokoll ausgibt.

```js-nolint example-bad
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
```

Dies ist kein vollständig gutes Praxisbeispiel, insbesondere wegen der folgenden Zeile:

```js-nolint example-bad
while (currentNode = iterator.nextNode()) {
```

Die _Wirkung_ dieser Zeile ist soweit in Ordnung — in dem Sinne, dass jedes Mal, wenn ein Kommentarknoten gefunden wird:

1. `iterator.nextNode()` gibt diesen Kommentarknoten zurück, welcher `currentNode` zugewiesen wird.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher {{Glossary("Truthy", "wahrheitsgemäß")}}.
3. Somit wird der `console.log()`-Aufruf ausgeführt, und die Schleife geht weiter.

…und wenn es keine weiteren Kommentarknoten im Dokument gibt:

1. `iterator.nextNode()` gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher auch `null`, was {{Glossary("Falsy", "falschgemäß")}} ist.
3. Die Schleife endet also.

Das Problem bei dieser Zeile ist: Bedingungen verwenden typischerweise [Vergleichsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators) wie `===`, aber das `=` in dieser Zeile ist kein Vergleichsoperator — stattdessen ist es ein [Zuweisungsoperator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators). Dadurch _sieht_ dieses `=` aus wie ein Tippfehler für `===` — obwohl es _kein_ Tippfehler ist.

Daher melden einige [Code-Linting-Tools](/de/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain#code_linting_tools), wie beispielsweise die [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign)-Regel von ESLint, als Unterstützung, um mögliche Tippfehler zu erkennen, eine Warnung wie die folgende:

> Expected a conditional expression and instead saw an assignment.

Viele Stilrichtlinien empfehlen, die Absicht für die Bedingung, eine Zuweisung zu sein, deutlicher zu machen. Dies können Sie minimal durch zusätzliche Klammern als [Gruppenoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) um die Zuweisung erreichen:

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
```

Tatsächlich wird dieser Stil von der Standardkonfiguration der `no-cond-assign`-Regel von ESLint sowie [Prettier](https://prettier.io/) durchgesetzt, sodass Sie dieses Muster wahrscheinlich häufig in freier Wildbahn sehen werden.

Manche empfehlen zusätzlich, einen Vergleichsoperator hinzuzufügen, um die Bedingung in einen expliziten Vergleich zu verwandeln:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) !== null) {
```

Es gibt andere Möglichkeiten, dieses Muster zu schreiben, wie:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) && currentNode) {
```

Oder indem man ganz auf die Idee verzichtet, eine `while`-Schleife zu verwenden:

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
for (
  let currentNode = iterator.nextNode();
  currentNode;
  currentNode = iterator.nextNode()
) {
  console.log(currentNode.textContent.trim());
}
```

Wenn die Leser:innen mit dem Muster "Zuweisung als Bedingung" ausreichend vertraut sind, sollten alle diese Varianten eine vergleichbare Lesbarkeit aufweisen. Andernfalls ist die letzte Form vermutlich die am einfachsten zu lesende, wenngleich die umfangreichste.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
