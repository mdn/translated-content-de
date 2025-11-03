---
title: ::-moz-range-track
slug: Web/CSS/Reference/Selectors/::-moz-range-track
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

Das **`::-moz-range-track`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die die _Spur_ (d.h. die Rille) darstellt, in der der Indikator in einem {{HTMLElement("input")}} mit `type="range"` gleitet.

> [!NOTE]
> Die Verwendung von `::-moz-range-track` mit allem außer einem `<input type="range">` trifft nichts und hat keine Wirkung.

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

Ein Bereichsregler mit diesem Stil könnte etwa so aussehen:

![Ein Bereich mit einer grünen Spur](screen_shot_2015-12-04_at_10.14.34.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudo-Elemente, die von Gecko verwendet werden, um andere Teile eines Bereichseingabe-Elements zu stylen:
  - {{cssxref("::-moz-range-thumb")}} stellt den Indikator dar, der in der Rille gleitet.
  - {{cssxref("::-moz-range-progress")}} stellt den unteren Teil der Spur dar.

- Ähnliche Pseudo-Elemente, die von anderen Browsern verwendet werden:
  - {{cssxref("::-webkit-slider-runnable-track")}}, Pseudo-Element unterstützt von WebKit und Blink (Safari, Chrome und Opera)

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
