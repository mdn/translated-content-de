---
title: while
slug: Web/JavaScript/Reference/Statements/while
l10n:
  sourceCommit: becca01d713f7f3c37f40ede7ee7c282312dfa4f
---

{{jsSidebar("Statements")}}

Die **`while`**-Anweisung erstellt eine Schleife, die eine angegebene Anweisung ausführt, solange die Testbedingung als wahr bewertet wird. Die Bedingung wird vor der Ausführung der Anweisung ausgewertet.

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## Syntax

```js-nolint
while (condition)
  statement
```

- `condition`
  - : Ein Ausdruck, der vor jedem Durchlauf der Schleife ausgewertet wird. Wenn diese Bedingung [als wahr bewertet](/de/docs/Glossary/Truthy) wird, wird `statement` ausgeführt. Wenn die Bedingung [als falsch bewertet](/de/docs/Glossary/Falsy) wird, erfolgt die Ausführung mit der Anweisung nach der `while`-Schleife.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung als wahr bewertet wird. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wie andere Schleifenanweisungen können Sie in `statement` [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und wertet die Bedingung erneut aus.

## Beispiele

### Verwendung von while

Die folgende `while`-Schleife wiederholt sich, solange `n` kleiner als drei ist.

```js
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

Jede Iteration erhöht die Schleife `n` und addiert es zu `x`. Daher nehmen `x` und `n` die folgenden Werte an:

- Nach der ersten Durchführung: `n` = 1 und `x` = 1
- Nach der zweiten Durchführung: `n` = 2 und `x` = 3
- Nach der dritten Durchführung: `n` = 3 und `x` = 6

Nach Abschluss des dritten Durchlaufs ist die Bedingung `n` < 3 nicht mehr wahr, sodass die Schleife endet.

### Verwendung einer Zuweisung als Bedingung

In einigen Fällen kann es sinnvoll sein, eine Zuweisung als Bedingung zu verwenden. Dies geht mit Kompromissen bei der Lesbarkeit einher, daher gibt es gewisse stilistische Empfehlungen, um das Muster offensichtlicher für alle zu machen.

Betrachten Sie das folgende Beispiel, das über die Kommentare eines Dokuments iteriert und sie in die Konsole schreibt.

```js-nolint example-bad
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
```

Das ist nicht vollständig ein Beispiel für beste Praxis, insbesondere aufgrund der folgenden Zeile:

```js-nolint example-bad
while (currentNode = iterator.nextNode()) {
```

Der _Effekt_ dieser Zeile ist akzeptabel – nämlich dass jedes Mal, wenn ein Kommentarknoten gefunden wird:

1. `iterator.nextNode()` gibt diesen Kommentarknoten zurück, der an `currentNode` zugewiesen wird.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher [wahrheitsgemäß](/de/docs/Glossary/Truthy).
3. So wird der `console.log()`-Befehl ausgeführt und die Schleife geht weiter.

…und dann, wenn keine weiteren Kommentarknoten im Dokument vorhanden sind:

1. `iterator.nextNode()` gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher auch `null`, was [falsch](/de/docs/Glossary/Falsy) ist.
3. So endet die Schleife.

Das Problem bei dieser Zeile ist: Bedingungen verwenden typischerweise [Vergleichsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators) wie `===`, aber das `=` in dieser Zeile ist kein Vergleichsoperator – stattdessen ist es ein [Zuweisungsoperator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators). Also sieht dieses `=` _wie_ ein Tippfehler für `===` aus – obwohl es _kein_ Tippfehler ist.

Daher werden in solchen Fällen einige [Code-Linting-Tools](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain#code_linting_tools), wie die [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign)-Regel von ESLint, um Ihnen zu helfen, einen möglichen Tippfehler zu finden, damit Sie ihn beheben können, eine Warnung wie die folgende ausgeben:

> Erwarteter bedingter Ausdruck, aber stattdessen eine Zuweisung gesehen.

Viele Stilrichtlinien empfehlen, die Absicht, dass die Bedingung eine Zuweisung sein soll, expliziter anzugeben. Sie können dies minimal tun, indem Sie zusätzliche Klammern als [Gruppierungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) um die Zuweisung setzen:

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
```

Tatsächlich ist dies der Stil, den die Standardkonfiguration von ESLints `no-cond-assign` sowie [Prettier](https://prettier.io/) erzwingt, sodass Sie dieses Muster in der Praxis häufig sehen werden.

Einige Leute empfehlen möglicherweise auch, einen Vergleichsoperator hinzuzufügen, um die Bedingung in einen expliziten Vergleich zu verwandeln:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) !== null) {
```

Es gibt andere Möglichkeiten, dieses Muster zu schreiben, wie zum Beispiel:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) && currentNode) {
```

Oder die Idee, eine `while`-Schleife ganz zu vermeiden:

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

Wenn der Leser mit dem Muster der Zuweisung als Bedingung ausreichend vertraut ist, sollten alle diese Variationen eine gleichwertige Lesbarkeit haben. Andernfalls ist die letzte Form wahrscheinlich die am besten lesbare, wenn auch die ausführlichste.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
