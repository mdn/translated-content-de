---
title: ::-moz-color-swatch
slug: Web/CSS/::-moz-color-swatch
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Das **`::-moz-color-swatch`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die die im {{HTMLElement("input")}} mit `type="color"` ausgewählte Farbe darstellt.

> [!NOTE]
> Die Verwendung von `::-moz-color-swatch` mit etwas anderem als einem `<input type="color">` hat keine Übereinstimmung und keine Auswirkungen.

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

Teil keiner Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ähnliche Pseudo-Elemente, die von anderen Browsern verwendet werden:
  - {{cssxref("::-webkit-color-swatch")}}, Pseudo-Element unterstützt von WebKit und Blink (Safari, Chrome und Opera)
