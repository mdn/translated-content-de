---
title: Logisches UND (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **logische UND (`&&`)** (logische Konjunktion) Operator für eine Menge von boolean Operanden ist `true`, wenn und nur wenn alle Operanden `true` sind. Andernfalls ist er `false`.

Allgemeiner gesagt, gibt der Operator den Wert des ersten {{Glossary("falsy", "falsy")}} Operanden zurück, auf den er beim Auswerten von links nach rechts trifft, oder den Wert des letzten Operanden, wenn alle Operanden {{Glossary("truthy", "truthy")}} sind.

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

Das logische UND (`&&`) wertet Operanden von links nach rechts aus und gibt sofort den Wert des ersten {{Glossary("falsy", "falsy")}} Operanden zurück, den es findet; wenn alle Werte {{Glossary("truthy", "truthy")}} sind, wird der Wert des letzten Operanden zurückgegeben.

Wenn ein Wert in `true` umgewandelt werden kann, wird der Wert {{Glossary("truthy", "truthy")}} genannt. Wenn ein Wert in `false` umgewandelt werden kann, wird der Wert {{Glossary("falsy", "falsy")}} genannt.

Beispiele für Ausdrücke, die in false umgewandelt werden können, sind:

- `false`;
- `null`;
- `NaN`;
- `0`;
- leere Zeichenfolge (`""` oder `''` oder ` ` ``);
- `undefined`.

Der UND-Operator erhält Nicht-Boolean-Werte und gibt sie unverändert zurück:

```js
result = "" && "foo"; // result is assigned "" (empty string)
result = 2 && 0; // result is assigned 0
result = "foo" && 4; // result is assigned 4
```

Obwohl der `&&` Operator mit Nicht-Boolean-Operanden verwendet werden kann, wird er trotzdem als Boolean-Operator angesehen, da sein Rückgabewert immer in eine [Boolean-Primitiv](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) umgewandelt werden kann.
Um seinen Rückgabewert (oder allgemein jeden Ausdruck) explizit in den entsprechenden Boolean-Wert umzuwandeln, verwenden Sie einen doppelten [NOT-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_NOT) oder den {{jsxref("Boolean/Boolean", "Boolean")}} Konstruktor.

### Kurzschluss-Auswertung

Der logische UND-Ausdruck ist ein Kurzschluss-Operator.
Jeder Operand wird in einen Boolean umgewandelt; wenn das Ergebnis einer Umwandlung `false` ist, stoppt der UND-Operator und gibt den ursprünglichen Wert dieses falsy Operanden zurück; er wertet keinen der verbleibenden Operanden aus.

Betrachten Sie den folgenden Pseudocode.

```plain
(some falsy expression) && expr
```

Der `expr` Teil wird **niemals ausgewertet**, da der erste Operand `(some falsy expression)` als {{Glossary("falsy", "falsy")}} ausgewertet wird.
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

### Operator-Vorrang

Der UND-Operator hat eine höhere Priorität als der ODER-Operator, was bedeutet, dass der `&&` Operator vor dem `||` Operator ausgeführt wird (siehe [Operator-Vorrang](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // true
true && (false || false); // false
(2 === 3) || (4 < 0) && (1 === 1); // false
```

## Beispiele

### Verwendung von UND

Der folgende Code zeigt Beispiele des `&&` (logisches UND) Operators.

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

Die folgende Operation, die **Booleans** beinhaltet:

```js-nolint
bCondition1 && bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Umwandlung von ODER in UND

Die folgende Operation, die **Booleans** beinhaltet:

```js-nolint
bCondition1 || bCondition2
```

ist immer gleich:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Entfernen von geschachtelten Klammern

Da logische Ausdrücke von links nach rechts ausgewertet werden, ist es immer möglich, Klammern aus einem komplexen Ausdruck zu entfernen, sofern bestimmte Regeln befolgt werden.

Die folgende zusammengesetzte Operation, die **Booleans** beinhaltet:

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
