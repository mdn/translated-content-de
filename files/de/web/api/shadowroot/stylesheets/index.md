---
title: "ShadowRoot: Eigenschaft styleSheets"
short-title: styleSheets
slug: Web/API/ShadowRoot/styleSheets
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

Die **`styleSheets`** schreibgeschützte Eigenschaft der {{domxref("ShadowRoot")}}-Schnittstelle gibt eine {{domxref('StyleSheetList')}} von {{domxref('CSSStyleSheet')}}-Objekten zurück, für Stylesheets, die explizit in einen Shadow-Dom eingefügt oder eingebettet sind.

## Wert

Eine {{domxref('StyleSheetList')}} von {{domxref('CSSStyleSheet')}}-Objekten.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let styleSheets = shadow.styleSheets;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
