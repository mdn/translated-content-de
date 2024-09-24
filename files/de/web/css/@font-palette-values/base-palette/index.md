---
title: Basis-Palette
slug: Web/CSS/@font-palette-values/base-palette
l10n:
  sourceCommit: 7eff4df25ad857f65577930903797127ebabf991
---

{{CSSRef}}

Der CSS-[Deskriptor](/de/docs/Glossary/CSS_Descriptor) **`base-palette`** wird verwendet, um den Namen oder Index einer vordefinierten Palette anzugeben, die für die Erstellung einer neuen Palette verwendet werden soll. Wenn die angegebene `base-palette` nicht existiert, wird die Palette verwendet, die an Index 0 definiert ist.

## Syntax

```css
@font-palette-values --one {
  base-palette: 1;
}
```

Der `base-palette` [Deskriptor](/de/docs/Glossary/CSS_Descriptor) wird durch einen nullbasierten Index der vom Schriftgestalter erstellten Paletten angegeben.

### Werte

- `<index>`
  - : Gibt den Index der zu verwendenden vordefinierten Palette an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ändern der Standard-Palette in einer Schriftart

Verwendung der [Rocher Color Font](https://www.harbortype.com/fonts/rocher-color/), dieses Beispiel zeigt zwei Instanzen, bei denen die Standard-Palette in der Schriftart zu einer alternativen Palette des Schriftgestalters gewechselt wird.

#### HTML

```html
<h2>default base-palette</h2>
<h2 class="two">base-palette am Index 2</h2>
<h2 class="five">base-palette am Index 5</h2>
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

![Beispiel zeigt 3 verschiedene Basis-Paletten der Rocher-Farbenschriftart](./rocher-color-font-alt-base-palettes.jpg)

## Spezifikationen

{{Specifications}}

## Kompatibilität von Browsern

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}} Deskriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Deskriptor
- {{cssxref("font-palette/", "font-palette")}} Eigenschaft
- {{domxref("CSSFontPaletteValuesRule.basePalette")}}
