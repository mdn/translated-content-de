---
title: font-family
slug: Web/CSS/@font-palette-values/font-family
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) {{Glossary("CSS_Descriptor", "Deskriptor")}} **`font-family`** wird verwendet, um anzugeben, auf welche font-family-Palettenwerte angewendet werden sollen. Dies muss genau mit den Werten übereinstimmen, die beim Setzen der CSS-[font-family](/de/docs/Web/CSS/font-family) verwendet werden.

## Syntax

```css
@font-palette-values --Dark-mode {
  font-family: "Bungee Spice";
  /* other palette settings follow */
}
```

Andere nachfolgende Palettenwerte gelten nur für die angegebene Schriftfamilie. Sie können [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) für andere Schriftfamilien erstellen, indem Sie die gleichen [&lt;dashed-ident&gt;s](/de/docs/Web/CSS/dashed-ident) verwenden. Das bedeutet, dass Sie, wenn Sie mehrere Farbschriften haben, denselben Identifikator für jede verwenden können.

### Werte

- `<family-name>`
  - : Gibt den Namen der [font-family](/de/docs/Web/CSS/font-family) an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung übereinstimmender Familiennamen

In diesem Beispiel wird, wenn der `font-family`-Deskriptor in der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) at-Regel verwendet wird, derselbe Wert wie für die `font-family` verwendet, wie er deklariert ist.

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

In diesem Beispiel werden zwei [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) at-Regeln für zwei Schriftfamilien festgelegt, aber beide at-Regeln verwenden denselben dashed-ident Identifikator, `--Dark Mode`. Dies hilft, die [font-palette](/de/docs/Web/CSS/font-palette) Eigenschaft für mehrere Elemente, in diesem Fall `h1` und `h2`, gleichzeitig zu setzen. Dies kann nützlich sein, wenn Sie die Schriftfarben aktualisieren möchten, um zum Branding Ihrer Website zu passen.

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
