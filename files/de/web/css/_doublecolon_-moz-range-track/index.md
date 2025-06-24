---
title: ::-moz-range-track
slug: Web/CSS/::-moz-range-track
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-moz-range-track`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die das _Track_ (d.h. die Rille) darstellt, in der der Indikator in einem {{HTMLElement("input")}} vom `type="range"` gleitet.

> [!NOTE]
> Die Verwendung von `::-moz-range-track` mit etwas anderem als einem `<input type="range">` führt zu keinem Treffer und hat keine Wirkung.

## Syntax

```css
::-moz-range-track {
  /* ... */
}
```

## Beispiele

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50" />
```

### CSS

```css
input[type="range"]::-moz-range-track {
  background-color: green;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 300, 50)}}

Ein Schieberegler mit diesem Stil könnte so aussehen:

![Ein Bereich mit grünem Track](screen_shot_2015-12-04_at_10.14.34.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von Gecko verwendeten Pseudoelemente zur Gestaltung anderer Teile eines Range-Inputs:

  - {{cssxref("::-moz-range-thumb")}} stellt den Indikator dar, der in der Rille gleitet.
  - {{cssxref("::-moz-range-progress")}} stellt den unteren Teil des Tracks dar.

- Ähnliche Pseudoelemente, die von anderen Browsern verwendet werden:

  - {{cssxref("::-webkit-slider-runnable-track")}}, Pseudoelement unterstützt von WebKit und Blink (Safari, Chrome und Opera)

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
