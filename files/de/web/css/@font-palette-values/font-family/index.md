---
title: font-family
slug: Web/CSS/@font-palette-values/font-family
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) {{Glossary("CSS_Descriptor", "Deskriptor")}} **`font-family`** wird verwendet, um anzugeben, auf welche Font-Family-Palettenwerte angewendet werden sollen. Diese müssen genau mit den Werten übereinstimmen, die beim Festlegen der CSS [font-family](/de/docs/Web/CSS/font-family) verwendet werden.

## Syntax

```css
@font-palette-values --Dark-mode {
  font-family: "Bungee Spice";
  /* other palette settings follow */
}
```

Andere nachfolgende Palettenwerte gelten nur für die angegebene Schriftartfamilie. Sie können [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) für andere Schriftartfamilien erstellen, indem Sie denselben [&lt;dashed-ident&gt;s](/de/docs/Web/CSS/dashed-ident) verwenden. Dies bedeutet, dass wenn Sie mehrere Farbschriftarten haben, Sie denselben Bezeichner für jede verwenden können.

### Werte

- `<family-name>`
  - : Gibt den Namen der [font-family](/de/docs/Web/CSS/font-family) an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von übereinstimmenden Familiennamen

In diesem Beispiel wird der `font-family` Deskriptor in der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel verwendet, und es wird derselbe Wert für die `font-family` verwendet, wie wenn sie deklariert wird.

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

### Verwendung desselben Palettenidentifikators für mehrere Schriftarten-Familien

In diesem Beispiel sind zwei [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regeln für zwei Schriftartfamilien festgelegt, aber beide At-Regeln verwenden denselben gedoppelten Bezeichner, `--Dark-Mode`. Dies hilft, die [font-palette](/de/docs/Web/CSS/font-palette) Eigenschaft für mehrere Elemente, `h1` und `h2` in diesem Fall, gleichzeitig zu setzen. Dies kann nützlich sein, wenn Sie die Schriftfarben auf das Branding Ihrer Website abstimmen möchten.

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
- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Deskriptor
- {{cssxref("font-palette/", "font-palette")}} Eigenschaft
- [`CSSFontPaletteValuesRule.fontFamily`](/de/docs/Web/API/CSSFontPaletteValuesRule/fontFamily)
