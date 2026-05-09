---
title: "CSSStyleDeclaration: getPropertyCSSValue() Methode"
short-title: getPropertyCSSValue()
slug: Web/API/CSSStyleDeclaration/getPropertyCSSValue
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{ APIRef("CSSOM") }} {{deprecated_header}}{{non-standard_header}}

Die **CSSStyleDeclaration.getPropertyCSSValue()**
Methodenschnittstelle gibt ein [`CSSValue`](/de/docs/Web/API/CSSValue) zurück, das den CSS-Wert für eine Eigenschaft enthält. Beachten Sie, dass sie `null` zurückgibt, wenn der Eigenschaftsname eine Kurzform-Eigenschaft ist.

> [!NOTE]
> Diese Schnittstelle war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) des untypisierten [CSS-Objektmodells](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) der modernen [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getPropertyCSSValue(property)
```

### Parameter

- `property`
  - : Ein String, der den zu abfragenden Eigenschaftsnamen darstellt.

### Rückgabewert

Ein [`CSSValue`](/de/docs/Web/API/CSSValue), das den CSS-Wert für eine Eigenschaft enthält. Wenn keiner existiert, wird `null` zurückgegeben.

## Beispiele

Der folgende JavaScript-Code erhält ein Objekt, das die berechneten RGB-Werte der `color` CSS-Eigenschaft enthält:

```js
const style = window.getComputedStyle(elem, null);
const rgbObj = style.getPropertyCSSValue("color").getRGBColorValue();
```

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde jedoch seitdem aus allen Standardisierungsbemühungen gestrichen.

Sie wurde durch eine moderne, jedoch inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardisierungspfad befindet.

## Browser-Kompatibilität

{{Compat}}
