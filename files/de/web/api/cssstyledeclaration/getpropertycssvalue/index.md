---
title: "CSSStyleDeclaration: Methode getPropertyCSSValue()"
short-title: getPropertyCSSValue()
slug: Web/API/CSSStyleDeclaration/getPropertyCSSValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{ APIRef("CSSOM") }} {{deprecated_header}}

Die **CSSStyleDeclaration.getPropertyCSSValue()**
Methodenschnittstelle gibt ein [`CSSValue`](/de/docs/Web/API/CSSValue)-Objekt zurück, das den CSS-Wert für eine
Eigenschaft enthält. Beachten Sie, dass `null` zurückgegeben wird, wenn der Eigenschaftsname eine
Kurzschreibweise ist.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) des untypisierten [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), weit unterstützt, oder
> - [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) des modernen [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell betrachtet.

## Syntax

```js-nolint
getPropertyCSSValue(property)
```

### Parameter

- `property`
  - : Ein String, der den Namen der abzurufenden Eigenschaft darstellt.

### Rückgabewert

Ein [`CSSValue`](/de/docs/Web/API/CSSValue)-Objekt, das den CSS-Wert für eine Eigenschaft enthält. Falls keiner existiert, wird `null` zurückgegeben.

## Beispiele

Der folgende JavaScript-Code erhält ein Objekt, das die berechneten RGB-Werte der
`color`-CSS-Eigenschaft enthält:

```js
const style = window.getComputedStyle(elem, null);
const rgbObj = style.getPropertyCSSValue("color").getRGBColorValue();
```

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, aber seitdem aus jeder Standardisierungsanstrengung entfernt.

Sie wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich jetzt auf dem Standardisierungspfad befindet.

## Browser-Kompatibilität

{{Compat}}
