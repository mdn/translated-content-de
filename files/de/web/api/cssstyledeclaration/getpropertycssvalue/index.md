---
title: "CSSStyleDeclaration: getPropertyCSSValue() Methode"
short-title: getPropertyCSSValue()
slug: Web/API/CSSStyleDeclaration/getPropertyCSSValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ APIRef("CSSOM") }} {{non-standard_header}}

Die Schnittstelle der Methode **CSSStyleDeclaration.getPropertyCSSValue()** gibt ein [`CSSValue`](/de/docs/Web/API/CSSValue) zurück, das den CSS-Wert für eine Eigenschaft enthält. Beachten Sie, dass `null` zurückgegeben wird, wenn der Eigenschaftsname eine Kurzform-Eigenschaft ist.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) des untypisierten [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das breit unterstützt wird, oder
> - [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) der modernen, aber weniger unterstützten und als experimentell angesehenen [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API).

## Syntax

```js-nolint
getPropertyCSSValue(property)
```

### Parameter

- `property`
  - : Ein String, der den abzurufenden Eigenschaftsnamen darstellt.

### Rückgabewert

Ein [`CSSValue`](/de/docs/Web/API/CSSValue), das den CSS-Wert für eine Eigenschaft enthält. Falls keiner existiert, wird `null` zurückgegeben.

## Beispiele

Der folgende JavaScript-Code erhält ein Objekt, das die berechneten RGB-Werte der CSS-Eigenschaft `color` enthält:

```js
const style = window.getComputedStyle(elem, null);
const rgbObj = style.getPropertyCSSValue("color").getRGBColorValue();
```

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus allen Standardisierungsbestrebungen entfernt.

Sie wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich nun in der Standardisierungsphase befindet.

## Browser-Kompatibilität

{{Compat}}
