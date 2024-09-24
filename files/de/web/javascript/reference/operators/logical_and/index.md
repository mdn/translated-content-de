---
title: Logisches UND (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{jsSidebar("Operators")}}

Der **logische UND (`&&`)**-Operator (logische Konjunktion) für eine Menge von booleschen Operanden ist `true`, wenn und nur wenn alle Operanden `true` sind. Andernfalls ist er `false`.

Allgemeiner gesagt gibt der Operator den Wert des ersten {{Glossary("falsy")}} Operanden zurück, der bei der Auswertung von links nach rechts gefunden wird, oder den Wert des letzten Operanden, wenn alle {{Glossary("truthy")}} sind.

{{EmbedInteractiveExample("pages/js/expressions-logical-and.html", "shorter")}}

## Syntax

```js-nolint
x && y
```

## Beschreibung

Logisches UND (`&&`) bewertet Operanden von links nach rechts und gibt sofort den Wert des ersten {{Glossary("falsy")}} Operanden zurück, den es findet; wenn alle Werte {{Glossary("truthy")}} sind, wird der Wert des letzten Operanden zurückgegeben.

Wenn ein Wert zu `true` konvertierbar ist, wird der Wert als {{Glossary("truthy")}} bezeichnet. Wenn ein Wert zu `false` konvertierbar ist, wird der Wert als {{Glossary("falsy")}} bezeichnet.

Beispiele für Ausdrücke, die zu false konvertiert werden können, sind:

- `false`;
- `null`;
- `NaN`;
- `0`;
- leerer String (`""` oder `''` oder ` `` `);
- `undefined`.

Der UND-Operator bewahrt nicht-boolesche Werte und gibt sie unverändert zurück:

```js
result = "" && "foo"; // result wird "" (leerem String) zugewiesen
result = 2 && 0; // result wird 0 zugewiesen
result = "foo" && 4; // result wird 4 zugewiesen
```

Obwohl der `&&`-Operator mit nicht-booleschen Operanden verwendet werden kann, wird er dennoch als boolescher Operator betrachtet, da sein Rückgabewert immer in einen [booleschen Grundwert](/de/docs/Web/JavaScript/Data_structures#boolean_type) konvertiert werden kann.
Um seinen Rückgabewert (oder allgemein jeden Ausdruck) explizit in den entsprechenden booleschen Wert zu konvertieren, verwenden Sie einen doppelten [NOT-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT) oder den {{jsxref("Boolean/Boolean", "Boolean")}}-Konstruktor.

### Kurzschlussauswertung

Der logische UND-Ausdruck ist ein Kurzschlussoperator.
Da jeder Operand in einen booleschen Wert umgewandelt wird, stoppt der UND-Operator, wenn das Ergebnis einer Umwandlung `false` ist, und gibt den ursprünglichen Wert dieses falschen Operanden zurück; er bewertet keine der verbleibenden Operanden.

Betrachten Sie den folgenden Pseudocode.

```plain
(einige falsy-Ausdrücke) && expr
```

Der `expr`-Teil wird **nie ausgewertet**, weil der erste Operand `(einige falsy-Ausdrücke)` als {{Glossary("falsy")}} ausgewertet wird.
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
// Protokolliert "called A" in die Konsole aufgrund des Aufrufs der Funktion A,
// && wird zu false ausgewertet (Funktion A gibt false zurück), dann wird false in die Konsole protokolliert;
// der AND-Operator macht hier einen Kurzschluss und ignoriert Funktion B
```

### Operatorenpriorität

Der UND-Operator hat eine höhere Priorität als der OR-Operator, was bedeutet, dass der `&&`-Operator vor dem `||`-Operator ausgeführt wird (siehe [Operatorenpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // true
true && (false || false); // false
(2 === 3) || (4 < 0) && (1 === 1); // false
```

## Beispiele

### Verwendung von AND

Der folgende Code zeigt Beispiele des `&&` (logisches UND)-Operators.

```js
a1 = true && true; // t && t ergibt true
a2 = true && false; // t && f ergibt false
a3 = false && true; // f && t ergibt false
a4 = false && 3 === 4; // f && f ergibt false
a5 = "Cat" && "Dog"; // t && t ergibt "Dog"
a6 = false && "Cat"; // f && t ergibt false
a7 = "Cat" && false; // t && f ergibt false
a8 = "" && false; // f && f ergibt ""
a9 = false && ""; // f && f ergibt false
```

### Umwandlungsregeln für Booleans

#### AND in OR umwandeln

Die folgende Operation mit **Booleans**:

```js-nolint
bCondition1 && bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### OR in AND umwandeln

Die folgende Operation mit **Booleans**:

```js-nolint
bCondition1 || bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Entfernen von verschachtelten Klammern

Da logische Ausdrücke von links nach rechts ausgewertet werden, ist es immer möglich, Klammern aus einem komplexen Ausdruck zu entfernen, sofern bestimmte Regeln befolgt werden.

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
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
