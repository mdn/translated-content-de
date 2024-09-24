---
title: font-family
slug: Web/CSS/@font-palette-values/font-family
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) [Deskriptor](/de/docs/Glossary/CSS_Descriptor) **`font-family`** wird verwendet, um festzulegen, auf welche Font-Familien-Palettenwerte angewendet werden sollen. Diese müssen genau mit den Werten übereinstimmen, die beim Festlegen der CSS-[font-family](/de/docs/Web/CSS/font-family) verwendet werden.

## Syntax

```css
@font-palette-values --Dark-mode {
  font-family: "Bungee Spice";
  /* andere Paletteneinstellungen folgen */
}
```

Andere ehemalige Palettenwerte gelten nur für die angegebene Schriftfamilie. Sie können [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) für andere Schriftfamilien erstellen, indem Sie die gleichen [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) verwenden. Das bedeutet, dass Sie bei mehreren Farbfonts denselben Bezeichner für jeden verwenden können.

### Werte

- `<family-name>`
  - : Gibt den Namen der [font-family](/de/docs/Web/CSS/font-family) an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von übereinstimmenden Familiennamen

In diesem Beispiel wird, wenn der `font-family`-Deskriptor in der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel verwendet wird, derselbe Wert für die `font-family` verwendet, wie wenn sie deklariert wird.

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

### Verwendung desselben Palettenbezeichners für mehrere Schriftfamilien

In diesem Beispiel werden zwei [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regeln für zwei Schriftfamilien festgelegt, aber beide At-Regeln verwenden denselben dashed-ident Bezeichner, `--Dark Mode`. Dies hilft dabei, die [font-palette](/de/docs/Web/CSS/font-palette)-Eigenschaft für mehrere Elemente, in diesem Fall `h1` und `h2`, gleichzeitig festzulegen. Dies kann nützlich sein, wenn Sie die Schriftfarben an das Branding Ihrer Seite anpassen möchten.

```css
@font-palette-values --Dark-Mode {
  font-family: "Bungee Spice";
  /* Paletteneinstellungen für Bungee Spice */
}

@font-palette-values --Dark-Mode {
  font-family: Bixa;
  /* Paletteneinstellungen für Bixa */
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
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Deskriptor
- {{cssxref("font-palette/", "font-palette")}} Eigenschaft
- {{domxref("CSSFontPaletteValuesRule.fontFamily")}}
