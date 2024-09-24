---
title: "Funktion: length"
slug: Web/JavaScript/Reference/Global_Objects/Function/length
l10n:
  sourceCommit: 61cf154d0b27ea50297883299217e9d7bb69f9e7
---

{{JSRef}}

Die **`length`** Daten-Eigenschaft einer {{jsxref("Function")}} Instanz gibt die Anzahl der von der Funktion erwarteten Parameter an.

{{EmbedInteractiveExample("pages/js/function-length.html")}}

## Wert

Eine Zahl.

{{js_property_attributes(0, 0, 1)}}

## Beschreibung

Die `length`-Eigenschaft eines {{jsxref("Function")}}-Objekts gibt an, wie viele Argumente die Funktion erwartet, d. h. die Anzahl der formalen Parameter:

- Es werden nur Parameter gezählt, die vor dem ersten mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) liegen.
- Ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) wird als ein einzelner Parameter gezählt.
- Der [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wird nicht mitgezählt.

Im Gegensatz dazu ist {{jsxref("Functions/arguments/length", "arguments.length")}} lokal zu einer Funktion und gibt die tatsächlich an die Funktion übergebenen Argumente an.

Der {{jsxref("Function")}}-Konstruktor ist selbst ein `Function`-Objekt. Seine `length` Daten-Eigenschaft hat den Wert `1`.

Aus historischen Gründen ist `Function.prototype` selbst aufrufbar. Die `length`-Eigenschaft von `Function.prototype` hat den Wert `0`.

## Beispiele

### Verwendung der function length

```js
console.log(Function.length); // 1

console.log((() => {}).length); // 0
console.log(((a) => {}).length); // 1
console.log(((a, b) => {}).length); // 2 usw.

console.log(((...args) => {}).length);
// 0, Rest-Parameter wird nicht gezählt

console.log(((a, b = 1, c) => {}).length);
// 1, nur Parameter vor dem ersten mit
// einem Standardwert werden gezählt

console.log((({ a, b }, [c, d]) => {}).length);
// 2, Destrukturierungsmuster zählen jeweils als
// ein einzelner Parameter
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Function")}}
