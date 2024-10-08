---
title: "::-moz-color-swatch"
slug: Web/CSS/::-moz-color-swatch
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-moz-color-swatch`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die die im `type="color"` {{HTMLElement("input")}} ausgewählte Farbe darstellt.

> [!NOTE]
> Die Verwendung von `::-moz-color-swatch` mit etwas anderem als einem `<input type="color">` hat keine Übereinstimmung und keinen Effekt.

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

  - {{cssxref("::-webkit-color-swatch")}}, Pseudo-Element, das von WebKit und Blink (Safari, Chrome und Opera) unterstützt wird.
