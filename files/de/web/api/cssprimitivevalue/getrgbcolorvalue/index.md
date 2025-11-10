---
title: "CSSPrimitiveValue: getRGBColorValue() Methode"
short-title: getRGBColorValue()
slug: Web/API/CSSPrimitiveValue/getRGBColorValue
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getRGBColorValue()`** Methode der [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) Schnittstelle wird verwendet, um einen RGB-Farbwert zu erhalten. Falls dieser CSS-Wert keinen RGB-Farbwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stil-Eigenschaft können über die [`RGBColor`](/de/docs/Web/API/RGBColor) Schnittstelle vorgenommen werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weit unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt und als experimentell betrachtet wird.

## Syntax

```js-nolint
getRGBColorValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`RGBColor`](/de/docs/Web/API/RGBColor) Objekt, das den Farbwert darstellt.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn die angehängte Eigenschaft keinen RGB-Farbwert zurückgeben kann (d.h. dies ist nicht `CSS_RGBCOLOR`). |

## Beispiele

```js
const cs = window.getComputedStyle(document.body);
const cssValue = cs.getPropertyCSSValue("color");
console.log(cssValue.getRGBColorValue());
```

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde jedoch seitdem aus jeder Standardisierungsbemühung gestrichen.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich jetzt auf dem Standardisierungsweg befindet.

## Browser-Kompatibilität

{{Compat}}
