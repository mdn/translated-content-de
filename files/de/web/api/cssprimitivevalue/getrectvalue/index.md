---
title: "CSSPrimitiveValue: getRectValue() Methode"
short-title: getRectValue()
slug: Web/API/CSSPrimitiveValue/getRectValue
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("CSSOM")}}{{deprecated_header}}{{non-standard_header}}

Die **`getRectValue()`**-Methode der
[`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Schnittstelle wird verwendet, um einen Rechteckwert abzurufen. Wenn dieser CSS-Wert keinen Rechteckwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
Änderungen an der entsprechenden Stil-Eigenschaft können über die
[`Rect`](/de/docs/Web/API/Rect)-Schnittstelle vorgenommen werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt und als experimentell angesehen wird.

## Syntax

```js-nolint
getRectValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Rect`](/de/docs/Web/API/Rect)-Objekt, das den Rechteckwert darstellt.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen Rechteckwert enthält. (d.h. dies ist nicht `CSS_RECT`). |

## Beispiele

```js
const cs = window.getComputedStyle(document.getElementById("clippedDiv"));
const cssValue = cs.getPropertyCSSValue("clip");
console.log(cssValue.getRectValue());
```

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, ist jedoch seitdem aus jedem Standardisierungsbestreben entfernt worden.

Es wurde durch die moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardpfad befindet.

## Browser-Kompatibilität

{{Compat}}
