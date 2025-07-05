---
title: font-family
slug: Web/CSS/@font-palette-values/font-family
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{CSSRef}}

Der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) {{Glossary("CSS_Descriptor", "Deskriptor")}} **`font-family`** wird verwendet, um festzulegen, auf welche Schriftarten-Palettenwerte angewendet werden sollen. Diese müssen genau den Werten entsprechen, die bei der Einstellung der CSS [font-family](/de/docs/Web/CSS/font-family) verwendet werden.

## Syntax

```css
@font-palette-values --Dark-mode {
  font-family: "Bungee Spice";
  /* other palette settings follow */
}
```

Andere Palettenwerte, die folgen, gelten nur für die angegebene Schriftfamilie. Sie können [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) für andere Schriftfamilien erstellen, indem Sie das gleiche [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) verwenden. Dies bedeutet, dass Sie bei mehreren Farbfonts denselben Bezeichner für jeweils verwenden können.

### Werte

- `<family-name>`
  - : Gibt den Namen der [font-family](/de/docs/Web/CSS/font-family) an.

## Formelle Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von übereinstimmenden Schriftfamiliennamen

In diesem Beispiel wird der `font-family` Deskriptor in der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel verwendet, wobei derselbe Wert wie bei der Deklaration des `font-family` verwendet wird.

#### HTML

```html
<h2>This is spicy</h2>
<h2 class="extra-spicy">This is extra hot & spicy</h2>
```

#### CSS

```css
@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice);
@font-palette-values --bungee-extra-spicy {
  font-family: "Bungee Spice";
  override-colors:
    0 DarkRed,
    1 Red;
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

### Verwenden desselben Palettenbezeichners für mehrere Schriftfamilien

In diesem Beispiel werden zwei [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regeln für zwei Schriftfamilien festgelegt, aber beide At-Regeln verwenden denselben dashed-ident Bezeichner, `--Dark Mode`. Dies hilft dabei, die [font-palette](/de/docs/Web/CSS/font-palette) Eigenschaft für mehrere Elemente gleichzeitig festzulegen, in diesem Fall `h1` und `h2`. Dies kann nützlich sein, wenn Sie die Schriftfarben an das Branding Ihrer Website anpassen möchten.

```css
@font-palette-values --Dark-Mode {
  font-family: "Bungee Spice";
  /* palette settings for Bungee Spice */
}

@font-palette-values --Dark-Mode {
  font-family: Bixa;
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
  font-family: Bixa, fantasy;
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
