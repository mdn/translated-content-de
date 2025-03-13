---
title: while
slug: Web/JavaScript/Reference/Statements/while
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`while`**-Anweisung erstellt eine Schleife, die eine angegebene Anweisung ausführt, solange die Bedingung als wahr bewertet wird. Die Bedingung wird vor der Ausführung der Anweisung ausgewertet.

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
  - : Ein Ausdruck, der _vor_ jedem Durchlauf der Schleife ausgewertet wird. Wenn diese Bedingung als {{Glossary("Truthy", "wahr")}} bewertet wird, wird `statement` ausgeführt. Wenn die Bedingung als {{Glossary("Falsy", "falsch")}} bewertet wird, wird die Ausführung mit der Anweisung nach der `while`-Schleife fortgesetzt.
- `statement`
  - : Eine Anweisung, die ausgeführt wird, solange die Bedingung als wahr bewertet wird. Sie können eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Wie andere Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb der `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und bewertet die `condition` erneut.

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
Daher nehmen `x` und `n` die folgenden Werte an:

- Nach dem ersten Durchlauf: `n` = 1 und `x` = 1
- Nach dem zweiten Durchlauf: `n` = 2 und `x` = 3
- Nach dem dritten Durchlauf: `n` = 3 und `x` = 6

Nach Abschluss des dritten Durchlaufs ist die Bedingung `n` < 3 nicht mehr wahr,
sodass die Schleife beendet wird.

### Verwendung einer Zuweisung als Bedingung

In einigen Fällen kann es sinnvoll sein, eine Zuweisung als Bedingung zu verwenden. Dies bringt Lesbarkeitseinbußen mit sich, daher gibt es stilistische Empfehlungen, die das Muster für alle offensichtlicher machen.

Betrachten Sie das folgende Beispiel, das über die Kommentare eines Dokuments iteriert und sie in der Konsole protokolliert.

```js-nolint example-bad
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
```

Das ist nicht vollständig ein gutes Beispiel für Best Practices, aufgrund der folgenden spezifischen Zeile:

```js-nolint example-bad
while (currentNode = iterator.nextNode()) {
```

Die _Wirkung_ dieser Zeile ist in Ordnung — insofern als bei jedem gefundenen Kommentarknoten:

1. Gibt `iterator.nextNode()` diesen Kommentarknoten zurück, der `currentNode` zugewiesen wird.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher {{Glossary("Truthy", "wahr")}}.
3. So wird der `console.log()`-Aufruf ausgeführt und die Schleife fortgesetzt.

…und wenn es keine weiteren Kommentarknoten im Dokument gibt:

1. Gibt `iterator.nextNode()` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.
2. Der Wert von `currentNode = iterator.nextNode()` ist daher auch `null`, was {{Glossary("Falsy", "falsch")}} ist.
3. So endet die Schleife.

Das Problem mit dieser Zeile ist: Bedingungen verwenden typischerweise [Vergleichsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators) wie `===`, aber das `=` in dieser Zeile ist kein Vergleichsoperator — statt dessen ist es ein [Zuweisungsoperator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators). Daher _sieht_ das `=` aus wie ein Tippfehler für `===` — auch wenn es _in Wirklichkeit_ kein Tippfehler ist.

Daher werden in solchen Fällen einige [Code-Linting-Tools](/de/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain#code_linting_tools) wie die [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign)-Regel von ESLint — um Ihnen bei der Erkennung eines möglichen Tippfehlers zu helfen, damit Sie ihn korrigieren können — eine Warnung wie die folgende ausgeben:

> Eine bedingte Ausdruckserwartung und stattdessen eine Zuweisung gesehen.

Viele Stilrichtlinien empfehlen, die Absicht der Bedingung als Zuweisung expliziter anzugeben. Sie können dies minimal tun, indem Sie zusätzliche Klammern als [Gruppierungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) um die Zuweisung setzen:

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
```

Tatsächlich ist dies der Stil, den die Standardkonfiguration von `no-cond-assign` von ESLint sowie [Prettier](https://prettier.io/) erzwingt, daher werden Sie dieses Muster wahrscheinlich häufig in der freien Wildbahn sehen.

Einige Leute empfehlen möglicherweise zusätzlich, einen Vergleichsoperator hinzuzufügen, um die Bedingung in einen expliziten Vergleich zu verwandeln:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) !== null) {
```

Es gibt andere Möglichkeiten, dieses Muster zu schreiben, wie zum Beispiel:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) && currentNode) {
```

Oder ganz auf die Idee verzichten, eine `while`-Schleife zu verwenden:

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

Wenn der Leser mit dem Muster einer Zuweisung als Bedingung ausreichend vertraut ist, sollten alle diese Varianten gleich lesbar sein. Andernfalls ist die letzte Form wahrscheinlich am leichtesten lesbar, wenn auch am umfangreichsten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
