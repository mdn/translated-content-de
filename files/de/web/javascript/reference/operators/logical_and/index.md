---
title: Logisches UND (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Der Operator **logisches UND (`&&`)** (logische Konjunktion) für eine Reihe boolescher Operanden ergibt genau dann `true`, wenn alle Operanden `true` sind. Andernfalls ergibt er `false`.

Allgemeiner gibt der Operator den Wert des ersten {{Glossary("falsy", "falsy")}}-Operanden zurück, auf den er bei der Auswertung von links nach rechts trifft. Sind alle Operanden {{Glossary("truthy", "truthy")}}, gibt er den Wert des letzten Operanden zurück.

{{InteractiveExample("JavaScript Demo: Logical AND (&&) operator", "shorter")}}

```js interactive-example
const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// Expected output: false
```

## Syntax

```js-nolint
x && y
```

## Beschreibung

Logisches UND (`&&`) wertet die Operanden von links nach rechts aus und gibt sofort den Wert des ersten {{Glossary("falsy", "falsy")}}-Operanden zurück, auf den es trifft. Sind alle Werte {{Glossary("truthy", "truthy")}}, wird der Wert des letzten Operanden zurückgegeben.

Wenn ein Wert in `true` umgewandelt werden kann, gilt er als {{Glossary("truthy", "truthy")}}. Wenn ein Wert in `false` umgewandelt werden kann, gilt er als {{Glossary("falsy", "falsy")}}.

Beispiele für Ausdrücke, die in `false` umgewandelt werden können, sind:

- `false`;
- `null`;
- `NaN`;
- `0`;
- eine leere Zeichenkette (`""` oder `''` oder ` `` `);
- `undefined`.

Der UND-Operator behält nicht-boolesche Werte bei und gibt sie unverändert zurück:

```js
result = "" && "foo"; // result is assigned "" (empty string)
result = 2 && 0; // result is assigned 0
result = "foo" && 4; // result is assigned 4
```

Obwohl der Operator `&&` mit nicht-booleschen Operanden verwendet werden kann, gilt er als boolescher Operator, da sein Rückgabewert immer in einen [booleschen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) umgewandelt werden kann. Um seinen Rückgabewert (oder allgemein einen beliebigen Ausdruck) ausdrücklich in den entsprechenden booleschen Wert umzuwandeln, verwenden Sie den [NOT-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT) zweimal oder den {{jsxref("Boolean/Boolean", "Boolean")}}-Konstruktor.

### Kurzschlussauswertung

Der Ausdruck für logisches UND verwendet die Kurzschlussauswertung. Wenn ein Operand bei der Umwandlung in einen booleschen Wert `false` ergibt, bricht der UND-Operator die Auswertung ab und gibt den ursprünglichen Wert dieses falsy-Operanden zurück. Die übrigen Operanden werden **nicht** ausgewertet.

Betrachten Sie den folgenden Pseudocode.

```plain
(some falsy expression) && expr
```

Der Teil `expr` wird **niemals ausgewertet**, da der erste Operand `(some falsy expression)` als {{Glossary("falsy", "falsy")}} ausgewertet wird. Wenn `expr` eine Funktion ist, wird sie niemals aufgerufen. Das folgende Beispiel veranschaulicht dies:

```js
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(A() && B());
// Logs "called A" to the console due to the call for function A,
// && evaluates to false (function A returns false), then false is logged to the console;
// the AND operator short-circuits here and ignores function B
```

### Operatorrangfolge

Der UND-Operator hat eine höhere Rangfolge als der ODER-Operator. Das bedeutet, dass der Operator `&&` Operanden stärker bindet als der Operator `||` (siehe [Operatorrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // true
true && (false || false); // false
(2 === 3) || (4 < 0) && (1 === 1); // false
```

## Beispiele

### UND verwenden

Der folgende Code zeigt Beispiele für den Operator `&&` (logisches UND).

```js
a1 = true && true; // t && t returns true
a2 = true && false; // t && f returns false
a3 = false && true; // f && t returns false
a4 = false && 3 === 4; // f && f returns false
a5 = "Cat" && "Dog"; // t && t returns "Dog"
a6 = false && "Cat"; // f && t returns false
a7 = "Cat" && false; // t && f returns false
a8 = "" && false; // f && f returns ""
a9 = false && ""; // f && f returns false
```

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

Da logische Ausdrücke von links nach rechts ausgewertet werden, können Klammern aus einem komplexen Ausdruck entfernt werden, sofern bestimmte Regeln beachtet werden.

Die folgende zusammengesetzte Operation mit **booleschen Werten**:

```js-nolint
bCondition1 || (bCondition2 && bCondition3)
```

ist immer gleichbedeutend mit:

```js-nolint
bCondition1 || bCondition2 && bCondition3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Boolean")}}
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
