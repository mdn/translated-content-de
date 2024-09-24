---
title: "CSSKeywordValue: Eigenschaft value"
short-title: value
slug: Web/API/CSSKeywordValue/value
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed Object Model API")}}

Die **`value`**-Eigenschaft der
{{domxref("CSSKeywordValue")}}-Schnittstelle gibt den Wert der
`CSSKeywordValue` zurück oder legt ihn fest.

## Wert

Ein Zeichenfolge.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `value`-Eigenschaft eine leere {{jsxref('String')}} ist, wenn sie gesetzt wird.

## Beispiele

Das folgende Beispiel setzt die CSS-{{cssxref('display')}}-Eigenschaft auf ihre Standardwerte zurück.

```js
let indicator = document.getElementById("indicator");
indicator.attributeStyleMap.set("display", new CSSKeywordValue("initial"));
indicator.attributeStyleMap.get("display").value; // 'initial'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
