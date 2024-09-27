---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Statements")}}

Die **`if...else`**-Anweisung führt eine Anweisung aus, wenn eine angegebene Bedingung [truthy](/de/docs/Glossary/truthy) ist. Wenn die Bedingung [falsy](/de/docs/Glossary/falsy) ist, wird eine andere Anweisung im optionalen `else`-Zweig ausgeführt.

{{EmbedInteractiveExample("pages/js/statement-ifelse.html")}}

## Syntax

```js-nolint
if (condition)
  statement1

// With an else clause
if (condition)
  statement1
else
  statement2
```

- `condition`
  - : Ein Ausdruck, der als entweder [truthy](/de/docs/Glossary/truthy) oder [falsy](/de/docs/Glossary/falsy) betrachtet wird.
- `statement1`
  - : Anweisung, die ausgeführt wird, wenn _condition_ [truthy](/de/docs/Glossary/truthy) ist. Kann jede Anweisung sein, einschließlich weiter verschachtelter `if`-Anweisungen. Um mehrere Anweisungen auszuführen, verwenden Sie eine [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung (`{ /* ... */ }`), um diese Anweisungen zu gruppieren. Um keine Anweisungen auszuführen, verwenden Sie eine [leere](/de/docs/Web/JavaScript/Reference/Statements/Empty) Anweisung.
- `statement2`
  - : Anweisung, die ausgeführt wird, wenn `condition` [falsy](/de/docs/Glossary/falsy) ist und der `else`-Zweig existiert. Kann jede Anweisung sein, einschließlich Block-Anweisungen und weiter verschachtelten `if`-Anweisungen.

## Beschreibung

Mehrere `if...else`-Anweisungen können verschachtelt werden, um eine `else if`-Anweisung zu erstellen. Beachten Sie, dass es in JavaScript kein `elseif` (in einem Wort) Schlüsselwort gibt.

```js-nolint
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
// …
else
  statementN
```

Um zu sehen, wie dies funktioniert, sehen Sie hier, wie es aussehen würde, wenn die Verschachtelung richtig eingerückt wäre:

```js-nolint
if (condition1)
  statement1
else
  if (condition2)
    statement2
  else
    if (condition3)
      statement3
// …
```

Um mehrere Anweisungen innerhalb eines Zweigs auszuführen, verwenden Sie eine Block-Anweisung (`{ /* ... */ }`), um diese Anweisungen zu gruppieren.

```js-nolint
if (condition) {
  statements1
} else {
  statements2
}
```

Das Nichtverwenden von Blöcken kann zu verwirrendem Verhalten führen, insbesondere wenn der Code manuell formatiert wird. Zum Beispiel:

```js-nolint example-bad
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
  else
    console.log("a is not 1");
}
```

Dieser Code sieht harmlos aus — jedoch wird beim Ausführen von `checkValue(1, 3)` "a ist nicht 1" protokolliert. Dies liegt daran, dass im Fall eines [dangling else](https://en.wikipedia.org/wiki/Dangling_else) der `else`-Zweig mit der nächstgelegenen `if`-Klause verbunden wird. Daher würde der obige Code bei richtiger Einrückung so aussehen:

```js-nolint
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
}
```

Im Allgemeinen ist es eine gute Praxis, immer Block-Anweisungen zu verwenden, insbesondere bei Code mit verschachtelten `if`-Anweisungen.

```js example-good
function checkValue(a, b) {
  if (a === 1) {
    if (b === 2) {
      console.log("a is 1 and b is 2");
    }
  } else {
    console.log("a is not 1");
  }
}
```

Verwechseln Sie die primitiven Booleschen Werte `true` und `false` nicht mit der Truthiness oder Falsiness des {{jsxref("Boolean")}}-Objekts. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `-0`, `NaN` oder der leere String (`""`) ist, und jedes Objekt, einschließlich eines Booleschen Objekts, dessen Wert `false` ist, wird als [truthy](/de/docs/Glossary/truthy) betrachtet, wenn er als Bedingung verwendet wird. Zum Beispiel:

```js
const b = new Boolean(false);
if (b) {
  console.log("b is truthy"); // "b is truthy"
}
```

## Beispiele

### Verwendung von if...else

```js
if (cipherChar === fromChar) {
  result += toChar;
  x++;
} else {
  result += clearChar;
}
```

### Verwendung von else if

Beachten Sie, dass es in JavaScript keine `elseif` Syntax gibt. Sie können es jedoch mit einem Leerzeichen zwischen `else` und `if` schreiben:

```js
if (x > 50) {
  /* do something */
} else if (x > 5) {
  /* do something */
} else {
  /* do something */
}
```

### Verwendung einer Zuweisung als Bedingung

Sie sollten fast nie ein `if...else` mit einer Zuweisung wie `x = y` als Bedingung verwenden:

```js example-bad
if ((x = y)) {
  // …
}
```

Denn im Gegensatz zu {{jsxref("Statements/while", "while")}}-Schleifen wird die Bedingung nur einmal ausgewertet, sodass die Zuweisung nur einmal durchgeführt wird. Der obige Code entspricht:

```js example-good
x = y;
if (x) {
  // …
}
```

Was viel klarer ist. In dem seltenen Fall, dass Sie so etwas tun möchten, finden Sie in der [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) Dokumentation einen Abschnitt [Verwendung einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) mit unseren Empfehlungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/block", "block")}}
- {{jsxref("Statements/switch", "switch")}}
- [Bedingungsoperator (ternary)](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
