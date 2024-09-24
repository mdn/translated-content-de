---
title: "<nobr>: Das Element für nicht umbrechenden Text"
slug: Web/HTML/Element/nobr
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<nobr>`** [HTML](/de/docs/Web/HTML) Element verhindert, dass der darin enthaltene Text automatisch auf mehrere Zeilen verteilt wird, was dazu führen kann, dass der Benutzer horizontal scrollen muss, um die gesamte Breite des Textes zu sehen.

> [!WARNING]
> Obwohl dieses Element weit verbreitet unterstützt wird, war es _nie_ ein standardisiertes HTML-Element, daher sollten Sie es nicht verwenden. Verwenden Sie stattdessen die CSS-Eigenschaft {{CSSxRef("white-space")}} auf folgende Weise:

```html
<span style="white-space: nowrap;">Long line with no breaks</span>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Siehe auch

- {{CSSxRef("white-space")}}
- {{CSSxRef("overflow")}}
