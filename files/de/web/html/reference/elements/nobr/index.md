---
title: "<nobr>: Das Zeilenumbruch-verhindernde Element"
slug: Web/HTML/Reference/Elements/nobr
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{deprecated_header}}

Das **`<nobr>`** [HTML](/de/docs/Web/HTML)-Element verhindert, dass der enthaltene Text automatisch über mehrere Zeilen umbrochen wird, was dazu führen kann, dass der Benutzer horizontal scrollen muss, um die gesamte Breite des Textes zu sehen.

> [!WARNING]
> Obwohl dieses Element weitgehend unterstützt wird, war es _nie_ standardmäßiges HTML, daher sollten Sie es nicht verwenden. Stattdessen verwenden Sie die CSS-Eigenschaft {{CSSxRef("white-space")}} wie folgt:

```html
<span class="nobr">Long line with no breaks</span>
```

```css
.nobr {
  white-space: nowrap;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("white-space")}}
- {{CSSxRef("overflow")}}
