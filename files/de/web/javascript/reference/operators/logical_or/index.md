---
title: Logisches ODER (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Der **logische ODER (`||`)** (logische Disjunktion) Operator für eine Menge von Operanden ist wahr, wenn und nur wenn einer oder mehrere seiner Operanden wahr sind. Er wird typischerweise mit booleschen (logischen) Werten verwendet. Wenn dies der Fall ist, gibt er einen booleschen Wert zurück. Der `||` Operator gibt jedoch tatsächlich den Wert eines der angegebenen Operanden zurück, sodass er bei Verwendung mit nicht-booleschen Werten einen nicht-booleschen Wert zurückgibt.

{{EmbedInteractiveExample("pages/js/expressions-logical-or.html", "shorter")}}

## Syntax

```js-nolint
x || y
```

## Beschreibung

Wenn `x` zu `true` konvertiert werden kann, wird `x` zurückgegeben; andernfalls wird `y` zurückgegeben.

Wenn ein Wert zu `true` konvertiert werden kann, wird der Wert als {{Glossary("truthy")}} bezeichnet. Wenn ein Wert zu `false` konvertiert werden kann, wird der Wert als {{Glossary("falsy")}} bezeichnet.

Beispiele für Ausdrücke, die zu false konvertiert werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leere Zeichenkette (`""` oder `''` oder ` `` `);
- `undefined`.

Obwohl der `||` Operator mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er dennoch als boolescher Operator betrachtet werden, da sein Rückgabewert immer in einen [booleschen Grundwert](/de/docs/Web/JavaScript/Data_structures#boolean_type) konvertiert werden kann. Um seinen Rückgabewert (oder einen beliebigen Ausdruck im Allgemeinen) explizit in den entsprechenden booleschen Wert zu konvertieren, verwenden Sie ein doppeltes {{jsxref("Operators/Logical_NOT", "NOT Operator", "", 1)}} oder den {{jsxref("Boolean/Boolean", "Boolean()")}} Konstruktor.

### Short-Circuit-Auswertung

Der logische ODER-Ausdruck wird von links nach rechts ausgewertet und auf eine mögliche "Short-Circuit"-Auswertung getestet, indem die folgende Regel verwendet wird:

`(ein truthy Ausdruck) || Ausdruck` wird auf den truthy Ausdruck Short-Circuit-ausgewertet.

Short Circuit bedeutet, dass der Teil `Ausdruck` oben **nicht ausgewertet** wird, sodass keine Nebenwirkungen auftreten (z. B. wenn `Ausdruck` ein Funktionsaufruf ist, findet der Aufruf nicht statt). Dies geschieht, weil der Wert des Operators bereits nach der Auswertung des ersten Operanden bestimmt ist. Siehe Beispiel:

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
// Gibt "called B" aufgrund des Funktionsaufrufs aus,
// und dann true (was der resultierende Wert des Operators ist)
```

### Operatorpräzedenz

Die folgenden Ausdrücke mögen äquivalent erscheinen, sind es aber nicht, da der
`&&` Operator vor dem `||` Operator ausgeführt wird (siehe [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // gibt true zurück, da && zuerst ausgeführt wird
(true || false) && false; // gibt false zurück, da Gruppierung die höchste Präzedenz hat
```

## Beispiele

### Verwendung von ODER

Der folgende Code zeigt Beispiele für den `||` (logisches ODER) Operator.

```js
true || true; // t || t gibt true zurück
false || true; // f || t gibt true zurück
true || false; // t || f gibt true zurück
false || 3 === 4; // f || f gibt false zurück
"Cat" || "Dog"; // t || t gibt "Cat" zurück
false || "Cat"; // f || t gibt "Cat" zurück
"Cat" || false; // t || f gibt "Cat" zurück
"" || false; // f || f gibt false zurück
false || ""; // f || f gibt "" zurück
false || varObject; // f || Objekt gibt varObject zurück
```

> [!NOTE]
> Wenn Sie diesen Operator verwenden, um einem
> Variable einen Standardwert zuzuweisen, beachten Sie, dass jeder _falsy_ Wert nicht verwendet wird. Wenn Sie nur [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ausfiltern müssen, sollten Sie den [nullish coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) verwenden.

### Umwandlungsregeln für Booleans

#### AND in OR umwandeln

Die folgende Operation mit **booleans**:

```js-nolint
bCondition1 && bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### OR in AND umwandeln

Die folgende Operation mit **booleans**:

```js-nolint
bCondition1 || bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Entfernen von geschachtelten Klammern

Da logische Ausdrücke von links nach rechts ausgewertet werden, ist es immer möglich, Klammern aus einem komplexen Ausdruck zu entfernen, indem einige Regeln befolgt werden.

Der folgende zusammengesetzte Vorgang mit **booleans**:

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

- [Nullish coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
