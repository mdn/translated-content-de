---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`if...else`** Anweisung führt eine Anweisung aus, wenn eine angegebene Bedingung {{Glossary("truthy", "truthy")}} ist. Wenn die Bedingung {{Glossary("falsy", "falsy")}} ist, wird eine andere Anweisung im optionalen `else` Zweig ausgeführt.

{{InteractiveExample("JavaScript Demo: if...else statement")}}

```js interactive-example
function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(testNum(-5));
// Expected output: "NOT positive"
```

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
  - : Ein Ausdruck, der entweder als {{Glossary("truthy", "truthy")}} oder {{Glossary("falsy", "falsy")}} betrachtet wird.
- `statement1`
  - : Anweisung, die ausgeführt wird, wenn _condition_ {{Glossary("truthy", "truthy")}} ist. Kann eine beliebige Anweisung sein, einschließlich weiter verschachtelter `if` Anweisungen. Um mehrere Anweisungen auszuführen, verwenden Sie eine [Block](/de/docs/Web/JavaScript/Reference/Statements/block) Anweisung (`{ /* ... */ }`), um diese Anweisungen zu gruppieren. Um keine Anweisungen auszuführen, verwenden Sie eine [leere](/de/docs/Web/JavaScript/Reference/Statements/Empty) Anweisung.
- `statement2`
  - : Anweisung, die ausgeführt wird, wenn `condition` {{Glossary("falsy", "falsy")}} ist und der `else` Zweig vorhanden ist. Kann eine beliebige Anweisung sein, einschließlich Blockanweisungen und weiter verschachtelter `if` Anweisungen.

## Beschreibung

Mehrere `if...else` Anweisungen können verschachtelt werden, um einen `else if` Zweig zu erstellen. Beachten Sie, dass es kein `elseif` (in einem Wort) Schlüsselwort in JavaScript gibt.

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

Um zu sehen, wie das funktioniert, sehen Sie hier, wie die Verschachtelung bei richtiger Einrückung aussehen würde:

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

Um mehrere Anweisungen innerhalb eines Zweigs auszuführen, verwenden Sie eine Blockanweisung (`{ /* ... */ }`), um diese Anweisungen zu gruppieren.

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

Dieser Code sieht unschuldig aus — dennoch wird das Ausführen von `checkValue(1, 3)` "a is not 1" protokollieren. Dies liegt daran, dass im Fall eines [dangling else](https://en.wikipedia.org/wiki/Dangling_else) der `else` Zweig mit dem nächsten `if` Zweig verbunden wird. Daher würde der obige Code, bei korrekter Einrückung, folgendermaßen aussehen:

```js-nolint
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
}
```

Im Allgemeinen ist es eine gute Praxis, immer Blockanweisungen zu verwenden, insbesondere in Code, der verschachtelte `if` Anweisungen enthält.

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

Verwechseln Sie nicht die primitiven booleschen Werte `true` und `false` mit dem Wahrheitswert oder Falschwert des {{jsxref("Boolean")}} Objekts. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `-0`, `NaN` oder die leere Zeichenkette (`""`) ist, und jedes Objekt, einschließlich eines booleschen Objekts, dessen Wert `false` ist, wird als {{Glossary("truthy", "truthy")}} betrachtet, wenn es als Bedingung verwendet wird. Zum Beispiel:

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

Beachten Sie, dass es keine `elseif` Syntax in JavaScript gibt. Sie können es jedoch mit einem Leerzeichen zwischen `else` und `if` schreiben:

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

Sie sollten fast nie ein `if...else` mit einer Zuweisung wie `x = y` als Bedingung haben:

```js example-bad
if ((x = y)) {
  // …
}
```

Da im Gegensatz zu {{jsxref("Statements/while", "while")}} Schleifen die Bedingung nur einmal ausgewertet wird, wird die Zuweisung nur einmal durchgeführt. Der obige Code ist äquivalent zu:

```js example-good
x = y;
if (x) {
  // …
}
```

Was viel klarer ist. Wenn Sie sich jedoch in dem seltenen Fall befinden, in dem Sie so etwas tun möchten, hat die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) Dokumentation einen Abschnitt [Verwendung einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) mit unseren Empfehlungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/block", "Block")}}
- {{jsxref("Statements/switch", "switch")}}
- [Bedingter (ternärer) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
