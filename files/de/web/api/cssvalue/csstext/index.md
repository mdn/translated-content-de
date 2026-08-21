---
title: "CSSValue: cssText-Eigenschaft"
short-title: cssText
slug: Web/API/CSSValue/cssText
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Die **`cssText`**-Eigenschaft der [`CSSValue`](/de/docs/Web/API/CSSValue)-Schnittstelle repräsentiert den aktuell berechneten CSS-Eigenschaftswert.

> [!NOTE]
> Diese Eigenschaft war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Wert

Ein String, der den aktuellen CSS-Eigenschaftswert darstellt.

## Beispiele

```js
const styleDeclaration = document.styleSheets[0].cssRules[0].style;
const cssValue = styleDeclaration.getPropertyCSSValue("color");
console.log(cssValue.cssText);
```

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus allen Standardisierungsbemühungen entfernt.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich nun auf dem Weg zur Standardisierung befindet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue)
