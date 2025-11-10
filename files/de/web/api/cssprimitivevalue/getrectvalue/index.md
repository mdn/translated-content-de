---
title: "CSSPrimitiveValue: getRectValue() Methode"
short-title: getRectValue()
slug: Web/API/CSSPrimitiveValue/getRectValue
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getRectValue()`** Methode der [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) Schnittstelle wird verwendet, um einen Rechteckwert zu erhalten. Wenn dieser CSS-Wert keinen Rechteckwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stil-Eigenschaft können über die [`Rect`](/de/docs/Web/API/Rect) Schnittstelle vorgenommen werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getRectValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Rect`](/de/docs/Web/API/Rect) Objekt, das den Rechteckwert darstellt.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                           |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen Rechteckwert enthält. (d.h. dies ist nicht `CSS_RECT`). |

## Beispiele

```js
const cs = window.getComputedStyle(document.getElementById("clippedDiv"));
const cssValue = cs.getPropertyCSSValue("clip");
console.log(cssValue.getRectValue());
```

## Spezifikationen

Dieses Merkmal wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde jedoch seitdem aus allen Standardisierungsbemühungen herausgenommen.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich jetzt auf dem Standardpfad befindet.

## Browser-Kompatibilität

{{Compat}}
