---
title: "CSSKeywordValue: value-Eigenschaft"
short-title: value
slug: Web/API/CSSKeywordValue/value
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`value`**-Eigenschaft des [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) Interfaces repräsentiert das Schlüsselwort als Zeichenkette.

## Wert

Eine Zeichenkette.

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
