---
title: Logisches Oder (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **logische Oder-Operator (`||`)** (logische Disjunktion) für eine Menge von Operatoren ist wahr, wenn und nur wenn einer oder mehrere seiner Operanden wahr sind. Es wird typischerweise mit booleschen (logischen) Werten verwendet. Dann gibt es einen booleschen Wert zurück. Der `||`-Operator gibt jedoch tatsächlich den Wert eines der angegebenen Operanden zurück, sodass er, wenn er mit nicht-booleschen Werten verwendet wird, einen nicht-booleschen Wert zurückgibt.

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

Wenn `x` in `true` konvertiert werden kann, wird
`x` zurückgegeben; andernfalls wird `y` zurückgegeben.

Wenn ein Wert in `true` konvertiert werden kann, ist der Wert so genannt
{{Glossary("truthy", "truthy")}}. Wenn ein Wert in `false` konvertiert werden kann, ist der Wert
so genannt {{Glossary("falsy", "falsy")}}.

Beispiele für Ausdrücke, die in false konvertiert werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leere Zeichenkette (`""` oder `''` oder ` `` `);
- `undefined`.

Obwohl der `||`-Operator mit Operanden verwendet werden kann, die keine booleschen
Werte sind, kann er dennoch als boolescher Operator betrachtet werden, da der Rückgabewert immer
in einen [booleschen Urwert](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) konvertiert werden kann.
Um seinen Rückgabewert (oder einen beliebigen Ausdruck im Allgemeinen) explizit in den
entsprechenden booleschen Wert zu konvertieren, verwenden Sie einen doppelten {{jsxref("Operators/Logical_NOT", "NOT-Operator", "", 1)}} oder den {{jsxref("Boolean/Boolean", "Boolean()")}}
Konstruktor.

### Kurzschlussauswertung

Der logische ODER-Ausdruck wird von links nach rechts ausgewertet und auf mögliche
"Kurzschluss"-Auswertung mit folgender Regel getestet:

`(ein truthy Ausdruck) || expr` wird zum
truthy Ausdruck kurzgeschlossen ausgewertet.

Kurzschluss bedeutet, dass der `expr`-Teil oben **nicht
ausgewertet** wird, daher treten keine Nebeneffekte auf (z.B. wenn
`expr` ein Funktionsaufruf ist, findet der Aufruf nicht statt). Dies
geschieht, weil der Wert des Operators bereits nach der Auswertung des
ersten Operanden bestimmt ist. Siehe Beispiel:

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

Die folgenden Ausdrücke scheinen äquivalent zu sein, sind es aber nicht, da der
`&&`-Operator vor dem `||`-Operator
ausgeführt wird (siehe [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // returns true, because && is executed first
(true || false) && false; // returns false, because grouping has the highest precedence
```

## Beispiele

### Verwendung von ODER

Der folgende Code zeigt Beispiele für den `||` (logischen ODER)-Operator.

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
> Variable bereitzustellen, beachten Sie, dass jeder _falsy_ Wert nicht verwendet wird. Wenn Sie nur
> [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} filtern müssen, ziehen Sie
> [den nullish-Koaleszenzoperator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) in Betracht.

### Konvertierungsregeln für Boolesche Werte

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

### Entfernen verschachtelter Klammern

Da logische Ausdrücke von links nach rechts ausgewertet werden, ist es immer möglich, Klammern von einem komplexen Ausdruck zu entfernen, indem einige Regeln befolgt werden.

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

- [Nullish-Koaleszenzoperator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{jsxref("Boolean")}}
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
