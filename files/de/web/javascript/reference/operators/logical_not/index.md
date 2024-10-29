---
title: Logisches NICHT (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("Operators")}}

Der **logische NICHT-Operator (`!`)** (logische Ergänzung, Negation) kehrt Wahrheitswerte um: wahr wird zu falsch und umgekehrt. Er wird typischerweise mit booleschen (logischen) Werten verwendet. Bei nicht-booleschen Werten gibt er `false` zurück, wenn sein einziger Operand in `true` konvertiert werden kann; andernfalls gibt er `true` zurück.

{{EmbedInteractiveExample("pages/js/expressions-logical-not.html", "shorter")}}

## Syntax

```js-nolint
!x
```

## Beschreibung

Gibt `false` zurück, wenn sein einziger Operand in `true` konvertiert werden kann; andernfalls gibt er `true` zurück.

Wenn ein Wert in `true` konvertiert werden kann, wird der Wert als {{Glossary("truthy", "truthy")}} bezeichnet. Wenn ein Wert in `false` konvertiert werden kann, wird der Wert als {{Glossary("falsy", "falsy")}} bezeichnet.

Beispiele für Ausdrücke, die in `false` umgewandelt werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leere Zeichenfolge (`""` oder `''` oder ` `` `);
- `undefined`.

Auch wenn der `!`-Operator mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er dennoch als boolescher Operator betrachtet werden, da sein Rückgabewert immer in einen [booleschen Wert](/de/docs/Web/JavaScript/Data_structures#boolean_type) konvertiert werden kann. Um seinen Rückgabewert (oder einen beliebigen Ausdruck im Allgemeinen) explizit in den entsprechenden booleschen Wert zu konvertieren, verwenden Sie einen doppelten NICHT-Operator (`!!`) oder den {{jsxref("Boolean/Boolean", "Boolean")}}-Konstruktor.

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

Es ist möglich, mehrere NICHT-Operatoren in Serie zu verwenden, um explizit die Umwandlung eines beliebigen Wertes in den entsprechenden [booleschen Wert](/de/docs/Web/JavaScript/Data_structures#boolean_type) zu erzwingen. Die Umwandlung basiert auf der "Truthiness" oder "Falsiness" des Wertes (siehe {{Glossary("truthy", "truthy")}} und {{Glossary("falsy", "falsy")}}).

Die gleiche Umwandlung kann durch die Funktion {{jsxref("Boolean/Boolean", "Boolean()")}} erfolgen.

```js
!!true; // !!truthy returns true
!!{}; // !!truthy returns true: any object is truthy...
!!new Boolean(false); // ...even Boolean objects with a false .valueOf()!
!!false; // !!falsy returns false
!!""; // !!falsy returns false
!!Boolean(false); // !!falsy returns false
```

### Umwandlung zwischen NICHTs

Der folgende Vorgang mit **booleschen** Werten:

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
