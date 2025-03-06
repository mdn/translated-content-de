---
title: Logisches NICHT (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **logische NICHT (`!`)** (logische Ergänzung, Negation) Operator wandelt
Wahrheit in Falschheit um und umgekehrt. Er wird typischerweise mit
booleschen (logischen) Werten verwendet. Bei nicht-booleschen Werten gibt er
`false` zurück, wenn sein einzelner Operand in `true` umgewandelt werden kann;
ansonsten gibt er `true` zurück.

{{InteractiveExample("JavaScript Demo: Expressions - Logical NOT", "shorter")}}

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

Gibt `false` zurück, wenn sein einzelner Operand in `true` umgewandelt werden kann; ansonsten gibt er `true` zurück.

Wenn ein Wert in `true` umgewandelt werden kann, wird der Wert
{{Glossary("truthy", "truthy")}} genannt. Wenn ein Wert in `false` umgewandelt werden kann, wird der Wert
{{Glossary("falsy", "falsy")}} genannt.

Beispiele für Ausdrücke, die in false umgewandelt werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leerer String (`""` oder `''` oder ` `` `);
- `undefined`.

Auch wenn der `!` Operator mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er dennoch als boolescher Operator betrachtet werden, da sein Rückgabewert immer in einen [booleschen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) umgewandelt werden kann. Um seinen Rückgabewert (oder allgemein jeden Ausdruck) explizit in den entsprechenden booleschen Wert umzuwandeln, verwenden Sie einen doppelten NICHT-Operator (`!!`) oder den {{jsxref("Boolean/Boolean", "Boolean")}} Konstruktor.

## Beispiele

### Verwendung von NICHT

Der folgende Code zeigt Beispiele des `!` (logisches NICHT) Operators.

```js
!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false
```

### Doppeltes NICHT (`!!`)

Es ist möglich, einen doppelten NICHT-Operator zu verwenden, um die
Konvertierung eines beliebigen Wertes in den entsprechenden [booleschen primitiven](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) Wert explizit zu erzwingen.
Die Umwandlung basiert auf der "Truthiness" oder "Falsiness" des Wertes (siehe
{{Glossary("truthy", "truthy")}} und {{Glossary("falsy", "falsy")}}).

Die gleiche Umwandlung kann durch die {{jsxref("Boolean/Boolean", "Boolean()")}} Funktion erreicht werden.

```js
!!true; // !!truthy returns true
!!{}; // !!truthy returns true: any object is truthy...
!!new Boolean(false); // ...even Boolean objects with a false .valueOf()!
!!false; // !!falsy returns false
!!""; // !!falsy returns false
!!Boolean(false); // !!falsy returns false
```

### Umwandeln zwischen NICHTs

Die folgende Operation mit **booleschen** Werten:

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
