---
title: Logisches OR (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Der **logische OR (`||`)**-Operator (logische Disjunktion) für eine Menge von Operanden
ist wahr, wenn und nur wenn einer oder mehrere seiner Operanden wahr sind. Er wird typischerweise mit
booleschen (logischen) Werten verwendet. In diesem Fall gibt er einen Booleschen Wert zurück. Der `||`-Operator gibt jedoch tatsächlich den Wert eines der angegebenen
Operanden zurück. Wenn dieser Operator mit nicht-booleschen Werten verwendet wird, gibt er einen
nicht-booleschen Wert zurück.

{{EmbedInteractiveExample("pages/js/expressions-logical-or.html", "shorter")}}

## Syntax

```js-nolint
x || y
```

## Beschreibung

Wenn `x` in `true` umgewandelt werden kann, wird `x` zurückgegeben; andernfalls wird `y` zurückgegeben.

Wenn ein Wert in `true` umgewandelt werden kann, wird der Wert als [truthy](/de/docs/Glossary/truthy) bezeichnet. Wenn ein Wert in `false` umgewandelt werden kann, wird der Wert als [falsy](/de/docs/Glossary/falsy) bezeichnet.

Beispiele für Ausdrücke, die in false umgewandelt werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leerer String (`""` oder `''` oder ` ` ``);
- `undefined`.

Auch wenn der `||`-Operator mit Operanden verwendet werden kann, die keine Booleschen Werte sind, kann er dennoch als boolescher Operator betrachtet werden, da sein Rückgabewert immer in einen [boolean primitiven Wert](/de/docs/Web/JavaScript/Data_structures#boolean_type) umgewandelt werden kann. Um seinen Rückgabewert (oder jeden allgemeinen Ausdruck) explizit in den entsprechenden booleschen Wert umzuwandeln, verwenden Sie einen doppelten {{jsxref("Operators/Logical_NOT", "NOT-Operator", "", 1)}} oder den {{jsxref("Boolean/Boolean", "Boolean()")}}-Konstruktor.

### Kurzschlussauswertung

Der logische OR-Ausdruck wird von links nach rechts ausgewertet und auf mögliche
"Kurzschluss"-Auswertung mithilfe der folgenden Regel geprüft:

`(ein truthy Ausdruck) || expr` wird als Kurzschluss auf den truthy Ausdruck ausgewertet.

Kurzschluss bedeutet, dass der `expr`-Teil oben **nicht
ausgewertet** wird, daher werden alle Nebenwirkungen dieser Auswertung nicht wirksam (z.B. falls
`expr` ein Funktionsaufruf ist, findet der Aufruf niemals statt). Dies
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

### Operatorpräzedenz

Die folgenden Ausdrücke scheinen äquivalent zu sein, sind es aber nicht, da der
`&&`-Operator vor dem `||`-Operator ausgeführt wird
(siehe [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // returns true, because && is executed first
(true || false) && false; // returns false, because grouping has the highest precedence
```

## Beispiele

### Verwendung von OR

Der folgende Code zeigt Beispiele des `||`-Operators (logisches OR).

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
> Wenn Sie diesen Operator verwenden, um einem
> Variable einen Standardwert zuzuweisen, beachten Sie, dass jeder _falsy_ Wert nicht verwendet wird. Wenn Sie nur `[`null`](/de/docs/Web/JavaScript/Reference/Operators/null)` oder {{jsxref("undefined")}} herausfiltern möchten, ziehen Sie in Betracht, [den Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) zu verwenden.

### Umwandlungsregeln für Boolesche Werte

#### Umwandlung von AND zu OR

Die folgende Operation mit **Booleschen**:

```js-nolint
bCondition1 && bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Umwandlung von OR zu AND

Die folgende Operation mit **Booleschen**:

```js-nolint
bCondition1 || bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Entfernen verschachtelter Klammern

Da logische Ausdrücke von links nach rechts ausgewertet werden, ist es stets möglich, die Klammern aus einem komplexen Ausdruck nach einigen Regeln zu entfernen.

Die folgende komplexe Operation mit **Booleschen**:

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
