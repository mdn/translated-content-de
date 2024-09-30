---
title: "CSSStyleDeclaration: Methode getPropertyPriority()"
short-title: getPropertyPriority()
slug: Web/API/CSSStyleDeclaration/getPropertyPriority
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die Schnittstelle der Methode **CSSStyleDeclaration.getPropertyPriority()** gibt einen String zurück, der alle explizit gesetzten Prioritäten auf der CSS-Eigenschaft bereitstellt.

## Syntax

```js-nolint
getPropertyPriority(property)
```

### Parameter

- `property`
  - : Ein String, der den zu überprüfenden Eigenschaftsnamen darstellt.

### Rückgabewert

Ein String, der die Priorität (z. B. `"important"`) darstellt, falls eine existiert. Wenn keine existiert, wird der leere String zurückgegeben.

## Beispiele

Der folgende JavaScript-Code überprüft, ob `margin` als wichtig in einer CSS-Selektorregel markiert ist:

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const isImportant = declaration.getPropertyPriority("margin") === "important";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
