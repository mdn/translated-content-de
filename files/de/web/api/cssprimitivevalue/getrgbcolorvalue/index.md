---
title: "CSSPrimitiveValue: Methode getRGBColorValue()"
short-title: getRGBColorValue()
slug: Web/API/CSSPrimitiveValue/getRGBColorValue
l10n:
  sourceCommit: a3400c39a245e0404c621c2cdbe75ad0a3eb8672
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Die Methode **`getRGBColorValue()`** des Interfaces [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) wird verwendet, um einen RGB-Farbwert abzurufen. Wenn dieser CSS-Wert keinen RGB-Farbwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Die entsprechende Style-Eigenschaft kann über das Interface [`RGBColor`](/de/docs/Web/API/RGBColor) geändert werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS Object Model zu entwickeln. Dieser Ansatz wurde aufgegeben, und die meisten Browser implementieren die Methode nicht.
>
> Stattdessen können Sie Folgendes verwenden:
>
> - das nicht typisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weithin unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger breit unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getRGBColorValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`RGBColor`](/de/docs/Web/API/RGBColor)-Objekt, das den Farbwert darstellt.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DOMException` | `INVALID_ACCESS_ERR` wird ausgelöst, wenn die zugehörige Eigenschaft keinen RGB-Farbwert zurückgeben kann (d.h. wenn sie nicht `CSS_RGBCOLOR` ist). |

## Beispiele

```js
const cs = window.getComputedStyle(document.body);
const cssValue = cs.getPropertyCSSValue("color");
console.log(cssValue.getRGBColorValue());
```

## Spezifikationen

Diese Funktion wurde ursprünglich in der Spezifikation [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) definiert, wird seither jedoch in keinem Standardisierungsverfahren mehr berücksichtigt.

Sie wurde durch die moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) abgelöst, die sich derzeit im Standardisierungsprozess befindet.

## Browser-Kompatibilität

{{Compat}}
