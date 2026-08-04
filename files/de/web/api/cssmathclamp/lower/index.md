---
title: "CSSMathClamp: lower-Eigenschaft"
short-title: lower
slug: Web/API/CSSMathClamp/lower
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`lower`**-Eigenschaft der [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)-Schnittstelle gibt ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt zurück, das den Mindestwert darstellt.

## Wert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt ein `CSSMathClamp`-Objekt und liest dann dessen `lower`-Wert.

```js
const clamp = new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(500));

console.log(clamp.lower); // CSSUnitValue {value: 10, unit: "px"}
console.log(clamp.lower.value); // 10
console.log(clamp.lower.unit); // "px"
```

`lower` gibt einfach das [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, das in den Konstruktor übergeben wurde – hier ist das ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), da `CSS.px(10)` ein `CSSUnitValue` ist.
Das Übergeben eines komplexeren Ausdrucks, wie zum Beispiel `CSS.px(10).add(CSS.em(2))` (ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)), würde bedeuten, dass `lower` stattdessen diesen `CSSMathSum` zurückgeben würde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSMathClamp.value`](/de/docs/Web/API/CSSMathClamp/value)
- [`CSSMathClamp.upper`](/de/docs/Web/API/CSSMathClamp/upper)
