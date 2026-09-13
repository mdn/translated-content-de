---
title: "CSSPrimitiveValue: getStringValue() Methode"
short-title: getStringValue()
slug: Web/API/CSSPrimitiveValue/getStringValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Die **`getStringValue()`** Methode des [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Interfaces wird verwendet, um einen Zeichenfolgenwert zu erhalten. Wenn dieser CSS-Wert keinen Zeichenfolgenwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie Folgendes verwenden:
>
> - das untypisierte [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model), das weitgehend unterstützt wird, oder
> - die moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), die weniger unterstützt wird und als experimentell gilt.

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

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, wurde jedoch seitdem aus jeglichem Standardisierungsaufwand entfernt.

Es wurde durch die moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich nun auf dem Standardisierungsweg befindet.

## Browser-Kompatibilität

{{Compat}}
