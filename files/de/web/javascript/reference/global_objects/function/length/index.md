---
title: "Funktion: length"
short-title: length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`length`** Dateneigenschaft einer {{jsxref("Function")}} Instanz gibt die Anzahl der erwarteten Parameter der Funktion an.

{{InteractiveExample("JavaScript Demo: Function: length")}}

```js interactive-example
function func1() {}

function func2(a, b) {}

console.log(func1.length);
// Expected output: 0

console.log(func2.length);
// Expected output: 2
```

## Wert

Eine Zahl.

{{js_property_attributes(0, 0, 1)}}

## Beschreibung

Die `length` Eigenschaft eines {{jsxref("Function")}} Objekts gibt an, wie viele Argumente die Funktion erwartet, d.h. die Anzahl der formalen Parameter:

- Es werden nur die Parameter vor dem ersten mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) gezählt.
- Ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) zählt als einzelner Parameter.
- Der [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wird nicht mitgezählt.

Im Gegensatz dazu ist {{jsxref("Functions/arguments/length", "arguments.length")}} eine lokale Eigenschaft einer Funktion und gibt die Anzahl der tatsächlich an die Funktion übergebenen Argumente an.

Der {{jsxref("Function")}} Konstruktor ist selbst ein `Function` Objekt. Seine `length` Dateneigenschaft hat den Wert `1`.

Aus historischen Gründen ist `Function.prototype` selbst aufrufbar. Die `length` Eigenschaft von `Function.prototype` hat den Wert `0`.

## Beispiele

### Verwendung von function length

```js
console.log(Function.length); // 1

console.log((() => {}).length); // 0
console.log(((a) => {}).length); // 1
console.log(((a, b) => {}).length); // 2 etc.

console.log(((...args) => {}).length);
// 0, rest parameter is not counted

console.log(((a, b = 1, c) => {}).length);
// 1, only parameters before the first one with
// a default value are counted

console.log((({ a, b }, [c, d]) => {}).length);
// 2, destructuring patterns each count as
// a single parameter
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Function")}}
