---
title: "CSSStyleDeclaration: getPropertyValue()-Methode"
short-title: getPropertyValue()
slug: Web/API/CSSStyleDeclaration/getPropertyValue
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die **CSSStyleDeclaration.getPropertyValue()**-Methodenschnittstelle gibt
einen String zurück, der den Wert einer angegebenen CSS-Eigenschaft enthält.

## Syntax

```js-nolint
getPropertyValue(property)
```

### Parameter

- `property`
  - : Ein String, der den Eigenschaftsnamen (im Bindestrich-Format) darstellt, der überprüft werden soll.

### Rückgabewert

Ein String, der den Wert der Eigenschaft enthält. Falls nicht gesetzt, wird der leere String zurückgegeben.

## Beispiele

Der folgende JavaScript-Code fragt den Wert der `margin`-Eigenschaft in
einer CSS-Selektorregel ab:

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const value = declaration.getPropertyValue("margin"); // "1px 2px"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
