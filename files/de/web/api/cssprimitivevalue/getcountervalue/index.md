---
title: "CSSPrimitiveValue: getCounterValue() Methode"
short-title: getCounterValue()
slug: Web/API/CSSPrimitiveValue/getCounterValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Die **`getCounterValue()`** Methode der [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Schnittstelle wird verwendet, um den [Zählerwert](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) abzurufen. Wenn dieser CSS-Wert keinen Zählerwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stil-Eigenschaft können über die [`Counter`](/de/docs/Web/API/Counter)-Schnittstelle erreicht werden.

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

Ein [`Counter`](/de/docs/Web/API/Counter)-Objekt, das den Zählerwert repräsentiert.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen `Counter`-Wert enthält (z. B. ist dies nicht `CSS_COUNTER`). |

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde aber seitdem aus allen Standardisierungsbemühungen entfernt.

Es wurde von einer modernen, aber inkompatiblen [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) abgelöst, die sich nun im Standardisierungsprozess befindet.

## Browser-Kompatibilität

{{Compat}}
