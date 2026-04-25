---
title: "`::-moz-color-swatch` CSS pseudo-element"
short-title: ::-moz-color-swatch
slug: Web/CSS/Reference/Selectors/::-moz-color-swatch
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

Das **`::-moz-color-swatch`** [CSS](/de/docs/Web/CSS)-[Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die die in einem {{HTMLElement("input")}} vom `type="color"` ausgewählte Farbe darstellt.

> [!NOTE]
> Die Verwendung von `::-moz-color-swatch` mit allem anderen als einem `<input type="color">` führt zu keiner Übereinstimmung und hat keine Wirkung.

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

- Ähnliche Pseudo-Elemente, die von anderen Browsern verwendet werden:
  - {{cssxref("::-webkit-color-swatch")}}, ein Pseudo-Element, das von WebKit und Blink (Safari, Chrome und Opera) unterstützt wird.
