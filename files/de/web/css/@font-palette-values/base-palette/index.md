---
title: base-palette
slug: Web/CSS/@font-palette-values/base-palette
l10n:
  sourceCommit: 7eff4df25ad857f65577930903797127ebabf991
---

{{CSSRef}}

Der **`base-palette`** CSS-{{Glossary("CSS_Descriptor", "Deskriptor")}} wird verwendet, um den Namen oder Index einer vordefinierten Palette anzugeben, die für die Erstellung einer neuen Palette verwendet werden soll. Wenn die angegebene `base-palette` nicht existiert, wird die bei Index 0 definierte Palette verwendet.

## Syntax

```css
@font-palette-values --one {
  base-palette: 1;
}
```

Der `base-palette`-{{Glossary("CSS_Descriptor", "Deskriptor")}} wird mit einem Null-basierten Index der vom Schriftgestalter erstellten Paletten angegeben.

### Werte

- `<index>`
  - : Gibt den Index der zu verwendenden vordefinierten Palette an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ändern der Standardpalette in einer Schriftart

Dieses Beispiel verwendet die [Rocher Color Font](https://www.harbortype.com/fonts/rocher-color/), um zwei Instanzen zu zeigen, wie die Standardpalette in der Schriftart durch eine vom Schriftgestalter erstellte alternative Palette ersetzt wird.

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

![Beispiel zeigt 3 verschiedene Basis-Paletten der Rocher-Farbfont](./rocher-color-font-alt-base-palettes.jpg)

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
