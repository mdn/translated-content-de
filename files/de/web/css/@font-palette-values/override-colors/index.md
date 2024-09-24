---
title: Überschreiben von Farben
slug: Web/CSS/@font-palette-values/override-colors
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{CSSRef}}

Der **`override-colors`** CSS-[Deskriptor](/de/docs/Glossary/CSS_Descriptor) wird verwendet, um Farben in der gewählten [Basis-Palette](/de/docs/Web/CSS/@font-palette-values/base-palette) für eine Farbschrift zu überschreiben.

## Syntax

```css
/* grundlegende Syntax */
override-colors: <index of color> <color>;

/* Verwendung von Farbnamen */
override-colors: 0 red;

/* Verwendung von Hex-Farben */
override-colors: 0 #f00;

/* Verwendung von RGB */
override-colors: 0 rgb(255 0 0);

/* Überschreiben mehrerer Farben */
override-colors:
  0 #f00,
  1 #0f0,
  2 #00f;

/* Überschreiben mehrerer Farben mit besserer Lesbarkeit */
override-colors:
  0 #f00,
  1 #0f0,
  2 #00f;
```

Der `override-colors`-[Deskriptor](/de/docs/Glossary/CSS_Descriptor) nimmt eine durch Kommas getrennte Liste des Farbindex und des neuen Farbwerts an.

Der Farbindex ist nullbasiert und es kann jeder [Farbwert](/de/docs/Web/CSS/color_value) verwendet werden.

Für jedes Schlüssel-Wert-Paar aus Index und Farbe wird die Farbe mit dem Index in der angegebenen [Basis-Palette](/de/docs/Web/CSS/@font-palette-values/base-palette) überschrieben. Wenn die Farbschrift an dem angegebenen Index keine Farbe besitzt, wird sie ignoriert.

### Werte

- `[ <integer [0,∞]> <absolute-color-base> ]`
  - : Gibt den Index einer Farbe in einer [Basis-Palette](/de/docs/Web/CSS/@font-palette-values/base-palette) und die Farbe an, mit der sie überschrieben werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ändern der Farben von Emojis

Dieses Beispiel zeigt, wie Farben in der [Noto Color Emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji) Farbschrift überschrieben werden können, um sie an das Markenbild Ihrer Website anzupassen.

#### HTML

```html
<section class="hats">
  <div class="hat">
    <h2>Original Hut</h2>
    <div class="emoji">🎩</div>
  </div>
  <div class="hat">
    <h2>Roter Hut</h2>
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

```css-nolint
@font-face {
  font-family: "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/l/font?kit=Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabts6diywYkdG3gjD0U&skey=a373f7129eaba270&v=v24)
    format("woff2");
}

.emoji {
  font-family: "Noto Color Emoji";
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

Verwendung der [Rocher Color Font](https://www.harbortype.com/fonts/rocher-color/), zeigt dieses Beispiel, wie eine Farbe in der Schrift überschrieben werden kann.

#### HTML

```html
<h2 class="normal-palette">Normale Palette</h2>
<h2 class="override-palette">Überschriebene Palette</h2>
```

#### CSS

```css
@font-face {
  font-family: "Rocher";
  src: url("[path-to-font]/RocherColorGX.woff2") format("woff2");
}
h2 {
  font-family: "Rocher";
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

Dieses Beispiel zeigt, dass in `base-palette` `3`, die Farbe an Index 0 mit `rebeccapurple` überschrieben wird.

![Beispiel, das Basis-Palette und Basis-Palette mit 1 überschriebenen Farbe zeigt](override-base-palette-color.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}}
- {{cssxref("font-palette/", "font-palette")}}
- {{domxref("CSSFontPaletteValuesRule.overrideColors")}}
