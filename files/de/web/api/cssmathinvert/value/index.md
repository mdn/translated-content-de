---
title: "CSSMathInvert: value-Eigenschaft"
short-title: value
slug: Web/API/CSSMathInvert/value
l10n:
  sourceCommit: 542f8a0bccdf6258fb687ee878b87513e4fd1711
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`value`**-Eigenschaft der [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)-Schnittstelle gibt den [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, der invertiert wird.

Dies ist der Parameter, der beim Erstellen dieses Objekts an den Konstruktor übergeben wurde.

## Wert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) oder einer seiner abgeleiteten Typen.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt ein `CSSMathInvert`-Objekt und liest dann dessen `value`.

```js
const inverted = new CSSMathInvert(CSS.percent(4));

console.log(inverted.value); // CSSUnitValue {value: 4, unit: "percent"}
```

`value` gibt das zurück, was in den Konstruktor als `arg` übergeben wurde.
In diesem Fall übergaben wir `CSS.percent(4)`, also ist `value` ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue).
Das Übergeben eines Ausdrucks wie `CSS.percent(4).add(CSS.em(2))` würde dazu führen, dass `value` einen [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSMathNegate.value`](/de/docs/Web/API/CSSMathNegate/value)
