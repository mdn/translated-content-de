---
title: base-palette
slug: Web/CSS/Reference/At-rules/@font-palette-values/base-palette
l10n:
  sourceCommit: 0b926fc3e79782401461d389fc9f17d522b39ed3
---

Der **`base-palette`** [CSS](/de/docs/Web/CSS) {{Glossary("CSS_Descriptor", "Descriptor")}} wird benutzt, um den Namen oder Index einer vordefinierten Palette anzugeben, die für die Erstellung einer neuen Palette verwendet werden soll. Wenn die angegebene `base-palette` nicht existiert, wird die Palette verwendet, die an Index 0 definiert ist.

## Syntax

```css
@font-palette-values --one {
  base-palette: 1;
}
```

Der `base-palette` {{Glossary("CSS_Descriptor", "Descriptor")}} wird über einen nullbasierten Index der vom Schriftmacher erstellten Paletten spezifiziert.

### Werte

- `<index>`
  - : Gibt den Index der zu verwendenden vordefinierten Palette an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Änderung der Standardpalette in einer Schriftart

Unter Verwendung der [Rocher Color Schriftart](https://www.harbortype.com/fonts/rocher-color/) zeigt dieses Beispiel zwei Instanzen, in denen die Standardpalette in der Schriftart zu einer vom Schriftmacher erstellten alternativen Palette gewechselt wird.

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

![Beispiel, das 3 verschiedene Basis-Paletten der Rocher-Farbschriftart zeigt](./rocher-color-font-alt-base-palettes.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}} Descriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Descriptor
- {{cssxref("font-palette")}} Eigenschaft
- [`CSSFontPaletteValuesRule.basePalette`](/de/docs/Web/API/CSSFontPaletteValuesRule/basePalette)
