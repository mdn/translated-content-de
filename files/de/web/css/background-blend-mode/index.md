---
title: background-blend-mode
slug: Web/CSS/background-blend-mode
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`background-blend-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die Hintergrundbilder eines Elements miteinander und mit der Hintergrundfarbe des Elements gemischt werden sollen.

{{InteractiveExample("CSS Demo: background-blend-mode")}}

```css interactive-example-choice
background-blend-mode: normal;
```

```css interactive-example-choice
background-blend-mode: multiply;
```

```css interactive-example-choice
background-blend-mode: hard-light;
```

```css interactive-example-choice
background-blend-mode: difference;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element"></div>
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: green;
  background-image: url("/shared-assets/images/examples/balloon.jpg");
  width: 250px;
  height: 305px;
}
```

Mischmodi sollten in der gleichen Reihenfolge definiert werden wie die Eigenschaft {{cssxref("background-image")}}. Wenn die Listenlängen der Mischmodi und Hintergrundbilder nicht gleich sind, werden sie wiederholt und/oder gekürzt, bis die Längen übereinstimmen.

## Syntax

```css
/* One value */
background-blend-mode: normal;

/* Two values, one per background */
background-blend-mode: darken, luminosity;

/* Global values */
background-blend-mode: inherit;
background-blend-mode: initial;
background-blend-mode: revert;
background-blend-mode: revert-layer;
background-blend-mode: unset;
```

### Werte

- {{cssxref("&lt;blend-mode&gt;")}}
  - : Der anzuwendende Mischmodus. Es kann mehrere Werte geben, die durch Kommas getrennt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein einfaches Beispiel

```css
.item {
  width: 300px;
  height: 300px;
  background: url("image1.png"), url("image2.png");
  background-blend-mode: screen;
}
```

### Probieren Sie verschiedene Mischmodi aus

```html hidden
<div id="div"></div>
<select id="select">
  <option>normal</option>
  <option>multiply</option>
  <option selected>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

```css hidden
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

```js hidden
document.getElementById("select").onchange = (event) => {
  document.getElementById("div").style.backgroundBlendMode =
    document.getElementById("select").selectedOptions[0].innerHTML;
};
console.log(document.getElementById("div"));
```

{{ EmbedLiveSample('try_out_different_blend_modes', "330", "350") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}
