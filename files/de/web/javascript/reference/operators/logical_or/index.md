---
title: Logical OR (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Der **logische OR (`||`)**-Operator (logische Disjunktion) für eine Menge von Operanden
ist wahr, wenn und nur wenn einer oder mehrere seiner Operanden wahr sind. Er wird typischerweise
mit booleschen (logischen) Werten verwendet. Wenn dies der Fall ist, gibt er einen booleschen Wert zurück. Allerdings
gibt der `||`-Operator tatsächlich den Wert eines der angegebenen Operanden zurück, sodass er,
wenn er mit nicht-booleschen Werten verwendet wird, einen nicht-booleschen Wert zurückgeben kann.

{{EmbedInteractiveExample("pages/js/expressions-logical-or.html", "shorter")}}

## Syntax

```js-nolint
x || y
```

## Beschreibung

Wenn `x` in `true` konvertiert werden kann, wird `x` zurückgegeben; andernfalls wird `y` zurückgegeben.

Wenn ein Wert in `true` konvertiert werden kann, wird er als [truthy](/de/docs/Glossary/truthy) bezeichnet. Wenn ein Wert in `false` konvertiert werden kann, wird er als [falsy](/de/docs/Glossary/falsy) bezeichnet.

Beispiele für Ausdrücke, die in false konvertiert werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leerer String (`""` oder `''` oder ` `` `);
- `undefined`.

Obwohl der `||`-Operator mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er dennoch als boolescher Operator angesehen werden, da sein Rückgabewert immer in einen [boolean primitiven](/de/docs/Web/JavaScript/Data_structures#boolean_type) konvertiert werden kann. Um seinen Rückgabewert (oder einen beliebigen Ausdruck im Allgemeinen) explizit in den entsprechenden booleschen Wert zu konvertieren, verwenden Sie einen doppelten {{jsxref("Operators/Logical_NOT", "NOT-Operator", "", 1)}} oder den {{jsxref("Boolean/Boolean", "Boolean()")}}-Konstruktor.

### Kurzschlussauswertung

Der logische OR-Ausdruck wird von links nach rechts ausgewertet und auf mögliche "Kurzschluss"-Auswertung geprüft anhand der folgenden Regel:

`(ein truthy Ausdruck) || expr` wird durch Kurzschluss zum truthy Ausdruck ausgewertet.

Kurzschluss bedeutet, dass der `expr`-Teil oben **nicht ausgewertet** wird, daher treten keine Nebeneffekte der Auswertung ein (z.B., wenn `expr` ein Funktionsaufruf ist, findet der Aufruf nicht statt). Dies geschieht, weil der Wert des Operators bereits nach der Auswertung des ersten Operanden bestimmt ist. Beispiel:

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

### Operatorpräzedenz

Die folgenden Ausdrücke könnten gleich erscheinen, sind es aber nicht, da der `&&`-Operator vor dem `||`-Operator ausgeführt wird (siehe [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // returns true, because && is executed first
(true || false) && false; // returns false, because grouping has the highest precedence
```

## Beispiele

### Verwendung von OR

Der folgende Code zeigt Beispiele für den `||`-Operator (logisches OR).

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
> Wenn Sie diesen Operator verwenden, um einen Standardwert für eine
> Variable bereitzustellen, seien Sie sich darüber im Klaren, dass jeder _falsy_ Wert nicht verwendet wird. Wenn Sie nur
> [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} herausfiltern müssen, sollten Sie den
> [Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) verwenden.

### Konvertierungsregeln für Booleans

#### Konvertierung von AND zu OR

Die folgende Operation mit **Booleans**:

```js-nolint
bCondition1 && bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Konvertierung von OR zu AND

Die folgende Operation mit **Booleans**:

```js-nolint
bCondition1 || bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Entfernen von verschachtelten Klammern

Da logische Ausdrücke von links nach rechts ausgewertet werden, ist es immer möglich, Klammern aus einem komplexen Ausdruck anhand einiger Regeln zu entfernen.

Die folgende zusammengesetzte Operation mit **Booleans**:

```js-nolint
bCondition1 && (bCondition2 || bCondition3)
```

ist immer gleich:

```js-nolint
!(!bCondition1 || !bCondition2 && !bCondition3)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nullish Coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{jsxref("Boolean")}}
- [Truthy](/de/docs/Glossary/Truthy)
- [Falsy](/de/docs/Glossary/Falsy)
