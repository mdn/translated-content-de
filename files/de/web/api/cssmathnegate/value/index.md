---
title: "CSSMathNegate: value-Eigenschaft"
short-title: value
slug: Web/API/CSSMathNegate/value
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`value`** der Schnittstelle [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate) gibt den [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, der negiert wird.

Dies ist der an den Konstruktor übergebene Wert. Falls er noch kein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) ist, wird er in einen solchen umgewandelt.
Wenn dem Konstruktor eine einfache Zahl übergeben wurde, gibt diese Eigenschaft den übergebenen Wert zurück, verpackt in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"`.

## Wert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) oder einer seiner abgeleiteten Typen.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt ein `CSSMathNegate`-Objekt und liest anschließend dessen `value`.

In diesem Fall wurde `CSS.px(10)` übergeben, daher ist `value` ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue).
Würde stattdessen ein zusammengesetzter Ausdruck wie `CSS.px(10).add(CSS.percent(5))` übergeben, würde `value` einen [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurückgeben.

```js
const negated = new CSSMathNegate(CSS.px(10));

console.log(negated.value); // CSSUnitValue {value: 10, unit: "px"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSMathInvert.value`](/de/docs/Web/API/CSSMathInvert/value)
