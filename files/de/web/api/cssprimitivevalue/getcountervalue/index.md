---
title: "CSSPrimitiveValue: getCounterValue() Methode"
short-title: getCounterValue()
slug: Web/API/CSSPrimitiveValue/getCounterValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getCounterValue()`** Methode des {{domxref("CSSPrimitiveValue")}}-Interfaces wird verwendet, um den [counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Wert abzurufen. Wenn dieser CSS-Wert keinen Counter-Wert enthält, wird eine {{domxref("DOMException")}} ausgelöst. Eine Modifikation der entsprechenden Stil-Eigenschaft kann über das {{domxref("Counter")}}-Interface erreicht werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde abgebrochen, und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitreichend unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getCounterValue()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("Counter")}}-Objekt, das den Counter-Wert darstellt.

### Ausnahmen

| **Typ**         | **Beschreibung**                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `DOMException`  | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen `Counter`-Wert enthält (z.B. ist dies nicht `CSS_COUNTER`). |

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde jedoch seitdem aus jedem Standardisierungsversuch herausgenommen.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich jetzt auf dem Standardpfad befindet.

## Browser-Kompatibilität

{{Compat}}
