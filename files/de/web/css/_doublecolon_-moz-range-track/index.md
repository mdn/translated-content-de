---
title: ::-moz-range-track
slug: Web/CSS/::-moz-range-track
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-moz-range-track`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die die _Leiste_ (d. h. die Spur) repräsentiert, in der der Indikator in einem {{HTMLElement("input")}} mit `type="range"` gleitet.

> [!NOTE]
> Die Verwendung von `::-moz-range-track` mit einem anderen Element als `<input type="range">` stimmt mit nichts überein und hat keine Wirkung.

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

Ein Range-Slider, der diesen Stil verwendet, könnte ungefähr so aussehen:

![Ein Range-Slider mit grünem Track](screen_shot_2015-12-04_at_10.14.34.png)

## Spezifikationen

Ist Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von Gecko verwendeten Pseudo-Elemente zum Stylen anderer Teile eines Range-Inputs:

  - {{cssxref("::-moz-range-thumb")}} repräsentiert den Indikator, der in der Leiste gleitet.
  - {{cssxref("::-moz-range-progress")}} repräsentiert den unteren Teil der Leiste.

- Ähnliche Pseudo-Elemente, die von anderen Browsern verwendet werden:

  - {{cssxref("::-webkit-slider-runnable-track")}}, ein Pseudo-Element, das von WebKit und Blink (Safari, Chrome und Opera) unterstützt wird.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
