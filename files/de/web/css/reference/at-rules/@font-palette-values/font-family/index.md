---
title: font-family
slug: Web/CSS/Reference/At-rules/@font-palette-values/font-family
l10n:
  sourceCommit: 0b926fc3e79782401461d389fc9f17d522b39ed3
---

Der [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) {{Glossary("CSS_Descriptor", "Deskriptor")}} **`font-family`** wird verwendet, um anzugeben, auf welche `font-family`-Palettenwerte angewendet werden sollen. Diese müssen genau die Werte sein, die beim Festlegen der CSS-[font-family](/de/docs/Web/CSS/Reference/Properties/font-family) verwendet werden.

## Syntax

```css
@font-palette-values --Dark-mode {
  font-family: "Bungee Spice";
  /* other palette settings follow */
}
```

Andere Palettenwerte, die folgen, gelten nur für die angegebene Schriftfamilie. Sie können [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) für andere Schriftfamilien erstellen, indem Sie dieselben [&lt;dashed-ident&gt;s](/de/docs/Web/CSS/Reference/Values/dashed-ident) verwenden. Das bedeutet, wenn Sie mehrere Farbschriften haben, können Sie denselben Identifikator für jede verwenden.

### Werte

- `<family-name>`
  - : Gibt den Namen der [font-family](/de/docs/Web/CSS/Reference/Properties/font-family) an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung passender Schriftfamiliennamen

In diesem Beispiel wird der `font-family`-Deskriptor in der [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-Regel verwendet, wobei derselbe Wert für die `font-family` verwendet wird, wie er deklariert ist.

#### HTML

```html
<h2>This is spicy</h2>
<h2 class="extra-spicy">This is extra hot & spicy</h2>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Bungee+Spice";
@font-palette-values --bungee-extra-spicy {
  font-family: "Bungee Spice";
  override-colors:
    0 darkred,
    1 red;
}

h2 {
  font-family: "Bungee Spice", fantasy;
}

h2.extra-spicy {
  font-palette: --bungee-extra-spicy;
}
```

#### Ergebnis

{{EmbedLiveSample("Using matching family names")}}

### Verwendung desselben Palettenidentifikators für mehrere Schriftfamilien

In diesem Beispiel werden zwei [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-Regeln für zwei Schriftfamilien festgelegt, aber beide At-Regeln verwenden denselben `dashed-ident`-Identifikator, `--Dark-Mode`. Dies hilft dabei, die [font-palette](/de/docs/Web/CSS/Reference/Properties/font-palette) Eigenschaft für mehrere Elemente, in diesem Fall `h1` und `h2`, gleichzeitig festzulegen. Dies kann nützlich sein, wenn Sie die Schriftfarben so anpassen möchten, dass sie zum Branding Ihrer Website passen.

```css
@font-palette-values --Dark-Mode {
  font-family: "Bungee Spice";
  /* palette settings for Bungee Spice */
}

@font-palette-values --Dark-Mode {
  font-family: "Bixa";
  /* palette settings for Bixa */
}

h1,
h2 {
  font-palette: --Dark-Mode;
}

h1 {
  font-family: "Bungee Spice", fantasy;
}

h2 {
  font-family: "Bixa", fantasy;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-palette-values")}}
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Deskriptor
- {{cssxref("font-palette")}} Eigenschaft
- [`CSSFontPaletteValuesRule.fontFamily`](/de/docs/Web/API/CSSFontPaletteValuesRule/fontFamily)
