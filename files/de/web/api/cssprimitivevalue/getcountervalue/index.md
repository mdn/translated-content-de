---
title: "CSSPrimitiveValue: getCounterValue() Methode"
short-title: getCounterValue()
slug: Web/API/CSSPrimitiveValue/getCounterValue
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getCounterValue()`**-Methode des [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Interfaces wird verwendet, um den [Counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)-Wert zu erhalten. Wenn dieser CSS-Wert keinen Counter-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stil-Eigenschaft können über das [`Counter`](/de/docs/Web/API/Counter)-Interface vorgenommen werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS Object Model zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser haben ihn nicht implementiert.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das nicht typisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getCounterValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Counter`](/de/docs/Web/API/Counter)-Objekt, das den Counter-Wert darstellt.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                              |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen `Counter`-Wert enthält (z.B. ist dies nicht `CSS_COUNTER`). |

## Spezifikationen

Diese Funktion wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus allen Standardisierungsbestrebungen entfernt.

Sie wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Standard-Weg befindet.

## Browser-Kompatibilität

{{Compat}}
