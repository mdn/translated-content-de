---
title: "ShadowRoot: styleSheets-Eigenschaft"
short-title: styleSheets
slug: Web/API/ShadowRoot/styleSheets
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

Die **`styleSheets`** schreibgeschützte Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurück, für Stylesheets, die explizit in einen Shadow-Baum eingebunden oder eingebettet sind.

## Wert

Eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let styleSheets = shadow.styleSheets;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
