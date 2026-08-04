---
title: "CSSKeywordValue: value-Eigenschaft"
short-title: value
slug: Web/API/CSSKeywordValue/value
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`value`**-Eigenschaft der [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)-Schnittstelle repräsentiert den Wert der `CSSKeywordValue`.

## Wert

Ein String.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `value`-Eigenschaft auf einen leeren {{jsxref('String')}} gesetzt wird.

## Beispiele

### Grundlegende Verwendung

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
