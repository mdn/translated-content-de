---
title: ::-moz-color-swatch
slug: Web/CSS/::-moz-color-swatch
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}

Das **`::-moz-color-swatch`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die die im {{HTMLElement("input")}} von `type="color"` ausgewählte Farbe darstellt.

> [!NOTE]
> Die Verwendung von `::-moz-color-swatch` mit allem außer einem `<input type="color">` führt zu keinem Treffer und hat keine Wirkung.

## Syntax

```css
::-moz-color-swatch {
  /* ... */
}
```

## Beispiele

### HTML

```html
<input type="color" value="#de2020" />
```

### CSS

```css
input[type="color"]::-moz-color-swatch {
  border-radius: 10px;
  border-style: none;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 300, 50)}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ähnliche Pseudoelemente, die von anderen Browsern verwendet werden:
  - {{cssxref("::-webkit-color-swatch")}}, Pseudoelement, das von WebKit und Blink (Safari, Chrome und Opera) unterstützt wird.
