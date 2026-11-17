---
title: Logisches ODER (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Der Operator **logisches ODER (`||`)** (logische Disjunktion) für eine Gruppe von Operanden ergibt genau dann `true`, wenn mindestens einer seiner Operanden `true` ist. Er wird üblicherweise mit booleschen (logischen) Werten verwendet und gibt in diesem Fall einen booleschen Wert zurück. Tatsächlich gibt der Operator `||` jedoch den Wert eines der angegebenen Operanden zurück. Wird er mit nicht-booleschen Werten verwendet, kann er daher einen nicht-booleschen Wert zurückgeben.

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

## Beschreibung

Wenn `x` in `true` umgewandelt werden kann, wird `x` zurückgegeben; andernfalls wird `y` zurückgegeben.

Ein Wert, der in `true` umgewandelt werden kann, wird als {{Glossary("truthy", "truthy")}} bezeichnet. Ein Wert, der in `false` umgewandelt werden kann, wird als {{Glossary("falsy", "falsy")}} bezeichnet.

Beispiele für Ausdrücke, die in `false` umgewandelt werden können:

- `null`;
- `NaN`;
- `0`;
- eine leere Zeichenfolge (`""` oder `''` oder ` `` `);
- `undefined`.

Obwohl der Operator `||` mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er als boolescher Operator betrachtet werden, da sein Rückgabewert immer in einen [booleschen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) umgewandelt werden kann. Um seinen Rückgabewert (oder einen beliebigen Ausdruck) ausdrücklich in den entsprechenden booleschen Wert umzuwandeln, verwenden Sie den {{jsxref("Operators/Logical_NOT", "NOT operator", "", 1)}} zweimal oder den Konstruktor {{jsxref("Boolean/Boolean", "Boolean()")}}.

### Kurzschlussauswertung

Ein logischer ODER-Ausdruck wird von links nach rechts ausgewertet. Dabei wird anhand der folgenden Regel geprüft, ob eine „Kurzschlussauswertung“ möglich ist:

`(some truthy expression) || expr` wird durch Kurzschlussauswertung auf den truthy-Ausdruck reduziert.

Kurzschlussauswertung bedeutet, dass der Teil `expr` **nicht ausgewertet** wird. Daher treten auch keine möglichen Seiteneffekte auf (wenn `expr` beispielsweise ein Funktionsaufruf ist, wird die Funktion nicht aufgerufen). Das liegt daran, dass der Wert des Ausdrucks bereits nach der Auswertung des ersten Operanden feststeht. Ein Beispiel:

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

Die folgenden Ausdrücke mögen gleichwertig erscheinen, sind es aber nicht, da der Operator `&&` stärker bindet als der Operator `||` (siehe [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

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
> Wenn Sie diesen Operator verwenden, um einer Variablen einen Standardwert zuzuweisen, beachten Sie, dass jeder _falsy_-Wert verworfen wird. Wenn Sie nur [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ausschließen möchten, sollten Sie stattdessen den [Nullish-Coalescing-Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) verwenden.

### Umwandlungsregeln für boolesche Werte

#### UND in ODER umwandeln

Die folgende Operation mit **booleschen Werten**:

```js-nolint
bCondition1 && bCondition2
```

ist immer gleichbedeutend mit:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### ODER in UND umwandeln

Die folgende Operation mit **booleschen Werten**:

```js-nolint
bCondition1 || bCondition2
```

ist immer gleichbedeutend mit:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Verschachtelte Klammern entfernen

Da logische Ausdrücke von links nach rechts ausgewertet werden, können Klammern unter Beachtung bestimmter Regeln immer aus einem komplexen Ausdruck entfernt werden.

Die folgende zusammengesetzte Operation mit **booleschen Werten**:

```js-nolint
bCondition1 && (bCondition2 || bCondition3)
```

ist immer gleichbedeutend mit:

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
