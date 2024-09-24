---
title: "CSSRule: Eigenschaft parentStyleSheet"
short-title: parentStyleSheet
slug: Web/API/CSSRule/parentStyleSheet
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die **`parentStyleSheet`**-Eigenschaft der
{{domxref("CSSRule")}}-Schnittstelle gibt das {{domxref("StyleSheet")}}-Objekt zurück, in dem
die aktuelle Regel definiert ist.

## Wert

Ein {{domxref("StyleSheet")}}-Objekt.

## Beispiele

```js
const docRules = document.styleSheets[0].cssRules;
console.log(docRules[0].parentStyleSheet == document.styleSheets[0]); // returns true
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
