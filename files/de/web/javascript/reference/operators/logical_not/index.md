---
title: Logisches NICHT (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Operators")}}

Der **logische NICHT (`!`)**-Operator (logisches Komplement, Negation) verwandelt Wahrheit in Falschheit und umgekehrt. Er wird typischerweise mit boolean (logischen) Werten verwendet. Bei Verwendung mit nicht-Boolean-Werten gibt er `false` zurück, wenn sein einzelner Operand in `true` umgewandelt werden kann; andernfalls wird `true` zurückgegeben.

{{EmbedInteractiveExample("pages/js/expressions-logical-not.html", "shorter")}}

## Syntax

```js-nolint
!x
```

## Beschreibung

Gibt `false` zurück, wenn sein einzelner Operand in `true` umgewandelt werden kann; andernfalls wird `true` zurückgegeben.

Wenn ein Wert in `true` umgewandelt werden kann, wird der Wert als {{Glossary("truthy")}} bezeichnet. Wenn ein Wert in `false` umgewandelt werden kann, wird der Wert als {{Glossary("falsy")}} bezeichnet.

Beispiele für Ausdrücke, die in false umgewandelt werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leerer String (`""` oder `''` oder ` `` `);
- `undefined`.

Auch wenn der `!`-Operator mit Operanden verwendet werden kann, die keine Boolean-Werte sind, kann er immer noch als Boolean-Operator betrachtet werden, da sein Rückgabewert immer in einen [boolean-Primitivwert](/de/docs/Web/JavaScript/Data_structures#boolean_type) umgewandelt werden kann. Um seinen Rückgabewert (oder einen beliebigen Ausdruck im Allgemeinen) explizit in den entsprechenden Boolean-Wert umzuwandeln, verwenden Sie einen doppelten NICHT-Operator (`!!`) oder den {{jsxref("Boolean/Boolean", "Boolean")}}-Konstruktor.

## Beispiele

### Verwendung von NICHT

Der folgende Code zeigt Beispiele des `!`- (logischen NICHT) Operators.

```js
!true; // !t ergibt false
!false; // !f ergibt true
!""; // !f ergibt true
!"Cat"; // !t ergibt false
```

### Doppelte NICHT (`!!`)

Es ist möglich, ein paar NICHT-Operatoren in Reihe zu verwenden, um explizit die Umwandlung eines beliebigen Wertes in den entsprechenden [boolean-Primitivwert](/de/docs/Web/JavaScript/Data_structures#boolean_type) zu erzwingen. Die Umwandlung basiert auf der "Truthyness" oder "Falsyness" des Werts (siehe {{Glossary("truthy")}} und {{Glossary("falsy")}}).

Die gleiche Umwandlung kann durch die {{jsxref("Boolean/Boolean", "Boolean()")}}-Funktion durchgeführt werden.

```js
!!true; // !!truthy ergibt true
!!{}; // !!truthy ergibt true: jedes Objekt ist truthy...
!!new Boolean(false); // ...sogar Boolean-Objekte mit einem false .valueOf()!
!!false; // !!falsy ergibt false
!!""; // !!falsy ergibt false
!!Boolean(false); // !!falsy ergibt false
```

### Umwandlung zwischen NICHTs

Die folgende Operation mit **Booleans**:

```js-nolint
!!bCondition
```

ist immer gleich zu:

```js-nolint
bCondition
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
