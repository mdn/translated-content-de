---
title: Logisches NICHT (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Operators")}}

Der **logische NICHT (`!`)** (logische Ergänzung, Negation) Operator kehrt Wahrheitswerte um. Er wird typischerweise mit booleschen (logischen) Werten verwendet. Bei Verwendung mit nicht-booleschen Werten gibt er `false` zurück, wenn sein einzelner Operand in `true` konvertiert werden kann; andernfalls gibt er `true` zurück.

{{EmbedInteractiveExample("pages/js/expressions-logical-not.html", "shorter")}}

## Syntax

```js-nolint
!x
```

## Beschreibung

Gibt `false` zurück, wenn sein einzelner Operand in `true` konvertiert werden kann;
andernfalls gibt er `true` zurück.

Wenn ein Wert in `true` konvertiert werden kann, wird er als
[truthy](/de/docs/Glossary/truthy) bezeichnet. Wenn ein Wert in `false` konvertiert werden kann, wird er als
[falsy](/de/docs/Glossary/falsy) bezeichnet.

Beispiele für Ausdrücke, die in false konvertiert werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leere Zeichenkette (`""` oder `''` oder ` `` `);
- `undefined`.

Auch wenn der `!` Operator mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er dennoch als boolescher Operator betrachtet werden, da sein Rückgabewert immer in einen [booleschen primitiven Wert](/de/docs/Web/JavaScript/Data_structures#boolean_type) konvertiert werden kann. Um seinen Rückgabewert (oder einen beliebigen Ausdruck generell) explizit in den entsprechenden booleschen Wert zu konvertieren, verwenden Sie einen doppelten NICHT Operator (`!!`) oder den {{jsxref("Boolean/Boolean", "Boolean")}} Konstruktor.

## Beispiele

### Verwendung von NOT

Der folgende Code zeigt Beispiele für den `!` (logisches NICHT) Operator.

```js
!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false
```

### Doppelt NOT (`!!`)

Es ist möglich, mehrere NOT Operatoren hintereinander zu verwenden, um die
Konvertierung eines beliebigen Wertes in den entsprechenden [booleschen primitiven Wert](/de/docs/Web/JavaScript/Data_structures#boolean_type) explizit zu erzwingen.
Die Konvertierung basiert auf der "Truthiness" oder "Falsiness" des Wertes (siehe
[truthy](/de/docs/Glossary/truthy) und [falsy](/de/docs/Glossary/falsy)).

Die gleiche Konvertierung kann auch durch die {{jsxref("Boolean/Boolean", "Boolean()")}} Funktion erfolgen.

```js
!!true; // !!truthy returns true
!!{}; // !!truthy returns true: any object is truthy...
!!new Boolean(false); // ...even Boolean objects with a false .valueOf()!
!!false; // !!falsy returns false
!!""; // !!falsy returns false
!!Boolean(false); // !!falsy returns false
```

### Umwandlung zwischen NOTs

Die folgende Operation, die **Booleans** einbezieht:

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
