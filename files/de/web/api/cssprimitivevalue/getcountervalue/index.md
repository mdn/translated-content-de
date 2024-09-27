---
title: "CSSPrimitiveValue: getCounterValue()-Methode"
short-title: getCounterValue()
slug: Web/API/CSSPrimitiveValue/getCounterValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getCounterValue()`**-Methode der [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Schnittstelle wird verwendet, um den [Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)-Wert zu erhalten. Wenn dieser CSS-Wert keinen Zählerwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Änderungen an der entsprechenden Stil-Eigenschaft können mit der [`Counter`](/de/docs/Web/API/Counter)-Schnittstelle vorgenommen werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde abgebrochen und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), das weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getCounterValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Counter`](/de/docs/Web/API/Counter)-Objekt, das den Zählerwert darstellt.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                              |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen `Counter` Wert enthält (z.B. ist dies nicht `CSS_COUNTER`). |

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus allen Standardisierungsbemühungen gestrichen.

Es wurde durch ein modernes, aber inkompatibles [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich nun auf dem Standardisierungspfad befindet.

## Browser-Kompatibilität

{{Compat}}
