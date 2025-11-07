---
title: backdrop-filter
slug: Web/CSS/Reference/Properties/backdrop-filter
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`backdrop-filter`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, grafische Effekte wie Unschärfe oder Farbverschiebung auf den Bereich hinter einem Element anzuwenden. Da es auf alles _hinter_ dem Element angewendet wird, muss das Element oder sein Hintergrund transparent oder teilweise transparent sein, um den Effekt sehen zu können.

{{InteractiveExample("CSS Demo: backdrop-filter()")}}

```css interactive-example-choice
backdrop-filter: blur(10px);
```

```css interactive-example-choice
backdrop-filter: invert(80%);
```

```css interactive-example-choice
backdrop-filter: sepia(90%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div id="example-element">Example</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  background-image: url("/shared-assets/images/examples/balloon.jpg");
  background-size: cover;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
}

#example-element {
  font-weight: bold;
  flex: 1;
  text-align: center;
  padding: 20px 10px;
  background-color: rgb(255 255 255 / 0.2);
}
```

## Syntax

```css
/* Keyword value */
backdrop-filter: none;

/* URL to SVG filter */
backdrop-filter: url("common-filters.svg#filter");

/* <filter-function> values */
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

/* Multiple filters */
backdrop-filter: url("filters.svg#filter") blur(4px) saturate(150%);

/* Global values */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: revert;
backdrop-filter: revert-layer;
backdrop-filter: unset;
```

### Werte

- `none`
  - : Es wird kein Filter auf den Hintergrund angewendet.
- `<filter-value-list>`
  - : Eine durch Leerzeichen getrennte Liste von {{cssxref("&lt;filter-function&gt;")}}s oder ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter), der auf den Hintergrund angewendet wird. CSS `<filter-function>`s beinhalten {{CSSxRef("filter-function/blur", "blur()")}}, {{CSSxRef("filter-function/brightness", "brightness()")}}, {{CSSxRef("filter-function/contrast", "contrast()")}}, {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}, {{CSSxRef("filter-function/grayscale", "grayscale()")}}, {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}, {{CSSxRef("filter-function/invert", "invert()")}}, {{CSSxRef("filter-function/opacity", "opacity()")}}, {{CSSxRef("filter-function/saturate", "saturate()")}}, und {{CSSxRef("filter-function/sepia", "sepia()")}}.

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
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- [CSS-Komposition und -Mischung](/de/docs/Web/CSS/Guides/Compositing_and_blending)
