---
title: while
slug: Web/JavaScript/Reference/Statements/while
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`while`**-Anweisung erzeugt eine Schleife, die eine bestimmte Anweisung ausführt, solange die Prüfbedingung als wahr bewertet wird. Die Bedingung wird vor der Ausführung der Anweisung ausgewertet.

{{InteractiveExample("JavaScript Demo: while statement")}}

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
  - : Ein Ausdruck, der _vor_ jedem Durchlauf der Schleife ausgewertet wird. Wenn diese Bedingung {{Glossary("Truthy", "als wahr bewertet wird")}}, wird `statement` ausgeführt. Wenn die Bedingung {{Glossary("Falsy", "als falsch bewertet wird")}}, wird die Ausführung mit der Anweisung nach der `while`-Schleife fortgesetzt.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung als wahr bewertet wird. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und fährt mit der ersten Anweisung nach der Schleife fort.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und wertet `condition` neu aus.

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

Bei jeder Iteration erhöht die Schleife `n` und addiert es zu `x`. Daher haben `x` und `n` die folgenden Werte:

- Nach dem ersten Durchlauf: `n` = 1 und `x` = 1
- Nach dem zweiten Durchlauf: `n` = 2 und `x` = 3
- Nach dem dritten Durchlauf: `n` = 3 und `x` = 6

Nach Abschluss des dritten Durchlaufs ist die Bedingung `n` < 3 nicht mehr wahr, sodass die Schleife beendet wird.

### Verwenden einer Zuweisung als Bedingung

In einigen Fällen kann es sinnvoll sein, eine Zuweisung als Bedingung zu verwenden. Dies geht mit Abstrichen in der Lesbarkeit einher, daher gibt es bestimmte stilistische Empfehlungen, um das Muster für alle offensichtlicher zu machen.

Betrachten Sie das folgende Beispiel, das über die Kommentare eines Dokuments iteriert und sie in der Konsole protokolliert.

```js-nolint example-bad
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
```

Dies ist kein durchgängiges Beispiel für bewährte Praktiken, insbesondere wegen der folgenden Zeile:

```js-nolint example-bad
while (currentNode = iterator.nextNode()) {
```

Der _Effekt_ dieser Zeile ist in Ordnung — in dem Sinne, dass jedes Mal, wenn ein Kommentarknoten gefunden wird:

1. `iterator.nextNode()` gibt diesen Kommentarknoten zurück, der `currentNode` zugewiesen wird.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher {{Glossary("Truthy", "wahrheitsgemäß")}}.
3. Somit wird der `console.log()`-Aufruf ausgeführt, und die Schleife wird fortgesetzt.

...und dann, wenn keine Kommentarknoten mehr im Dokument vorhanden sind:

1. `iterator.nextNode()` gibt [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher ebenfalls `null`, was {{Glossary("Falsy", "falsch")}} ist.
3. Somit endet die Schleife.

Das Problem bei dieser Zeile ist: typischerweise verwenden Bedingungen [Vergleichsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators) wie `===`, aber das `=` in dieser Zeile ist kein Vergleichsoperator — stattdessen ist es ein [Zuweisungsoperator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators). Das `=` _sieht so aus_, als wäre es ein Tippfehler für `===` — obwohl es _kein_ Tippfehler ist.

Daher werden einige [Code-Linting-Tools](/de/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain#code_linting_tools) wie die ESLint-Regel [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign) — um Ihnen zu helfen, einen möglichen Tippfehler zu erkennen, damit Sie ihn beheben können — eine Warnung wie die folgende melden:

> Anstelle eines bedingten Ausdrucks wurde eine Zuweisung erwartet.

Viele Stilrichtlinien empfehlen, die Absicht für die Bedingung als Zuweisung expliziter anzugeben. Sie können das minimal tun, indem Sie zusätzliche Klammern als [Gruppierungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) um die Zuweisung setzen:

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
```

Tatsächlich wird dieser Stil von der Standardkonfiguration von ESLint `no-cond-assign` erzwungen, ebenso wie von [Prettier](https://prettier.io/), daher werden Sie dieses Muster wahrscheinlich oft in der freien Natur sehen.

Einige Leute empfehlen möglicherweise weiter, einen Vergleichsoperator hinzuzufügen, um die Bedingung in einen expliziten Vergleich zu verwandeln:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) !== null) {
```

Es gibt andere Möglichkeiten, dieses Muster zu schreiben, wie zum Beispiel:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) && currentNode) {
```

Oder gänzlich auf die Idee verzichten, eine `while`-Schleife zu verwenden:

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

Wenn die Leser ausreichend mit dem Muster der Zuweisung als Bedingung vertraut sind, sollten all diese Variationen eine gleichwertige Lesbarkeit aufweisen. Andernfalls ist die letzte Form wahrscheinlich am lesbarsten, wenn auch die ausführlichste.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
