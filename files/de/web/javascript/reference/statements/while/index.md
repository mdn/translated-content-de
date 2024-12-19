---
title: while
slug: Web/JavaScript/Reference/Statements/while
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jsSidebar("Statements")}}

Die **`while`**-Anweisung erstellt eine Schleife, die eine bestimmte Anweisung ausführt, solange die Testbedingung als wahr ausgewertet wird. Die Bedingung wird vor der Ausführung der Anweisung ausgewertet.

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## Syntax

```js-nolint
while (condition)
  statement
```

- `condition`
  - : Ein Ausdruck, der _vor_ jedem Durchlauf der Schleife ausgewertet wird. Wenn diese Bedingung {{Glossary("Truthy", "als wahr ausgewertet wird")}}, wird `statement` ausgeführt. Wenn die Bedingung {{Glossary("Falsy", "als falsch ausgewertet wird")}}, wird die Ausführung mit der Anweisung nach der `while`-Schleife fortgesetzt.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung als wahr ausgewertet wird. Sie können eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wie andere Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und wertet die `condition` erneut aus.

## Beispiele

### Verwendung von while

Die folgende `while`-Schleife iteriert, solange `n` kleiner als drei ist.

```js
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

Bei jeder Iteration erhöht die Schleife `n` und addiert es zu `x`.
Daher nehmen `x` und `n` folgende Werte an:

- Nach dem ersten Durchlauf: `n` = 1 und `x` = 1
- Nach dem zweiten Durchlauf: `n` = 2 und `x` = 3
- Nach dem dritten Durchlauf: `n` = 3 und `x` = 6

Nach Abschluss des dritten Durchlaufs ist die Bedingung `n` < 3 nicht länger wahr, sodass die Schleife endet.

### Verwendung einer Zuweisung als Bedingung

In einigen Fällen kann es sinnvoll sein, eine Zuweisung als Bedingung zu verwenden. Dies geht mit Kompromissen bei der Lesbarkeit einher, daher gibt es bestimmte stilistische Empfehlungen, die das Muster für alle offensichtlicher machen würden.

Betrachten Sie das folgende Beispiel, das über die Kommentare eines Dokuments iteriert und diese in der Konsole protokolliert.

```js-nolint example-bad
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
```

Das ist nicht durchgehend ein Beispiel für gute Praxis, aufgrund der folgenden Zeile speziell:

```js-nolint example-bad
while (currentNode = iterator.nextNode()) {
```

Die _Wirkung_ dieser Zeile ist in Ordnung — insofern als jedes Mal, wenn ein Kommentar-Knoten gefunden wird:

1. `iterator.nextNode()` gibt diesen Kommentar-Knoten zurück, der `currentNode` zugewiesen wird.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher {{Glossary("Truthy", "wahrheitsgemäß")}}.
3. Also wird der `console.log()`-Aufruf ausgeführt und die Schleife geht weiter.

…und dann, wenn es keine Kommentar-Knoten mehr im Dokument gibt:

1. `iterator.nextNode()` gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher ebenfalls `null`, was {{Glossary("Falsy", "falsch")}} ist.
3. Also endet die Schleife.

Das Problem mit dieser Zeile ist: Bedingungen verwenden typischerweise [Vergleichsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators) wie `===`, aber das `=` in dieser Zeile ist kein Vergleichsoperator — stattdessen ist es ein [Zuweisungsoperator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators). Deshalb sieht das `=` _so aus_, als wäre es ein Tippfehler für `===` — obwohl es _nicht_ tatsächlich ein Tippfehler ist.

Daher werden in solchen Fällen einige [Code-Linting-Tools](/de/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain#code_linting_tools) wie ESLints [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign) Regel — um Ihnen zu helfen, einen möglichen Tippfehler zu finden, damit Sie ihn beheben können — eine Warnung wie die folgende ausgeben:

> Eine bedingte Ausdruck wurde erwartet, stattdessen wurde eine Zuweisung gesehen.

Viele Stilrichtlinien empfehlen, die Absicht, dass die Bedingung eine Zuweisung sein soll, deutlicher zu machen. Sie können dies minimal erreichen, indem Sie zusätzliche Klammern als [Gruppierungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) um die Zuweisung setzen:

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
```

Tatsächlich ist dies der Stil, der von der Standardkonfiguration von ESLints `no-cond-assign` sowie von [Prettier](https://prettier.io/) erzwungen wird, sodass Sie dieses Muster wahrscheinlich häufig in der freien Wildbahn sehen werden.

Einige Personen könnten außerdem empfehlen, einen Vergleichsoperator hinzuzufügen, um die Bedingung in einen expliziten Vergleich zu verwandeln:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) !== null) {
```

Es gibt andere Möglichkeiten, dieses Muster zu schreiben, wie zum Beispiel:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) && currentNode) {
```

Oder, auf die Idee, eine `while`-Schleife ganz zu verzichten:

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

Wenn der Leser mit dem Muster der Zuweisung als Bedingung ausreichend vertraut ist, sollten all diese Variationen eine gleichwertige Lesbarkeit haben. Ansonsten ist die letzte Form wahrscheinlich die lesbarste, wenn auch die ausführlichste.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
