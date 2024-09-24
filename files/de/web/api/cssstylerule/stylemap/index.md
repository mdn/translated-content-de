---
title: "CSSStyleRule: styleMap-Eigenschaft"
short-title: styleMap
slug: Web/API/CSSStyleRule/styleMap
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}

Die **`styleMap`**-Eigenschaft des Lesezugriffs der
{{domxref("CSSStyleRule")}}-Schnittstelle gibt ein {{domxref('StylePropertyMap')}} Objekt zurück,
das Zugriff auf die Eigenschaft-Wert-Paare der Regel bietet.

## Wert

Ein {{domxref('StylePropertyMap')}} Objekt.

## Beispiel

Das folgende Beispiel zeigt die Verwendung von `styleMap`, um einen Stil mit der {{domxref('StylePropertyMap.set()')}}-Methode zu ändern.

```js
const stylesheet = document.styleSheets[0];

Object.values(stylesheet.cssRules).forEach((block) => {
  if (block.selectorText === "button") {
    block.styleMap.set("--mainColor", "black");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
