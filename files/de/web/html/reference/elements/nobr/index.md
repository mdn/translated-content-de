---
title: "<nobr>: Das Non-Breaking Text-Element"
slug: Web/HTML/Reference/Elements/nobr
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<nobr>`**-[HTML](/de/docs/Web/HTML)-Element verhindert, dass der von ihm enthaltene Text automatisch über mehrere Zeilen umbrochen wird, was möglicherweise dazu führt, dass der Benutzer horizontal scrollen muss, um die gesamte Breite des Textes zu sehen.

> [!WARNING]
> Obwohl dieses Element weitgehend unterstützt wird, war es _nie_ standardmäßiges HTML, daher sollten Sie es nicht verwenden. Verwenden Sie stattdessen die CSS-Eigenschaft {{CSSxRef("white-space")}} so:

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
