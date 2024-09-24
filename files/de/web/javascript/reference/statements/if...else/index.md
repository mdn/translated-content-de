---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Statements")}}

Die **`if...else`**-Anweisung führt eine Anweisung aus, wenn eine angegebene Bedingung {{Glossary("truthy")}} ist. Wenn die Bedingung {{Glossary("falsy")}} ist, wird eine andere Anweisung im optionalen `else`-Abschnitt ausgeführt.

{{EmbedInteractiveExample("pages/js/statement-ifelse.html")}}

## Syntax

```js-nolint
if (condition)
  statement1

// Mit einem else-Abschnitt
if (condition)
  statement1
else
  statement2
```

- `condition`
  - : Ein Ausdruck, der entweder als {{Glossary("truthy")}} oder {{Glossary("falsy")}} betrachtet wird.
- `statement1`
  - : Anweisung, die ausgeführt wird, wenn _condition_ {{Glossary("truthy")}} ist. Kann jede Anweisung sein, einschließlich weiter verschachtelter `if`-Anweisungen. Um mehrere Anweisungen auszuführen, verwenden Sie eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) (`{ /* ... */ }`), um diese Anweisungen zu gruppieren. Um keine Anweisungen auszuführen, verwenden Sie eine [leere](/de/docs/Web/JavaScript/Reference/Statements/Empty) Anweisung.
- `statement2`
  - : Anweisung, die ausgeführt wird, wenn `condition` {{Glossary("falsy")}} ist und der `else`-Abschnitt existiert. Kann jede Anweisung sein, einschließlich Blockanweisungen und weiter verschachtelter `if`-Anweisungen.

## Beschreibung

Mehrere `if...else`-Anweisungen können verschachtelt werden, um einen `else if`-Abschnitt zu erstellen. Beachten Sie, dass es kein `elseif`-Schlüsselwort (in einem Wort) in JavaScript gibt.

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

Um zu sehen, wie dies funktioniert, hier ist, wie es aussehen würde, wenn die Verschachtelung richtig eingerückt wäre:

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

Um mehrere Anweisungen innerhalb eines Abschnitts auszuführen, verwenden Sie eine Blockanweisung (`{ /* ... */ }`), um diese Anweisungen zu gruppieren.

```js-nolint
if (condition) {
  statements1
} else {
  statements2
}
```

Das Nichtverwendung von Blöcken kann zu verwirrendem Verhalten führen, insbesondere wenn der Code manuell formatiert wird. Zum Beispiel:

```js-nolint example-bad
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
  else
    console.log("a is not 1");
}
```

Dieser Code sieht harmlos aus — jedoch wird bei der Ausführung von `checkValue(1, 3)` "a is not 1" protokolliert. Dies liegt daran, dass im Fall von [hängendem else](https://en.wikipedia.org/wiki/Dangling_else) der `else`-Abschnitt mit dem nächsten `if`-Abschnitt verbunden wird. Daher würde der obige Code mit richtiger Einrückung folgendermaßen aussehen:

```js-nolint
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
}
```

Im Allgemeinen ist es eine gute Praxis, Blockanweisungen immer zu verwenden, insbesondere in Code mit verschachtelten `if`-Anweisungen.

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

Verwechseln Sie nicht die primitiven Boolean-Werte `true` und `false` mit der Wahrhaftigkeit oder Falschheit des {{jsxref("Boolean")}}-Objekts. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `-0`, `NaN` oder der leere String (`""`) ist, und jedes Objekt, einschließlich eines Boolean-Objekts, dessen Wert `false` ist, wird als {{Glossary("truthy")}} angesehen, wenn es als Bedingung verwendet wird. Zum Beispiel:

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

Sie sollten fast nie eine `if...else`-Anweisung mit einer Zuweisung wie `x = y` als Bedingung haben:

```js example-bad
if ((x = y)) {
  // …
}
```

Weil im Gegensatz zu {{jsxref("Statements/while", "while")}}-Schleifen die Bedingung nur einmal ausgewertet wird, also die Zuweisung nur einmal durchgeführt wird. Der obige Code ist equivalent zu:

```js example-good
x = y;
if (x) {
  // …
}
```

Was viel klarer ist. Wenn Sie jedoch in dem seltenen Fall das tun möchten, lesen Sie die Dokumentation zu [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), die eine [Verwendung einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) Abschnitt mit unseren Empfehlungen enthält.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/block", "Block")}}
- {{jsxref("Statements/switch", "Switch")}}
- [Bedingungsoperator (ternärer Operator)](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
