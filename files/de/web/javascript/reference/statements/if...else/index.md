---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die **`if...else`**-Anweisung führt eine Anweisung aus, wenn eine angegebene Bedingung {{Glossary("truthy", "truthy")}} ist. Ist die Bedingung {{Glossary("falsy", "falsy")}}, wird eine andere Anweisung in der optionalen `else`-Klausel ausgeführt.

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
  - : Ein Ausdruck, der entweder als {{Glossary("truthy", "truthy")}} oder als {{Glossary("falsy", "falsy")}} gilt.
- `statement1`
  - : Anweisung, die ausgeführt wird, wenn _condition_ {{Glossary("truthy", "truthy")}} ist. Dies kann eine beliebige Anweisung sein, einschließlich weiterer verschachtelter `if`-Anweisungen. Um mehrere Anweisungen auszuführen, fassen Sie diese mit einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) (`{ /* ... */ }`) zusammen. Wenn keine Anweisung ausgeführt werden soll, verwenden Sie eine [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty).
- `statement2`
  - : Anweisung, die ausgeführt wird, wenn `condition` {{Glossary("falsy", "falsy")}} ist und die `else`-Klausel vorhanden ist. Dies kann eine beliebige Anweisung sein, einschließlich Blockanweisungen und weiterer verschachtelter `if`-Anweisungen.

## Beschreibung

Mehrere `if...else`-Anweisungen können verschachtelt werden, um eine `else if`-Klausel zu bilden. Beachten Sie, dass es in JavaScript kein Schlüsselwort `elseif` (als ein Wort) gibt.

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

Mit korrekter Einrückung der Verschachtelung sieht das so aus:

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

Die Bedingungen werden der Reihe nach ausgewertet, bis eine davon `true` ergibt. Dann wird die zugehörige Anweisung ausgeführt und die übrigen `else if`-Klauseln werden übersprungen.

Um mehrere Anweisungen innerhalb einer Klausel auszuführen, fassen Sie diese mit einer Blockanweisung (`{ /* ... */ }`) zusammen.

```js-nolint
if (condition) {
  statements1
} else {
  statements2
}
```

Ohne Blöcke kann das Verhalten verwirrend sein, insbesondere wenn der Code manuell formatiert wird. Zum Beispiel:

```js-nolint example-bad
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
  else
    console.log("a is not 1");
}
```

Dieser Code sieht harmlos aus – bei der Ausführung von `checkValue(1, 3)` wird jedoch „a is not 1“ ausgegeben. Das liegt daran, dass bei einem [dangling else](https://en.wikipedia.org/wiki/Dangling_else) die `else`-Klausel der nächstgelegenen `if`-Klausel zugeordnet wird. Mit korrekter Einrückung sähe der obige Code daher so aus:

```js-nolint
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
}
```

Im Allgemeinen empfiehlt es sich, immer Blockanweisungen zu verwenden, insbesondere bei Code mit verschachtelten `if`-Anweisungen.

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

Verwechseln Sie die primitiven booleschen Werte `true` und `false` nicht damit, ob ein {{jsxref("Boolean")}}-Objekt truthy oder falsy ist. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `-0`, `0n`, `NaN` oder die leere Zeichenfolge (`""`) ist, gilt bei Verwendung als Bedingung als {{Glossary("truthy", "truthy")}}. Dazu gehören alle Objekte, auch ein Boolean-Objekt mit dem Wert `false`.

Zum Beispiel:

```js
const b = new Boolean(false);
if (b) {
  console.log("b is truthy"); // "b is truthy"
}
```

## Beispiele

### if...else verwenden

```js
if (cipherChar === fromChar) {
  result += toChar;
  x++;
} else {
  result += clearChar;
}
```

### else if verwenden

Beachten Sie, dass es in JavaScript keine `elseif`-Syntax gibt. Sie können jedoch `else` und `if` mit einem Leerzeichen dazwischen schreiben:

```js
if (x > 50) {
  /* do something */
} else if (x > 5) {
  /* do something */
} else {
  /* do something */
}
```

### Eine Zuweisung als Bedingung verwenden

Sie sollten eine Zuweisung wie `x = y` fast nie als Bedingung in einer `if...else`-Anweisung verwenden:

```js example-bad
if ((x = y)) {
  // …
}
```

Anders als bei {{jsxref("Statements/while", "while")}}-Schleifen wird die Bedingung nur einmal ausgewertet, sodass auch die Zuweisung nur einmal erfolgt. Der obige Code entspricht:

```js example-good
x = y;
if (x) {
  // …
}
```

Das ist wesentlich verständlicher. Falls Sie dennoch einmal etwas Ähnliches tun möchten, finden Sie in der Dokumentation zu [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) unter [Eine Zuweisung als Bedingung verwenden](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) unsere Empfehlungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/block", "block")}}
- {{jsxref("Statements/switch", "switch")}}
- [Bedingter (ternärer) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
