---
title: "CSSMathClamp: obere Eigenschaft"
short-title: upper
slug: Web/API/CSSMathClamp/upper
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`upper`** schreibgeschützte Eigenschaft der [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)-Schnittstelle gibt ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt zurück, das seinen Maximalwert darstellt.

## Wert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt ein `CSSMathClamp`-Objekt und liest dann dessen `upper`-Wert aus.

```js
const clamp = new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(500));

console.log(clamp.upper); // CSSUnitValue {value: 500, unit: "px"}
console.log(clamp.upper.value); // 500
console.log(clamp.upper.unit); // "px"
```

`upper` gibt einfach das [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, das in den Konstruktor übergeben wurde — hier handelt es sich um ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), da `CSS.px(500)` ein `CSSUnitValue` ist.
Wenn ein komplexerer Ausdruck übergeben wird, wie `CSS.px(500).add(CSS.em(2))` (ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)), würde `upper` stattdessen dieses `CSSMathSum` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSMathClamp.lower`](/de/docs/Web/API/CSSMathClamp/lower)
- [`CSSMathClamp.value`](/de/docs/Web/API/CSSMathClamp/value)
