---
title: Logisches NICHT (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{jsSidebar("Operators")}}

Der **logische NICHT (`!`)** (logische Komplementierung, Negation) Operator wandelt Wahrheit in Falschheit und umgekehrt. Er wird typischerweise mit booleschen (logischen) Werten verwendet. Wenn er mit nicht-booleschen Werten verwendet wird, gibt er `false` zurück, wenn sein einzelner Operand in `true` umgewandelt werden kann; andernfalls wird `true` zurückgegeben.

{{InteractiveExample("JavaScript Demo: Logical NOT (!) operator", "shorter")}}

```js interactive-example
const a = 3;
const b = -2;

console.log(!(a > 0 || b > 0));
// Expected output: false
```

## Syntax

```js-nolint
!x
```

## Beschreibung

Gibt `false` zurück, wenn sein einzelner Operand in `true` umgewandelt werden kann; andernfalls wird `true` zurückgegeben.

Wenn ein Wert in `true` umgewandelt werden kann, wird der Wert als {{Glossary("truthy", "truthy")}} bezeichnet. Wenn ein Wert in `false` umgewandelt werden kann, wird der Wert als {{Glossary("falsy", "falsy")}} bezeichnet.

Beispiele für Ausdrücke, die in `false` umgewandelt werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leere Zeichenfolge (`""` oder `''` oder ` ` ``);
- `undefined`.

Auch wenn der `!`-Operator mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er dennoch als ein boolescher Operator betrachtet werden, da sein Rückgabewert immer in einen [booleschen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) umgewandelt werden kann. Um seinen Rückgabewert (oder allgemein jeden Ausdruck) explizit in den entsprechenden booleschen Wert umzuwandeln, verwenden Sie einen doppelten NICHT-Operator (`!!`) oder den {{jsxref("Boolean/Boolean", "Boolean")}}-Konstruktor.

## Beispiele

### Verwendung von NICHT

Der folgende Code zeigt Beispiele des `!` (logischen NICHT) Operators.

```js
!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false
```

### Doppeltes NICHT (`!!`)

Es ist möglich, eine Reihe von NICHT-Operatoren zu verwenden, um die Umwandlung eines beliebigen Wertes in den entsprechenden [booleschen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) zu erzwingen. Die Umwandlung basiert auf der "Truthyness" oder "Falsyness" des Wertes (siehe {{Glossary("truthy", "truthy")}} und {{Glossary("falsy", "falsy")}}).

Die gleiche Umwandlung kann mithilfe der {{jsxref("Boolean/Boolean", "Boolean()")}}-Funktion durchgeführt werden.

```js
!!true; // !!truthy returns true
!!{}; // !!truthy returns true: any object is truthy…
!!new Boolean(false); // … even Boolean objects with a false .valueOf()!
!!false; // !!falsy returns false
!!""; // !!falsy returns false
!!Boolean(false); // !!falsy returns false
```

### Umwandlung zwischen NICHTs

Die folgende Operation mit **Booleans**:

```js-nolint
!!bCondition
```

ist immer gleich:

```js-nolint
bCondition
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Boolean")}}
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
