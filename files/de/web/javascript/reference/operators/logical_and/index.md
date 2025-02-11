---
title: Logisches UND (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **logische UND (`&&`)** (logische Konjunktion) Operator für eine Menge von booleschen Operanden ist `true`, wenn und nur wenn alle Operanden `true` sind. Andernfalls ist er `false`.

Allgemeiner gesagt gibt der Operator den Wert des ersten {{Glossary("falsy", "falsy")}}-Operands zurück, der bei der Auswertung von links nach rechts gefunden wird, oder den Wert des letzten Operanden, wenn alle {{Glossary("truthy", "truthy")}} sind.

{{InteractiveExample("JavaScript Demo: Expressions - Logical AND", "shorter")}}

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

Das logische UND (`&&`) evaluiert Operanden von links nach rechts und gibt sofort den Wert des ersten {{Glossary("falsy", "falsy")}}-Operands zurück, den es findet. Wenn alle Werte {{Glossary("truthy", "truthy")}} sind, wird der Wert des letzten Operanden zurückgegeben.

Wenn ein Wert in `true` umgewandelt werden kann, wird er als {{Glossary("truthy", "truthy")}} bezeichnet. Wenn ein Wert in `false` umgewandelt werden kann, wird er als {{Glossary("falsy", "falsy")}} bezeichnet.

Beispiele für Ausdrücke, die in `false` umgewandelt werden können, sind:

- `false`;
- `null`;
- `NaN`;
- `0`;
- leere Zeichenkette (`""` oder `''` oder ` `` `);
- `undefined`.

Der UND-Operator bewahrt nicht-boolesche Werte und gibt sie so zurück, wie sie sind:

```js
result = "" && "foo"; // result is assigned "" (empty string)
result = 2 && 0; // result is assigned 0
result = "foo" && 4; // result is assigned 4
```

Obwohl der `&&`-Operator mit nicht-booleschen Operanden verwendet werden kann, wird er dennoch als boolescher Operator betrachtet, da sein Rückgabewert immer in einen [boolean primalen Datentyp](/de/docs/Web/JavaScript/Data_structures#boolean_type) umgewandelt werden kann.
Um seinen Rückgabewert (oder jeden Ausdruck im Allgemeinen) explizit in den entsprechenden booleschen Wert umzuwandeln, verwenden Sie einen doppelten [NOT-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT) oder den {{jsxref("Boolean/Boolean", "Boolean")}}-Konstruktor.

### Kurzschlussauswertung

Der logische UND-Ausdruck ist ein **Kurzschluss-Operator**.
Da jeder Operand in einen booleschen Wert umgewandelt wird, hält der UND-Operator an und gibt den ursprünglichen Wert des falsy-Operators zurück, wenn das Ergebnis einer Umwandlung `false` ergibt. Es werden **keine weiteren Operanden** ausgewertet.

Betrachten Sie folgendes Pseudocode:

```plain
(some falsy expression) && expr
```

Der `expr`-Teil wird **niemals ausgewertet**, weil der erste Operand `(some falsy expression)` als {{Glossary("falsy", "falsy")}} ausgewertet wird.
Falls `expr` eine Funktion ist, wird diese Funktion niemals aufgerufen.
Siehe das folgende Beispiel:

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

Der UND-Operator hat eine höhere Priorität als der ODER-Operator, was bedeutet, dass der `&&`-Operator vor dem `||`-Operator ausgeführt wird (siehe [Operatorrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // true
true && (false || false); // false
(2 === 3) || (4 < 0) && (1 === 1); // false
```

## Beispiele

### Verwendung von UND

Der folgende Code zeigt Beispiele für den `&&` (logischen UND)-Operator.

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

### Umwandlungsregeln für Booleans

#### Umwandlung von UND in ODER

Die folgende Operation mit **Booleans**:

```js-nolint
bCondition1 && bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Umwandlung von ODER in UND

Die folgende Operation mit **Booleans**:

```js-nolint
bCondition1 || bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Entfernen von verschachtelten Klammern

Da logische Ausdrücke von links nach rechts ausgewertet werden, ist es immer möglich, Klammern aus einem komplexen Ausdruck zu entfernen, sofern bestimmte Regeln beachtet werden.

Die folgende zusammengesetzte Operation mit **Booleans**:

```js-nolint
bCondition1 || (bCondition2 && bCondition3)
```

ist immer gleich:

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
