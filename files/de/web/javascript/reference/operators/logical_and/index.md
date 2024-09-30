---
title: Logisches UND (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{jsSidebar("Operators")}}

Der **logische UND (`&&`)** (logische Konjunktion) Operator für eine Menge von booleschen Operanden ist `true`, wenn und nur wenn alle Operanden `true` sind. Andernfalls ist er `false`.

Allgemeiner gesagt gibt der Operator den Wert des ersten [falsy](/de/docs/Glossary/falsy) Operanden zurück, der von links nach rechts evaluiert wird, oder den Wert des letzten Operanden, wenn alle [truthy](/de/docs/Glossary/truthy) sind.

{{EmbedInteractiveExample("pages/js/expressions-logical-and.html", "shorter")}}

## Syntax

```js-nolint
x && y
```

## Beschreibung

Logisches UND (`&&`) evaluiert Operanden von links nach rechts und gibt sofort den Wert des ersten [falsy](/de/docs/Glossary/falsy) Operanden zurück, den es findet; wenn alle Werte [truthy](/de/docs/Glossary/truthy) sind, wird der Wert des letzten Operanden zurückgegeben.

Wenn ein Wert in `true` konvertiert werden kann, wird dieser Wert als [truthy](/de/docs/Glossary/truthy) bezeichnet. Wenn ein Wert in `false` konvertiert werden kann, wird dieser Wert als [falsy](/de/docs/Glossary/falsy) bezeichnet.

Beispiele für Ausdrücke, die in false konvertiert werden können, sind:

- `false`;
- `null`;
- `NaN`;
- `0`;
- ein leerer String (`""` oder `''` oder ` `` `);
- `undefined`.

Der UND-Operator erhält nicht-boolesche Werte bei und gibt sie so zurück, wie sie sind:

```js
result = "" && "foo"; // result is assigned "" (empty string)
result = 2 && 0; // result is assigned 0
result = "foo" && 4; // result is assigned 4
```

Auch wenn der `&&` Operator mit nicht-booleschen Operanden verwendet werden kann, wird er dennoch als boolescher Operator betrachtet, da sein Rückgabewert immer in einen [booleschen primitiven Wert](/de/docs/Web/JavaScript/Data_structures#boolean_type) konvertiert werden kann.
Um seinen Rückgabewert (oder einen beliebigen Ausdruck im Allgemeinen) explizit in den entsprechenden booleschen Wert zu konvertieren, verwenden Sie einen doppelten [NOT-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT) oder den {{jsxref("Boolean/Boolean", "Boolean")}} Konstruktor.

### Kurzschlussauswertung

Der logische UND-Ausdruck ist ein Kurzschlussoperator.
Da jeder Operand in einen booleschen Wert konvertiert wird, unterbricht der AND-Operator die Auswertung und gibt den ursprünglichen Wert des ersten falsy Operanden zurück, wenn das Ergebnis einer Konvertierung `false` ist; die verbleibenden Operanden werden **nicht** ausgewertet.

Betrachten Sie den folgenden Pseudocode.

```plain
(some falsy expression) && expr
```

Der `expr`-Teil wird **niemals ausgewertet**, da der erste Operand `(ein falsy Ausdruck)` als [falsy](/de/docs/Glossary/falsy) evaluiert wird.
Wenn `expr` eine Funktion ist, wird die Funktion niemals aufgerufen.
Siehe folgendes Beispiel:

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

### Operatorpräzedenz

Der UND-Operator hat eine höhere Präzedenz als der OR-Operator, was bedeutet, dass der `&&` Operator vor dem `||` Operator ausgeführt wird (siehe [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // true
true && (false || false); // false
(2 === 3) || (4 < 0) && (1 === 1); // false
```

## Beispiele

### Verwendung von UND

Der folgende Code zeigt Beispiele für den `&&` (logisches UND) Operator.

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

### Konvertierungsregeln für Booleans

#### Konvertierung von UND zu OR

Die folgende Operation mit **booleans**:

```js-nolint
bCondition1 && bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Konvertierung von OR zu UND

Die folgende Operation mit **booleans**:

```js-nolint
bCondition1 || bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Entfernen von verschachtelten Klammern

Da logische Ausdrücke von links nach rechts ausgewertet werden, ist es immer möglich, Klammern aus einem komplexen Ausdruck zu entfernen, vorausgesetzt, bestimmte Regeln werden befolgt.

Die folgende zusammengesetzte Operation mit **booleans**:

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
- [Truthy](/de/docs/Glossary/Truthy)
- [Falsy](/de/docs/Glossary/Falsy)
