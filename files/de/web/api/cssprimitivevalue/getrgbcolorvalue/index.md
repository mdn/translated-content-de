---
title: "CSSPrimitiveValue: Methode getRGBColorValue()"
short-title: getRGBColorValue()
slug: Web/API/CSSPrimitiveValue/getRGBColorValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die Methode **`getRGBColorValue()`** der Schnittstelle [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) wird verwendet, um einen RGB-Farbwert zu erhalten. Wenn dieser CSS-Wert keinen RGB-Farbwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stil-Eigenschaft können über die Schnittstelle [`RGBColor`](/de/docs/Web/API/RGBColor) vorgenommen werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

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

Dieses Merkmal wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde jedoch seitdem aus allen Standardisierungsbemühungen gestrichen.

Es wurde durch eine moderne, aber inkompatible, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Weg zur Standardisierung befindet.

## Browser-Kompatibilität

{{Compat}}
