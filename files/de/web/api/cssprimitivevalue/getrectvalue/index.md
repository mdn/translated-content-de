---
title: "CSSPrimitiveValue: getRectValue()-Methode"
short-title: getRectValue()
slug: Web/API/CSSPrimitiveValue/getRectValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getRectValue()`**-Methode der {{domxref("CSSPrimitiveValue")}}-Schnittstelle wird verwendet, um einen Rechteckwert zu erhalten. Falls dieser CSS-Wert keinen Rechteckwert enthält, wird eine {{domxref("DOMException")}} ausgelöst. Änderungen an der entsprechenden Stil-Eigenschaft können über die {{domxref("Rect")}}-Schnittstelle erreicht werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getRectValue()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("Rect")}}-Objekt, das den Rechteckwert darstellt.

### Ausnahmen

| **Typ**         | **Beschreibung**                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| `DOMException`  | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen Rechteckwert enthält. (d. h., es ist nicht `CSS_RECT`). |

## Beispiele

```js
const cs = window.getComputedStyle(document.getElementById("clippedDiv"));
const cssValue = cs.getPropertyCSSValue("clip");
console.log(cssValue.getRectValue());
```

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus jeglichen Standardisierungsbemühungen entfernt.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich nun auf dem Standardisierungspfad befindet.

## Kompatibilität der Browser

{{Compat}}
