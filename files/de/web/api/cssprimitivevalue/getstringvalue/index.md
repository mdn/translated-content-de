---
title: "CSSPrimitiveValue: getStringValue() Methode"
short-title: getStringValue()
slug: Web/API/CSSPrimitiveValue/getStringValue
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`getStringValue()`** Methode der
{{domxref("CSSPrimitiveValue")}} Schnittstelle wird verwendet, um einen Zeichenkettenwert zu erhalten. Wenn dieser CSS-Wert keinen Zeichenkettenwert enthält, wird eine {{domxref("DOMException")}} ausgelöst.

> [!NOTE]
> Diese Methode war Teil eines Versuchs, ein typisiertes CSS-Objektmodell zu erstellen. Dieser Versuch wurde aufgegeben und die meisten Browser implementieren es nicht.
>
> Um Ihr Ziel zu erreichen, können Sie verwenden:
>
> - das untypisierte [CSS Object Model](/de/docs/Web/API/CSS_Object_Model), das weit verbreitet unterstützt wird, oder
> - das moderne [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API), welches weniger unterstützt wird und als experimentell gilt.

## Syntax

```js-nolint
getStringValue()
```

### Parameter

Keine.

### Rückgabewert

Ein `string`-Wert.

### Ausnahmen

| **Typ**        | **Beschreibung**                                                                  |
| -------------- | --------------------------------------------------------------------------------- |
| `DOMException` | Ein `INVALID_ACCESS_ERR` wird ausgelöst, wenn der CSS-Wert keinen Zeichenkettenwert enthält. |

## Beispiele

```js
const cs = window.getComputedStyle(document.body);
const cssValue = cs.getPropertyCSSValue("display");
console.log(cssValue.getStringValue());
```

## Spezifikationen

Dieses Merkmal war ursprünglich in der [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) Spezifikation definiert, wurde aber seitdem aus jedem
Standardisierungsaufwand gestrichen.

Es wurde durch ein modernes, aber inkompatibles, [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ersetzt, das sich jetzt auf dem Standardpfad befindet.

## Browser-Kompatibilität

{{Compat}}
