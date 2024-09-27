---
title: base-palette
slug: Web/CSS/@font-palette-values/base-palette
l10n:
  sourceCommit: 7eff4df25ad857f65577930903797127ebabf991
---

{{CSSRef}}

Der CSS-[Deskriptor](/de/docs/Glossary/CSS_Descriptor) **`base-palette`** wird verwendet, um den Namen oder Index einer vordefinierten Palette anzugeben, die zur Erstellung einer neuen Palette verwendet werden soll. Wenn die angegebene `base-palette` nicht existiert, wird die Palette mit dem Index 0 verwendet.

## Syntax

```css
@font-palette-values --one {
  base-palette: 1;
}
```

Der [Deskriptor](/de/docs/Glossary/CSS_Descriptor) `base-palette` wird mit einem nullbasierten Index der vom Schriftart-Ersteller erstellten Paletten angegeben.

### Werte

- `<index>`
  - : Gibt den Index der zu verwendenden vordefinierten Palette an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Änderung der Standardpalette in einer Schriftart

Dieses Beispiel zeigt anhand der [Rocher Color Font](https://www.harbortype.com/fonts/rocher-color/) zwei Instanzen, in denen die Standardpalette der Schriftart in eine alternative vom Schriftart-Ersteller erstellte Palette umgeschaltet wird.

#### HTML

```html
<h2>default base-palette</h2>
<h2 class="two">base-palette at index 2</h2>
<h2 class="five">base-palette at index 5</h2>
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

@font-palette-values --two {
  font-family: "Rocher";
  base-palette: 2;
}

@font-palette-values --five {
  font-family: "Rocher";
  base-palette: 5;
}

.two {
  font-palette: --two;
}

.five {
  font-palette: --five;
}
```

#### Ergebnis

![Beispiel, das 3 verschiedene Basis-Paletten der Rocher-Farbfont zeigt](./rocher-color-font-alt-base-palettes.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}} Deskriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Deskriptor
- {{cssxref("font-palette/", "font-palette")}} Eigenschaft
- [`CSSFontPaletteValuesRule.basePalette`](/de/docs/Web/API/CSSFontPaletteValuesRule/basePalette)
