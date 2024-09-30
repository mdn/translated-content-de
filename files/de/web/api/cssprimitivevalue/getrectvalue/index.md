---
title: "CSSPrimitiveValue: Methode getRectValue()"
short-title: getRectValue()
slug: Web/API/CSSPrimitiveValue/getRectValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getRectValue()`**-Methode der [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Schnittstelle wird verwendet, um einen Rechteckwert zu erhalten. Wenn dieser CSS-Wert keinen Rechteckwert enthält, wird ein [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stil-Eigenschaft können mithilfe der [`Rect`](/de/docs/Web/API/Rect)-Schnittstelle vorgenommen werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS Object Model zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weit unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getRectValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Rect`](/de/docs/Web/API/Rect)-Objekt, das den Rechteckwert darstellt.

### Ausnahmen

| **Typ**         | **Beschreibung**                                                                                             |
| --------------  | ------------------------------------------------------------------------------------------------------------ |
| `DOMException`  | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen Rechteckwert enthält. (d.h. es ist nicht `CSS_RECT`). |

## Beispiele

```js
const cs = window.getComputedStyle(document.getElementById("clippedDiv"));
const cssValue = cs.getPropertyCSSValue("clip");
console.log(cssValue.getRectValue());
```

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde aber seitdem aus jeglichen Standardisierungsbemühungen entfernt.

Sie wurde durch eine moderne, aber inkompatible, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die nun auf dem Standardpfad ist.

## Browser-Kompatibilität

{{Compat}}
