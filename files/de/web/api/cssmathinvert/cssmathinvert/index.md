---
title: "CSSMathInvert: CSSMathInvert()-Konstruktor"
short-title: CSSMathInvert()
slug: Web/API/CSSMathInvert/CSSMathInvert
l10n:
  sourceCommit: 542f8a0bccdf6258fb687ee878b87513e4fd1711
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSMathInvert()`**-Konstruktor erstellt ein neues [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)-Objekt, das den Kehrwert eines [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) darstellt.

## Syntax

```js-nolint
new CSSMathInvert(arg)
```

### Parameter

- `arg`
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), das den zu invertierenden Wert darstellt.

### Ausnahmen

Keine.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt ein `CSSMathInvert`-Objekt aus einem Prozentsatz und gibt dann den Namen des Konstruktors, den `value` und die Serialisierung des Objekts (von [`toString()`](/de/docs/Web/API/CSSStyleValue/toString)) aus.

```js
const inverted = new CSSMathInvert(CSS.percent(4));

console.log(inverted.constructor.name); // "CSSMathInvert"
console.log(inverted.value); // CSSUnitValue {value: 4, unit: "percent"}
console.log(inverted.toString()); // "calc(1 / 4%)"
```

Beachten Sie, dass, wenn eine einfache Zahl an `arg` übergeben wird, der `value` auf einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` berichtigt wird:

```js
const invertedNumber = new CSSMathInvert(4);

console.log(invertedNumber.value); // CSSUnitValue {value: 4, unit: "number"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
