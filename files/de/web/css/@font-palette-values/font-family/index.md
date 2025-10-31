---
title: font-family
slug: Web/CSS/@font-palette-values/font-family
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) {{Glossary("CSS_Descriptor", "Deskriptor")}} **`font-family`** wird verwendet, um anzugeben, auf welche font-family-Palettenwerte angewendet werden sollen. Diese müssen genau mit den Werten übereinstimmen, die bei der Einstellung der CSS [font-family](/de/docs/Web/CSS/Reference/Properties/font-family) verwendet werden.

## Syntax

```css
@font-palette-values --Dark-mode {
  font-family: "Bungee Spice";
  /* other palette settings follow */
}
```

Andere folgende Palettenwerte gelten nur für die angegebene Schriftfamilie. Sie können [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) für andere Schriftfamilien erstellen, indem Sie dasselbe [&lt;dashed-ident&gt;s](/de/docs/Web/CSS/dashed-ident) verwenden. Dies bedeutet, dass, wenn Sie mehrere Farbenschriften haben, Sie denselben Bezeichner für jede verwenden können.

### Werte

- `<family-name>`
  - : Gibt den Namen der [font-family](/de/docs/Web/CSS/Reference/Properties/font-family) an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von übereinstimmenden Familiennamen

In diesem Beispiel wird beim Verwenden des `font-family` Deskriptors innerhalb der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel derselbe Wert für die `font-family` verwendet, wie er erklärt wird.

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

### Verwendung desselben Palettenbezeichners für mehrere Schriftfamilien

In diesem Beispiel sind zwei [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regeln für zwei Schriftfamilien festgelegt, aber beide At-Regeln verwenden denselben gestrichelten Bezeichner, `--Dark-Mode`. Dies hilft, die [font-palette](/de/docs/Web/CSS/Reference/Properties/font-palette) Eigenschaft für mehrere Elemente gleichzeitig festzulegen, in diesem Fall `h1` und `h2`. Dies kann nützlich sein, wenn Sie die Schriftfarben aktualisieren möchten, um zur Markenbildung Ihrer Website zu passen.

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
