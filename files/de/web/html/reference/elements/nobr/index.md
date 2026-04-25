---
title: "`<nobr>` HTML nicht umbrechendes Textelement"
short-title: <nobr>
slug: Web/HTML/Reference/Elements/nobr
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

Das **`<nobr>`** [HTML](/de/docs/Web/HTML)-Element verhindert, dass der Text, den es enthält, automatisch über mehrere Zeilen umbrochen wird, was dazu führen kann, dass der Benutzer horizontal scrollen muss, um die gesamte Breite des Textes zu sehen.

> [!WARNING]
> Obwohl dieses Element weitgehend unterstützt wird, war es _niemals_ standardisiertes HTML und sollte daher nicht verwendet werden. Stattdessen sollten Sie die CSS-Eigenschaft {{CSSxRef("white-space")}} so verwenden:

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
