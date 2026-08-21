---
title: "`<nobr>` HTML non-breaking text-Element"
short-title: <nobr>
slug: Web/HTML/Reference/Elements/nobr
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<nobr>`**-[HTML](/de/docs/Web/HTML)-Element verhindert, dass der enthaltene Text automatisch über mehrere Zeilen umbrochen wird, was möglicherweise dazu führt, dass der Benutzer horizontal scrollen muss, um die gesamte Breite des Textes zu sehen.

> [!WARNING]
> Obwohl dieses Element weitgehend unterstützt wird, war es _nie_ ein Standard-HTML und sollte daher nicht verwendet werden. Stattdessen sollten Sie die CSS-Eigenschaft {{CSSxRef("white-space")}} auf diese Weise verwenden:

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
