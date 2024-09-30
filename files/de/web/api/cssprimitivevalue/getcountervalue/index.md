---
title: "CSSPrimitiveValue: Methode getCounterValue()"
short-title: getCounterValue()
slug: Web/API/CSSPrimitiveValue/getCounterValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getCounterValue()`**-Methode der [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Schnittstelle wird verwendet, um den [counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)-Wert abzurufen. Wenn dieser CSS-Wert keinen Counter-Wert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stil-Eigenschaft können über die [`Counter`](/de/docs/Web/API/Counter)-Schnittstelle vorgenommen werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
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

| **Typ**         | **Beschreibung**                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `DOMException`  | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen `Counter`-Wert enthält (z.B. ist dies nicht `CSS_COUNTER`). |

## Spezifikationen

Dieses Merkmal wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, ist jedoch seitdem aus allen Standardisierungsbemühungen herausgefallen.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardpfad befindet.

## Browser-Kompatibilität

{{Compat}}
