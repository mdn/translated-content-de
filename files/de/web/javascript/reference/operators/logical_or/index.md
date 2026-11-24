---
title: Logisches ODER (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator **logisches ODER (`||`)** (logische Disjunktion) ergibt für eine Menge von Operanden genau dann `true`, wenn mindestens einer seiner Operanden `true` ist. Er wird üblicherweise mit booleschen (logischen) Werten verwendet und gibt in diesem Fall einen booleschen Wert zurück. Tatsächlich gibt der Operator `||` jedoch den Wert eines der angegebenen Operanden zurück. Wird er mit nicht booleschen Werten verwendet, kann er daher einen nicht booleschen Wert zurückgeben.

{{InteractiveExample("JavaScript Demo: Logical OR (||) operator", "shorter")}}

```js interactive-example
const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
// Expected output: true
```

## Syntax

```js-nolint
x || y
```

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 3 (logisches ODER). Ein hier verwendeter Ausdruck mit dem Nullish-Coalescing-Operator (`??`) muss in Klammern stehen.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 4 (logisches UND). Er wird nur ausgewertet, wenn `x` {{Glossary("falsy", "falsy")}} ist.

### Rückgabewert

Der Wert von `x`, wenn `x` {{Glossary("truthy", "truthy")}} ist, andernfalls der Wert von `y`.

## Beschreibung

Wenn `x` in `true` umgewandelt werden kann, wird `x` zurückgegeben; andernfalls wird `y` zurückgegeben.

Ein Wert, der in `true` umgewandelt werden kann, wird als {{Glossary("truthy", "truthy")}} bezeichnet. Ein Wert, der in `false` umgewandelt werden kann, wird als {{Glossary("falsy", "falsy")}} bezeichnet.

Beispiele für Ausdrücke, die in `false` umgewandelt werden können:

- `null`;
- `NaN`;
- `0`;
- eine leere Zeichenfolge (`""` oder `''` oder ` `` `);
- `undefined`.

Obwohl der Operator `||` mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er dennoch als boolescher Operator betrachtet werden: Sein Rückgabewert lässt sich immer in einen [booleschen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) umwandeln. Um seinen Rückgabewert (oder allgemein einen beliebigen Ausdruck) ausdrücklich in den entsprechenden booleschen Wert umzuwandeln, verwenden Sie zweimal den {{jsxref("Operators/Logical_NOT", "NOT operator", "", 1)}} oder den Konstruktor {{jsxref("Boolean/Boolean", "Boolean()")}}.

### Kurzschlussauswertung

Ein Ausdruck mit logischem ODER wird von links nach rechts ausgewertet. Dabei wird anhand der folgenden Regel geprüft, ob eine Kurzschlussauswertung möglich ist:

`(some truthy expression) || expr` wird durch Kurzschlussauswertung auf den truthy-Ausdruck reduziert.

Kurzschlussauswertung bedeutet, dass der Teil `expr` **nicht ausgewertet** wird. Mögliche Seiteneffekte treten daher nicht ein. Ist `expr` beispielsweise ein Funktionsaufruf, wird die Funktion nicht aufgerufen. Der Grund dafür ist, dass der Wert des gesamten Ausdrucks bereits nach der Auswertung des ersten Operanden feststeht. Das folgende Beispiel zeigt dies:

```js
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(B() || A());
// Logs "called B" due to the function call,
// then logs true (which is the resulting value of the operator)
```

### Operatorpriorität

Die folgenden Ausdrücke mögen gleichwertig erscheinen, sind es aber nicht: Der Operator `&&` bindet stärker als der Operator `||` (siehe [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // returns true; equivalent to true || (false && false)
(true || false) && false; // returns false, because grouping has the highest precedence
```

## Beispiele

### ODER verwenden

Der folgende Code zeigt Beispiele für den Operator `||` (logisches ODER).

```js
true || true; // t || t returns true
false || true; // f || t returns true
true || false; // t || f returns true
false || 3 === 4; // f || f returns false
"Cat" || "Dog"; // t || t returns "Cat"
false || "Cat"; // f || t returns "Cat"
"Cat" || false; // t || f returns "Cat"
"" || false; // f || f returns false
false || ""; // f || f returns ""
false || varObject; // f || object returns varObject
```

> [!NOTE]
> Wenn Sie diesen Operator verwenden, um einer Variablen einen Standardwert zuzuweisen, beachten Sie, dass jeder _falsy_-Wert durch den Standardwert ersetzt wird. Wenn Sie nur [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} abfangen möchten, sollten Sie stattdessen [den Nullish-Coalescing-Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) verwenden.

### Umformungsregeln für boolesche Ausdrücke

#### UND in ODER umformen

Der folgende Ausdruck mit **booleschen Werten**:

```js-nolint
bCondition1 && bCondition2
```

ist immer gleichwertig mit:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### ODER in UND umformen

Der folgende Ausdruck mit **booleschen Werten**:

```js-nolint
bCondition1 || bCondition2
```

ist immer gleichwertig mit:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Verschachtelte Klammern entfernen

Da logische Ausdrücke von links nach rechts ausgewertet werden, können Klammern aus einem komplexen Ausdruck entfernt werden, sofern bestimmte Regeln beachtet werden.

Der folgende zusammengesetzte Ausdruck mit **booleschen Werten**:

```js-nolint
bCondition1 && (bCondition2 || bCondition3)
```

ist immer gleichwertig mit:

```js-nolint
!(!bCondition1 || !bCondition2 && !bCondition3)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nullish-Coalescing-Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{jsxref("Boolean")}}
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
