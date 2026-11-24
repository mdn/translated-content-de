---
title: Logisches NICHT (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator **logisches NICHT (`!`)** (logisches Komplement, Negation) kehrt `true` in `false` um und umgekehrt. Er wird üblicherweise mit booleschen (logischen) Werten verwendet. Bei nicht booleschen Werten gibt er `false` zurück, wenn sein einziger Operand in `true` umgewandelt werden kann; andernfalls gibt er `true` zurück.

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

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 14 (Präfixoperatoren) oder höher.

### Rückgabewert

`true`, wenn `x` {{Glossary("falsy", "falsy")}} ist, oder `false`, wenn `x` {{Glossary("truthy", "truthy")}} ist.

## Beschreibung

Gibt `false` zurück, wenn der einzige Operand in `true` umgewandelt werden kann; andernfalls wird `true` zurückgegeben.

Wenn ein Wert in `true` umgewandelt werden kann, wird er als {{Glossary("truthy", "truthy")}} bezeichnet. Wenn ein Wert in `false` umgewandelt werden kann, wird er als {{Glossary("falsy", "falsy")}} bezeichnet.

Beispiele für Ausdrücke, die in `false` umgewandelt werden können:

- `null`;
- `NaN`;
- `0`;
- eine leere Zeichenfolge (`""` oder `''` oder ` `` `);
- `undefined`.

Obwohl der Operator `!` auch mit Operanden verwendet werden kann, die keine booleschen Werte sind, kann er dennoch als boolescher Operator betrachtet werden, da sein Rückgabewert immer in einen [booleschen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) umgewandelt werden kann. Um seinen Rückgabewert (oder allgemein einen beliebigen Ausdruck) explizit in den entsprechenden booleschen Wert umzuwandeln, verwenden Sie den doppelten NICHT-Operator (`!!`) oder den Konstruktor {{jsxref("Boolean/Boolean", "Boolean")}}.

## Beispiele

### NICHT verwenden

Der folgende Code zeigt Beispiele für den Operator `!` (logisches NICHT).

```js
!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false
```

### Doppeltes NICHT (`!!`)

Zwei aufeinanderfolgende NICHT-Operatoren können verwendet werden, um einen beliebigen Wert explizit in den entsprechenden [booleschen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) umzuwandeln. Die Umwandlung hängt davon ab, ob der Wert {{Glossary("truthy", "truthy")}} oder {{Glossary("falsy", "falsy")}} ist.

Dieselbe Umwandlung kann mit der Funktion {{jsxref("Boolean/Boolean", "Boolean()")}} durchgeführt werden.

```js
!!true; // !!truthy returns true
!!{}; // !!truthy returns true: any object is truthy…
!!new Boolean(false); // … even Boolean objects with a false .valueOf()!
!!false; // !!falsy returns false
!!""; // !!falsy returns false
!!Boolean(false); // !!falsy returns false
```

### Umformung von NICHT-Ausdrücken

Die folgende Operation mit **booleschen Werten**:

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
