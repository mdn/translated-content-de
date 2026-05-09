---
title: "CSSPrimitiveValue: getStringValue()-Methode"
short-title: getStringValue()
slug: Web/API/CSSPrimitiveValue/getStringValue
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("CSSOM")}}{{deprecated_header}}{{non-standard_header}}

Die **`getStringValue()`**-Methode der [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Schnittstelle wird verwendet, um einen Zeichenfolgenwert zu erhalten. Falls dieser CSS-Wert keinen Zeichenfolgenwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Ziel zu erreichen, können Sie Folgendes verwenden:
>
> - das untypisierte [CSS Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell angesehen.

## Syntax

```js-nolint
getStringValue()
```

### Parameter

Keine.

### Rückgabewert

Ein `string`-Wert.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                             |
| -------------- | -------------------------------------------------------------------------------------------- |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen Zeichenfolgenwert enthält. |

## Beispiele

```js
const cs = window.getComputedStyle(document.body);
const cssValue = cs.getPropertyCSSValue("display");
console.log(cssValue.getStringValue());
```

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, jedoch seitdem von jedem Standardisierungsversuch ausgeschlossen.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardisierungspfad befindet.

## Browser-Kompatibilität

{{Compat}}
