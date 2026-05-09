---
title: "CSSPrimitiveValue: getCounterValue() Methode"
short-title: getCounterValue()
slug: Web/API/CSSPrimitiveValue/getCounterValue
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("CSSOM")}}{{deprecated_header}}{{non-standard_header}}

Die **`getCounterValue()`**-Methode des [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Interfaces wird verwendet, um den [Zählerwert](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) zu erhalten. Wenn dieser CSS-Wert keinen Zählerwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stil-Eigenschaft können über das [`Counter`](/de/docs/Web/API/Counter)-Interface vorgenommen werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getCounterValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Counter`](/de/docs/Web/API/Counter)-Objekt, das den Zählerwert darstellt.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen `Counter`-Wert enthält (z. B. wenn dies nicht `CSS_COUNTER` ist). |

## Spezifikationen

Dieses Feature wurde ursprünglich in der Spezifikation [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) definiert, wurde aber seitdem aus jedem Standardisierungsbestreben herausgenommen.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}
