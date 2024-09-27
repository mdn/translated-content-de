---
title: "::-moz-range-track"
slug: Web/CSS/::-moz-range-track
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-moz-range-track`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die die _Leiste_ (d.h. die Rille) darstellt, in der der Indikator in einem {{HTMLElement("input")}} vom `type="range"` gleitet.

> [!NOTE]
> Die Verwendung von `::-moz-range-track` mit etwas anderem als einem `<input type="range">` hat keine Auswirkung und trifft auf nichts zu.

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

![Eine Leiste mit einem grünen Track](screen_shot_2015-12-04_at_10.14.34.png)

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudo-Elemente, die von Gecko verwendet werden, um andere Teile eines Range-Inputs zu gestalten:

  - {{cssxref("::-moz-range-thumb")}} stellt den Indikator dar, der in der Rille gleitet.
  - {{cssxref("::-moz-range-progress")}} stellt den unteren Teil der Leiste dar.

- Ähnliche Pseudo-Elemente, die von anderen Browsern verwendet werden:

  - {{cssxref("::-webkit-slider-runnable-track")}}, ein Pseudo-Element, das von WebKit und Blink (Safari, Chrome und Opera) unterstützt wird

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
