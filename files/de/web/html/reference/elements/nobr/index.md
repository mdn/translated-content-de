---
title: "<nobr>: Das Zeilenumbruch-verhindernde Element"
slug: Web/HTML/Reference/Elements/nobr
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<nobr>`** [HTML](/de/docs/Web/HTML) Element verhindert, dass der darin enthaltene Text automatisch über mehrere Zeilen umbricht, was dazu führen kann, dass der Benutzer horizontal scrollen muss, um die gesamte Breite des Textes zu sehen.

> [!WARNING]
> Obwohl dieses Element weitgehend unterstützt wird, war es _nie_ ein standardisiertes HTML und sollte daher nicht verwendet werden. Stattdessen sollten Sie die CSS-Eigenschaft {{CSSxRef("white-space")}} wie folgt verwenden:

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
