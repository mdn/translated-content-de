---
title: font-family
slug: Web/CSS/@font-palette-values/font-family
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) [Descriptor](/de/docs/Glossary/CSS_Descriptor) **`font-family`** wird verwendet, um festzulegen, auf welche `font-family`-Palettenwerte angewendet werden sollen. Diese müssen genau den Werten entsprechen, die beim Festlegen der CSS-[font-family](/de/docs/Web/CSS/font-family) verwendet werden.

## Syntax

```css
@font-palette-values --Dark-mode {
  font-family: "Bungee Spice";
  /* other palette settings follow */
}
```

Andere Palettenwerte, die folgen, gelten nur für die angegebene Schriftfamilie. Sie können [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) für andere Schriftfamilien erstellen, indem Sie denselben [&lt;dashed-ident&gt;s](/de/docs/Web/CSS/dashed-ident) verwenden. Dies bedeutet, dass Sie, wenn Sie mehrere Farbtypen verwenden, denselben Bezeichner für jeden verwenden können.

### Werte

- `<family-name>`
  - : Gibt den Namen der [font-family](/de/docs/Web/CSS/font-family) an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden übereinstimmender Schriftnamen

In diesem Beispiel wird beim Verwenden des `font-family` Descriptors innerhalb der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel derselbe Wert für die `font-family` verwendet, wie er deklariert ist.

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
  font-family: "Bungee Spice";
}

h2.extra-spicy {
  font-palette: --bungee-extra-spicy;
}
```

#### Ergebnis

{{EmbedLiveSample("Using matching family names")}}

### Verwenden desselben Palettenbezeichners für mehrere Schriftfamilien

In diesem Beispiel werden zwei [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regeln für zwei Schriftfamilien festgelegt, aber beide At-Regeln verwenden denselben `dashed-ident`-Bezeichner `--Dark Mode`. Dies hilft, die [font-palette](/de/docs/Web/CSS/font-palette) Eigenschaft für mehrere Elemente, `h1` und `h2` in diesem Fall, gleichzeitig einzustellen. Dies kann nützlich sein, wenn Sie die Schriftfarben an die Markenfarben Ihrer Website anpassen möchten.

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
  font-family: "Bungee Spice";
}

h2 {
  font-family: Bixa;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Descriptor
- {{cssxref("font-palette/", "font-palette")}} Eigenschaft
- [`CSSFontPaletteValuesRule.fontFamily`](/de/docs/Web/API/CSSFontPaletteValuesRule/fontFamily)
