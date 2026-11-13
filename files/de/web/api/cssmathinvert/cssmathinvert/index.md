---
title: "CSSMathInvert: CSSMathInvert()-Konstruktor"
short-title: CSSMathInvert()
slug: Web/API/CSSMathInvert/CSSMathInvert
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSMathInvert()`**-Konstruktor erstellt ein neues [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)-Objekt, das den Kehrwert eines [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) darstellt.

## Syntax

```js-nolint
new CSSMathInvert(arg)
```

### Parameter

- `arg`
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), deren bzw. dessen Kehrwert gebildet werden soll.

### Ausnahmen

Keine.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt ein `CSSMathInvert`-Objekt aus einem Prozentwert und gibt anschließend den Namen des Konstruktors, `value` und die Serialisierung des Objekts (aus [`toString()`](/de/docs/Web/API/CSSStyleValue/toString)) aus.

```js
const inverted = new CSSMathInvert(CSS.percent(4));

console.log(inverted.constructor.name); // "CSSMathInvert"
console.log(inverted.value); // CSSUnitValue {value: 4, unit: "percent"}
console.log(inverted.toString()); // "calc(1 / 4%)"
```

Wenn eine einfache Zahl an `arg` übergeben wird, wird sie in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` umgewandelt:

```js
const invertedNumber = new CSSMathInvert(4);

console.log(invertedNumber.value); // CSSUnitValue {value: 4, unit: "number"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
