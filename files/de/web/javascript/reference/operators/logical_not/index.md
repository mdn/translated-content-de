---
title: Logisches NICHT (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **logische NICHT (`!`)**-Operator (logisches Komplement, Negation) verwandelt Wahrheit in Falschheit und umgekehrt. Er wird typischerweise mit booleschen (logischen) Werten verwendet. Bei Verwendung mit nicht-booleschen Werten gibt er `false` zurück, wenn sein einzelner Operand in `true` konvertiert werden kann; andernfalls gibt er `true` zurück.

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

Gibt `false` zurück, wenn sein einzelner Operand in `true` konvertiert werden kann; andernfalls gibt er `true` zurück.

Wenn ein Wert in `true` konvertiert werden kann, wird der Wert als {{Glossary("truthy", "truthy")}} bezeichnet. Wenn ein Wert in `false` konvertiert werden kann, wird der Wert als {{Glossary("falsy", "falsy")}} bezeichnet.

Beispiele für Ausdrücke, die in `false` konvertiert werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leerer String (`""` oder `''` oder ` ` ``);
- `undefined`.

Obwohl der `!`-Operator mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er dennoch als boolescher Operator betrachtet werden, da sein Rückgabewert immer in einen [booleschen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) umgewandelt werden kann. Um den Rückgabewert (oder einen beliebigen Ausdruck im Allgemeinen) explizit in den entsprechenden booleschen Wert zu konvertieren, verwenden Sie einen doppelten NICHT-Operator (`!!`) oder den {{jsxref("Boolean/Boolean", "Boolean")}}-Konstruktor.

## Beispiele

### Verwendung von NICHT

Der folgende Code zeigt Beispiele für den `!` (logischen NICHT)-Operator.

```js
!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false
```

### Doppelte NICHT (`!!`)

Es ist möglich, mehrere NICHT-Operatoren in Folge zu verwenden, um die Konvertierung eines beliebigen Werts in den entsprechenden [booleschen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) explizit zu erzwingen. Die Konvertierung basiert auf der "Truthiness" oder "Falsiness" des Wertes (siehe {{Glossary("truthy", "truthy")}} und {{Glossary("falsy", "falsy")}}).

Die gleiche Konvertierung kann durch die {{jsxref("Boolean/Boolean", "Boolean()")}}-Funktion erfolgen.

```js
!!true; // !!truthy returns true
!!{}; // !!truthy returns true: any object is truthy…
!!new Boolean(false); // … even Boolean objects with a false .valueOf()!
!!false; // !!falsy returns false
!!""; // !!falsy returns false
!!Boolean(false); // !!falsy returns false
```

### Konvertierung zwischen NICHTs

Die folgende Operation mit **Booleschen**:

```js-nolint
!!bCondition
```

ist immer gleichbedeutend mit:

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
