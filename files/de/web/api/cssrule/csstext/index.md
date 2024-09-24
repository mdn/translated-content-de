---
title: "CSSRule: cssText-Eigenschaft"
short-title: cssText
slug: Web/API/CSSRule/cssText
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("CSSOM") }}

Die **`cssText`**-Eigenschaft der {{domxref("CSSRule")}}-Schnittstelle gibt den tatsächlichen Text einer {{domxref("CSSStyleSheet")}}-Stilregel zurück.

> [!NOTE]
> Verwechseln Sie diese Eigenschaft nicht mit dem Elementstil
> {{domxref("CSSStyleDeclaration.cssText")}}.

Beachten Sie, dass diese Eigenschaft nicht mehr direkt gesetzt werden kann, da sie [jetzt spezifiziert](https://www.w3.org/TR/cssom-1/#changes-from-5-december-2013) ist, _funktional_ nur modifizierbar zu sein und dies stillschweigend. Mit anderen Worten, der Versuch, sie zu setzen, _bewirkt absolut nichts_ und gibt nicht einmal eine Warnung oder einen Fehler aus. Außerdem hat sie keine setzbaren Untereigenschaften. Um sie zu modifizieren, verwenden Sie daher die Eigenschaften der CSS-Regelliste des Stylesheets, {{domxref("CSSRuleList", "cssRules[index]")}}-Eigenschaften
{{domxref("CSSStyleRule.selectorText", ".selectorText")}} und
{{domxref("CSSStyleRule.style", ".style")}} (oder deren Untereigenschaften). Siehe [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) für Details.

## Wert

Ein String, der den tatsächlichen Text der {{domxref("CSSStyleSheet")}}-Regel enthält.

## Beispiele

```css
body {
  background-color: darkblue;
}
```

```js
let stylesheet = document.styleSheets[0];
console.log(stylesheet.cssRules[0].cssText); // body { background-color: darkblue; }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
