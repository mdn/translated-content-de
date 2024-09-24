---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
l10n:
  sourceCommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{CSSRef}}

Die **`backdrop-filter`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht das Anwenden von grafischen Effekten wie Weichzeichnung oder Farbverschiebung auf den Bereich hinter einem Element. Da sie alles _hinter_ dem Element betrifft, muss das Element oder sein Hintergrund transparent oder teilweise transparent sein, um den Effekt sichtbar zu machen.

{{EmbedInteractiveExample("pages/css/backdrop-filter.html")}}

## Syntax

```css
/* Schlüsselwortwert */
backdrop-filter: none;

/* URL zu SVG-Filter */
backdrop-filter: url(commonfilters.svg#filter);

/* <filter-function> Werte */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* Mehrere Filter */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* Globale Werte */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: revert;
backdrop-filter: revert-layer;
backdrop-filter: unset;
```

### Werte

- `none`
  - : Es wird kein Filter auf den Hintergrund angewendet.
- `<filter-function-list>`
  - : Eine durch Leerzeichen getrennte Liste von {{cssxref("&lt;filter-function&gt;")}}s oder ein [SVG-Filter](/de/docs/Web/SVG/Element/filter), der auf den Hintergrund angewendet wird. CSS `<filter-function>`s umfassen {{CSSxRef("filter-function/blur", "blur()")}}, {{CSSxRef("filter-function/brightness", "brightness()")}}, {{CSSxRef("filter-function/contrast", "contrast()")}}, {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}, {{CSSxRef("filter-function/grayscale", "grayscale()")}}, {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}, {{CSSxRef("filter-function/invert", "invert()")}}, {{CSSxRef("filter-function/opacity", "opacity()")}}, {{CSSxRef("filter-function/saturate", "saturate()")}}, und {{CSSxRef("filter-function/sepia", "sepia()")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### CSS

```css
.box {
  background-color: rgb(255 255 255 / 30%);
  backdrop-filter: blur(10px);
}

body {
  background-image: url("anemones.jpg");
}
```

```css hidden
html,
body {
  height: 100%;
  width: 100%;
}

.container {
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.box {
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}
```

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### Ergebnis

{{EmbedLiveSample("Examples", 600, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("filter")}}
- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Komposition und -Mischung](/de/docs/Web/CSS/CSS_compositing_and_blending)
