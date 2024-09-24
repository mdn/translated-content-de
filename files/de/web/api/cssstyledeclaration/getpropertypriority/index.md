---
title: "CSSStyleDeclaration: Methode getPropertyPriority()"
short-title: getPropertyPriority()
slug: Web/API/CSSStyleDeclaration/getPropertyPriority
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die **CSSStyleDeclaration.getPropertyPriority()** Methoden-Schnittstelle gibt
einen String zurück, der alle explizit gesetzten Prioritäten für die CSS-Eigenschaft angibt.

## Syntax

```js-nolint
getPropertyPriority(property)
```

### Parameter

- `property`
  - : Ein String, der den Namen der zu überprüfenden Eigenschaft darstellt.

### Rückgabewert

Ein String, der die Priorität (z. B. `"important"`) angibt, falls eine existiert.
Falls keine existiert, wird der leere String zurückgegeben.

## Beispiele

Der folgende JavaScript-Code prüft, ob `margin` in einer CSS-Selektorregel als wichtig markiert ist:

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const isImportant = declaration.getPropertyPriority("margin") === "important";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
