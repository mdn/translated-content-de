---
title: "<nobr>: Das Non-Breaking Text-Element"
slug: Web/HTML/Element/nobr
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<nobr>`** [HTML](/de/docs/Web/HTML)-Element verhindert, dass der darin enthaltene Text automatisch auf mehrere Zeilen umbricht, was möglicherweise dazu führt, dass der Benutzer horizontal scrollen muss, um die gesamte Breite des Textes zu sehen.

> [!WARNING]
> Obwohl dieses Element weit verbreitet unterstützt wird, war es _niemals_ standardmäßiges HTML, daher sollten Sie es nicht verwenden. Stattdessen sollten Sie die CSS-Eigenschaft {{CSSxRef("white-space")}} auf folgende Weise verwenden:

```html
<span style="white-space: nowrap;">Long line with no breaks</span>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("white-space")}}
- {{CSSxRef("overflow")}}
