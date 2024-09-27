---
title: Logisches NICHT (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Operators")}}

Der **logische NICHT (`!`)**-Operator (logisches Komplement, Negation) wandelt Wahr in Falsch und umgekehrt. Er wird typischerweise mit booleschen (logischen) Werten verwendet. Bei der Verwendung mit Nicht-Booleschen Werten gibt er `false` zurück, wenn sein einzelner Operand in `true` umgewandelt werden kann; andernfalls gibt er `true` zurück.

{{EmbedInteractiveExample("pages/js/expressions-logical-not.html", "shorter")}}

## Syntax

```js-nolint
!x
```

## Beschreibung

Gibt `false` zurück, wenn sein einzelner Operand in `true` umgewandelt werden kann; andernfalls gibt er `true` zurück.

Wenn ein Wert in `true` umgewandelt werden kann, wird der Wert als [truthy](/de/docs/Glossary/truthy) bezeichnet. Wenn ein Wert in `false` umgewandelt werden kann, wird der Wert als [falsy](/de/docs/Glossary/falsy) bezeichnet.

Beispiele für Ausdrücke, die in false umgewandelt werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leere Zeichenfolge (`""` oder `''` oder ` `` `);
- `undefined`.

Obwohl der `!`-Operator mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er dennoch als boolescher Operator betrachtet werden, da sein Rückgabewert immer in einen [booleschen primitiven Wert](/de/docs/Web/JavaScript/Data_structures#boolean_type) umgewandelt werden kann. Um seinen Rückgabewert (oder einen beliebigen Ausdruck im Allgemeinen) explizit in den entsprechenden booleschen Wert umzuwandeln, verwenden Sie einen doppelten NICHT-Operator (`!!`) oder den {{jsxref("Boolean/Boolean", "Boolean")}} Konstruktor.

## Beispiele

### Verwendung von NICHT

Der folgende Code zeigt Beispiele für den `!` (logisches NICHT)-Operator.

```js
!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false
```

### Doppeltes NICHT (`!!`)

Es ist möglich, ein paar NICHT-Operatoren in Serie zu verwenden, um explizit die Umwandlung eines beliebigen Wertes in den entsprechenden [booleschen primitiven Wert](/de/docs/Web/JavaScript/Data_structures#boolean_type) zu erzwingen. Die Umwandlung basiert auf der "Truthyness" oder "Falsyness" des Wertes (siehe [truthy](/de/docs/Glossary/truthy) und [falsy](/de/docs/Glossary/falsy)).

Die gleiche Umwandlung kann durch die {{jsxref("Boolean/Boolean", "Boolean()")}} Funktion vorgenommen werden.

```js
!!true; // !!truthy returns true
!!{}; // !!truthy returns true: any object is truthy...
!!new Boolean(false); // ...even Boolean objects with a false .valueOf()!
!!false; // !!falsy returns false
!!""; // !!falsy returns false
!!Boolean(false); // !!falsy returns false
```

### Umwandlung zwischen NICHTs

Die folgende Operation, die **boolesche** Werte beinhaltet:

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
- [Truthy](/de/docs/Glossary/Truthy)
- [Falsy](/de/docs/Glossary/Falsy)
