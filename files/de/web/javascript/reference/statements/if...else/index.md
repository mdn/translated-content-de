---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`if...else`**-Anweisung führt eine Anweisung aus, wenn eine bestimmte Bedingung {{Glossary("truthy", "truthy")}} ist. Wenn die Bedingung {{Glossary("falsy", "falsy")}} ist, wird eine andere Anweisung im optionalen `else`-Abschnitt ausgeführt.

{{InteractiveExample("JavaScript Demo: Statement - If...Else")}}

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
  - : Ein Ausdruck, der als {{Glossary("truthy", "truthy")}} oder {{Glossary("falsy", "falsy")}} betrachtet wird.
- `statement1`
  - : Anweisung, die ausgeführt wird, wenn _condition_ {{Glossary("truthy", "truthy")}} ist. Kann jede Anweisung sein, einschließlich weiterer verschachtelter `if`-Anweisungen. Um mehrere Anweisungen auszuführen, verwenden Sie eine [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung (`{ /* ... */ }`), um diese Anweisungen zu gruppieren. Um keine Anweisungen auszuführen, nutzen Sie eine [leere](/de/docs/Web/JavaScript/Reference/Statements/Empty) Anweisung.
- `statement2`
  - : Anweisung, die ausgeführt wird, wenn `condition` {{Glossary("falsy", "falsy")}} ist und der `else`-Abschnitt existiert. Kann jede Anweisung sein, einschließlich Blockanweisungen und weiterer verschachtelter `if`-Anweisungen.

## Beschreibung

Mehrere `if...else`-Anweisungen können verschachtelt werden, um eine `else if`-Klausel zu erstellen. Beachten Sie, dass es in JavaScript kein `elseif`-Schlüsselwort (in einem Wort) gibt.

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

Um zu sehen, wie dies funktioniert, folgt hier die Darstellung mit ordnungsgemäßer Einrückung:

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

Um mehrere Anweisungen innerhalb einer Klausel auszuführen, verwenden Sie eine Blockanweisung (`{ /* ... */ }`), um diese Anweisungen zu gruppieren.

```js-nolint
if (condition) {
  statements1
} else {
  statements2
}
```

Das Auslassen von Blöcken kann zu verwirrendem Verhalten führen, insbesondere wenn der Code manuell formatiert wird. Zum Beispiel:

```js-nolint example-bad
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
  else
    console.log("a is not 1");
}
```

Dieser Code sieht harmlos aus – jedoch wird bei der Ausführung von `checkValue(1, 3)` die Meldung "a is not 1" ausgegeben. Dies liegt daran, dass im Fall eines [dangling else](https://en.wikipedia.org/wiki/Dangling_else) der `else`-Abschnitt mit der nächstgelegenen `if`-Klausel verbunden wird. Der oben gezeigte Code würde bei ordnungsgemäßer Einrückung so aussehen:

```js-nolint
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
}
```

Im Allgemeinen ist es eine gute Praxis, immer Blockanweisungen zu verwenden, insbesondere bei Code mit verschachtelten `if`-Anweisungen.

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

Verwechseln Sie nicht die primitiven Boolean-Werte `true` und `false` mit der Truthiness oder Falsiness des {{jsxref("Boolean")}}-Objekts. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `-0`, `NaN` oder der leere String (`""`) ist und jedes Objekt, einschließlich eines Boolean-Objekts mit dem Wert `false`, wird als {{Glossary("truthy", "truthy")}} betrachtet, wenn es als Bedingung verwendet wird. Zum Beispiel:

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

Beachten Sie, dass es keine `elseif`-Syntax in JavaScript gibt. Sie können dies jedoch mit einem Leerzeichen zwischen `else` und `if` schreiben:

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

Sie sollten fast niemals eine `if...else`-Anweisung mit einer Zuweisung wie `x = y` als Bedingung verwenden:

```js example-bad
if ((x = y)) {
  // …
}
```

Denn im Gegensatz zu {{jsxref("Statements/while", "while")}}-Schleifen wird die Bedingung nur einmal ausgewertet, sodass die Zuweisung nur einmal erfolgt. Der obige Code ist gleichbedeutend mit:

```js example-good
x = y;
if (x) {
  // …
}
```

Was viel klarer ist. Sollten Sie jedoch in dem seltenen Fall eine solche Situation haben wollen, finden Sie in der Dokumentation der [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife im Abschnitt [Verwendung einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) unsere Empfehlungen dazu.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/block", "Block")}}
- {{jsxref("Statements/switch", "Switch")}}
- [Bedingter (ternärer) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
