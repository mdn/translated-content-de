---
title: Logisches ODER (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **logische ODER-Operator (`||`)** (logische Disjunktion) für eine Menge von Operanden ist wahr, wenn und nur wenn einer oder mehrere seiner Operanden wahr sind. Er wird typischerweise mit booleschen (logischen) Werten verwendet. In diesem Fall gibt er einen booleschen Wert zurück. Der `||` Operator gibt jedoch tatsächlich den Wert eines der angegebenen Operanden zurück, sodass er bei Verwendung mit nicht-booleschen Werten einen nicht-booleschen Wert zurückgibt.

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

Wenn `x` in `true` konvertiert werden kann, wird `x` zurückgegeben; andernfalls wird `y` zurückgegeben.

Wenn ein Wert in `true` konvertiert werden kann, wird der Wert als {{Glossary("truthy", "truthy")}} bezeichnet. Wenn ein Wert in `false` konvertiert werden kann, wird der Wert als {{Glossary("falsy", "falsy")}} bezeichnet.

Beispiele für Ausdrücke, die in false konvertiert werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leerer String (`""` oder `''` oder ` `` `);
- `undefined`.

Auch wenn der `||` Operator mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er dennoch als boolescher Operator betrachtet werden, da sein Rückgabewert immer in einen [booleschen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) konvertiert werden kann. Um seinen Rückgabewert (oder einen beliebigen Ausdruck allgemein) explizit in den entsprechenden booleschen Wert zu konvertieren, verwenden Sie einen doppelten {{jsxref("Operators/Logical_NOT", "NOT-Operator", "", 1)}} oder den {{jsxref("Boolean/Boolean", "Boolean()")}} Konstruktor.

### Kurzschlussbewertung

Der logische ODER-Ausdruck wird von links nach rechts ausgewertet und auf mögliche "Kurzschluss"-Bewertung getestet, indem die folgende Regel angewendet wird:

`(ein wahrer Ausdruck) || expr` wird durch Kurzschlussbewertung zu dem wahren Ausdruck ausgewertet.

Kurzschluss bedeutet, dass der `expr`-Teil oben **nicht ausgewertet** wird, daher treten keine Nebeneffekte auf (z.B. wenn `expr` ein Funktionsaufruf ist, findet der Aufruf niemals statt). Dies geschieht, weil der Wert des Operators bereits nach der Auswertung des ersten Operanden bestimmt ist. Siehe Beispiel:

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

Die folgenden Ausdrücke scheinen äquivalent zu sein, sind es aber nicht, da der `&&` Operator vor dem `||` Operator ausgeführt wird (siehe [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // returns true, because && is executed first
(true || false) && false; // returns false, because grouping has the highest precedence
```

## Beispiele

### Verwendung von ODER

Der folgende Code zeigt Beispiele des `||` (logisches ODER) Operators.

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
> Wenn Sie diesen Operator verwenden, um einen Standardwert für eine Variable bereitzustellen, beachten Sie, dass jeder _falsy_ Wert nicht verwendet wird. Wenn Sie nur [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} herausfiltern möchten, sollten Sie überlegen, [den Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) zu verwenden.

### Konvertierungsregeln für boolesche Werte

#### Konvertierung von UND zu ODER

Die folgende Operation mit **booleschen Werten**:

```js-nolint
bCondition1 && bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Konvertierung von ODER zu UND

Die folgende Operation mit **booleschen Werten**:

```js-nolint
bCondition1 || bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Entfernen von geschachtelten Klammern

Da logische Ausdrücke von links nach rechts ausgewertet werden, ist es immer möglich, Klammern aus einem komplexen Ausdruck nach bestimmten Regeln zu entfernen.

Die folgende zusammengesetzte Operation mit **booleschen Werten**:

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
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
