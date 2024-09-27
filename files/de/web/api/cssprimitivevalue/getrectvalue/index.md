---
title: "CSSPrimitiveValue: getRectValue() Methode"
short-title: getRectValue()
slug: Web/API/CSSPrimitiveValue/getRectValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getRectValue()`** Methode der
[`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) Schnittstelle wird verwendet, um einen `rect`-Wert zu erhalten. Wenn dieser CSS-Wert keinen `rect`-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Modifikationen der entsprechenden Stil-Eigenschaft können mit der
[`Rect`](/de/docs/Web/API/Rect) Schnittstelle erreicht werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Objektmodell](/de/docs/Web/API/CSS_Object_Model), weit verbreitet unterstützt, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell betrachtet.

## Syntax

```js-nolint
getRectValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Rect`](/de/docs/Web/API/Rect) Objekt, das den `rect`-Wert repräsentiert.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen Rect-Wert enthält. (d.h. dies ist nicht `CSS_RECT`). |

## Beispiele

```js
const cs = window.getComputedStyle(document.getElementById("clippedDiv"));
const cssValue = cs.getPropertyCSSValue("clip");
console.log(cssValue.getRectValue());
```

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde aber seitdem aus jedem Standardisierungsversuch gestrichen.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}
