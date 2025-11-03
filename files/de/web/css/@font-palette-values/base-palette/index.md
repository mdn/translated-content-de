---
title: base-palette
slug: Web/CSS/@font-palette-values/base-palette
l10n:
  sourceCommit: 2ab902d9eec2f5a93d1f666234371ca77e93c470
---

Der **`base-palette`** [CSS](/de/docs/Web/CSS) {{Glossary("CSS_Descriptor", "Deskriptor")}} wird verwendet, um den Namen oder Index einer vordefinierten Palette anzugeben, die zur Erstellung einer neuen Palette verwendet werden soll. Wenn die angegebene `base-palette` nicht existiert, wird die am Index 0 definierte Palette verwendet.

## Syntax

```css
@font-palette-values --one {
  base-palette: 1;
}
```

Der `base-palette` {{Glossary("CSS_Descriptor", "Deskriptor")}} wird unter Verwendung eines nullbasierten Indexes der vom Schriftgestalter erstellten Paletten angegeben.

### Werte

- `<index>`
  - : Gibt den Index der zu verwendenden vordefinierten Palette an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ändern der Standardpalette in einer Schriftart

Unter Verwendung der [Rocher Color Font](https://www.harbortype.com/fonts/rocher-color/) zeigt dieses Beispiel zwei Instanzen zum Wechsel der Standardpalette in der Schriftart zu einer alternativen Palette, die vom Schriftgestalter erstellt wurde.

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
  font-family: "Rocher", fantasy;
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

![Beispiel zeigt 3 verschiedene Basis-Paletten der Rocher-Farbschriftart](./rocher-color-font-alt-base-palettes.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}} Deskriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Deskriptor
- {{cssxref("font-palette")}} Eigenschaft
- [`CSSFontPaletteValuesRule.basePalette`](/de/docs/Web/API/CSSFontPaletteValuesRule/basePalette)
