---
title: while
slug: Web/JavaScript/Reference/Statements/while
l10n:
  sourceCommit: becca01d713f7f3c37f40ede7ee7c282312dfa4f
---

{{jsSidebar("Statements")}}

Die **`while`**-Anweisung erstellt eine Schleife, die eine angegebene Anweisung ausführt, solange die Testbedingung als wahr ausgewertet wird. Die Bedingung wird vor der Ausführung der Anweisung ausgewertet.

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## Syntax

```js-nolint
while (condition)
  statement
```

- `condition`
  - : Ein Ausdruck, der _vor_ jedem Durchlauf der Schleife ausgewertet wird. Wenn diese Bedingung [als wahr ausgewertet wird](/de/docs/Glossary/Truthy), wird `statement` ausgeführt. Wenn die Bedingung [als falsch ausgewertet wird](/de/docs/Glossary/Falsy), wird die Ausführung mit der Anweisung nach der `while`-Schleife fortgesetzt.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung als wahr ausgewertet wird. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wie andere Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb der `statement` verwenden:

- {{jsxref("Statements/break", "break")}} beendet die `statement`-Ausführung und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} beendet die `statement`-Ausführung und wertet `condition` erneut aus.

## Beispiele

### Verwendung von while

Die folgende `while`-Schleife wird iteriert, solange `n` kleiner als drei ist.

```js
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

Bei jeder Iteration erhöht die Schleife `n` und addiert es zu `x`. Daher nehmen `x` und `n` die folgenden Werte an:

- Nach dem ersten Durchlauf: `n` = 1 und `x` = 1
- Nach dem zweiten Durchlauf: `n` = 2 und `x` = 3
- Nach dem dritten Durchlauf: `n` = 3 und `x` = 6

Nachdem der dritte Durchlauf abgeschlossen ist, ist die Bedingung `n` < 3 nicht mehr wahr, sodass die Schleife endet.

### Verwendung einer Zuweisung als Bedingung

In einigen Fällen kann es sinnvoll sein, eine Zuweisung als Bedingung zu verwenden. Dies geht mit Kompromissen bei der Lesbarkeit einher, daher gibt es bestimmte stilistische Empfehlungen, die das Muster für alle offensichtlicher machen würden.

Betrachten Sie das folgende Beispiel, das über die Kommentare eines Dokuments iteriert und sie in die Konsole protokolliert.

```js-nolint example-bad
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
```

Das ist nicht vollständig ein Beispiel für gute Praktiken, insbesondere wegen der folgenden Zeile:

```js-nolint example-bad
while (currentNode = iterator.nextNode()) {
```

Der _Effekt_ dieser Zeile ist in Ordnung — insofern, als dass jedes Mal, wenn ein Kommentarknoten gefunden wird:

1. `iterator.nextNode()` gibt diesen Kommentarknoten zurück, der `currentNode` zugewiesen wird.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher [wahrheitsgemäß](/de/docs/Glossary/Truthy).
3. Daher wird der `console.log()`-Aufruf ausgeführt und die Schleife wird fortgesetzt.

…und dann, wenn es keine Kommentarknoten mehr im Dokument gibt:

1. `iterator.nextNode()` gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher ebenfalls `null`, was [falsch](/de/docs/Glossary/Falsy) ist.
3. Daher endet die Schleife.

Das Problem bei dieser Zeile ist: Bedingungen verwenden typischerweise [Vergleichsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators) wie `===`, aber das `=` in dieser Zeile ist kein Vergleichsoperator — stattdessen handelt es sich um einen [Zuweisungsoperator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators). Daher _sieht_ dieses `=` so aus, als wäre es ein Tippfehler für `===` — obwohl es _kein_ Tippfehler ist.

Daher werden in solchen Fällen einige [Code-Linting-Tools](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain#code_linting_tools) wie die [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign)-Regel von ESLint — um Ihnen zu helfen, einen möglichen Tippfehler zu erkennen, damit Sie ihn beheben können — eine Warnung ausgeben wie die folgende:

> Es wurde ein bedingter Ausdruck erwartet, stattdessen wurde eine Zuweisung gesehen.

Viele Styleguides empfehlen, die Absicht, dass die Bedingung eine Zuweisung sein soll, expliziter anzugeben. Sie können dies minimal tun, indem Sie zusätzliche Klammern als [Gruppierungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) um die Zuweisung setzen:

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
```

Tatsächlich ist dies der Stil, der von der Standardkonfiguration von ESLints `no-cond-assign` erzwungen wird, sowie von [Prettier](https://prettier.io/), daher werden Sie dieses Muster wahrscheinlich oft in der Praxis sehen.

Einige Leute könnten außerdem empfehlen, einen Vergleichsoperator hinzuzufügen, um die Bedingung in einen expliziten Vergleich zu verwandeln:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) !== null) {
```

Es gibt andere Möglichkeiten, dieses Muster zu schreiben, wie zum Beispiel:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) && currentNode) {
```

Oder, man verzichtet ganz auf die Idee, eine `while`-Schleife zu verwenden:

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

Wenn der Leser ausreichend mit dem Muster der Zuweisung als Bedingung vertraut ist, sollten alle diese Variationen eine gleichwertige Lesbarkeit haben. Andernfalls ist die letzte Form wahrscheinlich die am leichtesten lesbare, wenn auch die ausführlichste.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
