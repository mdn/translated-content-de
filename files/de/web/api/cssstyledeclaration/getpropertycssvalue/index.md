---
title: "CSSStyleDeclaration: getPropertyCSSValue()-Methode"
short-title: getPropertyCSSValue()
slug: Web/API/CSSStyleDeclaration/getPropertyCSSValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{ APIRef("CSSOM") }} {{deprecated_header}}

Die **CSSStyleDeclaration.getPropertyCSSValue()**-Methoden-Schnittstelle gibt ein {{domxref('CSSValue')}} zurück, das den CSS-Wert für eine Eigenschaft enthält. Beachten Sie, dass es `null` zurückgibt, wenn der Eigenschaftsname eine Kurzform ist.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisierteres CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - {{domxref("CSSStyleDeclaration.getPropertyValue()")}} des untypisierten [CSS-Objektmodells](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - {{domxref("Element.computedStyleMap()")}} der modernen [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt und als experimentell angesehen wird.

## Syntax

```js-nolint
getPropertyCSSValue(property)
```

### Parameter

- `property`
  - : Ein String, der den Namen der abzurufenden Eigenschaft repräsentiert.

### Rückgabewert

Ein {{domxref('CSSValue')}}-Objekt, das den CSS-Wert für eine Eigenschaft enthält. Wenn keiner existiert, wird `null` zurückgegeben.

## Beispiele

Der folgende JavaScript-Code erhält ein Objekt, das die berechneten RGB-Werte der `color`-CSS-Eigenschaft enthält:

```js
const style = window.getComputedStyle(elem, null);
const rgbObj = style.getPropertyCSSValue("color").getRGBColorValue();
```

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde aber seitdem aus allen Standardisierungsbemühungen fallen gelassen.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die jetzt auf dem Standardweg ist.

## Browser-Kompatibilität

{{Compat}}
