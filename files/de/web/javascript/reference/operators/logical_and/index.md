---
title: Logisches UND (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{jsSidebar("Operators")}}

Der Operator **logisches UND (`&&`)** (logische Konjunktion) für eine Menge von booleschen Operanden ist `true`, wenn und nur wenn alle Operanden `true` sind. Andernfalls ist er `false`.

Allgemeiner gesagt gibt der Operator den Wert des ersten [falsy](/de/docs/Glossary/falsy) Operanden zurück, der beim Auswerten von links nach rechts gefunden wird, oder den Wert des letzten Operanden, wenn alle [truthy](/de/docs/Glossary/truthy) sind.

{{EmbedInteractiveExample("pages/js/expressions-logical-and.html", "shorter")}}

## Syntax

```js-nolint
x && y
```

## Beschreibung

Logisches UND (`&&`) wertet Operanden von links nach rechts aus und gibt sofort den Wert des ersten [falsy](/de/docs/Glossary/falsy) Operanden zurück, den es findet; wenn alle Werte [truthy](/de/docs/Glossary/truthy) sind, wird der Wert des letzten Operanden zurückgegeben.

Wenn ein Wert in `true` umgewandelt werden kann, wird er als [truthy](/de/docs/Glossary/truthy) bezeichnet. Wenn ein Wert in `false` umgewandelt werden kann, wird er als [falsy](/de/docs/Glossary/falsy) bezeichnet.

Beispiele für Ausdrücke, die in `false` umgewandelt werden können, sind:

- `false`;
- `null`;
- `NaN`;
- `0`;
- leere Zeichenkette (`""` oder `''` oder ` ` ``);
- `undefined`.

Der UND-Operator bewahrt Nicht-Boolesche Werte und gibt sie unverändert zurück:

```js
result = "" && "foo"; // result is assigned "" (empty string)
result = 2 && 0; // result is assigned 0
result = "foo" && 4; // result is assigned 4
```

Auch wenn der `&&` Operator mit Nicht-Booleschen Operanden verwendet werden kann, wird er immer noch als boolescher Operator betrachtet, da sein Rückgabewert immer in einen [Booleschen Wert](/de/docs/Web/JavaScript/Data_structures#boolean_type) umgewandelt werden kann.
Um seinen Rückgabewert (oder irgendeinen Ausdruck) explizit in den entsprechenden booleschen Wert umzuwandeln, verwenden Sie einen doppelten [NOT-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT) oder den {{jsxref("Boolean/Boolean", "Boolean")}} Konstruktor.

### Kurzschlussauswertung

Der logische UND-Ausdruck ist ein Kurzschlussoperator.
Da jeder Operand in einen booleschen Wert umgewandelt wird, stoppt der UND-Operator, sobald das Ergebnis einer Umwandlung `false` ist, und gibt den ursprünglichen Wert dieses falsy Operanden zurück; er wertet keine der verbleibenden Operanden aus.

Betrachten Sie das folgende Pseudocode.

```plain
(some falsy expression) && expr
```

Der Teil `expr` wird **niemals ausgewertet**, weil der erste Operand `(irgendein falsy Ausdruck)` als [falsy](/de/docs/Glossary/falsy) ausgewertet wird.
Wenn `expr` eine Funktion ist, wird die Funktion nie aufgerufen.
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

### Operatorpräzedenz

Der UND-Operator hat eine höhere Priorität als der OR-Operator, was bedeutet, dass der `&&` Operator vor dem `||` Operator ausgeführt wird (siehe [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

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

### Umwandlungsregeln für Boolesche Werte

#### Umwandlung von UND zu OR

Die folgende Operation, die **boolesche Werte** betrifft:

```js-nolint
bCondition1 && bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Umwandlung von OR zu UND

Die folgende Operation, die **boolesche Werte** betrifft:

```js-nolint
bCondition1 || bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Entfernen von verschachtelten Klammern

Da logische Ausdrücke von links nach rechts ausgewertet werden, ist es immer möglich, Klammern aus einem komplexen Ausdruck zu entfernen, vorausgesetzt, es werden bestimmte Regeln befolgt.

Die folgende zusammengesetzte Operation, die **boolesche Werte** betrifft:

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
