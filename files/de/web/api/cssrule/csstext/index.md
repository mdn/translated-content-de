---
title: "CSSRule: cssText-Eigenschaft"
short-title: cssText
slug: Web/API/CSSRule/cssText
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("CSSOM") }}

Die **`cssText`**-Eigenschaft des [`CSSRule`](/de/docs/Web/API/CSSRule)-Interfaces gibt den tatsächlichen Text einer [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Stilregel zurück.

> [!NOTE]
> Verwechseln Sie diese Eigenschaft nicht mit der Elementstil-Eigenschaft
> [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText).

Beachten Sie, dass diese Eigenschaft nicht mehr direkt gesetzt werden kann, da sie [nun spezifiziert](https://www.w3.org/TR/cssom-1/#changes-from-5-december-2013) ist, dass sie _funktional_ nur modifiziert und dies stillschweigend erfolgen kann. Mit anderen Worten, der Versuch, sie zu setzen, _bewirkt absolut nichts_ und gibt nicht einmal eine Warnung oder einen Fehler aus. Darüber hinaus hat sie keine setzbaren Untereigenschaften. Um sie zu ändern, verwenden Sie daher die [`cssRules[index]`](/de/docs/Web/API/CSSRuleList)-Eigenschaften des Stylesheets [`.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText) und [`.style`](/de/docs/Web/API/CSSStyleRule/style) (oder deren Untereigenschaften). Siehe [Verwendung dynamischer Stilinformationsinformation](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) für Details.

## Wert

Ein String, der den tatsächlichen Text der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Regel enthält.

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
