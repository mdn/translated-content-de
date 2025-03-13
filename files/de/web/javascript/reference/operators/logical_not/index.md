---
title: Logisches NICHT (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **logische NICHT (`!`)** (logische Ergänzung, Negation) Operator kehrt Wahrheitswerte um, d. h. er macht aus Wahrheit Falschheit und umgekehrt. Er wird typischerweise mit boolean (logischen) Werten verwendet. Bei der Verwendung mit nicht-Boolean Werten gibt er `false` zurück, wenn sein einzelner Operand in `true` umgewandelt werden kann; andernfalls gibt er `true` zurück.

{{InteractiveExample("JavaScript Demo: Logical NOT (!) Operator", "shorter")}}

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

Gibt `false` zurück, wenn sein einzelner Operand in `true` umgewandelt werden kann; andernfalls gibt er `true` zurück.

Wenn ein Wert in `true` umgewandelt werden kann, wird der Wert als {{Glossary("truthy", "truthy")}} bezeichnet. Wenn ein Wert in `false` umgewandelt werden kann, wird der Wert als {{Glossary("falsy", "falsy")}} bezeichnet.

Beispiele für Ausdrücke, die in `false` umgewandelt werden können, sind:

- `null`;
- `NaN`;
- `0`;
- leerer String (`""` oder `''` oder ` `` `);
- `undefined`.

Obwohl der `!` Operator mit Operanden verwendet werden kann, die keine boolean Werte sind, kann er dennoch als boolean Operator betrachtet werden, da sein Rückgabewert immer in einen [boolean-Primitiv](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) umgewandelt werden kann. Um seinen Rückgabewert (oder jeden allgemeinen Ausdruck) explizit in den entsprechenden boolean Wert umzuwandeln, verwenden Sie den doppelten NICHT-Operator (`!!`) oder den {{jsxref("Boolean/Boolean", "Boolean")}} Konstruktor.

## Beispiele

### Verwendung von NICHT

Der folgende Code zeigt Beispiele für den `!` (logisches NICHT) Operator.

```js
!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false
```

### Doppeltes NICHT (`!!`)

Es ist möglich, eine Reihe von NICHT-Operatoren zu verwenden, um die Umwandlung eines beliebigen Wertes in den entsprechenden [boolean-Primitiv](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) explizit zu erzwingen. Die Umwandlung basiert auf der "Truthiness" oder "Falsiness" des Wertes (siehe {{Glossary("truthy", "truthy")}} und {{Glossary("falsy", "falsy")}}).

Die gleiche Umwandlung kann durch die {{jsxref("Boolean/Boolean", "Boolean()")}} Funktion durchgeführt werden.

```js
!!true; // !!truthy returns true
!!{}; // !!truthy returns true: any object is truthy...
!!new Boolean(false); // ...even Boolean objects with a false .valueOf()!
!!false; // !!falsy returns false
!!""; // !!falsy returns false
!!Boolean(false); // !!falsy returns false
```

### Umwandlung zwischen NICHTs

Die folgende Operation, die **Booleans** beinhaltet:

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
