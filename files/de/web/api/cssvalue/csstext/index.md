---
title: "CSSValue: Eigenschaft cssText"
short-title: cssText
slug: Web/API/CSSValue/cssText
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

Die **`cssText`**-Eigenschaft des {{domxref("CSSValue")}}-Interfaces repräsentiert den aktuell berechneten CSS-Wert einer Eigenschaft.

> [!NOTE]
> Diese Eigenschaft war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - die modernen [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

## Wert

Ein String, der den aktuellen CSS-Wert einer Eigenschaft darstellt.

## Beispiele

```js
const styleDeclaration = document.styleSheets[0].cssRules[0].style;
const cssValue = styleDeclaration.getPropertyCSSValue("color");
console.log(cssValue.cssText);
```

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus jeglichen Standardisierungsbemühungen gestrichen.

Sie wurde durch eine moderne, aber inkompatible, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun im Standardisierungsprozess befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}}
