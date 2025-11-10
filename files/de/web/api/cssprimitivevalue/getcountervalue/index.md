---
title: "CSSPrimitiveValue: getCounterValue() Methode"
short-title: getCounterValue()
slug: Web/API/CSSPrimitiveValue/getCounterValue
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getCounterValue()`** Methode der
[`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) Schnittstelle wird verwendet, um den [Counter](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)
Wert zu erhalten. Falls dieser CSS-Wert keinen Counter-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException)
ausgelöst. Änderungen an der entsprechenden Stil-Eigenschaft können über die
[`Counter`](/de/docs/Web/API/Counter) Schnittstelle erfolgen.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weit unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getCounterValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Counter`](/de/docs/Web/API/Counter) Objekt, das den Counter-Wert darstellt.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen `Counter`-Wert enthält (z. B. ist dies nicht `CSS_COUNTER`). |

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde aber seither aus allen
Standardisierungsbemühungen fallen gelassen.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}
