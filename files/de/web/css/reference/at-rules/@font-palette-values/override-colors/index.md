---
title: "`override-colors` CSS At-Regel Deskriptor"
short-title: override-colors
slug: Web/CSS/Reference/At-rules/@font-palette-values/override-colors
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`override-colors`** [CSS](/de/docs/Web/CSS) {{Glossary("CSS_Descriptor", "Deskriptor")}} wird verwendet, um Farben in der gewählten [base-palette](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette) für eine Farbenschriftart zu überschreiben.

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

Der `override-colors` {{Glossary("CSS_Descriptor", "Deskriptor")}} nimmt eine kommagetrennte Liste des Farbindexes und neuen Farbwertes an.

Der Farbindex basiert auf Null und es kann jeder [Farbwert](/de/docs/Web/CSS/Reference/Values/color_value) verwendet werden.

Für jedes Schlüssel-Wert-Paar von Index und Farbe wird die Farbe mit dem Index in der angegebenen [base-palette](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette) überschrieben. Wenn die Farbenschriftart keine Farbe am angegebenen Index hat, wird sie ignoriert.

### Werte

- `[ <integer [0,∞]> <absolute-color-base> ]`
  - : Gibt den Index einer Farbe in einer [base-palette](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/base-palette) und die Farbe an, mit der sie überschrieben wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ändern der Farben von Emojis

Dieses Beispiel zeigt, wie man Farben in der [Noto Color Emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji) Farbenschriftart überschreibt, um sie an die Markenfarben Ihrer Website anzupassen.

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
  src: url("https://fonts.gstatic.com/l/font?kit=Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabts6diywYkdG3gjD0U&skey=a373f7129eaba270&v=v24")
    format("woff2");
}

.emoji {
  font-family: "Noto Color Emoji", emoji;
  font-size: 3rem;
}
@font-palette-values --red {
  font-family: "Noto Color Emoji";
  override-colors:
    0 rgb(74 11 0),
    1 rgb(149 22 1),
    2 rgb(183 27 1),
    3 rgb(193 28 1),
    4 rgb(230 34 1);
}
.red-hat {
  font-palette: --red;
}
```

#### Ergebnis

{{EmbedLiveSample("Changing colors of emojis")}}

### Ändern einer Farbe in einer alternativen Basis-Palette

Mit der [Rocher Color Font](https://www.harbortype.com/fonts/rocher-color/), zeigt dieses Beispiel, wie man eine Farbe in der Schriftart überschreibt.

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

Dieses Beispiel zeigt, dass in der `base-palette` `3` die Farbe am Index 0 mit `rebeccapurple` überschrieben wird.

![Beispiel, das base-palette und base-palette mit einer überschriebenen Farbe zeigt](override-base-palette-color.jpg)

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
