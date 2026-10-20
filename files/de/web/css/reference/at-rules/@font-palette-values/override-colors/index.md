---
title: CSS-At-Regel-Deskriptor `override-colors`
short-title: override-colors
slug: Web/CSS/Reference/At-rules/@font-palette-values/override-colors
l10n:
  sourceCommit: 72af34c38ae0d97bc3c9bde4998d538bcc56634a
---

Der **`override-colors`**-{{Glossary("CSS_Descriptor", "Deskriptor")}} in [CSS](/de/docs/Web/CSS) wird verwendet, um Farben in der ausgewählten [base-palette](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette) einer Farbschrift zu überschreiben.

## Syntax

```css
/* basic syntax */
override-colors: <index of color> <color>;

/* using color names */
override-colors: 0 red;

/* using hex-color */
override-colors: 0 #ff0000;

/* using rgb */
override-colors: 0 rgb(255 0 0);

/* overriding multiple colors */
override-colors:
  0 red,
  1 green,
  2 blue;
```

Der {{Glossary("CSS_Descriptor", "Deskriptor")}} `override-colors` akzeptiert eine kommagetrennte Liste aus Farbindizes und neuen Farbwerten.

Die Farbindizes beginnen bei null. Als Farbwert kann jeder [Farbwert](/de/docs/Web/CSS/Reference/Values/color_value) verwendet werden.

Für jedes Paar aus Index und Farbe wird die Farbe mit diesem Index in der angegebenen [base-palette](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette) überschrieben. Wenn die Farbschrift am angegebenen Index keine Farbe enthält, wird das Paar ignoriert.

### Werte

- `[ <integer [0,∞]> <absolute-color-base> ]`
  - : Gibt den Index einer Farbe in einer [base-palette](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette) und die Farbe an, mit der sie überschrieben werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben von Emojis ändern

Dieses Beispiel zeigt, wie Sie Farben in der Farbschrift [Noto Color Emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji) überschreiben, damit sie zum Erscheinungsbild Ihrer Website passen.

#### HTML

```html
<section class="hats">
  <div class="hat">
    <h2>Original Hat</h2>
    <div class="emoji">🎩</div>
  </div>
  <div class="hat">
    <h2>Red Hat</h2>
    <div class="emoji red-hat">🎩</div>
  </div>
</section>
```

#### CSS

```css hidden
.hats {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
```

```css
@font-face {
  font-family: "Noto Color Emoji";
  font-style: normal;
  font-weight: normal;
  src: url("https://mdn.github.io/shared-assets/fonts/noto-color-emoji/NotoColorEmoji-Regular.woff2")
    format("woff2");
}

.emoji {
  font-family: "Noto Color Emoji", emoji;
  font-size: 3rem;
}
@font-palette-values --red {
  font-family: "Noto Color Emoji";
  override-colors:
    720 rgb(74 11 0),
    1192 rgb(149 22 1),
    2052 rgb(183 27 1),
    3426 rgb(193 28 1),
    4614 rgb(230 34 1);
}
.red-hat {
  font-palette: --red;
}
```

#### Ergebnis

{{EmbedLiveSample("Changing colors of emojis")}}

### Eine Farbe in einer alternativen base-palette ändern

Dieses Beispiel verwendet die [Rocher Color Font](https://www.harbortype.com/fonts/rocher-color/) und zeigt, wie Sie eine Farbe in der Schrift überschreiben.

#### HTML

```html
<h2 class="normal-palette">Normal Palette</h2>
<h2 class="override-palette">Override Palette</h2>
```

#### CSS

```css
@font-face {
  font-family: "Rocher";
  src: url("[path-to-font]/RocherColorGX.woff2") format("woff2");
}
h2 {
  font-family: "Rocher", fantasy;
}
@font-palette-values --override-palette {
  font-family: "Rocher";
  base-palette: 3;
}
@font-palette-values --override-palette {
  font-family: "Rocher";
  base-palette: 3;
  override-colors: 0 rebeccapurple;
}
.normal-palette {
  font-palette: --normal-palette;
}
.override-palette {
  font-palette: --override-palette;
}
```

#### Ergebnis

Dieses Beispiel zeigt, dass in `base-palette` `3` die Farbe am Index 0 durch `rebeccapurple` überschrieben wird.

![Beispiel mit einer base-palette und einer base-palette, in der eine Farbe überschrieben wurde](override-base-palette-color.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}}
- {{cssxref("font-palette")}}
- [`CSSFontPaletteValuesRule.overrideColors`](/de/docs/Web/API/CSSFontPaletteValuesRule/overrideColors)
