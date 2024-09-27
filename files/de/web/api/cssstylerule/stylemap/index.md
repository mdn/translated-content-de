---
title: "CSSStyleRule: styleMap-Eigenschaft"
short-title: styleMap
slug: Web/API/CSSStyleRule/styleMap
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`styleMap`**-Eigenschaft der [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)-Schnittstelle gibt ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurück, das Zugriff auf die Eigenschaft-Wert-Paare der Regel bietet.

## Wert

Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt.

## Beispiel

Das folgende Beispiel zeigt die Verwendung von `styleMap`, um einen Stil mithilfe der [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)-Methode zu ändern.

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
