---
title: Logisches ODER (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **logische ODER (`||`)**-Operator (logische Disjunktion) für eine Menge von Operanden ist genau dann wahr, wenn ein oder mehrere seiner Operanden wahr sind. Er wird typischerweise mit booleschen (logischen) Werten verwendet. Wenn dies der Fall ist, gibt er einen booleschen Wert zurück. Der `||`-Operator gibt jedoch tatsächlich den Wert eines der angegebenen Operanden zurück. Wenn dieser Operator also mit Nicht-Booleschen Werten verwendet wird, gibt er einen Nicht-Booleschen Wert zurück.

{{InteractiveExample("JavaScript Demo: Expressions - Logical OR", "shorter")}}

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

Wenn `x` in `true` umgewandelt werden kann, gibt er `x` zurück; andernfalls wird `y` zurückgegeben.

Wenn ein Wert in `true` umgewandelt werden kann, wird der Wert als {{Glossary("truthy", "truthy")}} bezeichnet. Wenn ein Wert in `false` umgewandelt werden kann, wird der Wert als {{Glossary("falsy", "falsy")}} bezeichnet.

Beispiele für Ausdrücke, die in `false` konvertiert werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leere Zeichenkette (`""` oder `''` oder `` ` ``);
- `undefined`.

Auch wenn der `||`-Operator mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er dennoch als boolescher Operator angesehen werden, da sein Rückgabewert immer in einen [Booleschen primitiven Wert](/de/docs/Web/JavaScript/Data_structures#boolean_type) konvertiert werden kann. Um seinen Rückgabewert (oder irgendeinen Ausdruck allgemein) explizit in den entsprechenden booleschen Wert umzuwandeln, verwenden Sie einen doppelten {{jsxref("Operators/Logical_NOT", "NOT-Operator", "", 1)}} oder den {{jsxref("Boolean/Boolean", "Boolean()")}}-Konstruktor.

### Short-Circuit-Auswertung

Der logische ODER-Ausdruck wird von links nach rechts ausgewertet, wobei er auf eine mögliche Short-Circuit-Bewertung unter Verwendung der folgenden Regel getestet wird:

`(ein truthy Ausdruck) || expr` wird in einer Short-Circuit-Bewertung auf den truthy Ausdruck ausgewertet.

Short Circuit bedeutet, dass der oben genannte `expr`-Teil **nicht ausgewertet** wird, weshalb Nebenwirkungen, die dadurch entstehen könnten, keine Wirkung zeigen (z. B. wenn `expr` ein Funktionsaufruf ist, wird dieser nicht ausgeführt). Dies geschieht, weil der Wert des Operators bereits nach der Auswertung des ersten Operanden bestimmt ist. Siehe folgendes Beispiel:

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

### Operator-Präzedenz

Die folgenden Ausdrücke scheinen gleichwertig zu sein, sind es jedoch nicht, da der `&&`-Operator vor dem `||`-Operator ausgeführt wird (siehe [Operator-Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

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
> Wenn Sie diesen Operator verwenden, um einem Variablenwert einen Standardwert zuzuweisen, beachten Sie, dass jeder _falsy_ Wert nicht verwendet wird. Wenn Sie nur [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} herausfiltern möchten, ziehen Sie die Verwendung des [Nullish Coalescing Operators](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) in Betracht.

### Konvertierungsregeln für Booleans

#### UND in ODER umwandeln

Die folgende Operation mit **Booleans**:

```js-nolint
bCondition1 && bCondition2
```

ist immer gleichbedeutend mit:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### ODER in UND umwandeln

Die folgende Operation mit **Booleans**:

```js-nolint
bCondition1 || bCondition2
```

ist immer gleichbedeutend mit:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Entfernen verschachtelter Klammern

Da logische Ausdrücke von links nach rechts ausgewertet werden, ist es immer möglich, Klammern aus einem komplexen Ausdruck nach bestimmten Regeln zu entfernen.

Die folgende zusammengesetzte Operation mit **Booleans**:

```js-nolint
bCondition1 && (bCondition2 || bCondition3)
```

ist immer gleichbedeutend mit:

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
