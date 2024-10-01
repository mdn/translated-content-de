---
title: while
slug: Web/JavaScript/Reference/Statements/while
l10n:
  sourceCommit: becca01d713f7f3c37f40ede7ee7c282312dfa4f
---

{{jsSidebar("Statements")}}

Die **`while`**-Anweisung erstellt eine Schleife, die eine angegebene Anweisung ausführt, solange die Bedingung wahr ist. Die Bedingung wird vor der Ausführung der Anweisung überprüft.

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## Syntax

```js-nolint
while (condition)
  statement
```

- `condition`
  - : Ein Ausdruck, der _vor_ jedem Durchlauf der Schleife ausgewertet wird. Wenn diese Bedingung {{Glossary("Truthy", "als wahr ausgewertet wird")}}, wird `statement` ausgeführt. Wenn die Bedingung {{Glossary("Falsy", "als falsch ausgewertet wird")}}, wird die Ausführung mit der Anweisung nach der `while`-Schleife fortgesetzt.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung als wahr ausgewertet wird. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

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

Jede Iteration erhöht die Schleife `n` und addiert es zu `x`. Daher nehmen `x` und `n` die folgenden Werte an:

- Nach dem ersten Durchlauf: `n` = 1 und `x` = 1
- Nach dem zweiten Durchlauf: `n` = 2 und `x` = 3
- Nach dem dritten Durchlauf: `n` = 3 und `x` = 6

Nach Abschluss des dritten Durchlaufs ist die Bedingung `n` < 3 nicht mehr wahr, so dass die Schleife beendet wird.

### Verwendung einer Zuweisung als Bedingung

In einigen Fällen kann es sinnvoll sein, eine Zuweisung als Bedingung zu verwenden. Dies geht mit einem Kompromiss hinsichtlich der Lesbarkeit einher, weshalb es bestimmte stilistische Empfehlungen gibt, die das Muster für jeden offensichtlicher machen.

Betrachten Sie das folgende Beispiel, das über die Kommentare eines Dokuments iteriert und sie in der Konsole protokolliert.

```js-nolint example-bad
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
```

Das ist nicht ganz ein Beispiel für gute Praktiken, insbesondere wegen der folgenden Zeile:

```js-nolint example-bad
while (currentNode = iterator.nextNode()) {
```

Der _Effekt_ dieser Zeile ist in Ordnung — in dem Sinne, dass jedes Mal, wenn ein Kommentarknoten gefunden wird:

1. `iterator.nextNode()` gibt diesen Kommentarknoten zurück, der `currentNode` zugewiesen wird.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher {{Glossary("Truthy", "wahrhaftig")}}.
3. Also wird der `console.log()`-Aufruf ausgeführt und die Schleife wird fortgesetzt.

… und dann, wenn keine Kommentarknoten mehr im Dokument vorhanden sind:

1. `iterator.nextNode()` gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher ebenfalls `null`, was {{Glossary("Falsy", "falschhaft")}} ist.
3. Also endet die Schleife.

Das Problem mit dieser Zeile ist: Bedingungen verwenden typischerweise [Vergleichsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators) wie `===`, aber das `=` in dieser Zeile ist kein Vergleichsoperator — es ist stattdessen ein [Zuweisungsoperator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators). Daher _sieht_ dieses `=` so aus, als wäre es ein Tippfehler für `===` — obwohl es _tatsächlich kein_ Tippfehler ist.

Daher werden in solchen Fällen einige [Code-Linting-Tools](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain#code_linting_tools) wie die [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign)-Regel von ESLint — um Ihnen zu helfen, einen möglichen Tippfehler zu erkennen, damit Sie ihn korrigieren können — eine Warnung wie die folgende melden:

> Erwartet wurde ein bedingter Ausdruck und stattdessen wurde eine Zuweisung gesehen.

Viele Stilrichtlinien empfehlen, die Absicht, dass die Bedingung eine Zuweisung sein soll, expliziter anzugeben. Sie können dies minimal erreichen, indem Sie zusätzliche Klammern als [Gruppierungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) um die Zuweisung setzen:

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
```

Tatsächlich ist dies der Stil, der durch die Standardkonfiguration von ESLints `no-cond-assign` durchgesetzt wird, sowie von [Prettier](https://prettier.io/), sodass Sie dieses Muster wahrscheinlich häufig in freier Wildbahn sehen werden.

Einige Leute empfehlen möglicherweise zusätzlich, einen Vergleichsoperator hinzuzufügen, um die Bedingung in einen expliziten Vergleich zu verwandeln:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) !== null) {
```

Es gibt andere Möglichkeiten, dieses Muster zu schreiben, wie zum Beispiel:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) && currentNode) {
```

Oder das Konzept der Verwendung einer `while`-Schleife ganz zu verwerfen:

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

Wenn der Leser ausreichend mit dem Muster der Zuweisung als Bedingung vertraut ist, sollten alle diese Variationen eine gleichwertige Lesbarkeit haben. Andernfalls ist die letzte Form wahrscheinlich die am besten lesbare, wenn auch die ausführlichste.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
