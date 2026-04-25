---
title: "`::-moz-range-track` CSS pseudo-element"
short-title: ::-moz-range-track
slug: Web/CSS/Reference/Selectors/::-moz-range-track
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

Das **`::-moz-range-track`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die die _Spur_ (d.h. die Nut) repräsentiert, in der der Indikator in einem {{HTMLElement("input")}} vom `type="range"` gleitet.

> [!NOTE]
> Die Verwendung von `::-moz-range-track` mit etwas anderem als einem `<input type="range">` passt auf nichts und hat keine Wirkung.

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

Ein Bereichsschieberegler mit diesem Stil könnte ungefähr so aussehen:

![Ein Bereich mit einem grünen Track](screen_shot_2015-12-04_at_10.14.34.png)

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoelemente, die von Gecko verwendet werden, um andere Teile eines Bereichs-Inputs zu stylen:
  - {{cssxref("::-moz-range-thumb")}} repräsentiert den Indikator, der in der Nut gleitet.
  - {{cssxref("::-moz-range-progress")}} repräsentiert den unteren Teil des Tracks.

- Ähnliche Pseudoelemente, die von anderen Browsern verwendet werden:
  - {{cssxref("::-webkit-slider-runnable-track")}}, Pseudoelement, das von WebKit und Blink unterstützt wird (Safari, Chrome und Opera).

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
