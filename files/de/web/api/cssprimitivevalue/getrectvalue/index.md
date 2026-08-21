---
title: "CSSPrimitiveValue: getRectValue() Methode"
short-title: getRectValue()
slug: Web/API/CSSPrimitiveValue/getRectValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Die **`getRectValue()`**-Methode des [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Interfaces wird verwendet, um einen `rect`-Wert zu erhalten. Wenn dieser CSS-Wert keinen `rect`-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Die Änderung der entsprechenden Stil-Eigenschaft kann über das [`Rect`](/de/docs/Web/API/Rect)-Interface erfolgen.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell betrachtet wird.

## Syntax

```js-nolint
getRectValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Rect`](/de/docs/Web/API/Rect)-Objekt, das den `rect`-Wert darstellt.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen `rect`-Wert enthält. (d.h. dies ist nicht `CSS_RECT`). |

## Beispiele

```js
const cs = window.getComputedStyle(document.getElementById("clippedDiv"));
const cssValue = cs.getPropertyCSSValue("clip");
console.log(cssValue.getRectValue());
```

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus jeglichem Standardisierungsversuch entfernt.

Es wurde durch das moderne, aber nicht kompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}
