---
title: "CSSPrimitiveValue: getRGBColorValue() Methode"
short-title: getRGBColorValue()
slug: Web/API/CSSPrimitiveValue/getRGBColorValue
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("CSSOM")}}{{deprecated_header}}{{non-standard_header}}

Die **`getRGBColorValue()`** Methode der [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) Schnittstelle wird verwendet, um einen RGB-Farbwert zu erhalten. Wenn dieser CSS-Wert keinen RGB-Farbwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stileigenschaft können über die [`RGBColor`](/de/docs/Web/API/RGBColor) Schnittstelle vorgenommen werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell angesehen.

## Syntax

```js-nolint
getRGBColorValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`RGBColor`](/de/docs/Web/API/RGBColor) Objekt, das den Farbwert darstellt.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn die angehängte Eigenschaft keinen RGB-Farbwert zurückgeben kann (d.h. es ist kein `CSS_RGBCOLOR`). |

## Beispiele

```js
const cs = window.getComputedStyle(document.body);
const cssValue = cs.getPropertyCSSValue("color");
console.log(cssValue.getRGBColorValue());
```

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde jedoch seitdem aus allen Standardisierungsbestrebungen entfernt.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}
