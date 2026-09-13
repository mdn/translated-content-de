---
title: "CSSMathNegate: value-Eigenschaft"
short-title: value
slug: Web/API/CSSMathNegate/value
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`value`**-Eigenschaft, die nur lesbar ist, der [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)-Schnittstelle gibt den [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, der negiert wird.

Dies ist der an den Konstruktor übergebene Wert, der zu einem [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) berichtigt wird (wenn er noch keiner ist). Wenn eine normale Zahl an den Konstruktor übergeben wurde, ist der von dieser Eigenschaft zurückgegebene Wert der übergebene Wert, eingebettet in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit `unit: "number"`.

## Wert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) oder einer seiner abgeleiteten Typen.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt ein `CSSMathNegate`-Objekt und liest dann dessen `value`.

In diesem Fall haben wir `CSS.px(10)` übergeben, daher ist `value` ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue).
Das Übergeben eines zusammengesetzten Ausdrucks wie `CSS.px(10).add(CSS.percent(5))` würde dazu führen, dass `value` einen [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurückgibt.

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
