---
title: "<nobr>: Das Non-Breaking-Text-Element"
slug: Web/HTML/Element/nobr
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<nobr>`**-[HTML](/de/docs/Web/HTML)-Element verhindert, dass der enthaltene Text automatisch über mehrere Zeilen umbricht, was möglicherweise dazu führt, dass der Nutzer horizontal scrollen muss, um die gesamte Breite des Textes zu sehen.

> [!WARNING]
> Auch wenn dieses Element weitgehend unterstützt wird, war es _nie_ standardisiertes HTML, daher sollten Sie es nicht verwenden. Verwenden Sie stattdessen die CSS-Eigenschaft {{CSSxRef("white-space")}} wie folgt:

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
