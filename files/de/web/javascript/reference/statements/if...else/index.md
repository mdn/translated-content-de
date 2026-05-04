---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
l10n:
  sourceCommit: 0dff7c501b844de960d5a180c1348a9ce01b82fe
---

Die **`if...else`**-Anweisung führt eine Anweisung aus, wenn eine angegebene Bedingung {{Glossary("truthy", "truthy")}} ist. Wenn die Bedingung {{Glossary("falsy", "falsy")}} ist, wird eine andere Anweisung im optionalen `else`-Zweig ausgeführt.

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
  - : Ein Ausdruck, der als entweder {{Glossary("truthy", "truthy")}} oder {{Glossary("falsy", "falsy")}} betrachtet wird.
- `statement1`
  - : Anweisung, die ausgeführt wird, wenn _condition_ {{Glossary("truthy", "truthy")}} ist. Kann jede Anweisung sein, einschließlich weiterer verschachtelter `if`-Anweisungen. Um mehrere Anweisungen auszuführen, verwenden Sie eine [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung (`{ /* ... */ }`), um diese Anweisungen zu gruppieren. Um keine Anweisungen auszuführen, verwenden Sie eine [leere](/de/docs/Web/JavaScript/Reference/Statements/Empty)-Anweisung.
- `statement2`
  - : Anweisung, die ausgeführt wird, wenn `condition` {{Glossary("falsy", "falsy")}} ist und der `else`-Zweig existiert. Kann jede Anweisung sein, einschließlich Blockanweisungen und weiteren verschachtelten `if`-Anweisungen.

## Beschreibung

Mehrere `if...else`-Anweisungen können verschachtelt werden, um einen `else if`-Zweig zu erstellen. Beachten Sie, dass es in JavaScript kein `elseif`-Schlüsselwort (in einem Wort) gibt.

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

Um zu sehen, wie dies funktioniert, sieht es bei richtiger Einrückung der Verschachtelung folgendermaßen aus:

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

Die Bedingungen werden in der Reihenfolge ausgewertet, bis eine Bedingung zu `true` ausgewertet wird. Zu diesem Zeitpunkt wird die zugehörige Anweisung ausgeführt und die restlichen `else if`-Zweige werden übersprungen.

Um mehrere Anweisungen innerhalb eines Zweiges auszuführen, verwenden Sie eine Blockanweisung (`{ /* ... */ }`), um diese Anweisungen zu gruppieren.

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

Dieser Code sieht harmlos aus — jedoch wird beim Ausführen von `checkValue(1, 3)` "a is not 1" protokolliert. Dies liegt daran, dass im Fall von [dangling else](https://en.wikipedia.org/wiki/Dangling_else) der `else`-Zweig mit der nächsten `if`-Anweisung verbunden wird. Daher würde der obige Code, bei richtiger Einrückung, folgendermaßen aussehen:

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

Verwechseln Sie nicht die primitiven Booleschen Werte `true` und `false` mit der Truthiness oder Falsiness des {{jsxref("Boolean")}}-Objekts. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `-0`, `NaN` oder der leere String (`""`) ist, sowie jedes Objekt, einschließlich eines Booleschen Objekts, dessen Wert `false` ist, wird als {{Glossary("truthy", "truthy")}} betrachtet, wenn es als Bedingung verwendet wird. Zum Beispiel:

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

Beachten Sie, dass es in JavaScript keine `elseif`-Syntax gibt. Sie können es jedoch mit einem Leerzeichen zwischen `else` und `if` schreiben:

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

Denn im Gegensatz zu {{jsxref("Statements/while", "while")}}-Schleifen wird die Bedingung nur einmal ausgewertet, sodass die Zuweisung nur einmal ausgeführt wird. Der obige Code ist äquivalent zu:

```js example-good
x = y;
if (x) {
  // …
}
```

Was viel klarer ist. Sollte es jedoch in seltenen Fällen erforderlich sein, etwas Ähnliches zu tun, enthält die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Dokumentation einen Abschnitt zu [Verwendung einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) mit unseren Empfehlungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/block", "block")}}
- {{jsxref("Statements/switch", "switch")}}
- [Konditionaler (ternärer) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
