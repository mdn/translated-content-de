---
title: "CSSValueList: item()-Methode"
short-title: item()
slug: Web/API/CSSValueList/item
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

Die **`item()`**-Methode der {{domxref("CSSValueList")}}-Schnittstelle wird verwendet, um ein {{domxref("CSSValue")}} anhand eines Ordnungsindex abzurufen.

Die Reihenfolge in dieser Sammlung entspricht der Reihenfolge der Werte in der CSS-Stileigenschaft. Wenn der Index größer oder gleich der Anzahl der Werte in der Liste ist, gibt diese Methode `null` zurück.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben, und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), weniger unterstützt und als experimentell angesehen.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Ein `unsigned long`, der den Index des CSS-Werts innerhalb der Sammlung darstellt.

### Rückgabewert

Ein {{domxref("CSSValue")}}-Objekt an der `index`-Position in der `CSSValueList`, oder `null`, wenn es kein gültiger Index ist.

## Spezifikationen

Dieses Feature wurde ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde jedoch seitdem aus allen Standardisierungsbemühungen entfernt.

Es wurde durch eine moderne, aber inkompatible [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, die sich jetzt auf dem Standardtrack befindet.

## Browser-Kompatibilität

{{Compat}}
