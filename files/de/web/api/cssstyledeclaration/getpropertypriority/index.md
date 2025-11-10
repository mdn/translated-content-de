---
title: "CSSStyleDeclaration: Methode getPropertyPriority()"
short-title: getPropertyPriority()
slug: Web/API/CSSStyleDeclaration/getPropertyPriority
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("CSSOM") }}

Die **CSSStyleDeclaration.getPropertyPriority()**-Methodenschnittstelle gibt einen String zurück, der alle explizit gesetzten Prioritäten der CSS-Eigenschaft bereitstellt.

## Syntax

```js-nolint
getPropertyPriority(property)
```

### Parameter

- `property`
  - : Ein String, der den zu überprüfenden Eigenschaftsnamen darstellt.

### Rückgabewert

Ein String, der die Priorität (z.B. `"important"`) repräsentiert, falls eine existiert. Falls keine existiert, wird der leere String zurückgegeben.

## Beispiele

Der folgende JavaScript-Code prüft, ob `margin` in einer CSS-Selektorregel als wichtig gekennzeichnet ist:

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const isImportant = declaration.getPropertyPriority("margin") === "important";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
