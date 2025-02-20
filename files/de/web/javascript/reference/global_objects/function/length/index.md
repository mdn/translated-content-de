---
title: "Funktion: length"
slug: Web/JavaScript/Reference/Global_Objects/Function/length
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`length`** Daten-Eigenschaft einer {{jsxref("Function")}}-Instanz gibt die Anzahl der erwarteten Parameter der Funktion an.

{{InteractiveExample("JavaScript Demo: Function.length")}}

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

Die `length`-Eigenschaft eines {{jsxref("Function")}}-Objekts zeigt an, wie viele Argumente die Funktion erwartet, d.h. die Anzahl der formalen Parameter:

- Nur Parameter vor dem ersten mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) werden gezählt.
- Ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) zählt als ein einzelner Parameter.
- Der [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wird ausgeschlossen.

Im Gegensatz dazu ist {{jsxref("Functions/arguments/length", "arguments.length")}} lokal in einer Funktion und gibt die Anzahl der tatsächlich an die Funktion übergebenen Argumente an.

Der {{jsxref("Function")}}-Konstruktor ist selbst ein `Function`-Objekt. Seine `length`-Dateneigenschaft hat den Wert `1`.

Aus historischen Gründen ist `Function.prototype` selbst aufrufbar. Die `length`-Eigenschaft von `Function.prototype` hat den Wert `0`.

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
