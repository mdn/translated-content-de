---
title: "CSSPrimitiveValue: getRGBColorValue() Methode"
short-title: getRGBColorValue()
slug: Web/API/CSSPrimitiveValue/getRGBColorValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}{{non-standard_header}}

Die **`getRGBColorValue()`**-Methode des
[`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue)-Interfaces wird verwendet, um einen RGB-Farbwert zu erhalten. Wenn dieser
CSS-Wert keinen RGB-Farbwert enthält, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
Änderungen an der entsprechenden Stil-Eigenschaft können über das
[`RGBColor`](/de/docs/Web/API/RGBColor)-Interface erreicht werden.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren ihn nicht.
>
> Um Ihr Vorhaben zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), weit verbreitet unterstützt, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell angesehen.

## Syntax

```js-nolint
getRGBColorValue()
```

### Parameter

Keine.

### Rückgabewert

Ein [`RGBColor`](/de/docs/Web/API/RGBColor)-Objekt, das den Farbwert repräsentiert.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                                                                          |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn die angehängte Eigenschaft keinen RGB-Farbwert zurückgeben kann (d.h. kein `CSS_RGBCOLOR`). |

## Beispiele

```js
const cs = window.getComputedStyle(document.body);
const cssValue = cs.getPropertyCSSValue("color");
console.log(cssValue.getRGBColorValue());
```

## Spezifikationen

Dieses Merkmal wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/)-Spezifikation definiert, ist jedoch seither aus allen Standardisierungsbemühungen herausgefallen.

Es wurde durch das moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Standardweg befindet.

## Browser-Kompatibilität

{{Compat}}
