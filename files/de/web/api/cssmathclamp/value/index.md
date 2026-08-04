---
title: "CSSMathClamp: value-Eigenschaft"
short-title: value
slug: Web/API/CSSMathClamp/value
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`value`**-Eigenschaft des [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)-Interfaces gibt eine Instanz von [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, die den bevorzugten Wert darstellt.

## Wert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt ein `CSSMathClamp`-Objekt und liest dann dessen `value`.

```js
const clamp = new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(500));

console.log(clamp.value); // CSSUnitValue {value: 50, unit: "percent"}
console.log(clamp.value.value); // 50
console.log(clamp.value.unit); // "percent"
```

`value` gibt einfach das [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, das in den Konstruktor übergeben wurde — hier ist das ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), da `CSS.percent(50)` ein `CSSUnitValue` ist. Wenn ein komplexerer Ausdruck übergeben wird, wie z.B. `CSS.percent(50).add(CSS.em(2))` (ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)), würde `value` stattdessen diesen `CSSMathSum` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSMathClamp.lower`](/de/docs/Web/API/CSSMathClamp/lower)
- [`CSSMathClamp.upper`](/de/docs/Web/API/CSSMathClamp/upper)
