---
title: ::-moz-color-swatch
slug: Web/CSS/::-moz-color-swatch
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-moz-color-swatch`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die die im {{HTMLElement("input")}} von `type="color"` ausgewählte Farbe darstellt.

> [!NOTE]
> Die Verwendung von `::-moz-color-swatch` mit etwas anderem als einem `<input type="color">` hat keinen Treffer und keine Wirkung.

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
  - {{cssxref("::-webkit-color-swatch")}}, Pseudoelement, unterstützt von WebKit und Blink (Safari, Chrome und Opera)
